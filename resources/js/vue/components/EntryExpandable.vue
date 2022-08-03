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
      <div
        v-if="isExpanded"
        class="-children"
      >
        <div
          v-for="(e, j) in entry.entries"
          :key="e.id"
          class="-entry"
        >
          <div
            v-if="j === 0"
            class="-insert-zone"
          >
            <Drop
              accepts-type="entry"
              @drop="insertEntry(j, $event)"
            ></Drop>
          </div>
          <Drag
            :data="e"
            type="entry"
          >
            <EntryExpandable
              :entry="e"
              :i="j"
            />
          </Drag>
          <div
            class="-insert-zone"
          >
            <Drop
              accepts-type="entry"
              @drop="insertEntry(j + 1, $event)"
            ></Drop>
          </div>
        </div>
        <div class="-entry">
          <div class="-add-at-bottom">
            <AddIcon />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChevDown from '~/js/vue/components/svg/ChevDown.vue'
import AddIcon from '~/js/vue/components/svg/AddIcon.vue'
import Spinner from '~/js/vue/components/svg/Spinner.vue'
import axios from 'axios'
import { Drag, Drop } from "vue-easy-dnd";
import { removeEntry, insertEntry } from '~/js/lib/mutations.js'

export default {
  name: 'EntryExpandable',
  components: {
    ChevDown,
    AddIcon,
    Spinner,
    Drag,
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
    insertEntry(pos, e) {
      const dragged = e.data
      const parent = this.entry
      removeEntry(dragged, dragged.parent)
      insertEntry(dragged, parent, pos)
      console.log('insertEntry', pos, dragged.content, parent.content)
    },
    dropEntryOnEntry(e) {
      const dragged = e.data
      const target = this.entry
      console.log('dropEntry', dragged.content, target.content)
      // todo - reject if target is a child of dragged
      let parent = target.parent
      let found = false
      while (parent && ! found) {
        if (parent === dragged) {
          found = true
        }
        parent = parent.parent
      }
      console.log('found', found)
      if ( ! found) {
        removeEntry(dragged, dragged.parent)
        insertEntry(dragged, target)
        // move to target.entries
      }
    },
    expand() {
      this.isExpanded = ! this.isExpanded
      if (this.isExpanded && ! this.apiQueried) {
        const params = {
          rootId: this.entry.id,
        }
        console.log('query', params)
        axios.get(this.$root.entriesApiUrl, { params })
          .then(res => {
            this.entry.entries.forEach(entry => {
              const newData = res.data.find(nEntry => entry.id === nEntry.id)
              entry.parent = this.entry
              entry.entries = []
              newData.entries.forEach(e => {
                e.childrenQueried = false
                e.entries = []
                entry.entries.push(e)
              })
              entry.childrenQueried = true
            })
            this.apiQueried = true
          })
      }
    },
  },
}
</script>
