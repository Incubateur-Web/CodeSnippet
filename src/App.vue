<template>
  <div id="app" class="flex" v-if="retrieved">
    <router-view/>
    <modal-ui></modal-ui>
  </div>
</template>
<script>

export default {
  data: () => ({
    retrieved: false,
    windowSize: 0,
  }),
  created() {
    this.$store.dispatch('retrieve').then(({ dark }) => {
      // this.$router.push('/all');
      this.$dark(dark);
      this.retrieved = true;
    });
  },
  computed: {
    mobileMenu() {
      return this.$store.state.mobileMenu;
    },
  },
  methods: {
    resizeHandler() {
      this.windowSize = window.innerWidth;
    },
  },
  mounted() {
    this.resizeHandler();
    window.addEventListener('resize', this.resizeHandler);
  },
};
</script>
