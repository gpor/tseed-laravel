<template>
  <section class="accordion-panel">
    <header>
      <h2>
        {{ panel.title() }}
      </h2>
    </header>
    <accordion-container
      :panel="panel"
    ></accordion-container>
  </section>
</template>

<script>

export default {
  name: 'AccordionPanel',
  props: {
    panel: {
      type: Object,
      required: true,
    },
  },
}
</script>