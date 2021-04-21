<template>
  <div class="h-full flex flex-col p-5 w-full">
    <div class="flex items-center justify-between mb-3">
      <div class="flex items-center ml-3">
        <span class="text-s tracking-widest font-bold title-font">Group {{ group.id }}</span>
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
            v-tooltip="this.manage ? 'Code' : 'Manage'"
            class="shadow-xl mr-3"
            round small
            type="warning"
            icon
            @click="toggleManageMode">
            <v-mdi :name="this.manage ? 'mdi-code-tags' : 'mdi-cogs'"></v-mdi>
          </button-ui>
        </div>
      </div>
    </div>
    <div class="h-full flex flex-col">
      <template v-if="manage">
        <group-manage :group="group"></group-manage>
      </template>
      <template v-else>
        <code-editor-component v-if="showCode"
          :files="files" @updatedCode="updatedCode"
        ></code-editor-component>
        <code-preview-component ref="preview" :class="{ 'h-full': !showCode }" v-bind:html="files[0].content" v-bind:css="files[1].content" v-bind:js="files[2].content"></code-preview-component>
      </template>
    </div>
  </div>
</template>

<script>
import GroupManage from '@/views/snippets/group/GroupManage.vue';
import CodeEditorComponent from '@/components/Layout/Snippets/CodeEditorComponent.vue';
import CodePreviewComponent from '@/components/Layout/Snippets/CodePreviewComponent.vue';

export default {
  name: 'GroupEdit',
  components: {
    GroupManage, CodeEditorComponent, CodePreviewComponent,
  },
  data() {
    return {
      group: {
        id: 'ez97dze',
        isVisible: false,
        isLocked: true,
        teammates: [
          {
            id: 'dn82DNf', username: 'arty3p', email: 'arty3p@gmail.com',
          },
          {
            id: '987eifz', username: 'STP', email: 'stp@gmail.com',
          },
          {
            id: '0cnejf92', username: 'Miki', email: 'miki@gmail.com',
          },
        ],
      },
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
      manage: false,
      showCode: true,
      jsUrl: '',
      cssUrl: '',
    };
  },
  methods: {
    toggleDisplayCode() {
      this.showCode = !this.showCode;
    },
    toggleManageMode() {
      this.manage = !this.manage;
    },
    getBlobURL(code, type) {
      const blob = new Blob([code], { type });
      return URL.createObjectURL(blob);
    },
    updatedCode(e) {
      if (e.filemode === 'text/html') {
        this.files[0].content = e.filecontent;
      }
      if (e.filemode === 'text/css') {
        this.files[1].content = e.filecontent;
        this.cssUrl = this.getBlobURL(e.filecontent, e.filemode);
      }
      if (e.filemode === 'text/javascript') {
        this.files[2].content = e.filecontent;
        this.jsUrl = this.getBlobURL(e.filecontent, e.filemode);
      }
    },
  },
  mounted() {
    this.group.id = this.$route.params.idGroup;
    this.manage = false;
  },
  watch: {
    $route(to) {
      this.group.id = to.params.idGroup;
      this.manage = false;
    },
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
