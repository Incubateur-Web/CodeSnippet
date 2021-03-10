<template>
  <div class="h-full flex flex-col">
    <div class="flex items-center justify-between mb-3">
      <div class="flex items-center">
        <v-mdi name="mdi-file-edit-outline" class="mr-3 mb-0" height="30" width="35"></v-mdi>
        <span class="text-s tracking-widest font-bold title-font">Snippet Name</span>
      </div>
      <div class="flex items-center">
        <div class="flex items-center" id="snippet-options">
          <button-ui
            v-tooltip="showCode ? 'Hide code' : 'Show code'"
            class="shadow-xl mr-3"
            round small
            type="primary"
            icon
            @click="toggleDisplayCode">
            <v-mdi :name="showCode ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"></v-mdi>
          </button-ui>
          <button-ui
            v-tooltip="'Open preview in new tab'"
            class="shadow-xl"
            round small
            type="primary"
            icon>
            <v-mdi name="mdi-open-in-new"></v-mdi>
          </button-ui>
        </div>
        <div class="separator mx-5"></div>
        <div class="flex items-center" id="snippet-actions">
          <button-ui
            v-tooltip="'Rename'"
            class="shadow-xl mr-3"
            round small
            type="warning"
            icon>
            <v-mdi name="mdi-pencil-outline"></v-mdi>
          </button-ui>
          <button-ui
            v-tooltip="'Delete'"
            class="shadow-xl"
            round small
            type="danger"
            icon>
            <v-mdi name="mdi-delete-outline"></v-mdi>
          </button-ui>
        </div>
      </div>
    </div>
    <div class="h-full flex flex-col">
      <code-editor-component v-if="showCode"
        :files="files"
      ></code-editor-component>
      <code-preview-component :class="{ 'h-full': !showCode }"></code-preview-component>
    </div>
  </div>
</template>

<script>
import CodeEditorComponent from '@/components/Layout/Snippets/CodeEditorComponent.vue';
import CodePreviewComponent from '@/components/Layout/Snippets/CodePreviewComponent.vue';

export default {
  name: 'Edit Snippet',
  components: {
    CodeEditorComponent, CodePreviewComponent,
  },
  data() {
    return {
      files: [
        {
          id: 'fi76dhuz5',
          mode: 'text/html',
          code: 'html',
          content: '<div class="flex">\n  <h1>coucou</h1>\n</div>',
        },
        {
          id: 'dl029djif2',
          mode: 'text/css',
          code: 'css',
          content: '.snippet {\n  color: blue;\n  font-size: 16px;\n}',
        },
        {
          id: 'd989fnkz8',
          mode: 'text/javascript',
          code: 'js',
          content: 'let desserts = ["tarte", "crêpe", "yaourt"]\ndesserts.map((dessert, key) => {\n  console.log(dessert)\n})',
        },
      ],
      showCode: true,
    };
  },
  methods: {
    toggleDisplayCode() {
      this.showCode = !this.showCode;
    },
  },
  mounted() {
  },
};
</script>

<style scoped lang="scss">
::v-deep {
  #editing, #preview {
    height: 48%;
    &.h-full {
      height: 100% !important;
    }
  }
}

.separator {
  width: 1px;
  background-color: var(--text-light);
  height: 17.5px;
}
</style>
