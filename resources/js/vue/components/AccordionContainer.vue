<template>
  <div
    class="accordion-container"
    :class="{'-is-editing': $root.isEditing}"
  >
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
          entry.existsInDb = true
          entry.key = entry.id
          entry.entries.forEach(e => {
            e.parent = entry
            e.childrenQueried = false
            e.entries = []
            e.existsInDb = true
            e.key = e.id
          })
          this.entries.push(entry)
        })
      })
  },
}
</script>
