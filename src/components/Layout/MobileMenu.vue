<template>
  <div class="bg-lighter p-6 overflow-auto fixed h-full w-full top-0 z-10">
    <div class="text-right">
      <button-ui icon @click="closeMenu">
        <mdicon name="close"></mdicon>
      </button-ui>
    </div>
    <p>Folders</p>
    <div class="folders flex flex-no-wrap overflow-x-auto py-5">
      <div
       @click="prompt('Folder', 'folders/insert')"
       class="border-2 mr-3 px-8 py-5 rounded-lg text-center">
        <mdicon name="plus" size="26"></mdicon>
        <p class="text-center">Add</p>
      </div>
      <card-ui
       class="mr-3"
       height="100px"
       style="min-width: 110px;"
       v-for="library in libraryList"
       :key="library.path"
       :class="{'border border-primary': library.path === $route.params.folderId}"
       @click="$router.push(`/${library.path}`)">
        <p class="capitalize">{{ library.name }}</p>
      </card-ui>
      <card-ui
       v-for="folder in folders"
       height="100px"
       class="mr-3"
       :class="{'border border-primary': folder.id === $route.params.folderId}"
       :key="folder.id">
        <router-link
         class="absolute w-full h-full z-10 left-0"
         :to="`/${folder.id}`"></router-link>
        <div class="flex items-center justify-between">
          <mdicon name="folder-outline"></mdicon>
          <div class="z-20">
            <mdicon
             size="20"
             @click="renameFolder(folder)"
             name="pencil"></mdicon>
            <mdicon
             size="20"
             @click="deleteFolder(folder)"
             name="delete-outline"
             class="ml-3 text-danger"></mdicon>
          </div>
        </div>
        <p class="mt-2 text-overflow">{{ folder.name }}</p>
      </card-ui>
    </div>
    <div class="flex mt-8 justify-between items-center">
      <input-ui
       placeholder="Search"
       v-model="search"
       icon="magnify"></input-ui>
       <div class="w-6/12 ml-6" align="right">
        <v-popover placement="left" class="inline-block">
          <button-ui icon>
            <mdicon name="label-outline"></mdicon>
          </button-ui>
          <card-ui class="shadow-xl border" slot="popover">
            <list-ui
             v-for="tag in tags"
             :key="tag.id"
             class="mb-2"
             :active="tag.id === $store.state.activeTag"
             @click="updateActiveTag(tag.id)">
              <p class="flex-auto">{{tag.name}}</p>
              <button-ui icon plain @click.stop="deleteTag(tag.id)">
                <mdicon
                 size="20"
                 name="delete-outline" class="text-danger"></mdicon>
              </button-ui>
            </list-ui>
          </card-ui>
        </v-popover>
        <button-ui
         icon type="primary"
         @click="addFile"
         v-if="showAddFileBtn"
         class="ml-3 shadow-xl">
          <mdicon name="plus"></mdicon>
        </button-ui>
      </div>
    </div>
    <div class="flex flex-wrap mt-6 justify-center">
      <file-card
       :active="activeFileId === file.id"
       class="mr-4 mb-4"
       v-for="file in filteredFiles"
       :key="file.id"
       :file="file"></file-card>
    </div>
  </div>
</template>
<script>
import SideMenu from '~/mixins/SideMenu';
import FileCard from './Files/FileCard.vue';
import file from '~/mixins/file';

export default {
  components: { FileCard },
  mixins: [SideMenu, file],
  methods: {
    closeMenu() {
      this.$store.commit('changeState', {
        key: 'mobileMenu',
        data: false,
      });
    },
  },
};
</script>
