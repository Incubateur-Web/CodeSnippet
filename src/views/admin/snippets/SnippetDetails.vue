<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-5">
    <div class="px-4 py-3 sm:px-6">
      <div class="flex items-center justify-between">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {{ file.title }}
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          {{ file.id }}
        </p>
      </div>
    </div>
    <div class="border-t border-gray-200 py-3">
      <vue-codemirror
        @cursorPosition="cursor = $event"
        :file="file"
        class="flex-auto overflow-y-auto px-4">
      </vue-codemirror>
      <div class="flex items-center py-1 pb-2 px-6 text-sm">
        <v-popover placement="top-end">
          <p class="cursor-pointer">{{ getMimeName(file.mode) }}</p>
          <card-ui class="shadow-xl border" slot="popover">
            <list-ui
              v-for="mode in modes"
              :key="mode.mime"
              :active="mode.mime === file.mode"
              class="mb-2"
              v-close-popover>
              {{ mode.name }}
            </list-ui>
          </card-ui>
        </v-popover>
        <div class="flex-grow"></div>
        <span>
         Line {{ cursor.line + 1 }}, Column {{ cursor.column + 1 }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import VueCodemirror from '~/components/Pages/Home/VueCodemirror.vue';

export default {
  name: 'SnippetDetails',
  components: { VueCodemirror },
  data: () => ({
    file: {
      id: '5fa455da0c077f24c0e5ef99',
      content: "console.log('alicization')",
      createDate: 1604328049375,
      folderId: 'buW4-kg1f',
      mode: 'text/javascript',
      star: true,
      tags: [],
      title: 'index.js',
    },
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
    getMimeName(mime) {
      return this.modes.find((mode) => mode.mime === mime).name;
    },
  },
};
</script>

<style scoped>

</style>
