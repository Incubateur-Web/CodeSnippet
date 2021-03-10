<template>
  <nav class="h-full py-6 bg-dark" id="side-menu">
    <simplebar class="h-full px-4">
      <div class="create-snippet-container">
        <router-link :to="{ name: 'Create Snippet' }">
          <button-ui icon
            class="flex justify-center w-full items-center p-2 rounded-full bg-black text-white hover:bg-blue-500"
          >
            <v-mdi name="mdi-plus-circle-outline" class="mr-2"></v-mdi>
            <span class="font-bold">CREATE A SNIPPET</span>
          </button-ui>
        </router-link>
      </div>
      <div class="divider"></div>
      <div class="mt-8">
        <div id="individuals" class="mb-6">
          <div class="flex items-center justify-between">
            <div class="mb-2">
              <v-mdi name="mdi-account-outline" class="mr-2"></v-mdi>
              <span class="align-middle font-bold">Personal snippets</span>
            </div>
          </div>
          <div class="folder-list mt-2">
            <list-ui
              class="mb-2"
              v-for="folder in folders"
              :key="folder.id"
              :active="$route.params.folderId === folder.id"
            >
              <router-link
                class="absolute h-full w-full left-0"
                :to="`/snippets/edit/${folder.id}`"></router-link>
              <v-mdi name="mdi-code-tags" slot="prefix"></v-mdi>
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
                      slot="prefix"
                    ></v-mdi>
                    Delete
                  </list-ui>
                </card-ui>
              </v-popover>
            </list-ui>
          </div>
        </div>
        <div id="groups">
          <div class="flex items-center justify-between">
            <div class="mb-2">
              <v-mdi name="mdi-account-group-outline" class="mr-2"></v-mdi>
              <span class="align-middle font-bold">Group snippets</span>
            </div>
          </div>
          <div class="folder-list mt-2">
            <list-ui
              class="mb-2"
              v-for="folder in folders"
              :key="folder.id"
              :active="$route.params.folderId === folder.id"
            >
              <router-link
                class="absolute h-full w-full left-0"
                :to="`/snippets/${folder.id}`"
              ></router-link>
              <v-mdi name="mdi-lock-outline" slot="prefix"></v-mdi>
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
                      slot="prefix"
                    ></v-mdi>
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
  margin: auto;
  transition: all 0.1s;
  width: 95%;

  svg {
    height: 19px;
    width: 19px;
  }
  span {
    text-transform: uppercase;
    font-size: .85rem;
    line-height: 1;
  }
}

.create-snippet-container:hover {
  // background-color: #f5f5f5;
}

.divider {
  width: 50%;
  height: 2px;
  background: var(--border);
  margin: 2rem auto;
}

#side-menu{
  box-shadow: 0 0 10px rgba(0, 0, 0, 3);
}

.light-theme #side-menu{
  background: var(--bg-default);
}

#individuals,
#groups {
  .list-ui {
    padding: .25rem .5rem;
    border-radius: .25rem;
    position: relative;
    transition: all 0.1s;
    ::v-deep .prefix {
      margin-right: .5rem;
      display: flex;
      svg {
        width: 19px;
        height: 19px;
      }
    }
    .btn-action {
      background-color: transparent;
      display: flex;
      align-items: center;
      svg {
        height: 18px;
        width: 18px;
      }
    }
    &.active {
      border-left: 3px solid var(--primary) !important;
    }
  }
  .list-ui:hover {
    border-left: 3px solid var(--border);
  }
}

@screen lg {
  nav {
    width: 240px;
  }
}
</style>
