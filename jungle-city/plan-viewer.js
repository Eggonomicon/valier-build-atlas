/* Dependency-free plan viewers. Wheel/pinch to zoom; drag to pan. */
(() => {
  'use strict';
  const MIN = .05, MAX = 16, viewers = [];
  class PlanViewer {
    constructor(img, index) {
      this.img = img; this.scale = 1; this.x = 0; this.y = 0; this.fitted = true;
      this.pointers = new Map(); this.index = index;
      this.root = document.createElement('div'); this.root.className = 'plan-viewer';
      this.root.innerHTML = `<div class="plan-controls" role="group" aria-label="Drawing controls">
        <button type="button" data-action="out" aria-label="Zoom out">−</button>
        <label>Zoom <input type="range" min="5" max="1600" step="1" value="100" aria-label="Drawing zoom percentage"></label>
        <output aria-live="polite">100%</output>
        <button type="button" data-action="in" aria-label="Zoom in">+</button>
        <button type="button" data-action="fit">Fit / reset</button>
        <button type="button" data-action="native">1:1</button>
        <button type="button" data-action="full">Fullscreen</button>
      </div><div class="plan-viewport" tabindex="0" role="region"></div>
      <p class="plan-help">Scroll or pinch to zoom · drag to pan · +/− to zoom · 0 to fit · arrow keys to pan · Esc to close fullscreen</p>`;
      img.replaceWith(this.root);
      this.view = this.root.querySelector('.plan-viewport'); this.view.append(img);
      this.view.setAttribute('aria-label', `${img.alt}. Zoomable drawing; drag to pan.`);
      img.draggable = false; img.classList.add('plan-image');
      this.range = this.root.querySelector('input'); this.output = this.root.querySelector('output');
      this.fullButton = this.root.querySelector('[data-action="full"]');
      this.root.querySelector('[data-action="in"]').onclick = () => this.zoom(this.scale * 1.4);
      this.root.querySelector('[data-action="out"]').onclick = () => this.zoom(this.scale / 1.4);
      this.root.querySelector('[data-action="fit"]').onclick = () => this.fit();
      this.root.querySelector('[data-action="native"]').onclick = () => this.zoom(1);
      this.fullButton.onclick = () => this.fullscreen();
      this.range.oninput = () => this.zoom(Number(this.range.value) / 100);
      this.view.addEventListener('wheel', e => {
        e.preventDefault(); const r = this.view.getBoundingClientRect();
        this.zoom(this.scale * Math.exp(-Math.max(-100, Math.min(100, e.deltaY)) * .007), e.clientX-r.left, e.clientY-r.top);
      }, {passive:false});
      this.view.addEventListener('pointerdown', e => {
        if(e.pointerType === 'mouse' && e.button !== 0) return;
        e.preventDefault(); this.view.focus({preventScroll:true});
        this.pointers.set(e.pointerId, {x:e.clientX,y:e.clientY});
        try { this.view.setPointerCapture(e.pointerId); } catch (_) { /* synthetic test events */ }
        this.view.classList.add('dragging');
      });
      this.view.addEventListener('pointermove', e => {
        if(!this.pointers.has(e.pointerId)) return;
        e.preventDefault(); this.fitted = false;
        const old = [...this.pointers.values()], prior = this.pointers.get(e.pointerId);
        this.pointers.set(e.pointerId, {x:e.clientX,y:e.clientY});
        if(this.pointers.size >= 2) {
          const now = [...this.pointers.values()], r = this.view.getBoundingClientRect();
          const center = a => ({x:(a[0].x+a[1].x)/2-r.left,y:(a[0].y+a[1].y)/2-r.top});
          const distance = a => Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);
          const a = center(old), b = center(now), next = Math.max(MIN,Math.min(MAX,this.scale*distance(now)/Math.max(1,distance(old))));
          this.x = b.x-(a.x-this.x)*next/this.scale; this.y = b.y-(a.y-this.y)*next/this.scale; this.scale = next;
        } else { this.x += e.clientX-prior.x; this.y += e.clientY-prior.y; }
        this.render();
      });
      for(const type of ['pointerup','pointercancel','lostpointercapture']) this.view.addEventListener(type, e => {
        this.pointers.delete(e.pointerId); if(!this.pointers.size) this.view.classList.remove('dragging');
      });
      this.view.addEventListener('keydown', e => {
        if(['+','=','-','0','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)) e.preventDefault();
        if(e.key==='+'||e.key==='=') this.zoom(this.scale*1.4);
        else if(e.key==='-') this.zoom(this.scale/1.4);
        else if(e.key==='0') this.fit();
        else if(e.key.startsWith('Arrow')) {
          this.fitted=false; const step=e.shiftKey?160:50;
          if(e.key==='ArrowLeft') this.x+=step; if(e.key==='ArrowRight') this.x-=step;
          if(e.key==='ArrowUp') this.y+=step; if(e.key==='ArrowDown') this.y-=step; this.render();
        }
      });
      this.view.addEventListener('dblclick', () => this.fit());
      this.observer = new ResizeObserver(() => this.fitted ? this.fit() : this.render()); this.observer.observe(this.view);
      document.addEventListener('fullscreenchange', () => {
        if(document.fullscreenElement===this.root) this.fullButton.textContent='Exit fullscreen';
        else if(!this.root.classList.contains('plan-expanded')) this.fullButton.textContent='Fullscreen';
        requestAnimationFrame(() => this.fitted ? this.fit() : this.render());
      });
      document.addEventListener('keydown', e => { if(e.key==='Escape' && this.root.classList.contains('plan-expanded')) this.closeExpanded(); });
      this.root.addEventListener('keydown', e => {
        if(e.key!=='Tab'||!this.root.classList.contains('plan-expanded')) return;
        const items=[...this.root.querySelectorAll('button,input,[tabindex="0"]')], first=items[0],last=items[items.length-1];
        if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
        else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
      });
      img.addEventListener('load', () => {this.view.setAttribute('aria-label', `${img.alt}. Zoomable drawing; drag to pan.`);this.fit();});
      if(img.complete && img.naturalWidth) this.fit();
      const link=this.root.parentElement.querySelector(`a[href="${img.getAttribute('src')}"]`);
      if(link) { link.textContent='Open interactive fullscreen'; link.onclick=e=>{if(!e.ctrlKey&&!e.metaKey&&!e.shiftKey&&!e.altKey){e.preventDefault();this.fullscreen();}}; }
    }
    clamp() {
      const w=this.img.naturalWidth*this.scale,h=this.img.naturalHeight*this.scale;
      this.x=w<=this.view.clientWidth?(this.view.clientWidth-w)/2:Math.max(this.view.clientWidth-w,Math.min(0,this.x));
      this.y=h<=this.view.clientHeight?(this.view.clientHeight-h)/2:Math.max(this.view.clientHeight-h,Math.min(0,this.y));
    }
    render() {
      if(!this.img.naturalWidth) return; this.clamp();
      this.img.style.transform=`translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
      this.range.value=String(Math.round(this.scale*100)); this.output.textContent=`${Math.round(this.scale*100)}%`;
      this.root.dataset.scale=String(this.scale); this.root.dataset.x=String(this.x); this.root.dataset.y=String(this.y);
    }
    fit() {
      if(!this.img.naturalWidth || !this.view.clientWidth || !this.view.clientHeight) return;
      this.scale=Math.max(MIN,Math.min(MAX,this.view.clientWidth/this.img.naturalWidth,this.view.clientHeight/this.img.naturalHeight));
      this.fitted=true; this.render();
    }
    zoom(next, cx=this.view.clientWidth/2, cy=this.view.clientHeight/2) {
      next=Math.max(MIN,Math.min(MAX,next)); this.x=cx-(cx-this.x)*next/this.scale;this.y=cy-(cy-this.y)*next/this.scale;
      this.scale=next;this.fitted=false;this.render();
    }
    expand() {
      viewers.forEach(v=>{if(v!==this&&v.root.classList.contains('plan-expanded'))v.closeExpanded();});
      this.savedFocus=document.activeElement;this.savedOverflow=document.body.style.overflow;
      this.root.classList.add('plan-expanded');document.body.style.overflow='hidden';this.fullButton.textContent='Close fullscreen';
      this.root.setAttribute('role','dialog');this.root.setAttribute('aria-modal','true');this.root.setAttribute('aria-label',this.img.alt);
      this.view.focus({preventScroll:true});requestAnimationFrame(()=>this.fitted?this.fit():this.render());
    }
    closeExpanded() {
      this.root.classList.remove('plan-expanded');document.body.style.overflow=this.savedOverflow||'';
      this.root.removeAttribute('role');this.root.removeAttribute('aria-modal');this.root.removeAttribute('aria-label');
      this.fullButton.textContent='Fullscreen';this.savedFocus?.focus({preventScroll:true});requestAnimationFrame(()=>this.fitted?this.fit():this.render());
    }
    async fullscreen() {
      if(this.root.classList.contains('plan-expanded')) {this.closeExpanded();return;}
      if(document.fullscreenElement===this.root) {await document.exitFullscreen();return;}
      try {if(!this.root.requestFullscreen)throw new Error('Fullscreen unavailable');await this.root.requestFullscreen();}
      catch (_) {this.expand();}
    }
  }
  document.querySelectorAll('article img:not(.texture-swatch), img.section-image').forEach((img,i)=>viewers.push(new PlanViewer(img,i)));
  window.VALIER_IMAGE_VIEWERS=viewers;
})();
