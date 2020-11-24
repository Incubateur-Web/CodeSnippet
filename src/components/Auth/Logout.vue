<template>
    <div>
        Redirect
    </div>
</template>

<script>

export default {

  data: () => ({
    loggedIn: false,
    windowSize: 0,
    username: '',
  }),
  created() {
    localStorage.removeItem('token');
    localStorage.setItem('isLogged', false);
    this.$store.commit('changeState', {
      key: 'token',
      data: '',
    });
    this.$store.commit('changeState', {
      key: 'guest',
      data: true,
    });
    this.$router.push('/all');
  },
};
/* eslint-disable eol-last */
</script>