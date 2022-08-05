<template>
  <main id="type-seed-app">
    <PageHeader />
    <section
      v-if="$root.auth.loggedIn"
      class="page-section -accordions-panels"
    >
      <div class="center-frame">
        <AccordionPanel
          v-for="(panel, i) in accordionPanels"
          :key="i"
          :panel="panel"
        />
      </div>
    </section>
    <section
      v-else
      class="page-section -login-or-register"
    >
      <div class="center-frame">
        <LoginModal
          :registering-init="false"
          :auth="$root.auth"
          :success="loginSuccess"
        />
      </div>
    </section>
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
import LoginModal from '~/js/vue/components/modal/LoginModal.vue'
import AccordionPanel from '~/js/lib/AccordionPanel.js'

export default {
  name: 'TypeSeedApp',
  components: {
    PageModal,
    LoginModal,
  },
  props: {
    rootEntries: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      accordionPanels: this.rootEntries.map(entry => new AccordionPanel(entry)),
    }
  },
  created() {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches
    if (prefersDarkMode) {
      document.body.classList.add('-dark-theme')
    }
  },
  methods: {
    loginSuccess() {
      console.log('loginSuccess')
    },
  },
}
</script>
