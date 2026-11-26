(() => {
  'use strict';
  const studies = {
    aerial: {
      title: 'Canyon overview',
      original: ['../../jungle/images/concept-aerial.png', 'Original aerial reference with the civic crown, glazed crossing, cliff halls and conservatory.', 'The supplied composition sets the skyline. Leave the river visible between the built ledges.'],
      palette: ['aerial-palette-art.webp', 'Palette-guided aerial with charcoal halls, blush mesa, glasshouse and river below the upper bridge.', 'ImageGen redrew the supplied aerial using the installed 2.9.2 swatches. The cliff tower and greenhouse belong to the concept composition.'],
      model: ['panorama.webp', 'Installed-texture canyon panorama with the civic tower, greenhouse terrace, lower halls, river and glazed crossing.', 'The panoramic study uses the saved geometry of the civic tower, glasshouse and cliff frontage. The district download below covers the promenade, crossing and river garden.']
    },
    promenade: {
      title: 'Street level',
      original: ['../../jungle/images/concept-street.png', 'Original promenade reference showing the planted window bays, tunnel, lit river rail and upper bridge.', 'The supplied street view sets the relationship between the hall threshold, upper bridge and water’s edge.'],
      palette: ['promenade-palette-art.webp', 'Palette-guided promenade with charcoal square paving, pale sloped window ribs, restrained cyan marks and purple alliums.', 'ImageGen redrew the promenade from the GTNH material chart. The modeled version uses a straight modular avenue and a stepped descent to the garden.'],
      model: ['promenade.webp', 'Street-level WC01 block model looking north along the avenue to the portal beneath the raised glazed crossing.', 'The MK25 frontage meets the sidewalk at the road datum. The molded portal and raised glazed crossing are drawn from the same block model as the schematic.']
    }
  };
  const labels = {original: 'original concept', palette: 'palette edit', model: 'installed-texture model'};
  const params = new URLSearchParams(location.search);
  let view = Object.hasOwn(studies, params.get('view')) ? params.get('view') : 'aerial';
  let mode = Object.hasOwn(labels, params.get('mode')) ? params.get('mode') : 'palette';
  function show() {
    const [file, alt, note] = studies[view][mode];
    const img = document.getElementById('study');
    img.alt = alt;
    img.src = file;
    document.getElementById('view-title').textContent = studies[view].title + ' · ' + labels[mode];
    document.getElementById('view-note').textContent = note;
    document.getElementById('view-file').href = './' + file;
    document.querySelectorAll('[data-view]').forEach(button => button.setAttribute('aria-pressed', button.dataset.view === view));
    document.querySelectorAll('[data-mode]').forEach(button => button.setAttribute('aria-pressed', button.dataset.mode === mode));
  }
  document.querySelector('.tabs').addEventListener('click', event => {
    const button = event.target.closest('button');
    if (!button) return;
    if (button.dataset.view) view = button.dataset.view;
    if (button.dataset.mode) mode = button.dataset.mode;
    const url = new URL(location.href);
    url.searchParams.set('view', view);
    url.searchParams.set('mode', mode);
    if (location.protocol !== 'file:') history.replaceState(null, '', url);
    show();
  });
  show();
})();
