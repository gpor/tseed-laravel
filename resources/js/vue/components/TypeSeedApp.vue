<template>
  <main id="type-seed-app">
    <PageHeader />
    <div class="center-frame">
      <AccordionWithHeader
        v-for="(rootEntry, i) in rootEntries"
        :key="i"
        :root-entry="rootEntry"
      />
    </div>
    <transition name="fade">
      <PageModal
        v-if="$root.pageModalSml.innerData"
        :page-modal="$root.pageModalSml"
      />
    </transition>
  </main>
</template>

<script>
import PageModal from '~/js/vue/components/PageModal'

export default {
  name: 'TypeSeedApp',
  components: {
    PageModal,
  },
  props: {
    rootEntries: {
      type: Array,
      required: true,
    },
    entriesApiUrl: {
      type: String,
      required: true,
    },
  },
  created() {
    this.$root.entriesApiUrl = this.entriesApiUrl;
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches
    if (prefersDarkMode) {
      document.body.classList.add('-dark-theme')
    }
  },
}
</script>
