<template>
  <div class="flex" style="width: 100%">
    <!-- Menu mobile -->
    <mobile-menu v-if="mobileMenu && windowSize <= 1024"></mobile-menu>
    <!-- Side menu -->
    <div v-if="windowSize > 1024" class="hidden lg:flex">
      <side-menu class="inline-block"></side-menu>
      <!-- <files class="inline-block bg-lighter"></files> -->
    </div>
    <!-- Contenu principal -->
    <main class="bg-lighter flex-auto overflow-auto">
      <div class="home flex h-full flex-col p-5">
        <!--Contenu partie droite -->
        <router-view />
      </div>
    </main>
  </div>

</template>

<script>
import SideMenu from '~/components/Layout/SideMenu.vue';
import MobileMenu from '~/components/Layout/MobileMenu.vue';
// import Files from '~/components/Layout/Files.vue';
// import VueCodemirror from '~/components/Pages/Home/VueCodemirror.vue';

export default {
  components: {
    SideMenu, MobileMenu,
    // VueCodemirror,
    // Files,
  },
  name: 'Snippets',
  data: () => ({
    retrieved: false,
    windowSize: 0,
    modes: [
      { name: 'HTML', mime: 'text/html' },
      { name: 'CSS', mime: 'text/css' },
      { name: 'JavaScript', mime: 'text/javascript' },
      { name: 'Vue.js', mime: 'text/x-vue' },
    ],
    cursor: {
      line: 1,
      column: 1,
    },
  }),
  methods: {
    resizeHandler() {
      this.windowSize = window.innerWidth;
    },
    changeMode(mode) {
      this.$store.dispatch('files/update', {
        fileId: this.file.id,
        folderId: this.file.folderId,
        data: {
          mode,
        },
      });
    },
    getMimeName(mime) {
      return this.modes.find((mode) => mode.mime === mime).name;
    },
  },
  computed: {
    mobileMenu() {
      return this.$store.state.mobileMenu;
    },
    isFileActive() {
      return this.$store.state.activeFile !== '';
    },
    file() {
      return this.$store.getters['files/activeFile'];
    },
  },
  created() {
    this.$store.dispatch('retrieve').then(({ dark }) => {
      // this.$router.push('/all');
      this.$dark(dark);
      this.retrieved = true;
    });
  },
  mounted() {
    this.resizeHandler();
    window.addEventListener('resize', this.resizeHandler);
    // const { CodeMirror } = document.querySelector('.CodeMirror');
  },
};
</script>
