<template>
  <div
    class="entry-expandable"
    :class="{'-expanded': isExpanded && entry.entries.length, '-is-editing': isEditing}"
  >
    <Drop
      class="-head"
      accepts-type="entry"
      @drop="dropEntryOnEntry"
    >
      <div class="-left">
        <div
          v-if="isEditing"
          class="-editing"
        >
          <contenteditable
            ref="contentInput"
            v-model="editedContent"
            tag="p"
            spellcheck="false"
            tabindex="0"
            @click="edit"
            @blur="leaveInput"
            @keydown="inputKey"
          >
            {{ editedContent }}
          </contenteditable>
        </div>
        <p
          v-else
          class="-content"
          @click="edit"
        >
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
        v-show="isExpanded && entry.entries.length"
        :entries="entry.entries"
        :parent="entry"
        :panel="panel"
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
    panel: {
      type: Object,
      required: true,
    },
  },
  data: ()=>({
    isExpanded: false,
    apiQueried: false,
    isEditing: false,
    editedContent: '',
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
    if (this.panel.expanded.has(this.entry.id)) {
      this.expand()
    }
    if (this.entry.isEditing) {
      this.isEditing = true
      this.focusInput()
    }
  },
  methods: {
    edit() {
      this.isEditing = true
      this.editedContent = this.entry.content
      this.focusInput()
    },
    focusInput() {
      Vue.nextTick(() => {
        this.$refs.contentInput.$el.focus()
        this.selectElementContents(this.$refs.contentInput.$el)
      })
    },
    inputKey(e) {
      const key = e.key
      console.log('key', key)
      if (key === 'Escape') {
        this.leaveInput()
      } else if (key === 'Enter') {
        e.preventDefault()
      } else if (key === 'ArrowUp') {
        e.preventDefault()
      } else if (key === 'ArrowDown') {
        e.preventDefault()
      }
    },
    leaveInput() {
      console.log('leaveInput')
      this.entry.content = this.editedContent
      this.isEditing = false
      if (this.entry.id === 0) {
        if (this.editedContent === '') {
          // discard this.entry
        } else {
          // api call to create
        }
      } else {
        // api call to update
      }
    },
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
      console.log('found', found)
      if ( ! found) {
        removeEntry(dragged, dragged.parent)
        insertEntry(dragged, target)
      }
    },
    expand() {
      this.isExpanded = ! this.isExpanded
      if (this.isExpanded) {
        this.panel.expand(this.entry.id)
      } else {
        this.panel.fold(this.entry.id)
      }
      if (this.isExpanded && ! this.apiQueried) {
        this.$root.entriesApiCall(this.entry.id)
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
    selectElementContents(el) {
      const range = document.createRange();
      range.selectNodeContents(el);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    },
  },
}
</script>
