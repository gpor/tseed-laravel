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
      >
        <p
          @click="showLoginModal(false)"
        >
          Login
        </p>
        <p
          @click="showLoginModal(true)"
        >
          Register
        </p>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'PageHeader',
  methods: {
    showLoginModal(registering) {
      this.$root.pageModalSml.login(registering)
    },
  },
}
</script>
