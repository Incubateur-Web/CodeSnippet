<template>
  <div id="navBar">
    <nav class="h-16 text-white flex items-center shadow">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
          <!-- LOGO -->
          <div class="flex">
            <router-link to="/" class="flex flex-no-shrink items-center py-3 text-grey-darkest logo-container">
                <img src="../../../public/LOGO-02.png" alt="CodeSnippet"
                    class="
                        rounded-full
                        overflow-hidden
                        w-10 h-10
                        logo-img
                    "
                />
            </router-link>
          </div>
          <!-- LIENS DE NAVIGATION -->
          <div class="flex">
            <!-- Not logged -->
            <div class="flex" v-if="!logged">
              <login />
              <register/>
            </div>
            <!-- End Not Logged -->

            <!-- Logged -->
            <div v-if="logged">
              <v-popover offset="16" class="mr-2">
                <button icon small class="bg-white hover:bg-blue-500 focus:bg-blue-500 text-black hover:text-white focus:text-white py-1 px-4 rounded-full font-600"
                  @click="openMobileMenu">
                    <v-mdi name="mdi-account-circle-outline" class="mr-1"></v-mdi>
                    {{ this.$store.state.auth.username }}
                </button>
                <card-ui slot="popover" class="shadow-xl border">
                  <list-ui>
                    <router-link
                      :to="{ name: 'Account' }"
                      class="absolute h-full w-full left-0">
                    </router-link>
                    <v-mdi name="mdi-account-circle-outline" slot="prefix"></v-mdi>
                    My Account
                  </list-ui>
                  <list-ui class="mt-1">
                    <router-link
                      to="/admin"
                      class="absolute h-full w-full left-0">
                    </router-link>
                    <v-mdi name="mdi-account-cog-outline" slot="prefix"></v-mdi>
                    Admin View
                  </list-ui>
                  <list-ui>
                    <router-link
                      :to="{ name: 'Logout' }"
                      class="absolute h-full w-full left-0">
                    </router-link>
                      <v-mdi
                        name="mdi-logout-variant"
                        class="text-danger"
                        slot="prefix"></v-mdi>
                      Log Out
                  </list-ui>
                </card-ui>
              </v-popover>
            </div>
            <!-- End Logged -->
            <!-- Dark Mode -->
            <button-ui
            @click="darkMode"
            icon
            v-tooltip="{ content: 'Dark mode', placement: 'left' }">
              <v-mdi
              :class="{ 'text-primary': $store.state.dark }"
              size="20"
              name="mdi-moon-waning-crescent"></v-mdi>
            </button-ui>
          </div>
        </div>
      </div>
    </nav>
  </div>

</template>

<script>
import Login from '../Auth/Login.vue';
import Register from '../Auth/Register.vue';

export default {
  components: { Login, Register },
  name: 'BaseNavBar',
  data: () => ({
    isShowSignUp: false,
    dialog2: false,
  }),
  computed: {
    logged() {
      return Boolean(this.$store.state.auth.logged);
    },
  },
  methods: {
    openMobileMenu() {
      this.$store.commit('changeState', {
        key: 'mobileMenu',
        data: true,
      });
    },
    darkMode() {
      const currentTheme = !this.$store.state.dark;

      this.$store.commit('changeState', {
        key: 'dark',
        data: currentTheme,
      });
      this.$dark(currentTheme);
    },
  },
};
</script>

<style scoped>
nav {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
