

const removeEntry = (entry, parentEntry) => {
  if ( ! parentEntry.childrenQueried) {
    console.error('children not queried yet', parentEntry)
    return false
  }
  parentEntry.entries.splice(entry.parent.entries.findIndex(e => e === entry), 1)
}


const insertEntry = (entry, parentEntry, pos = null) => {
  if (pos === null) {
    pos = parentEntry.entries.length
    parentEntry.entries.push(entry)
  } else {
    parentEntry.entries.splice(pos, 0, entry)
  }
  const data = {
    moved: entry.id,
    parent: parentEntry.id,
    pos,
  }
  axios.post('/api/insert-entry', data)
}





export {
  removeEntry,
  insertEntry
}
