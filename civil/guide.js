'use strict';
const cat=window.CIVIL_CATALOG,$=id=>document.getElementById(id),fmt=n=>Number(n).toLocaleString(),esc=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let current,plane,cleared,detailMap,selected=null,loadToken=0;
const textures={},colors={F:'#7b8385',G:'#737f81',C:'#74858b',B:'#687e85',K:'#76838b',R:'#343d44',W:'#a4a5a3',P:'#a4a5a3',d:'#a4a5a3',l:'#40494e',s:'#9fa7a7',S:'#c0c8c6',c:'#4ed7db',n:'#8fc1ce'};
const textureRole=r=>['F','G','C','B','K'].includes(r)?'F':['W','P','d','c'].includes(r)?'P':['s','S'].includes(r)?'s':r==='l'?'K':r;
for(const r of ['F','s','P','R','K','N','W']){const im=new Image();im.onload=()=>draw();im.src=`textures/${r}.png`;textures[r]=im;}
function table(rows){return '<table><tr><th>Ordinary item</th><th>Items</th><th>64-stacks + loose</th></tr>'+rows.map(q=>`<tr><td>${esc(q.registry_name)} : ${q.inventory_metadata}</td><td>${fmt(q.items)}</td><td>${fmt(q.stacks_64)} + ${q.remainder}</td></tr>`).join('')+'</table>';}
function stageMatch(r,y){switch($('stage').value){case 'floor':return r==='G';case 'walls':return ['B','K'].includes(r);case 'stairs':return ['s','S'].includes(r);case 'roof':return r==='C';case 'base':return r==='F';case 'surface':return ['R','W','P','d'].includes(r);case 'native':return ['c','l','n'].includes(r);default:return true;}}
function rotation(x,z,r){switch(Number(r)){case 90:return [-z,x];case 180:return [-x,-z];case 270:return [z,-x];default:return [x,z];}}
function worldFor(x,y,z){if(['anchorx','anchorz','surface'].some(id=>$(id).value===''||!Number.isInteger(Number($(id).value))))return null;const [a,b]=rotation(x,z,$('rotation').value);return [Number($('anchorx').value)+a,Number($('surface').value)+y,Number($('anchorz').value)+b];}
function size(){const b=current.order.bounds;return [b[2]-b[0]+1,b[3]-b[1]+1];}
function hydrate(data){
 current=data;const [w,h]=size();plane=Array.from({length:18},()=>new Uint8Array(w*h));cleared=Array.from({length:18},()=>new Uint8Array(w*h));
 for(const [y,z,a,b,r] of data.blocks)for(let x=a;x<=b;x++)plane[y+10][z*w+x]=cat.model.palette[r]?data.codes.indexOf(r):0;
 for(const [y,z,a,b] of data.clear)for(let x=a;x<=b;x++)cleared[y+10][z*w+x]=1;
 detailMap=new Map(data.native.map(q=>[[q.x,q.y,q.z].join(','),q]));
 $('ordername').textContent=`${data.order.id} · ${data.order.name}`;
 const q=data.order;$('orderstats').textContent=`${q.phase} · ${fmt(q.occupied_hosts)} new occupied hosts (${fmt(q.ordinary_blocks)} ordinary + ${fmt(q.native_hosts)} native). ${fmt(q.required_clear_cells)} modeled clear cells. Bounds X${q.bounds[0]}..${q.bounds[2]}, Z${q.bounds[1]}..${q.bounds[3]}.`;
 $('orderstock').innerHTML=table(q.stock);
 $('caps').textContent=`Add ${fmt(q.temporary_caps_add)}, remove ${fmt(q.temporary_caps_remove)} when adjoining work is enclosed; ${fmt(q.temporary_caps_remaining)} temporary bricks stay. Handover maximum ${fmt(q.cap_handover_peak)} while old and new closures coexist.`;
 const root=`orders/${q.id}/`;for(const [id,file] of [['runs','permanent-block-runs.csv.gz'],['pieces','native-pieces.csv'],['nativecsv','native-details.csv'],['clearcsv','required-clear-runs.csv.gz'],['capadd','temporary-cap-add.csv'],['capremove','temporary-cap-remove.csv'],['capend','temporary-cap-end-state.csv']])$(id).href=root+file;
 let state={};try{state=JSON.parse(localStorage.getItem('valier-civil-v2-'+q.id)||'{}');}catch{}
 $('complete').checked=state.complete===true;$('notes').value=state.notes||'';
 $('previous').disabled=q.sequence===1;$('next').disabled=q.sequence===cat.orders.length;
 $('pickx').value=q.bounds[0];$('pickz').value=q.bounds[1];selected=null;setStep();
}
function loadOrder(){const id=$('order').value;location.hash=id;const token=++loadToken;const script=document.createElement('script');window.onCivilOrder=()=>{if(token===loadToken&&window.CIVIL_ORDER.order.id===id)hydrate(window.CIVIL_ORDER);};script.src=`orders/${id}/data.js`;script.onerror=()=>{$('position').textContent='Could not load this work order. Keep the whole extracted folder together and retry.';};document.body.append(script);}
function setStep(){if(!current)return;if($('mode').value==='permanent'&&$('stage').value!=='all'){
 for(let yi=0;yi<18;yi++){if(plane[yi].some(k=>k&&stageMatch(current.codes[k],yi-10))){$('layer').value=yi-10;break;}}
 }draw();}
