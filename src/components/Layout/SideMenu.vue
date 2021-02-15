<template>
  <nav
    class="h-full bg-card py-6">
    <simplebar class="h-full px-4">
      <div class="create-snippet-container">
        <router-link :to="{ name: 'Snippets' }">
          <div class="py-2 flex items-center justify-center">
            <v-mdi name="mdi-plus-circle-outline" class="mr-2"></v-mdi>
            <span class="font-bold">Nouveau Snippet</span>
          </div>
        </router-link>
      </div>
      <div class="divider"></div>
      <div class="mt-8">
        <div id="individuals" class="mb-5">
          <div class="flex items-center justify-between">
            <span class="align-middle title font-bold">Individuals</span>
          </div>
          <div class="folder-list mt-2">
            <list-ui
              class="mb-2"
              v-for="folder in folders"
              :key="folder.id"
              :active="$route.params.folderId === folder.id">
              <router-link
                class="absolute h-full w-full left-0"
                :to="`/snippets/${folder.id}`"></router-link>
              <p class="text-overflow flex-auto">{{ folder.name }}</p>
              <v-popover style="display: flex;">
                <button class="btn-action">
                  <v-mdi name="mdi-dots-vertical"></v-mdi>
                </button>
                <card-ui slot="popover" class="shadow-xl border">
                  <list-ui @click="renameFolder(folder)">
                    <v-mdi name="mdi-pencil" slot="prefix"></v-mdi>
                    Rename
                  </list-ui>
                  <list-ui class="mt-1" @click="deleteFolder(folder)">
                    <v-mdi
                      name="mdi-delete-outline"
                      class="text-danger"
                      slot="prefix"></v-mdi>
                    Delete
                  </list-ui>
                </card-ui>
              </v-popover>
            </list-ui>
          </div>
        </div>
        <div id="groups">
          <div class="flex items-center justify-between">
            <span class="align-middle title font-bold">Groups</span>
          </div>
          <div class="folder-list mt-2">
            <list-ui
              class="mb-2"
              v-for="folder in folders"
              :key="folder.id"
              :active="$route.params.folderId === folder.id">
              <router-link
                class="absolute h-full w-full left-0"
                :to="`/snippets/${folder.id}`"></router-link>
              <p class="text-overflow flex-auto">{{ folder.name }}</p>
              <v-popover style="display: flex;">
                <button class="btn-action">
                  <v-mdi name="mdi-dots-vertical"></v-mdi>
                </button>
                <card-ui slot="popover" class="shadow-xl border">
                  <list-ui @click="renameFolder(folder)">
                    <v-mdi name="mdi-pencil" slot="prefix"></v-mdi>
                    Rename
                  </list-ui>
                  <list-ui class="mt-1" @click="deleteFolder(folder)">
                    <v-mdi
                      name="mdi-delete-outline"
                      class="text-danger"
                      slot="prefix"></v-mdi>
                    Delete
                  </list-ui>
                </card-ui>
              </v-popover>
            </list-ui>
          </div>
        </div>
      </div>
    </simplebar>
  </nav>
</template>
<script>
/* eslint-disable import/no-extraneous-dependencies */
import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css';

import SideMenu from '~/mixins/SideMenu';

export default {
  components: { simplebar },
  mixins: [SideMenu],
};
</script>
<style scoped lang="scss">
.create-snippet-container {
  border: 2px solid #0b0b0d;
  border-radius: .25rem;
  color: #0b0b0d;
  width: 90%;
  margin: auto;
  transition: all .3s;
  svg {
    height: 19px;
    width: 19px;
    color: #0b0b0d;
  }
  span {
    text-transform: uppercase;
    font-size: .95rem;
    color: #0b0b0d;
    line-height: 1;
  }
}
.create-snippet-container:hover {
  background-color: #f5f5f5;
}
.divider {
  width: 50%;
  height: 2px;
  background: #0b0b0d;
  margin: 2rem auto;
}
#individuals, #groups {
  .title {
    color: #0b0b0d;
  }
  .list-ui {
    padding: .5rem;
    border-radius: .25rem;
    .btn-action {
      background-color: transparent;
      display: flex;
      align-items: center;
      svg {
        height: 18px;
        width: 18px;
      }
    }
  }
}
@screen lg {
  nav {
    width: 240px;
  }
}
</style>
