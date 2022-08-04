<template>
  <div class="login-modal">
    <h3>{{ registering ? 'Register' : 'Login' }}</h3>
    <form
      class="form"
      @submit.prevent="submit"
    >
      <label
        v-for="(field, i) in auth.loginForm.fieldsFor(registering)"
        :key="field.name"
        class="-field"
        :class="{'-has-err': field.err.length}"
      >
        <input
          v-model="field.val"
          :type="field.type"
          :placeholder="field.label"
          @blur="auth.checkFilled({registering, i})"
        />
        <p class="-label">{{ field.label }}</p>
        <p class="-err">{{ field.err }}</p>
      </label>
      <p class="-general-error">
        {{ auth.loginForm.generalError }}
      </p>
      <div class="-actions">
        <button>
          {{ registering ? 'Register' : 'Login' }}
        </button>
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
    auth: {
      type: Object,
      required: true,
    },
    success: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      registering: this.registeringInit,
    }
  },
  methods: {
    submit() {
      console.log('submit')
      const processing = this.auth.submit(this.registering, () => {
        console.log('success')
        this.success()
      })
      console.log('processing', processing)
    },
  },
}
</script>
