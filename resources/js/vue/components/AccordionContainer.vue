<template>
  <div class="accordion-container">
    <entries-accordion
      :entries="entries"
      :parent="rootEntry"
    />
  </div>
</template>

<script>

export default {
  name: 'AccordionContainer',
  components: {
  },
  props: {
    rootEntry: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    entries: [],
  }),
  created() {
    this.rootEntry.entries = this.entries
    const params = {
      rootId: this.rootEntry.id,
    }
    axios.get(this.$root.entriesApiUrl, { params })
      .then(res => {
        res.data.forEach(entry => {
          entry.childrenQueried = true
          entry.parent = this.rootEntry
          entry.entries.forEach(e => {
            e.parent = entry
            e.childrenQueried = false
            e.entries = []
          })
          this.entries.push(entry)
        })
      })
  },
}
</script>
