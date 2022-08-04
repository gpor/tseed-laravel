<template>
  <div class="login-modal">
    <h3>Login</h3>
    <form class="form">
      <label class="-field">
        <input
          v-model="vals.email"
          type="email"
          placeholder="Email address"
        />
        <p class="-label">Email address</p>
        <p class="-err">{{ errs.email }}</p>
      </label>
      <label
        v-if="registering"
        class="-field"
      >
        <input
          v-model="vals.name"
          type="text"
          placeholder="Name"
        />
        <p class="-label">Name</p>
        <p class="-err">{{ errs.name }}</p>
      </label>
      <label class="-field">
        <input
          v-model="vals.password"
          type="password"
          placeholder="Password"
        />
        <p class="-label">Password</p>
        <p class="-err">{{ errs.password }}</p>
      </label>
      <label
        v-if="registering"
        class="-field"
      >
        <input
          v-model="vals.password_confirmation"
          type="password"
          placeholder="Password Confirmation"
        />
        <p class="-label">Password Confirmation</p>
        <p class="-err">{{ errs.password_confirmation }}</p>
      </label>
      <div class="-actions">
        <button>{{ registering ? 'Register' : 'Login' }}</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'LoginModal',
  props: {
    registeringInit: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      registering: this.registeringInit,
      vals: {
        email: '',
        name: '',
        password: '',
        password_confirmation: '',
      },
      errs: {
        email: '',
        name: '',
        password: '',
        password_confirmation: '',
      },
    }
  },
}
</script>
