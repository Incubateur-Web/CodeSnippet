<template>
  <div>
    <div id="app" class="h-screen flex flex-wrap" v-if="retrieved">
      <!-- Barre principale de navigation -->
      <BaseNavBar />
      <main class="bg-card flex-auto overflow-auto content">
        <router-view />
      </main>
      <Footer />
      <!-- Modal (?) -->
      <modal-ui></modal-ui>
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex';
// import SideMenu from '~/components/Layout/SideMenu.vue';
// import MobileMenu from '~/components/Layout/MobileMenu.vue';
// import Files from '~/components/Layout/Files.vue';
import Footer from '~/components/Layout/Footer.vue';

import BaseNavBar from '~/components/Base/BaseNavBar.vue';

export default {
  components: {
    BaseNavBar, Footer,
  },
  data: () => ({
    retrieved: false,
    windowSize: 0,
  }),
  created() {
    this.$store.dispatch('retrieve').then(({ dark }) => {
      // this.$router.push('/all');
      this.$dark(dark);
      this.retrieved = true;
      // console.log(this.$store.state);
    });
  },
  computed: {
    mobileMenu() {
      return this.$store.state.mobileMenu;
    },
    logged() {
      return Boolean(this.$store.state.auth.logged);
    },
  },
  methods: {
    ...mapActions({
      verifyToken: 'auth/verifyToken',
    }),
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

<style scoped lang="scss">
.content {
  height: calc(100vh - 4rem);
}
</style>
