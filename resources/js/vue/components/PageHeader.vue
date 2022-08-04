<template>
  <header class="page-header">
    <div class="center-frame">
      <a
        class="-logo"
        href="/entries"
      >
        <full-logo></full-logo>
      </a>
      <div
        class="show-login-modal"
        @click="showLoginModal"
      >
        <p>Login</p>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'PageHeader',
  methods: {
    showLoginModal() {
      this.$root.pageModalSml.login(() => {
        console.log('closed')
      })
    },
  },
}
</script>