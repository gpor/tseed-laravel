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
        v-if="$root.auth.loggedIn"
        class="show-account"
      >
        <p>{{ $root.auth.user.name }}</p>
        <p
          @click="$root.auth.logout()"
        >
          Logout
        </p>
      </div>
      <div
        v-else
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
      this.$root.pageModalSml.login(registering, this.$root.auth)
    },
  },
}
</script>
