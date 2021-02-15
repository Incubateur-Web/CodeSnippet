<template>
  <div id="navBar">
    <nav class="h-16 text-white flex items-center shadow">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
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
          <div class="flex">
            <!-- Not logged -->
            <div class="flex" v-if="!logged">
              <login />
              <register/>
            </div>
            <!-- End Not Logged -->
            <!-- Logged -->
            <div v-if="logged">
              <router-link :to="{ name: 'Account' }" class="mx-2">
                <button icon small class="bg-white hover:bg-blue-500 text-black py-1 px-4 rounded-full">
                  <v-mdi name="mdi-account-circle-outline" class="mr-1"></v-mdi>
                  {{ this.$store.state.auth.username }}
                </button>
              </router-link>
              <router-link :to="{ name: 'Logout' }" class="mx-2">
                <button icon small class="bg-none hover:bg-blue-500 text-white py-1 px-4 rounded-full">
                  <v-mdi name="mdi-account-arrow-right-outline" class="mr-1"></v-mdi>
                  Log Out
                </button>
              </router-link>
            </div>
            <!-- End Logged -->
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
};
</script>

<style scoped>
nav {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
