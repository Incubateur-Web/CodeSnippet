<template>
  <div style="width: 100%">
    <side-menu-admin></side-menu-admin>
    <router-view />
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import SideMenuAdmin from '~/components/Layout/SideMenuAdmin.vue';

export default {
  components: {
    SideMenuAdmin,
  },
  name: 'Admin',
  data: () => ({
    windowSize: 0,
  }),
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

<style scoped>

</style>
