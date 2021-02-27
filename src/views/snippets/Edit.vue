<template>
  <div class="h-full flex flex-col">
    <h2 class="text-s tracking-widest font-bold title-font mb-3">
      <v-mdi name="mdi-file-edit-outline" class="mr-3 mb-1" height="30" width="35"></v-mdi>
      Snippet Name
    </h2>
    <div class="h-full flex flex-col">
      <div id="editing" class="shadow w-full bg-card mb-4 flex flex-col">
        <div id="files" class="w-full flex items-center shadow">
          <div class="tab-file tab-html px-8 py-2 cursor-pointer"
               :class="{ 'active': selectedTab === 'html' }"
            @click="selectEditingTab('html')">
            <span class="flex items-center">
              <v-mdi name="mdi-language-html5" id="icon-html" class="mr-2" height="22" width="22"></v-mdi>
              <span>HTML</span>
            </span>
          </div>
          <div class="tab-file tab-css px-8 py-2 cursor-pointer"
               :class="{ 'active': selectedTab === 'css' }"
               @click="selectEditingTab('css')">
            <span class="flex items-center">
              <v-mdi name="mdi-language-css3" id="icon-css" class="mr-2" height="18" width="20"></v-mdi>
              CSS
            </span>
          </div>
          <div class="tab-file tab-js px-8 py-2 cursor-pointer"
               :class="{ 'active': selectedTab === 'js' }"
               @click="selectEditingTab('js')">
            <span class="flex items-center">
              <v-mdi name="mdi-language-javascript" id="icon-js" class="mr-2" height="22" width="22"></v-mdi>
              JavaScript
            </span>
          </div>
        </div>
        <div id="code" class="h-full">
          <div class="tab-code h-full"
               :class="{ 'active': selectedTab === selectedFile.code }">
            <div class="h-full flex flex-col justify-between">
              <vue-codemirror
                @cursorPosition="cursor = $event"
                :file="selectedFile"
                class="flex-auto overflow-y-auto px-4"></vue-codemirror>
              <div class="flex items-center py-1 pb-2 px-6 text-sm">
                <p>{{ getMimeName(selectedFile.mode) }}</p>
                <div class="flex-grow"></div>
                <span>
                  Line {{ cursor.line + 1 }}, Column {{ cursor.column + 1 }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="preview" class="shadow w-full bg-card">
        <div class="h-full flex items-center justify-center">
          <h2 class="uppercase font-bold">preview</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueCodemirror from '@/components/Pages/Home/VueCodemirror.vue';

export default {
  name: 'Edit Snippet',
  components: {
    VueCodemirror,
  },
  data() {
    return {
      selectedTab: 'css',
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
      files: [
        {
          id: 'fi76dhuz5',
          mode: 'text/html',
          code: 'html',
          content: '<div class="flex">\n   <h1>coucou</h1>\n</div>',
        },
        {
          id: 'dl029djif2',
          mode: 'text/css',
          code: 'css',
          content: '.snippet {\n   color: blue;\n   font-size: 16px;\n}',
        },
        {
          id: 'd989fnkz8',
          mode: 'text/javascript',
          code: 'js',
          content: 'let desserts = ["tarte", "crêpe", "yaourt"]\ndesserts.map((dessert, key) => {\n  console.log(dessert)\n})',
        },
      ],
      isFileActive: true,
    };
  },
  mounted() {
  },
  methods: {
    selectEditingTab(tab) {
      this.selectedTab = tab;
    },
    getMimeName(mime) {
      return this.modes.find((mode) => mode.mime === mime).name;
    },
  },
  computed: {
    selectedFile() {
      return this.files.filter((file) => file.code === this.selectedTab)[0];
    },
  },
};
</script>

<style scoped lang="scss">
#editing, #preview, #editing-2 {
  height: 48%;
}

#editing {
  #files {
    .tab-file {
      border-bottom: 2px solid transparent;
      color: var(--text-light);
      transition: all .3s;
      &.tab-html {
        #icon-html {
          color: #d45632;
        }
        &.active {
          border-color: #d45632;
        }
      }
      &.tab-css {
        #icon-css {
          color: #2652dc;
        }
        &.active {
          border-color: #2652dc;
        }
      }
      &.tab-js {
        #icon-js {
          color: #f0db4f;
        }
        &.active {
          border-color: #f0db4f;
        }
      }
      &.active {
        color: var(--text-white);
        background-color: var(--bg-input);
      }
    }
  }
  #code {
    .tab-code {
      display: none;
      &.active {
        display: block;
      }
    }
  }
}
</style>
