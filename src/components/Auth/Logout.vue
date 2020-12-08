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
  }),
  methods: {
    ...mapActions({
      signOut: 'auth/signOut',
    }),
  },
  created() {
    this.signOut().then((result) => {
      console.log(result);
      this.$router.push('/all');
    });
  },
};
/* eslint-disable eol-last */
</script>