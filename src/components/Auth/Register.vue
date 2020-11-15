<template>
  <v-container>
    <v-form>
      <!-- eslint-disable-next-line -->
      <v-text-field label="password" type="password" />
    </v-form>
  </v-container>
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