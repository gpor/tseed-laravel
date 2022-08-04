<template>
  <div
    class="page-modal"
    :class="{'-sml': pageModal.isSmall}"
    @click="pageModal.close()"
  >
    <div
      class="-window"
      @click.stop
    >
      <div
        class="-close"
        @click="pageModal.close()"
      >
        <ActionClose />
      </div>
      <component
        :is="isComponent"
        v-bind="pageModal.innerData"
        @close="pageModal.close()"
      ></component>
    </div>
  </div>
</template>

<script>
import ActionClose from '~/js/vue/components/svg/ActionClose.vue'

export default {
  name: 'PageModal',
  components: {
    ActionClose,
  },
  props: {
    pageModal: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      componentName: null,
    }
  },
  computed: {
    isComponent: function() {
      return () => import(`~/js/vue/components/modal/${this.pageModal.componentName}`)
    },
  },
  created() {
  },
  methods: {
  },
}
</script>
