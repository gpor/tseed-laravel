<template>
  <div
    class="entry-expandable"
    :class="{'-expanded': isExpanded}"
  >
    <div class="-head">
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
          class="-children"
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
    </div>
    <div class="-body">
      <div class="-line" />
      <div
        v-if="isExpanded"
        class=""
      >
        <div
          v-for="(e, j) in entry.entries"
          :key="e.id"
          class="-entry"
        >
          <EntryExpandable
            :entry="e"
            :i="j"
          />
        </div>
        <div class="-entry"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ChevDown from '~/js/vue/components/svg/ChevDown.vue'
import AddIcon from '~/js/vue/components/svg/AddIcon.vue'
import Spinner from '~/js/vue/components/svg/Spinner.vue'
import axios from 'axios'

export default {
  name: 'EntryExpandable',
  components: {
    ChevDown,
    AddIcon,
    Spinner,
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
      if ('entries' in e) {
        e.childrenQueried = true
      } else {
        e.entries = []
        e.childrenQueried = false
      }
    })
  },
  methods: {
    expand() {
      console.log('click expand', this.entry.content)
      this.isExpanded = ! this.isExpanded
      if (this.isExpanded && ! this.apiQueried) {
        const params = {
          rootId: this.entry.id,
        }
        console.log('query', params)
        axios.get(this.$root.entriesApiUrl, { params })
          .then(res => {
            console.log('res' , res.data.map(e => e.content))
            this.entry.entries.forEach(entry => {
              const newData = res.data.find(nEntry => entry.id === nEntry.id)
              console.log(`%c ${entry.content} `, 'background-color: #aff')
              console.log(entry.childrenQueried)
              console.log(entry.entries.length)
              console.log('newData.entries', entry.content, newData.entries.length)
              entry.entries = []
              newData.entries.forEach(e => {
                e.childrenQueried = false
                e.entries = []
                entry.entries.push(e)
              })
              entry.childrenQueried = true
            })
            console.log('clicked entry.entries', this.entry.entries)
            this.apiQueried = true
          })
      }
    },
  },
}
</script>
