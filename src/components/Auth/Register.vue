<template>
  <div class="login-form">
    <h2 class="login-heading">Register</h2>
    <form action="#" @submit.prevent="register">

      <div class="form-control">
        <label for="login">Login</label>
        <input type="text" name="login" id="login" class="login-input" v-model="login">
      </div>

      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" class="login-input" v-model="email">
      </div>

      <div class="form-control mb-more">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" class="login-input" v-model="password">
      </div>

      <div class="form-control">
        <button type="submit" class="btn-submit">Create Account</button>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: '',
      email: '',
      password: '',
    };
  },
  methods: {
    register() {
      this.$store.dispatch('register', {
        login: this.login,
        email: this.email,
        password: this.password,
      })
        .then((response) => {
          this.$router.push({ name: 'login' });
          console.log(response);
        });
    },
  },
};
/* eslint-disable eol-last */
</script>