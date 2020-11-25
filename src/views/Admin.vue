<template>
  <div class="flex" style="width: 100%">
    <div v-if="windowSize > 1024" class="hidden lg:flex">
      <side-menu-admin class="inline-block"></side-menu-admin>
    </div>
    <main class="bg-lighter flex-auto overflow-auto">
      <div
        class="home flex h-full flex-col">
        <admin-header :title="this.$route.name"></admin-header>
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import AdminHeader from '@/components/Pages/Home/HeaderAdmin';
import SideMenuAdmin from '~/components/Layout/SideMenuAdmin.vue';

export default {
  components: {
    SideMenuAdmin, AdminHeader,
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
