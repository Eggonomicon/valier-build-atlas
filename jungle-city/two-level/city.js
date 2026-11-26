(() => {
  'use strict';
  const $ = selector => document.querySelector(selector);
  const {plan,terrain} = window.VALIER_B_CITY;
  const {placements,glazed,departments,stats,sectors,work_area} = window.VALIER_TWO_LEVEL;
  const byId = new Map(placements.map(plot => [plot.id,plot]));
  const roads = new Map(plan.roads.map(road => [road.id,road]));
  const crossings = new Map();
  for (const c of plan.crossings) {
    if (!crossings.has(c.parent)) crossings.set(c.parent,[]);
    crossings.get(c.parent).push(c);
  }
  const routeColors = {bridge:'#72d2e2',tunnel:'#e4a05d',service:'#bda9ec',road:'#91988e',glazed:'#b3edf1'};
  const plotColors = {surface:'#e0c597',mesa:'#92d6c3'};
  const board = $('#cityCanvas');
  const mapCanvas = board.querySelector('canvas');
  const mapPanel = $('#mapPanel');
  const selectedRoute = $('#road-select');
  const viewButtons = [...document.querySelectorAll('[data-view]')];
  const bytes = string => Uint8Array.from(atob(string), ch => ch.charCodeAt(0));
  const heights = bytes(terrain.height_b64);
  const water = bytes(terrain.water_mask_b64);
  const clay = bytes(terrain.white_clay_mask_b64);
  const jungle = bytes(terrain.jungle_mask_b64);
  const bit = (data,index) => (data[index>>3] >> (index&7)) & 1;
  const num = value => Number(value).toLocaleString('en-US');
  const escape = text => String(text??'').replace(/[&<>"']/g,ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const point = xyz => Array.isArray(xyz) ? xyz.join(', ') : 'Survey required';
  const height = y => Number.isFinite(y) ? 'Y' + (y > 0 ? '+' : '') + y : 'Survey required';
  const setting = plot => plot.setting === 'surface' ? 'Surface' : 'Inside mesa';

  function terrainLayer() {
    const tile = document.createElement('canvas');
    tile.width = tile.height = 864;
    const ctx = tile.getContext('2d');
    const pixels = ctx.createImageData(864,864);
    for (let i=0; i<heights.length; i++) {
      const rgb = bit(water,i) ? [34,77,97] : bit(clay,i) ? [130,116,88] : bit(jungle,i) ? [37,77,51] : [40,63,52];
      const edge = i >= 864 && Math.floor(heights[i]/5) !== Math.floor(heights[i-864]/5);
      const shade = (.70+(heights[i]-40)/200) * (edge ? .82 : 1);
      for (let j=0;j<3;j++) pixels.data[i*4+j] = rgb[j]*shade;
      pixels.data[i*4+3] = 255;
    }
    ctx.putImageData(pixels,0,0);
    return tile;
  }
  const relief = terrainLayer();
  let mode = 'both';
  let active = byId.get(new URLSearchParams(location.search).get('plot')) || placements[0];
  let zoom = 1, offsetX = 0, offsetZ = 0, frame = 0, moved = false;
  const pointers = new Map();

  function localPosition(road, index) {
    return road.axis === 'x' ? [road.start+index,road.cross+6] : [road.cross+6,road.start+index];
  }
  function stroke(ctx, points, color, width, dashed=false) {
    if (points.length<2) return;
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.setLineDash(dashed ? [5,4] : []);
    ctx.beginPath();
    points.forEach(([x,z],i) => i ? ctx.lineTo(x,z) : ctx.moveTo(x,z));
    ctx.stroke();
    ctx.setLineDash([]);
  }
  function centerline(edge) {
    const inset = edge.node_from && edge.node_to;
    if (inset) return [edge.node_from,edge.node_to].map(([x,z])=>[x*96+6,z*96+6]);
    const rangeEnd = edge.end ?? edge.start+edge.length-1;
    const across = edge.cross+6;
    return edge.axis==='x' ? [[edge.start,across],[rangeEnd,across]] : [[across,edge.start],[across,rangeEnd]];
  }
  function shownPlots() {
    return placements.filter(plot => (mode==='both' || mode==='service' || plot.setting===mode) &&
      ($('#sector').value==='all' || $('#sector').value===plot.sector));
  }
  function pBounds(plot) {
    return plot.map_bounds || plot.bounds;
  }
  function plotOutline(ctx, plot) {
    const [x, ,z, x1, ,z1] = pBounds(plot);
    const w=x1-x+1, d=z1-z+1;
    const chosen=plot.id===active.id;
    const color=plotColors[plot.setting];
    ctx.globalAlpha=mode==='service' ? .28 : chosen ? .67 : .37;
    ctx.fillStyle=color;
    ctx.fillRect(x,z,w,d);
    ctx.globalAlpha=1;
    ctx.strokeStyle=chosen ? '#fff2af' : color;
    ctx.lineWidth=(chosen?2:1)/zoom;
    ctx.strokeRect(x,z,w,d);
    const front=plot.facade?.origin;
    if (Array.isArray(front)) {
      const [fx, ,fz]=front;
      const across = ['E','W','east','west'].includes(plot.facade.face);
      stroke(ctx, across?[[fx,fz-8],[fx,fz+8]]:[[fx-8,fz],[fx+8,fz]],'#f5e4ae',Math.max(1.5/zoom,2.5));
    }
    if (zoom>.55 || chosen) {
      ctx.font=`650 ${(chosen?12:9)/zoom}px ui-monospace,monospace`;
      ctx.textAlign='center';
      ctx.fillStyle=chosen?'#fff5d7':'#faf5e6';
      ctx.strokeStyle='#101a18';
      ctx.lineWidth=2.2/zoom;
      ctx.strokeText(plot.id,x+w/2,z+d/2+3/zoom);
      ctx.fillText(plot.id,x+w/2,z+d/2+3/zoom);
    }
  }
  function draw() {
    cancelAnimationFrame(frame);
    frame=requestAnimationFrame(() => {
      const w=board.clientWidth,h=board.clientHeight, ratio=devicePixelRatio||1;
      if (mapCanvas.width!==Math.round(w*ratio) || mapCanvas.height!==Math.round(h*ratio)) {
        mapCanvas.width=Math.round(w*ratio);
        mapCanvas.height=Math.round(h*ratio);
      }
      const ctx=mapCanvas.getContext('2d');
      ctx.setTransform(ratio,0,0,ratio,0,0);
      ctx.fillStyle='#0e1b17';
      ctx.fillRect(0,0,w,h);
      ctx.translate(offsetX,offsetZ);
      ctx.scale(zoom,zoom);
      ctx.imageSmoothingEnabled=false;
      ctx.globalAlpha=mode==='service' ? .51 : .95;
      ctx.drawImage(relief,0,0);
      ctx.globalAlpha=1;
      ctx.strokeStyle='#b3cebb3a';
      ctx.lineWidth=.6/zoom;
      for (let i=0;i<=864;i+=96) {
        ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i,876);ctx.moveTo(0,i);ctx.lineTo(876,i);ctx.stroke();
      }
      for (const edge of plan.roads) {
        ctx.globalAlpha=mode==='service'?.75:mode==='mesa'?.38:.8;
        stroke(ctx,centerline(edge),mode==='service'?routeColors.service:routeColors.road,mode==='service'?4:5,mode==='service');
      }
      ctx.globalAlpha=1;
      if (mode!=='service') {
        for (const edge of plan.crossings) {
          if (edge.type!=='bridge' && edge.type!=='tunnel') continue;
          stroke(ctx,centerline(edge),routeColors[edge.type],5);
        }
        for (const bridge of glazed) {
          const coords=[bridge.start_xyz,bridge.end_xyz].map(([x, ,z])=>[x,z]);
          stroke(ctx,coords,'#143036',11);
          stroke(ctx,coords,routeColors.glazed,6);
        }
      }
      const plots=shownPlots();
      for (const plot of plots) plotOutline(ctx,plot);
      for (const plot of mode==='service' ? plots : plots.includes(active)?[active]:[]) {
        const points=plot.links.route_xyz.map(([x, ,z])=>[x,z]);
        stroke(ctx,points,'#100f24',6);
        stroke(ctx,points,routeColors.service,3,true);
        if (plot===active) {
          for (const end of [plot.links.main_entry,plot.links.branch_endpoint]) {
            ctx.fillStyle=routeColors.service;
            ctx.beginPath();ctx.arc(end[0],end[2],3.2,0,2*Math.PI);ctx.fill();
          }
          if (mode!=='service') stroke(ctx,plot.links.public_xyz.map(([x, ,z])=>[x,z]),'#f1d082',3.8,true);
        }
      }
      if (mode!=='service' && selectedRoute.value) {
        stroke(ctx,centerline(roads.get(selectedRoute.value)),'#f7eca488',2);
      }
    });
  }
  function fit(bounds=[0,0,876,876]) {
    const [x,z,w,d]=bounds;
    zoom=Math.min(board.clientWidth/(w+42),board.clientHeight/(d+42));
    offsetX=(board.clientWidth-w*zoom)/2-x*zoom;
    offsetZ=(board.clientHeight-d*zoom)/2-z*zoom;
    draw();
  }
  function scale(multiplier,x=board.clientWidth/2,z=board.clientHeight/2) {
    const next=Math.min(28,Math.max(.16,zoom*multiplier));
    offsetX=x-(x-offsetX)*next/zoom;
    offsetZ=z-(z-offsetZ)*next/zoom;
    zoom=next;
    draw();
  }
  function focusPlot(plot) {
    const [x,,z,x1,,z1]=pBounds(plot);
    fit([x-30,z-30,x1-x+61,z1-z+61]);
  }
  board.addEventListener('wheel', e => {
    e.preventDefault();
    const rect=board.getBoundingClientRect();
    scale(Math.exp(-Math.max(-130,Math.min(130,e.deltaY))*.006),e.clientX-rect.left,e.clientY-rect.top);
  },{passive:false});
  board.addEventListener('pointerdown',e=>{
    if (e.pointerType==='mouse' && e.button!==0) return;
    board.setPointerCapture(e.pointerId);
    if (!pointers.size) moved=false;
    pointers.set(e.pointerId,[e.clientX,e.clientY]);
    board.classList.add('grab');
  });
  board.addEventListener('pointermove',e=>{
    const previous=pointers.get(e.pointerId);
    if (!previous) return;
    const others=[...pointers.entries()].find(([id])=>id!==e.pointerId);
    pointers.set(e.pointerId,[e.clientX,e.clientY]);
    if (others) {
      const [, [x,z]]=others, rect=board.getBoundingClientRect();
      const now=Math.hypot(e.clientX-x,e.clientY-z);
      const old=Math.hypot(previous[0]-x,previous[1]-z);
      scale(now/Math.max(1,old),(x+e.clientX)/2-rect.left,(z+e.clientY)/2-rect.top);
      moved=true;
    } else {
      const dx=e.clientX-previous[0], dz=e.clientY-previous[1];
      offsetX+=dx;offsetZ+=dz;
      if (Math.abs(dx)+Math.abs(dz)>1) moved=true;
      draw();
    }
  });
  function release(e,click) {
    if (click && pointers.size===1 && !moved) {
      const r=board.getBoundingClientRect();
      const x=(e.clientX-r.left-offsetX)/zoom,z=(e.clientY-r.top-offsetZ)/zoom;
      const hit=shownPlots().find(p=>{
        const [a,,b,c,,d]=pBounds(p);
        return x>=a && x<c+1 && z>=b && z<d+1;
      });
      if (hit) select(hit,false);
    }
    pointers.delete(e.pointerId);
    if (!pointers.size) board.classList.remove('grab');
  }
  board.addEventListener('pointerup',e=>release(e,true));
  for (const type of ['pointercancel','lostpointercapture']) board.addEventListener(type,e=>release(e,false));
  board.addEventListener('keydown',e=>{
    const commands={'+':()=>scale(1.35),'=':()=>scale(1.35),'-':()=>scale(1/1.35),'0':()=>fit(),
      ArrowLeft:()=>{offsetX+=45;},ArrowRight:()=>{offsetX-=45;},ArrowUp:()=>{offsetZ+=45;},ArrowDown:()=>{offsetZ-=45;}};
    if (!Object.hasOwn(commands,e.key)) return;
    e.preventDefault();
    commands[e.key]();draw();
  });
  const close=document.createElement('button');
  close.textContent='Exit fullscreen';close.className='exit-map';
  mapPanel.append(close);
  let savedOverflow='';
  function fullscreen(open) {
    if (open && !mapPanel.classList.contains('expanded')) savedOverflow=document.body.style.overflow;
    mapPanel.classList.toggle('expanded',open);
    document.body.style.overflow=open?'hidden':savedOverflow;
    (open?close:$('#fullMap')).focus();
    requestAnimationFrame(()=>fit());
  }
  $('#zoomOut').onclick=()=>scale(1/1.4);
  $('#zoomIn').onclick=()=>scale(1.4);
  $('#fitMap').onclick=()=>fit();
  $('#fullMap').onclick=()=>fullscreen(true);
  close.onclick=()=>fullscreen(false);
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&mapPanel.classList.contains('expanded')) fullscreen(false);});
  const mapSize=new ResizeObserver(()=>{if (pointers.size) draw();else fit();});
  mapSize.observe(board);
  for (const button of viewButtons) button.onclick=()=>{
    mode=button.dataset.view;
    for (const b of viewButtons) b.setAttribute('aria-pressed',b===button);
    draw();
  };

  function list() {
    const needle=$('#find').value.trim().toLowerCase();
    const sector=$('#sector').value;
    const level=$('#level').value;
    const matches=placements.filter(p=>(sector==='all'||p.sector===sector)&&(level==='all'||p.setting===level)&&
      `${p.id} ${p.name} ${p.rationale}`.toLowerCase().includes(needle));
    $('#plot-list').innerHTML=matches.map(p=>`<button data-plot="${escape(p.id)}" aria-pressed="${p===active}"><span class="tag ${p.setting}">${p.id}</span><span>${escape(p.name)}<br><small>${setting(p)} · ${p.sector}</small></span></button>`).join('') || '<p class="small">No department matches these filters.</p>';
  }
  function select(plot, focus) {
    active=plot;
    $('#map-selection').textContent=`${plot.id} · ${plot.name} · ${setting(plot)} ↘`;
    const card=$('#plot-card');
    const d=departments[plot.id];
    const notes=[plot.fit_status,plot.terrain_note,plot.fit_instruction,plot.facade_note].filter(Boolean);
    const pairs=[
      ['Walk datum',height(plot.floor_y)],
      ['Room height',plot.clearance ? plot.clearance+' clear blocks' : 'See reference shell'],
      ['Facade',`${plot.facade?.face ?? 'Survey required'} · (${point(plot.facade?.origin)}) · ${plot.facade?.template ?? 'Department shell'}`],
      ['Civil road',plot.links.road],
      ['Public threshold',`(${point(plot.links.public_threshold)})${plot.links.public_status?' · '+plot.links.public_status:''}`],
      ['Service entry',`(${point(plot.links.main_entry)})`],
      ['Branch arrival',`(${point(plot.links.branch_endpoint)}) · ${plot.links.branch}`],
      ['Branch layout',plot.links.status],
      ['Site section',notes.join(' · ')]
    ];
    if (plot.work_area_cells) pairs.splice(2,0,['Work-bay floor',num(plot.work_area_cells)+' blocks']);
    if (plot.surface_work_area_target) pairs.splice(2,0,['Work-area target',num(plot.surface_work_area_target)+' blocks']);
    card.innerHTML=`<p class="plot-type">${plot.id} · ${escape(plot.sector)} · ${setting(plot)}</p><h3>${escape(plot.name)}</h3><p>${escape(plot.rationale)}</p>`+
      `<dl>${pairs.filter(([,value])=>value!==undefined&&value!=='').map(([key,value])=>`<dt>${escape(key)}</dt><dd>${escape(value)}</dd>`).join('')}</dl>`+
      `<div class="links"><a href="../index.html?model=${plot.id}#layers">Reference shell layers</a>`+
      (d?.kit_href?`<a href="${escape(d.kit_href)}">View facade module</a>`:'')+
      `<button type="button" id="plotZoom">Zoom to plot</button><button type="button" id="routeInspect">Read its road profile</button></div>`;
    $('#plotZoom').onclick=()=>{if(mode!=='both'&&mode!=='service'&&mode!==plot.setting)viewButtons[0].click();focusPlot(plot);$('#map').scrollIntoView();};
    $('#routeInspect').onclick=()=>{$('#selected-route').scrollIntoView();};
    if (roads.has(plot.links.road)) selectedRoute.value=plot.links.road;
    if (focus && mode!=='both' && mode!=='service' && mode!==plot.setting) viewButtons[0].click();
    list();profile();draw();
  }
  $('#plot-list').addEventListener('click',e=>{
    const button=e.target.closest('[data-plot]');
    if (button) select(byId.get(button.dataset.plot),true);
  });
  $('#find').addEventListener('input',list);
  $('#level').addEventListener('change',list);
  $('#sector').addEventListener('change',()=>{
    list();
    const visible=shownPlots();
    if (!visible.length || $('#sector').value==='all') fit();
    else {
      const all=visible.map(pBounds), x=Math.min(...all.map(b=>b[0]))-18, z=Math.min(...all.map(b=>b[2]))-18;
      fit([x,z,Math.max(...all.map(b=>b[3]))-x+19,Math.max(...all.map(b=>b[5]))-z+19]);
    }
  });
  $('#sector-split').innerHTML=Object.entries(sectors).map(([k,s])=>`<button type="button" data-sector="${k}" title="${escape(s.name)}"><strong>${k}</strong> · ${s.surface_count} surface / ${s.mesa_count} mesa</button>`).join('');
  $('#sector-split').addEventListener('click',e=>{
    const sector=e.target.closest('[data-sector]')?.dataset.sector;
    if (!sector) return;
    $('#sector').value=$('#sector').value===sector?'all':sector;
    $('#sector').dispatchEvent(new Event('change'));
  });

  function profile() {
    const road=roads.get(selectedRoute.value);
    if (!road) return;
    const can=$('#height-profile'), ratio=devicePixelRatio||1, w=can.clientWidth,h=can.clientHeight;
    can.width=w*ratio;can.height=h*ratio;
    const ctx=can.getContext('2d');
    ctx.setTransform(ratio,0,0,ratio,0,0);
    const ground=road.walk_y2.map((_,i)=>{
      const [x,z]=localPosition(road,i);
      return x<864 && z<864 ? heights[z*864+x]-64:null;
    });
    const surface=road.walk_y2.map(y=>y/2);
    const lower=surface.map(y=>y-9);
    const values=[...surface,...lower,...ground.filter(y=>y!==null)];
    const min=Math.floor(Math.min(...values)/10)*10,max=Math.ceil((Math.max(...values)+5)/10)*10;
    const px=i=>37+i*(w-57)/(surface.length-1), py=y=>h-22-(y-min)*(h-44)/(max-min);
    ctx.font='12px ui-monospace,monospace';
    for (let y=min;y<=max;y+=10) {
      stroke(ctx,[[34,py(y)],[w-16,py(y)]],'#385349',1);
      ctx.fillStyle='#a5baaf';ctx.fillText(y,4,py(y)+3);
    }
    const runs=(crossings.get(road.id)||[]).filter(p=>['bridge','tunnel'].includes(p.type));
    for (const run of runs) {
      const start=px(run.start-road.start),end=px(run.end-road.start+1);
      ctx.fillStyle=routeColors[run.type]+'2c';ctx.fillRect(start,23,end-start,h-45);
    }
    for (const [data,color] of [[ground,'#deca9a'],[surface,'#81d9e1'],[lower,routeColors.service]]) {
      ctx.strokeStyle=color;ctx.lineWidth=2;
      let open=false;ctx.beginPath();
      data.forEach((value,i)=>{if(value===null){open=false;return;} if (open)ctx.lineTo(px(i),py(value));else ctx.moveTo(px(i),py(value));open=true;});
      ctx.stroke();
    }
    $('#road-caption').textContent=`${road.id} · Local Y. Pale sand shows measured ground, blue the street and violet the gallery. ${runs.length} bridge or tunnel sections on this edge.`;
  }
  selectedRoute.innerHTML=plan.roads.map(r=>`<option>${r.id}</option>`).join('');
  selectedRoute.onchange=()=>{profile();draw();};
  new ResizeObserver(profile).observe($('#height-profile'));
  const above=placements.filter(p=>p.setting==='surface').length;
  $('#totals').textContent=`${above} surface departments · ${placements.length-above} mesa departments. The HQ keeps its protected 65 × 65 reservation.`;
  $('#area-target').textContent=`${num(work_area.mesa_bay_cells)} modeled work-bay blocks inside the mesas. The plan allocates the same net work area across ${work_area.surface_active_work_plots} active surface plots.`;
  $('#road-summary').textContent=`${plan.roads.length} road links with ${plan.crossings.filter(c=>c.type==='tunnel').length} classified tunnel sections.`;
  const approaches=placements.filter(p=>p.setting==='mesa' && p.links.public_xyz.length);
  $('#approach-summary').textContent=`${approaches.length} mesa facade approaches have a grade profile. ${placements.length-above-approaches.length} need a site-specific landing or stair.`;
  $('#bridge-summary').textContent=`${plan.crossings.filter(c=>c.type==='bridge').length} road bridge sections · ${glazed.length} proposed glazed crossings.`;
  $('#gallery-summary').textContent=`${stats.gallery_nodes ?? 100} junctions · five clear blocks across and four high. ${stats.new_branch_profiles ?? 0} mesa branches have planned grade profiles.`;
  $('#bridge-register').innerHTML=glazed.map(b=>`<article><strong>${escape(b.id)} · ${escape(b.template)}</strong><p>${b.plots.map(id=>escape(byId.get(id).name)).join(' ↔ ')} · walk ${height(b.walk_y)} · ${b.underdeck_road_clear_height} blocks above the road. Survey both abutments.</p><p>Local start (${point(b.start_xyz)}) → end (${point(b.end_xyz)})</p></article>`).join('');
  select(active,false);fit();
})();
