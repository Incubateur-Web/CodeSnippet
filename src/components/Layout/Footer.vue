<template>
  <div id="footer" class="w-full bg-dark">
    <div class="container px-40 py-10 flex">
        <!-- Col-1 -->
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <!-- Col Title -->
            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
                DISCOVER CODESNIPPET
            </div>
            <!-- Links -->
            <router-link class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" :to="{ name: 'About' }">
                Homepage
            </router-link>
            <router-link class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" :to="{ name: 'All Snippets' }">
                Snippets
            </router-link>
            <router-link class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" :to="{ name: 'Account' }">
                Account
            </router-link>
        </div>
        <!-- Col-1 -->
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <!-- Col Title -->
            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
                BEHIND THE SCENE
            </div>
            <!-- Links -->
            <router-link class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" :to="{ name: 'About' }">
                The team
            </router-link>
            <a class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" target='_blank' href="https://github.com/Incubateur-Web/CodeSnippet">
                Github repo
            </a>
            <router-link class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" :to="{ name: 'About' }">
                Feedback
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'footer',
  data: () => ({
  }),
  computed: {
    logged() {
      return Boolean(this.$store.state.auth.logged);
    },
  },
  methods: {
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
