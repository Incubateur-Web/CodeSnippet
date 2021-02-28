<template>
  <div id="navBar">
    <nav class="h-16 bg-dark text-default flex items-center shadow">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
          <!-- LOGO -->
          <div class="flex items-center">
            <router-link :to="{ name: 'Home' }" class="flex flex-no-shrink items-center py-3 text-grey-darkest logo-container">
                <img src="../../../public/LOGO-02.png" alt="CodeSnippet"
                    class="
                        rounded-full
                        overflow-hidden
                        w-10 h-10
                        logo-img
                    "
                />
            </router-link>
            <router-link class="py-5" v-if="logged" :to="{ name: 'Home' }">
                <button-ui>
                  <!-- <v-mdi name="mdi-account-circle-outline" size="20" class="mr-2"></v-mdi> -->
                  DASHBOARD
                </button-ui>
            </router-link>
          </div>
          <!-- LIENS DE NAVIGATION -->
          <div class="flex items-center">
            <!-- Not logged -->
            <div class="flex" v-if="!logged">
              <login />
              <register/>
            </div>
            <!-- End Not Logged -->

            <!-- Logged -->
            <div v-if="logged">
              <v-popover offset="16" class="mr-2">
                <button-ui icon
                  @click="openMobileMenu">
                    <v-mdi name="mdi-account-circle-outline" size="20" class="mr-2"></v-mdi>
                    <span class="h-full">{{ this.$store.state.auth.username }}</span>
                </button-ui>
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
            v-tooltip="{ content: 'Dark mode', placement: 'bottom' }">
              <v-mdi
              size="20"
              :name=" this.$store.state.dark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' "></v-mdi>
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
.light-theme .logo-img {
  filter: invert(70%);
}
</style>
