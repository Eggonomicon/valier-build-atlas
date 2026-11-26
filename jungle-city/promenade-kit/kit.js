(() => {
  const catalog = window.VALIER_CLIFF_KIT;
  const study = document.getElementById('study');
  function show(id) {
    const entry = catalog[id];
    if (!entry) return;
    study.src = 'renders/' + id + '.webp';
    study.alt = entry.title + ' from saved GTNH block coordinates';
    document.getElementById('view-title').textContent = id + ' · ' + entry.title;
    document.getElementById('view-note').textContent = entry.summary;
    document.getElementById('view-file').href = study.src;
  }
  const initial = new URLSearchParams(location.search).get('part');
  if (initial && Object.hasOwn(catalog,initial)) show(initial);
  document.querySelector('.piece-grid').addEventListener('click', event => {
    const link = event.target.closest('[data-part]');
    if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    show(link.dataset.part);
    const url = new URL(link.href);
    if (location.protocol !== 'file:') history.replaceState(null,'',url);
    document.getElementById('viewer').scrollIntoView();
    document.querySelector('#viewer .plan-viewport')?.focus({preventScroll:true});
  });
  document.getElementById('category').addEventListener('change', event => {
    for (const piece of document.querySelectorAll('.piece')) {
      piece.hidden = event.target.value !== 'all' && piece.dataset.category !== event.target.value;
    }
  });
})();
