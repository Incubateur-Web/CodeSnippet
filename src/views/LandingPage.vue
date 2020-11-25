<template>
 <div class="flex justify-center w-full items-center">
    <div class="w-full max-w-xs">
      <form class="shadow-md rounded
      px-10 pt-6 pb-8 mb-4 bg-purple-600">
        <div class="mb-4">
          <label class="block text-purple-700 text-sm font-bold mb-2" for="lastname">
            Nom
          </label>
          <input class="shadow appearance-none border rounded
          w-full py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username" type="text" placeholder="Nom">
        </div>
        <div class="mb-4">
          <label class="block text-purple-700 text-sm font-bold mb-2" for="name">
            Prénom
          </label>
          <input class="shadow appearance-none border rounded
          w-full py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username" type="text" placeholder="Prénom">
        </div>
        <div class="mb-4">
          <label class="block text-purple-700 text-sm font-bold mb-2" for="username">
            Nom D'utilisateur
          </label>
          <input class="shadow appearance-none border rounded
          w-full py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username" type="text" placeholder="Nom D'Utilisateur">
        </div>
        <div class="mb-6">
          <label class="block text-purple-700 text-sm font-bold mb-2" for="password">
            Mot de passe
          </label>
          <input class="shadow appearance-none border rounded w-full py-2
          px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password" type="password" placeholder="Mot de passe">
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-purple-500 hover:bg-blue-700 text-white
          font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
          <a class='
            inline-block
            align-baseline
            font-bold
            text-sm text-purple-500
            hover:text-blue-800'
          href="#">
            Identifiants oubliés ?
          </a>
        </div>
      </form>
    </div>
  </div>
</template>
<script>

export default {
  data: () => ({
    retrieved: false,
    windowSize: 0,
    counter: 0,
  }),
  created() {
    this.$store.dispatch('retrieve').then(({ dark }) => {
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
    counnt() {
      this.counter += 1;
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
