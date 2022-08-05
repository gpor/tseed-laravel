

export default class {
  constructor() {
    this.panels = []
    this.urlSearchParams = new URLSearchParams(window.location.search)
    this.urlData = (this.urlSearchParams.get('panels') || '').split('_').map(str => str.split('-').map(id => parseInt(id)))
  }
  updateUrl() {
    const val = this.panels.map(panel => [panel.rootEntry.id, ...Array.from(panel.expanded)].join('-'), []).join('_')
    this.urlSearchParams.set('panels', val)
    window.history.replaceState(
      {},
      "",
      `${location.pathname}?${this.urlSearchParams}`
    );
  }
}
