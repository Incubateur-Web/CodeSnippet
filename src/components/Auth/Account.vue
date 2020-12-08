<template>
  <div class="login-form">
    <div class="m-2 p-2 vue-heading flex items-center justify-center">
      <v-mdi name="mdi-account-key" height="36" width="36" class="mr-3"></v-mdi>
      <h2>Hello, {{this.$store.state.auth.username}}</h2>
    </div>
    <hr class="title-underline w-1/6 m-auto mb-10">
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  created() {
    console.log(this.$store.state.auth);
  },
  computed: {
    mobileMenu() {
      return this.$store.state.mobileMenu;
    },
    loggedIn() {
      return this.$store.state.logged;
    },
    ...mapState({
      logged: 'logged',
      token: 'token',
      username: 'username',
    }),
  },
  methods: {
    ...mapActions({
      verifyToken: 'auth/verifyToken',
    }),
  },
  mounted() {
    if (this.$store.state.auth.token) {
      this.verifyToken(this.$store.state.auth.token).then((result) => {
        if (result.isSigned) {
          console.log('L\'utilisateur est connecté et le token est vérifié');
        } else {
          console.log('L\'utilisateur est connecté mais le token est erroné');
        }
      });
    }
  },
};
/* eslint-disable eol-last */
</script>