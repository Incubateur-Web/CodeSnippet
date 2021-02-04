<template>
  <div class="flex" style="width: 100%">
    <mobile-menu v-if="mobileMenu && windowSize <= 1024"></mobile-menu>
    <div v-if="windowSize > 1024" class="hidden lg:flex">
      <side-menu class="inline-block"></side-menu>
      <files class="inline-block bg-lighter"></files>
    </div>
    <main class="bg-card flex-auto overflow-auto">
      <div
        class="home flex h-full flex-col">
        <div class="pt-3 lg:pt-6 pb-3 px-6 pl-10">
          <home-header
            :file="file"
            :hide="!isFileActive"></home-header>
        </div>
        <template v-if="isFileActive">
          <div class="flex relative w-full overflow-hidden pt-2" style="min-height: 125px;">
            <div class="editor-resizer"></div>
            <vue-codemirror
              @cursorPosition="cursor = $event"
              :file="file"
              class="flex-auto overflow-y-auto"></vue-codemirror>
            <div class="editor-resizer"></div>
            <vue-codemirror
              @cursorPosition="cursor = $event"
              :file="file"
              class="flex-auto overflow-y-auto"></vue-codemirror>
            <div class="editor-resizer"></div>
            <vue-codemirror
              @cursorPosition="cursor = $event"
              :file="file"
              class="flex-auto overflow-y-auto"></vue-codemirror>
          </div>
          <div class="resizer w-full"></div>
          <div class="preview h-full px-3"></div>
          <!--<div class="flex items-center py-1 pb-2 px-6 text-sm">
            <v-popover placement="top-end">
              <p class="cursor-pointer">{{ getMimeName(file.mode) }}</p>
              <card-ui class="shadow-xl border" slot="popover">
                <list-ui
                  v-for="mode in modes"
                  :key="mode.mime"
                  :active="mode.mime === file.mode"
                  class="mb-2"
                  v-close-popover
                  @click="changeMode(mode.mime)">{{ mode.name }}</list-ui>
              </card-ui>
            </v-popover>
            <div class="flex-grow"></div>
            <span>
                Line {{ cursor.line + 1 }}, Column {{ cursor.column + 1 }}
              </span>
          </div>-->
        </template>
        <template v-else>
          <empty-state-ui
            class="mt-10"
            icon="mdi-file"
            title="Select snippet to view content">
          </empty-state-ui>
        </template>
      </div>
    </main>
  </div>

</template>

<script>
import SideMenu from '~/components/Layout/SideMenu.vue';
import MobileMenu from '~/components/Layout/MobileMenu.vue';
import Files from '~/components/Layout/Files.vue';
import HomeHeader from '~/components/Pages/Home/Header.vue';
import VueCodemirror from '~/components/Pages/Home/VueCodemirror.vue';

export default {
  components: {
    SideMenu, Files, MobileMenu, HomeHeader, VueCodemirror,
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

<style lang="scss" scoped>
.editor-resizer {
  width: 17px;
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.04);
  cursor: col-resize;
}
.resizer {
  height: 17px;
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.04);
  cursor: row-resize;
}
.preview {
}
</style>
