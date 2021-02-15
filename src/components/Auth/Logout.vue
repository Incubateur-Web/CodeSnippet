<template>
    <div>
        Redirect
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    logged: false,
    windowSize: 0,
  }),
  methods: {
    ...mapActions({
      signOut: 'auth/signOut',
    }),
  },
  created() {
    this.signOut().then(() => {
      this.$router.push('/');
    });
  },
};
/* eslint-disable eol-last */
</script>
