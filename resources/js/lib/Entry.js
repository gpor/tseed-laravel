

export default class {
  constructor(data) {
    const fields = [
      'content',
      'id',
      'parent_id',
      'pos',
      'created_at',
      'updated_at',
      'entries',
    ]
    fields.forEach(fName => {
      if (fName in data) {
        this[fName] = data[fName]
      } else {
        console.error('Entry is missing '+fName)
      }
    })
    this.isExpanded = false
  }
}
