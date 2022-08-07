


export default class {
  constructor(rootEntry, accordionPanels, i) {
    this.rootEntry = rootEntry
    this.accordionPanels = accordionPanels
    if (accordionPanels.urlData.length >= i + 1) {
      this.expanded = new Set(accordionPanels.urlData[i].splice(1))
    } else {
      this.expanded = new Set()
    }
  }
  title() {
    return this.isPrimary()
      ? 'Home'
      : this.rootEntry.content
  }
  isPrimary() {
    return this.rootEntry.content === 'Primary';
  }
  expand(id) {
    this.expanded.add(id)
    this.accordionPanels.updateUrl()
  }
  fold(id) {
    this.expanded.delete(id)
    this.accordionPanels.updateUrl()
  }
}
