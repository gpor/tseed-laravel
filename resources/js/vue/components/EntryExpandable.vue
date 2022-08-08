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
          class="-menu"
          :class="{'-is-open': menuIsOpen}"
          @click="showMenu"
        >
          <p class="-icon">
            <IconMenu />
          </p>
          <div class="-pos-bottom">
            <div
              ref="menu"
              class="-list"
            >
              <span
                @click.stop="openInNewPanel"
              >Open in new panel</span>
              <span
                @click.stop="openInThisPanel"
              >Open in this panel</span>
              <span
                v-if="entry.entries.length === 0"
                class="-delete"
                @click.stop="deleteEntry"
              >Delete</span>
            </div>
          </div>
        </div>
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
          @click="addChild"
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
import IconMenu from '~/js/vue/components/svg/IconMenu.vue'
import Spinner from '~/js/vue/components/svg/Spinner.vue'
import { Drop } from "vue-easy-dnd";
import { removeEntry, insertEntry, createEntry, updateEntry, deleteEntry } from '~/js/lib/mutations.js'

export default {
  name: 'EntryExpandable',
  components: {
    ChevDown,
    AddIcon,
    Spinner,
    Drop,
    IconMenu,
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
    menuIsOpen: false,
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
      this.setEditingFlag(true)
      this.focusInput()
    }
  },
  methods: {
    showMenu() {
      if ( ! this.menuIsOpen) {
        this.menuIsOpen = true;
        setTimeout(() => {
          this.$root.openMenuEl = this.$refs.menu
          this.$root.closeMenuCallback = () => {
            this.menuIsOpen = false
          }
        }, 100)
      }
    },
    deleteEntry() {
      console.log('DELETE')
      deleteEntry(this.entry)
        .then(res => {
          removeEntry(this.entry, this.entry.parent)
        })
    },
    openInNewPanel() {
      this.$root.accordionPanels.add(this.entry)
    },
    openInThisPanel() {
      this.$root.accordionPanels.replace(this.entry, this.panel.i)
    },
    setEditingFlag(val) {
      this.isEditing = val
      this.$root.isEditing = val
      this.entry.isEditing = val
    },
    edit() {
      // console.log('this.isEditing', this.isEditing)
      if ( ! this.isEditing) {
        this.setEditingFlag(true)
        this.editedContent = this.entry.content
        this.focusInput()
      }
    },
    addChild() {
      // console.log('addChild')
      const newEntry = this.$root.newEntry(this.entry, this.entry.entries.length)
      newEntry.isEditing = true
      this.entry.entries.push(newEntry)
      this.expand()
    },
    focusInput() {
      Vue.nextTick(() => {
        this.$refs.contentInput.$el.focus()
        this.selectElementContents(this.$refs.contentInput.$el)
      })
    },
    inputKey(e) {
      const key = e.key
      // console.log('key', key)
      if (key === 'Escape') {
        this.leaveInput()
      } else if (key === 'Enter') {
        this.leaveInput()
        const nextPos = this.entry.pos + 1
        this.entry.parent.entries.splice(
          nextPos,
          0,
          this.$root.newEntry(this.entry.parent, nextPos)
        )

        e.preventDefault()
      } else if (key === 'ArrowUp') {
        // e.preventDefault()
      } else if (key === 'ArrowDown') {
        // e.preventDefault()
      } else if (key === 'Tab') {
        e.preventDefault()
      }
    },
    leaveInput() {
      // console.log('leaveInput')
      const hasChange = this.entry.content !== this.editedContent
      this.entry.content = this.editedContent
      if (this.entry.existsInDb) {
        if (hasChange) {
          updateEntry({
            id: this.entry.id,
            content: this.entry.content,
          }).then(res => {
            this.setEditingFlag(false)
          })
        } else {
          this.setEditingFlag(false)
        }
      } else {
        if (this.editedContent === '') {
          const siblings = this.entry.parent.entries
          siblings.splice(siblings.findIndex(entry => entry === this.entry), 1)
          this.setEditingFlag(false)
        } else {
          // console.log('EntryExpandable leaveInput() createEntry')
          createEntry(this.entry).then(res => {
            this.entry.id = res.data.id
            // console.log('this.entry.id', this.entry.id)
            this.setEditingFlag(false)
          })
        }
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
              if (newData) {
                entry.parent = this.entry
                entry.entries = newData.entries.map(data => ({
                  ...data,
                  key: data.id,
                  childrenQueried: false,
                  existsInDb: true,
                  entries: [],
                }))
                entry.childrenQueried = true
              } else {
                console.log('skipping child', entry.key)
              }
            })
            this.apiQueried = true
            if (this.entry.entries.length === 0 && this.isExpanded) {
              this.isExpanded = false
            }
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
