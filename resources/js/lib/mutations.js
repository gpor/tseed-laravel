

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
  entry.parent = parentEntry
  entry.pos = pos
  const data = {
    moved: entry.id,
    parent: parentEntry.id,
    pos,
  }
  axios.post(apiUrlBase + '/api/insert-entry', data)
    .then(res => {
      entry.existsInDb = true
    })
}

const createEntry = (entry) => {
  return axios.post(apiUrlBase + '/api/create-entry', {
    content: entry.content,
    parent: entry.parent.id,
    pos: entry.pos,
  })
}

const updateEntry = (entry) => {
  return axios.patch(apiUrlBase + '/api/update-entry', entry)
}





export {
  removeEntry,
  insertEntry,
  createEntry,
  updateEntry
}
