<template>
  <div class="login-form">
    <div class="m-2 p-2 vue-heading flex items-center justify-center">
      <span class="mr-2">👋</span>
      <h2>Hello, {{this.$store.state.auth.username}}</h2>
    </div>
    <hr class="title-underline w-1/6 m-auto mb-10">
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  created() {
  },
  computed: {
    mobileMenu() {
      return this.$store.state.mobileMenu;
    },
    logged() {
      return this.$store.state.logged;
    },
    ...mapState({
      logged: true,
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
  },
};
/* eslint-disable eol-last */
</script>