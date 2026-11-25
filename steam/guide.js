'use strict';
const data=window.STEAM_PLAN,m=data.model,$=id=>document.getElementById(id),esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const cells=new Map(m.cells.map(q=>[[q.x,q.y,q.z].join(','),q])),removed=new Map(m.shell_and_cap_removals.map(q=>[[q.x,q.y,q.z].join(','),q])),faces=new Map(m.connections.map(q=>[[q.x,q.y,q.z].join(','),q]));
let selected=null;
function chosen(q){const f=$('filter').value;return f==='all'||q.group===f||m.components[q.symbol].network===f;}
function layerName(y){return 'y'+(y<0?'-':'+')+String(Math.abs(y)).padStart(2,'0')+'.txt';}
function draw(){const y=Number($('layer').value),px=Number($('zoom').value),margin=38,c=$('grid'),ctx=c.getContext('2d');c.width=margin+64*px;c.height=margin+86*px;ctx.fillStyle='#10212b';ctx.fillRect(0,0,c.width,c.height);ctx.font='10px monospace';
 for(const [x,yy,z,r] of data.context){if(yy!==y||x<22||x>85||z<0||z>85)continue;ctx.fillStyle='#3a4c58';ctx.fillRect(margin+(x-22)*px,margin+z*px,px,px);}
 let count=0;
 for(const q of m.cells){if(q.y!==y||!chosen(q))continue;count++;const a=margin+(q.x-22)*px,b=margin+q.z*px;ctx.fillStyle=data.colors[q.symbol];ctx.fillRect(a,b,px,px);if(px>=16){ctx.fillStyle='#10212b';ctx.fillText(q.symbol,a+3,b+px-4);}}
 for(const q of m.shell_and_cap_removals){if(q.y!==y)continue;const a=margin+(q.x-22)*px,b=margin+q.z*px;ctx.strokeStyle='#f18b8b';ctx.beginPath();ctx.moveTo(a+2,b+2);ctx.lineTo(a+px-2,b+px-2);ctx.moveTo(a+px-2,b+2);ctx.lineTo(a+2,b+px-2);ctx.stroke();}
 ctx.strokeStyle='rgba(164,201,215,.16)';for(let x=0;x<=64;x++){ctx.beginPath();ctx.moveTo(margin+x*px,margin);ctx.lineTo(margin+x*px,c.height);ctx.stroke();}for(let z=0;z<=86;z++){ctx.beginPath();ctx.moveTo(margin,margin+z*px);ctx.lineTo(c.width,margin+z*px);ctx.stroke();}
 ctx.fillStyle='#bbd0d9';const step=px>=20?2:4;for(let x=22;x<=85;x+=step)ctx.fillText(String(x),margin+(x-22)*px,margin-8);for(let z=0;z<=85;z+=step)ctx.fillText(String(z),3,margin+z*px+11);
 if(selected){ctx.strokeStyle='#ffe2a4';ctx.lineWidth=3;ctx.strokeRect(margin+(selected[0]-22)*px,margin+selected[1]*px,px,px);ctx.lineWidth=1;}
 $('position').textContent=`City X22..85, Z0..85; civil Y${y>=0?'+':''}${y} = future world S${y>=0?'+':''}${y}. ${count} new cells displayed. NW upper left, +X east →, +Z south ↓. These are technical host grids; actual block appearance is not rendered here.`;
 $('layertext').href='layers/'+layerName(y);
}
function inspect(x,z){const y=Number($('layer').value);if(!Number.isInteger(x)||!Number.isInteger(z)||x<22||x>85||z<0||z>85){$('inspection').textContent='Enter integer city X/Z within this drawing.';return;}
 selected=[x,z];$('pickx').value=x;$('pickz').value=z;const key=[x,y,z].join(','),q=cells.get(key),r=removed.get(key),f=faces.get(key);let text=`<b>City (${x}, ${y}, ${z})</b><p>World Y = surveyed S${y>=0?'+':''}${y}; X/Z require your chosen anchor and rotation.</p>`;
 if(r)text+=`<div class="pieces"><b>Exact removal</b><p>${esc(r.source)} / ${esc(r.source_symbol)}</p><p>${esc(r.action)}</p></div>`;
 if(q){const p=m.components[q.symbol];text+=`<h3>${esc(p.title)}</h3><p>${esc(q.group)} · symbol ${esc(q.symbol)}</p><p><b>${esc(p.registry)}</b><br>Inventory item damage: ${p.item_damage}.<br>${p.placed_metadata===null?'GregTech machine/pipe identity; item damage is separate from placed block metadata.':'Placed metadata/orientation: '+p.placed_metadata+'.'}</p>`;
  if(f){text+=`<div class="pieces"><b>${esc(f.network)}</b><p>Pipe/cable neighbor faces:<br>${esc(f.pipe_neighbors.join(', ')||'none')}</p><p>Machine/tank terminal faces:<br>${esc(f.terminal_faces.join(', ')||'none')}</p>${f.default_closed_terminal_faces.length?`<p><b>Initially CLOSED terminals: ${esc(f.default_closed_terminal_faces.join(', '))}</b></p>`:''}<p>${esc(f.unused_faces)}</p></div>`;}
  if(p.main_facing)text+=`<p>Main panel ${esc(p.main_facing)}; exhaust ${esc(p.vent_facing)}; steam input ${esc(p.steam_input_facing)}.</p>`;
  if(p.output_facing)text+=`<p>Output face: ${esc(p.output_facing)}.</p>`;
 }else if(!r)text+='<p>No new utility cell at this position. Gray context may be existing structure; a blank is not an excavation instruction.</p>';
 $('inspection').innerHTML=text;draw();
}
function allocation(boilers,workshop,remote,hv){if(![1,2].includes(boilers)||![workshop,remote].every(n=>Number.isFinite(n)&&n>=0))throw new Error('Enter one or two boilers and nonnegative finite flow values.');const source=boilers*1440,ceiling=source*.8,turbine=hv?1536:0,total=workshop+remote+turbine;return{source,ceiling,total,turbine,sourceMargin:source-total,designMargin:ceiling-total};}
function budget(){const n=Number($('boilers').value),w=Number($('workshop').value),r=Number($('remote').value);if(![w,r].every(v=>Number.isFinite(v)&&v>=0)){$('budgetresult').textContent='Enter nonnegative flow values.';return;}const b=allocation(n,w,r,$('hv').checked);$('budgetresult').innerHTML=`<b>${b.designMargin>=0?'Within the design allocation':'Demand exceeds the design allocation'}</b><p>Hot-source maximum ${b.source.toLocaleString()} L/t · 80% design ceiling ${b.ceiling.toLocaleString()} L/t.</p><p>Workshop ${w} + remote ${r} + turbine ${b.turbine} = <b>${b.total.toLocaleString()} L/t</b>.</p><p>${b.sourceMargin>=0?'Raw source margin':'Raw source deficit'}: ${Math.abs(b.sourceMargin).toLocaleString()} L/t. ${b.designMargin>=0?'Remaining within design ceiling':'Above design ceiling'}: ${Math.abs(b.designMargin).toLocaleString()} L/t.</p>`;}
function preset(n,remote,hv){$('boilers').value=String(n);$('workshop').value='768';$('remote').value=String(remote);$('hv').checked=hv;budget();}
function init(){
 $('layer').innerHTML=Array.from({length:17},(_,i)=>`<option value="${i-10}">Civil Y${i-10>=0?'+':''}${i-10}</option>`).join('');$('layer').value='0';
 $('layer').onchange=()=>{draw();if(selected)inspect(...selected);};$('filter').onchange=draw;$('zoom').oninput=draw;
 for(const [id,y] of [['ground',0],['basement',-6],['headers',-5]])$(id).onclick=()=>{$('layer').value=String(y);draw();};
 $('inspect').onclick=()=>inspect(Number($('pickx').value),Number($('pickz').value));$('grid').onclick=e=>{const r=$('grid').getBoundingClientRect(),px=Number($('zoom').value);inspect(Math.floor((e.clientX-r.left-38)/px)+22,Math.floor((e.clientY-r.top-38)/px));};
 $('grid').addEventListener('wheel',e=>{if(!e.ctrlKey)return;e.preventDefault();$('zoom').value=Math.max(5,Math.min(36,Number($('zoom').value)+(e.deltaY<0?2:-2)));draw();},{passive:false});
 $('fit').onclick=()=>{$('zoom').value=Math.max(5,Math.min(36,Math.floor(($('scrollview').clientWidth-42)/64)));draw();};$('fullscreen').onclick=()=>{if(document.fullscreenElement)document.exitFullscreen?.();else $('scrollview').requestFullscreen?.();};
 for(const id of ['boilers','workshop','remote','hv'])$(id).oninput=budget;$('presetone').onclick=()=>preset(1,384,false);$('presetsteam').onclick=()=>preset(2,1536,false);$('presethv').onclick=()=>preset(2,0,true);
 $('stock').innerHTML='<table><tr><th>Item / inventory damage</th><th>Items</th><th>64-stacks + loose</th></tr>'+m.stock.map(q=>`<tr><td>${esc(q.registry)} : ${q.item_damage}</td><td>${q.items}</td><td>${q.stacks64} + ${q.loose}</td></tr>`).join('')+'</table><p class="note">Add one compatible HV battery, tools, actual fuel and commissioning water separately. Gather stock includes new placements; recovered cap/landing/floor material is not deducted.</p>';
 const script=document.createElement('script');script.src='data/manual.js';script.onload=()=>{$('manual').innerHTML=window.STEAM_MANUAL;};document.body.append(script);draw();budget();
}
window.STEAM_API={allocation,inspect,draw,chosen,layerName};init();
