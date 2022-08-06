<template>
  <div class="entries-accordion">
    <div
      v-for="(entry, i) in entries"
      :key="entry.id"
      class="-entry"
    >
      <div
        v-if="i === 0"
        class="-insert-zone"
      >
        <Drop
          accepts-type="entry"
          @drop="insertEntry(i, $event)"
        ></Drop>
      </div>
      <Drag
        :data="entry"
        type="entry"
      >
        <EntryExpandable
          :entry="entry"
          :i="i"
          :panel="panel"
        />
      </Drag>
      <div
        class="-insert-zone"
      >
        <Drop
          accepts-type="entry"
          @drop="insertEntry(i + 1, $event)"
        ></Drop>
      </div>
    </div>
  </div>
</template>

<script>
import { Drag, Drop } from "vue-easy-dnd";
import { removeEntry, insertEntry } from '~/js/lib/mutations.js'

export default {
  name: 'EntriesAccordion',
  components: {
    Drop,
    Drag,
  },
  props: {
    entries: {
      type: Array,
      required: true,
    },
    parent: {
      type: Object,
      required: true,
    },
    panel: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
  }),
  created() {
  },
  methods: {
    insertEntry(pos, e) {
      const dragged = e.data
      if (dragged.id !== this.parent.id) {
        removeEntry(dragged, dragged.parent)
        insertEntry(dragged, this.parent, pos)
      }
    },
  },
}
</script>
