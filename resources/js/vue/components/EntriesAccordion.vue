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
    this.$root.entriesApiUrl = this.entriesApiUrl;
    this.entries.forEach(entry => {
      entry.childrenQueried = true
      entry.parent = null
      entry.entries.forEach(e => {
        e.parent = entry
        e.childrenQueried = false
        e.entries = []
      })
      this.entryObjs.push(entry)
    })
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches
    if (prefersDarkMode) {
      document.body.classList.add('-dark-theme')
    }
  },
}
</script>