function visibleCell(x,z){const [w]=size(),y=Number($('layer').value),mode=$('mode').value;
 if(mode==='permanent'){const k=plane[y+10][z*w+x],r=current.codes[k];return k&&stageMatch(r,y)?r:null;}
 if(mode==='clear')return cleared[y+10][z*w+x]?'!':null;
 const b=current.order.bounds;return current[mode].some(p=>p[1]===y&&p[0]===x+b[0]&&p[2]===z+b[1])?'T':null;
}
function draw(){if(!current)return;const [w,h]=size(),px=Number($('zoom').value),y=Number($('layer').value),b=current.order.bounds,c=$('grid'),ctx=c.getContext('2d'),margin=42;
 c.width=w*px+margin;c.height=h*px+margin;ctx.imageSmoothingEnabled=false;ctx.fillStyle='#10202a';ctx.fillRect(0,0,c.width,c.height);ctx.font='10px monospace';
 const mode=$('mode').value,mask=mode.startsWith('cap_')?new Set(current[mode].filter(p=>p[1]===y).map(p=>`${p[0]-b[0]},${p[2]-b[1]}`)):null;
 let count=0;for(let z=0;z<h;z++)for(let x=0;x<w;x++){
  let r;if(mask)r=mask.has(`${x},${z}`)?'T':null;else if(mode==='clear')r=cleared[y+10][z*w+x]?'!':null;else{const k=plane[y+10][z*w+x];r=k&&stageMatch(current.codes[k],y)?current.codes[k]:null;}
  const a=margin+x*px,d=margin+z*px;
  if(r){count++;const im=textures[textureRole(r)];if(im&&im.complete&&im.naturalWidth){ctx.drawImage(im,a,d,px,px);}else{ctx.fillStyle=r==='!'?'#c48936':r==='T'?'#bb6e98':colors[r]||'#466a79';ctx.fillRect(a,d,px,px);}
   if(r==='c'||r==='n'){
    const q=detailMap.get(`${x+b[0]},${y},${z+b[1]}`);
    if(q?.kind==='multipart'){ctx.fillStyle='#10191f';ctx.fillRect(a,d,px,px);for(const p of q.parts){const bb=partBounds(p),im2=textures[p.role];if(im2&&im2.complete&&im2.naturalWidth)ctx.drawImage(im2,a+bb[0]*px,d+bb[2]*px,(bb[3]-bb[0])*px,(bb[5]-bb[2])*px);}}
    else{ctx.strokeStyle='#91e8e6';ctx.strokeRect(a+1,d+1,px-2,px-2);}
   }
   if(px>=18){ctx.fillStyle=['W','P','d','s','S'].includes(r)?'#15222b':'#f2ffff';ctx.fillText(r,a+3,d+px-4);}
  }
  ctx.strokeStyle='rgba(144,186,203,.16)';ctx.strokeRect(a,d,px,px);
 }
 ctx.fillStyle='#9ebfcb';const step=px>=16?1:px>=8?4:8;
 for(let x=0;x<w;x+=step){ctx.save();ctx.translate(margin+x*px+3,margin-5);ctx.rotate(-Math.PI/2);ctx.fillText(String(x+b[0]),0,0);ctx.restore();}
 for(let z=0;z<h;z+=step)ctx.fillText(String(z+b[1]),3,margin+z*px+Math.min(12,px));
 if(selected){ctx.strokeStyle='#ffdf83';ctx.lineWidth=3;ctx.strokeRect(margin+(selected[0]-b[0])*px,margin+(selected[1]-b[1])*px,px,px);ctx.lineWidth=1;}
 const fname=`y${y<0?'-':'+'}${String(Math.abs(y)).padStart(2,'0')}.txt`;$('textgrid').href=`orders/${current.order.id}/${fname}`;
 $('position').textContent=`${current.order.id} · city X${b[0]}..${b[2]}, Z${b[1]}..${b[3]} · civil Y${y>=0?'+':''}${y} (world S${y>=0?'+':''}${y}) · ${count} displayed positions · NW at upper left; +X east →, +Z south ↓. Scroll to pan; Ctrl+wheel to zoom. Native shapes are technical top projections, not game screenshots.`;
}
function partBounds(p){const n=p.shape&15,s=(p.shape>>4)/8,b=[0,0,0,1,1,1];if(p.id==='mcr_face'){const a=[1,1,2,2,0,0][n];b[a]=n%2?1-s:0;b[a+3]=n%2?1:s;}else if(p.id==='mcr_post'){const a=[1,2,0][n];for(let k=0;k<3;k++)if(k!==a){b[k]=(1-s)/2;b[k+3]=(1+s)/2;}}else if(p.id==='mcr_edge'){const f=n<4?1:n<8?2:0,k=n%4,axes=f===1?[0,2]:f===2?[0,1]:[1,2],high=f===1?[(k>>1)&1,k&1]:[k&1,(k>>1)&1];axes.forEach((a,i)=>{b[a]=high[i]?1-s:0;b[a+3]=high[i]?1:s;});}return b;}
function fraction(n){if(Number.isInteger(n))return String(n);for(const d of [2,4,8,16])if(Number.isInteger(n*d))return `${n*d}/${d}`;return String(n);}
function inspect(x,z){if(!current)return;const b=current.order.bounds,[w,h]=size(),y=Number($('layer').value);if(!Number.isInteger(x)||!Number.isInteger(z)||x<b[0]||x>b[2]||z<b[1]||z>b[3]){$('inspection').textContent='Enter integer city X/Z within this order’s bounds.';return;}
 selected=[x,z];$('pickx').value=x;$('pickz').value=z;const k=plane[y+10][(z-b[1])*w+x-b[0]],r=current.codes[k],q=cat.model.palette[r],n=detailMap.get(`${x},${y},${z}`),isclear=cleared[y+10][(z-b[1])*w+x-b[0]];
 let html=`<b>City (${x}, ${y}, ${z})</b><p>Civil Y${y}; northwest axes.</p>`;
 if(k){html+=`<p>Symbol <b>${esc(r)}</b> · ${esc(q.role||q.display_name||'native detail')}</p>`;
  if(n){html+=`<p>${esc(n.assembly)} · ${esc(n.id)}</p>`;if(n.kind==='multipart'){html+='<p>ONE host; assemble all of these pieces:</p>';for(const p of n.parts){const material=cat.native_palette[p.role],bb=partBounds(p);html+=`<div class="pieces"><b>${esc(material.display_name)}</b><br>${esc(material.registry_name)} : ${material.inventory_metadata}<br>${esc(p.id)} · thickness ${p.shape>>4}/8 · placed shape byte ${p.shape}<br><code>X ${fraction(bb[0])}..${fraction(bb[3])}<br>Y ${fraction(bb[1])}..${fraction(bb[4])}<br>Z ${fraction(bb[2])}..${fraction(bb[5])}</code><br>Bounds relative to this host's NW/bottom corner.</div>`;}}
   else html+=`<div class="pieces">ArchitectureCraft shape ${n.shape} (molded cornice)<br>Material ${esc(cat.native_palette[n.role].registry_name)} : ${cat.native_palette[n.role].inventory_metadata}<br>Placed orientation side ${n.side}, turn ${n.turn}, offsetX ${n.offsetX||0}.<br>Use the source lamp image and preview to face the cornice inward. No game-tested click sequence is claimed.</div>`;
  }else html+=`<p><b>${esc(q.registry_name)} : ${q.metadata}</b><br>Placed metadata ${q.metadata}; inventory damage ${q.inventory_metadata}. One item at this cell.</p>${r==='s'||r==='S'?`<p>${r==='s'?'BOTTOM half slab: host Y..Y+1/2.':'TOP half slab: host Y+1/2..Y+1.'}</p>`:''}`;
 }else html+=`<p>${isclear?'REQUIRED CLEAR in this order. Keep permanent blocks out. A listed temporary cap can occupy it until its removal order.':'No NEW permanent placement. This may be previous work or unspecified terrain; do not excavate it from a blank symbol.'}</p>`;
 const temp=current.cap_end.some(p=>p[0]===x&&p[1]===y&&p[2]===z);if(temp)html+='<p><b>Temporary stone-brick cap remains here after this order.</b></p>';
 $('inspection').innerHTML=html;updateWorld();draw();
}
function updateWorld(){if(!selected){$('world').textContent='Choose a cell first; world anchor is unassigned until surveyed.';return;}const p=worldFor(selected[0],Number($('layer').value),selected[1]);$('world').textContent=p?`World X ${p[0]}, Y ${p[1]}, Z ${p[2]}. Confirm this transform against surveyed landmarks before placing blocks.`:'World coordinates unassigned. Enter all surveyed values.';}
function progress(){if(!current)return;try{localStorage.setItem('valier-civil-v2-'+current.order.id,JSON.stringify({complete:$('complete').checked,notes:$('notes').value}));}catch{}}
function init(){
 $('metrics').innerHTML=[['84','work orders'],[fmt(cat.summary.occupied_hosts),'occupied hosts'],['1,512','exact layer grids'],[fmt(cat.summary.sited_lamps),'sited smooth lamps']].map(q=>`<div><b>${q[0]}</b><span>${q[1]}</span></div>`).join('');
 $('order').innerHTML=cat.orders.map(q=>`<option value="${q.id}">${q.id} · ${esc(q.name)} (${q.phase})</option>`).join('');
 $('layer').innerHTML=Array.from({length:18},(_,i)=>`<option value="${i-10}">Y${i-10>=0?'+':''}${i-10}</option>`).join('');$('layer').value=-10;
 $('legend').innerHTML=Object.entries(cat.model.palette).map(([r,q])=>`<span><b>${r}</b> ${esc(q.role)}</span>`).join('')+'<span><b>!</b> required clear</span><span><b>T</b> temporary cap</span>';
 $('totalstock').innerHTML=table(cat.summary.ordinary_stock)+`<p>${fmt(cat.summary.multipart_hosts)} multipart hosts contain ${fmt(cat.summary.cut_pieces)} cut pieces; ${fmt(cat.summary.architecturecraft_hosts)} separate cornice hosts. These are not full-block inventory counts.</p>`;
 const ms=document.createElement('script');ms.src='data/manual.js';ms.onload=()=>{$('manual').innerHTML=window.CIVIL_MANUAL;};document.body.append(ms);
 $('order').onchange=loadOrder;$('mode').onchange=draw;$('stage').onchange=setStep;$('layer').onchange=()=>{draw();if(selected)inspect(...selected);};$('zoom').oninput=draw;
 $('previous').onclick=()=>{const n=current.order.sequence-2;if(n>=0){$('order').value=cat.orders[n].id;loadOrder();}};
 $('next').onclick=()=>{const n=current.order.sequence;if(n<cat.orders.length){$('order').value=cat.orders[n].id;loadOrder();}};
 $('fit').onclick=()=>{if(!current)return;const [w]=size();$('zoom').value=Math.max(3,Math.min(48,Math.floor(($('scrollview').clientWidth-46)/w)));draw();};
 $('full').onclick=()=>{if(document.fullscreenElement)document.exitFullscreen?.();else $('scrollview').requestFullscreen?.();};
 $('grid').onclick=e=>{const rect=$('grid').getBoundingClientRect(),px=Number($('zoom').value),b=current.order.bounds;inspect(Math.floor((e.clientX-rect.left-42)/px)+b[0],Math.floor((e.clientY-rect.top-42)/px)+b[1]);};
 $('grid').addEventListener('wheel',e=>{if(!e.ctrlKey)return;e.preventDefault();$('zoom').value=Math.max(3,Math.min(48,Number($('zoom').value)+(e.deltaY<0?2:-2)));draw();},{passive:false});
 $('inspect').onclick=()=>inspect(Number($('pickx').value),Number($('pickz').value));for(const id of ['anchorx','anchorz','surface','rotation'])$(id).oninput=updateWorld;
 $('complete').onchange=progress;$('notes').oninput=progress;
 const hash=location.hash.slice(1);if(cat.orders.some(q=>q.id===hash))$('order').value=hash;loadOrder();
}
window.CIVIL_VIEWER_API={partBounds,rotation,worldFor,hydrate,inspect,visibleCell,stageMatch};init();
