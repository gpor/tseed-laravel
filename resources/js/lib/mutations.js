import axios from 'axios'


const removeEntry = (entry, parentEntry) => {
  if ( ! parentEntry.childrenQueried) {
    console.error('children not queried yet', parentEntry)
    return false
  }
  parentEntry.entries.splice(entry.parent.entries.findIndex(e => e === entry), 1)
  // API call to update pos of all children ???
  // insertEntry is called after this so can completely handle in one go
}


const insertEntry = (entry, parentEntry, pos = null) => {
  if (pos === null) {
    pos = parentEntry.entries.length
    parentEntry.entries.push(entry)
  } else {
    parentEntry.entries.splice(pos, 0, entry)
  }
  // todo - API call to update pos of all children
  // todo - API call to update entry
  axios.post('/api/insert-entry', {
    moved: entry.id,
    parent: parentEntry.id,
    pos,
  })
}





export {
  removeEntry,
  insertEntry
}
