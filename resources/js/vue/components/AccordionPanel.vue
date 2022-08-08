<template>
  <section class="accordion-panel">
    <header>
      <h2>
        {{ panel.title() }}
      </h2>
      <span
        class="-close"
        @click="close"
      >
        <ActionClose />
      </span>
    </header>
    <accordion-container
      :panel="panel"
    ></accordion-container>
  </section>
</template>

<script>
import ActionClose from '~/js/vue/components/svg/ActionClose.vue'

export default {
  name: 'AccordionPanel',
  components: {
    ActionClose,
  },
  props: {
    panel: {
      type: Object,
      required: true,
    },
  },
  methods: {
    close() {
      this.panel.close()
    },
  },
}
</script>