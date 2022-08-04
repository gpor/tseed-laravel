<template>
  <div class="login-modal">
    <h1>Login</h1>
  </div>
</template>

<script>

export default {
  name: 'LoginModal',
  props: {
    confirmCallback: {
      type: Function,
      required: true,
    },
  },
}
</script>