<template>
    <div>
        Redirect
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {

  data: () => ({
    loggedIn: false,
    windowSize: 0,
    username: '',
  }),
  methods: {
    ...mapActions({
      signOut: 'auth/signOut',
    }),
  },
  created() {
    this.signOut().then((result) => {
      console.log(result);
      // this.$store.commit('changeState', {
      //   key: 'token',
      //   data: '',
      // });
      // this.$store.commit('changeState', {
      //   key: 'logged',
      //   data: true,
      // });
      // this.$router.push('/all');
      // localStorage.removeItem('token');
      // localStorage.setItem('isLogged', false);
    });
  },
};
/* eslint-disable eol-last */
</script>