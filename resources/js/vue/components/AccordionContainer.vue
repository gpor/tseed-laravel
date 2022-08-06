<template>
  <div class="accordion-container">
    <entries-accordion
      :entries="entries"
      :parent="panel.rootEntry"
      :panel="panel"
    />
  </div>
</template>

<script>

export default {
  name: 'AccordionContainer',
  components: {
  },
  props: {
    panel: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    entries: [],
  }),
  created() {
    this.panel.rootEntry.entries = this.entries
    this.$root.entriesApiCall(this.panel.rootEntry.id)
      .then(res => {
        res.data.forEach(entry => {
          entry.childrenQueried = true
          entry.parent = this.panel.rootEntry
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
