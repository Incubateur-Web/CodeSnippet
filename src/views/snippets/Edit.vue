<template>
  <div class="h-full flex flex-col">
    <h2 class="text-s tracking-widest font-bold title-font mb-3">
      <v-mdi name="mdi-file-edit-outline" class="mr-3 mb-1" height="30" width="35"></v-mdi>
      Snippet Name
    </h2>
    <div class="h-full flex flex-col">
      <code-editor-component
        :files="files"
      ></code-editor-component>
      <code-preview-component></code-preview-component>
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
    };
  },
  mounted() {
  },
};
</script>

<style scoped lang="scss">
::v-deep {
  #editing, #preview {
    height: 48%;
  }
}
</style>
