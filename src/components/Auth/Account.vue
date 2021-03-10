<template>
  <div class="login-form">
    <div class="m-2 p-2 vue-heading flex items-center justify-center">
      <span class="mr-2">👋</span>
      <h2>Hello, {{this.$store.state.auth.username}}</h2>
    </div>
    <hr class="title-underline w-1/6 m-auto mb-10">
    <div class="m-2 p-2 flex items-center justify-center">
        <div class="vue-tempalte">
        <form>
            <div class="form-group">
                <label>Full Name</label> <br>
                <input type="text" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>Email address</label><br>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label><br>
                <input type="password" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Password</label><br>
                <input type="password" class="form-control form-control-lg" />
            </div>
        </form>
    </div>
  </div>
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
