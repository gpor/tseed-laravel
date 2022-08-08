import AccordionPanel from '~/js/lib/AccordionPanel.js'


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
  add(rootEntry) {
    const panel = new AccordionPanel(rootEntry, this, this.panels.length)
    this.panels.push(panel)
    this.updateUrl()
  }
  replace(rootEntry, pos) {
    const panel = new AccordionPanel(rootEntry, this, pos)
    this.panels.splice(pos, 1, panel)
    this.updateUrl()
  }
  close(panel) {
    this.panels.splice(panel.i, 1)
    this.panels.forEach(((panel, i) => {
      panel.i = i
    }))
    this.updateUrl()
  }
}
