<template>
  <div class="entries-accordion">
    <div
      v-for="(entry, i) in entries"
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
    rootEntry: {
      type: Object,
      required: true,
    },
    entriesApiUrl: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    entries: [],
  }),
  created() {
    this.$root.entriesApiUrl = this.entriesApiUrl;
    const params = {
      rootId: this.rootEntry.id,
    }
    axios.get(this.$root.entriesApiUrl, { params })
      .then(res => {
        res.data.forEach(entry => {
          entry.childrenQueried = true
          entry.parent = null
          entry.entries.forEach(e => {
            e.parent = entry
            e.childrenQueried = false
            e.entries = []
          })
          this.entries.push(entry)
        })
      })
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches
    if (prefersDarkMode) {
      document.body.classList.add('-dark-theme')
    }
  },
}
</script>
