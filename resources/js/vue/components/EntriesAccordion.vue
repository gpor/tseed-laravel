<template>
  <div class="entries-accordion">
    <div
      v-for="(entry, i) in entryObjs"
      :key="entry.id"
      class="-entry"
    >
      <EntryExpandable
        :entry="entry"
        :i="i"
      />
    </div>
  </div>
</template>

<script>
import Entry from '~/js/lib/Entry.js'

export default {
  name: 'EntriesAccordion',
  components: {
  },
  props: {
    entries: {
      type: Array,
      required: true,
    },
    entriesApiUrl: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    entryObjs: [],
  }),
  created() {
    // this.entryObjs = this.entries.map(entry => new Entry(entry)).sort((a, b) => a.pos - b.pos)
    // console.log('this.entriesApiUrl', this.entriesApiUrl, this.$root.entriesApiUrl)
    this.$root.entriesApiUrl = this.entriesApiUrl;
    this.entries.forEach(entry => {
      entry.childrenQueried = true
      entry.entries.forEach(e => {
        e.childrenQueried = false
        e.entries = []
      })
      this.entryObjs.push(entry)
    })
    console.log('this.entries', this.entryObjs)
  },
}
</script>
