<template>
  <div
    class="entry-expandable"
    :class="{'-expanded': isExpanded}"
  >
    <Drop
      class="-head"
      accepts-type="entry"
      @drop="dropEntryOnEntry"
    >
      <div class="-left">
        <p class="-content">
          {{ entry.content }}
        </p>
        <div
          v-if=" ! entry.childrenQueried"
          class="-spinner"
        >
          <Spinner />
        </div>
        <p
          v-if="entry.entries.length"
          class="-child-count"
        >
          {{ entry.entries.length }}
        </p>
      </div>
      <div class="-right">
        <div
          v-if="entry.entries.length"
          class="-chev"
          @click="expand(i)"
        >
          <ChevDown />
        </div>
        <div
          v-else
          class="-add"
        >
          <AddIcon />
        </div>
      </div>
    </Drop>
    <div class="-body">
      <div class="-line" />
      <entries-accordion
        v-show="isExpanded"
        :entries="entry.entries"
        :parent="entry"
      />
    </div>
  </div>
</template>

<script>
import ChevDown from '~/js/vue/components/svg/ChevDown.vue'
import AddIcon from '~/js/vue/components/svg/AddIcon.vue'
import Spinner from '~/js/vue/components/svg/Spinner.vue'
import { Drop } from "vue-easy-dnd";
import { removeEntry, insertEntry } from '~/js/lib/mutations.js'

export default {
  name: 'EntryExpandable',
  components: {
    ChevDown,
    AddIcon,
    Spinner,
    Drop,
  },
  props: {
    entry: {
      type: Object,
      required: true,
    },
    i: {
      type: Number,
      required: true,
    },
  },
  data: ()=>({
    isExpanded: false,
    apiQueried: false,
  }),
  created() {
    this.entry.entries.forEach(e => {
      e.parent = this.entry
      if ('entries' in e) {
        e.childrenQueried = true
      } else {
        e.entries = []
        e.childrenQueried = false
      }
    })
  },
  methods: {
    dropEntryOnEntry(e) {
      const dragged = e.data
      const target = this.entry
      let parent = target
      let found = false
      while (parent && ! found) {
        if (parent.id === dragged.id) {
          found = true
        }
        parent = parent.parent
      }
      if ( ! found) {
        removeEntry(dragged, dragged.parent)
        insertEntry(dragged, target)
      }
    },
    expand() {
      this.isExpanded = ! this.isExpanded
      if (this.isExpanded && ! this.apiQueried) {
        const params = {
          rootId: this.entry.id,
        }
        axios.get(this.$root.entriesApiUrl, { params })
          .then(res => {
            this.entry.entries.forEach(entry => {
              const newData = res.data.find(nEntry => entry.id === nEntry.id)
              entry.parent = this.entry
              entry.entries = newData.entries.map(data => ({
                ...data,
                childrenQueried: false,
                entries: [],
              }))
              entry.childrenQueried = true
            })
            this.apiQueried = true
          })
      }
    },
  },
}
</script>
