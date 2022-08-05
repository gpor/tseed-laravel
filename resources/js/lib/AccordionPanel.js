


export default class {
  constructor(rootEntry) {
    this.rootEntry = rootEntry
  }
  title() {
    return (this.rootEntry.content === 'Primary')
      ? 'Home'
      : this.rootEntry.content
  }
}