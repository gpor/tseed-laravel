<template>
  <div class="entries-accordion">
    <div
      v-for="(entry, i) in entries"
      :key="entry.id"
      class="-entry"
    >
      <div class="-head">
        <div class="-left">
          <p class="-content">
            {{ entry.content }}
          </p>
          <p
            v-if="entry.entries.length"
            class="-children"
          >
            {{ entry.entries.length }}
          </p>
        </div>
        <div class="-right">
          <div
            class="-chev"
            @click="expand(i)"
          >
            <ChevDown />
          </div>
        </div>
      </div>
      <div class="-body">
      </div>
    </div>
  </div>
</template>

<script>
import ChevDown from '~/js/vue/components/svg/ChevDown.vue'

export default {
  name: 'EntriesAccordion',
  components: {
    ChevDown,
  },
  props: {
    entries: {
      type: Array,
      required: true,
    },
  },
  created() {
    console.log('EntriesAccordion')
  },
  methods: {
    expand(i) {
      console.log('expand', i)
    },
  },
}
</script>
