<template>
  <div class="login-form">
    <div class="m-2 p-2 vue-heading flex items-center justify-center">
      <v-mdi name="mdi-account-key" height="36" width="36" class="mr-3"></v-mdi>
      <h2>Hello, {{username}}</h2>
    </div>
    <hr class="title-underline w-1/6 m-auto mb-10">
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  created() {
    this.$store.dispatch('retrieve').then(({ guest }) => {
      console.log(guest);
    });
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
    /*
    this.$store.dispatch('retrieve').then(({ token }) => {
      if (token) {
        this.verifyToken(token).then((data) => {
          if (data.verified) {
            this.username = data.verified.username;
            this.$store.commit('changeState', {
              key: 'guest',
              data: false,
            });
            localStorage.setItem('isLogged', true);
          } else {
            this.$store.commit('changeState', {
              key: 'guest',
              data: true,
            });
            localStorage.setItem('isLogged', false);
          }
        });
      }
    });
    */
  },
};
/* eslint-disable eol-last */
</script>