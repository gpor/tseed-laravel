<template>
  <section class="accordion-panel">
    <header>
      <h2 v-if="panel.rootEntry.content === 'Primary'">
        Your Notes
      </h2>
      <h2 v-else>
        {{ panel.rootEntry.content }}
      </h2>
    </header>
    <accordion-container
      :root-entry="panel.rootEntry"
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