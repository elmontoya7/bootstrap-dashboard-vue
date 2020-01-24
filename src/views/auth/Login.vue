<template lang="pug">
  .login-container.d-flex.align-items-center
    b-container
      b-row
        b-col(md="6", offset-md="3")
          b-card(no-body)
            b-card-header
              h4.mb-0 Login
              p.mb-0 Use your email or username to login
            b-card-body
              b-form(@submit.prevent="login")
                b-form-group(label="Username")
                  b-form-input(placeholder="Username", v-model="form.username", autocomplete="off")
                b-form-group(label="Password")
                  b-form-input(placeholder="Password", v-model="form.password", type="password", autocomplete="off")
                b-form-group.mb-0
                  b-button.px-4(variant="primary", block, type="submit") Login
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      console.log('do login!');
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-container {
    min-height: 100%;
    width: 100%;
  }
</style>
