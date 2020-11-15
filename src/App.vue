<template>
  <div>
    <div id="app" class="h-screen flex flex-wrap" v-if="retrieved">
      <div class="flex justify-between w-full bg-card p-3">
        <router-link to="/all" >CodeSnippet</router-link>
        <div>
          <router-link :to="{name : 'Login'}" class="mx-4">
              <button icon small class="px-1">
                <v-mdi name="mdi-account-key" class="mr-1"></v-mdi>
                Log In
              </button>
          </router-link>
          <router-link :to="{name : 'Register'}" class="mx-4">
            <button icon small class="px-1">
              <v-mdi name="mdi-account-plus" class="mr-1"></v-mdi>
              Register
            </button>
          </router-link>
        </div>
      </div>
      <mobile-menu v-if="mobileMenu && windowSize <= 1024"></mobile-menu>
      <div v-if="windowSize > 1024" class="hidden lg:flex">
        <side-menu class="inline-block"></side-menu>
        <files class="inline-block bg-lighter"></files>
      </div>
      <main class="bg-card flex-auto overflow-auto">
        <router-view/>
      </main>
      <modal-ui></modal-ui>
    </div>
  </div>
</template>
<script>
import SideMenu from '~/components/Layout/SideMenu.vue';
import MobileMenu from '~/components/Layout/MobileMenu.vue';
import Files from '~/components/Layout/Files.vue';

export default {
  components: { SideMenu, Files, MobileMenu },
  data: () => ({
    retrieved: false,
    loggedIn: false,
    windowSize: 0,
  }),
  created() {
    this.$store.dispatch('retrieve').then(({ dark }) => {
      this.$router.push('/all');
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
