<template>
  <section class="page-section -entries">
    <header>
      <h2 v-if="rootEntry.content === 'Primary'">
        Your Notes
      </h2>
      <h2 v-else>
        {{ rootEntry.content }}
      </h2>
    </header>
    <accordion-container
      :root-entry="rootEntry"
    ></accordion-container>
  </section>
</template>

<script>

export default {
  name: 'AccordionWithHeader',
  props: {
    rootEntry: {
      type: Object,
      required: true,
    },
  },
}
</script>