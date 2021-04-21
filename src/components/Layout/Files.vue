<template>
  <div id="sidebar-files" class="relative"
    :class="toggledSidebar ? 'toggled' : ''" style="width: 450px;">
    <div class="pt-5 px-6 relative" id="sidebar-header">
      <div id="project-name" class="flex items-center justify-between pr-1" style="height: 34px;">
        <span class="text-s tracking-widest font-bold title-font">Group Name</span>
        <router-link :to="{ name: 'Manage Snippet Dashbaord' }">
          <button-ui
            v-tooltip="'Edit'"
            class="shadow-xl"
            round small
            type="warning"
            icon>
            <mdicon name="pencil-outline"></mdicon>
          </button-ui>
        </router-link>
      </div>
      <div class="infos-project mt-3">
        <router-link to="/snippets/manage/y6C7rx6G7/edit/fejz98zen">
          <button-ui icon class="w-full items-center p-2 rounded bg-black text-white hover:bg-blue-500">
            <mdicon name="star" class="text-warning mr-2"></mdicon>
            <span class="font-bold">Master Folder</span>
          </button-ui>
        </router-link>
      </div>
      <button-ui
        @click="toggleSidebar"
        id="button-toggle"
        class="shadow-xl"
        round small
        type="primary"
        icon>
        <mdicon name="chevron-left"></mdicon>
      </button-ui>
    </div>
    <template v-if="!toggledSidebar">
      <p v-if="groups.length === 0"
        class="py-8 text-center text-lighter font-semibold">
          Nothing here
      </p>
      <div class="px-6 mt-6 overflow-y-auto list-groups">
        <router-link v-for="group in groups" :key="group.id"
          :to="'/snippets/manage/y6C7rx6G7/group/' + group.id">
          <button-ui icon class="w-full items-center p-2 mb-2 rounded bg-black text-white hover:bg-blue-500">
            <span class="font-bold">{{ 'Group ' + group.id }}</span>
          </button-ui>
        </router-link>
      </div>
      <button-ui
        v-tooltip="'Add group'"
        class="shadow-xl absolute"
        round
        style="bottom: 20px; right: 20px"
        type="primary"
        icon>
          <mdicon name="plus"></mdicon>
      </button-ui>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toggledSidebar: false,
      groups: [
        {
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
        {
          id: '98iefh2',
          isVisible: true,
          isLocked: true,
          teammates: [
            {
              id: 'dn82DNf', username: 'arty3p', email: 'arty3p@gmail.com',
            },
            {
              id: '0cnejf92', username: 'Miki', email: 'miki@gmail.com',
            },
          ],
        },
        {
          id: 'plz39Ddz',
          isVisible: false,
          isLocked: false,
          teammates: [
            {
              id: '0cnejf92', username: 'Miki', email: 'miki@gmail.com',
            },
          ],
        },
        {
          id: '98fezib2',
          isVisible: true,
          isLocked: true,
          teammates: [
            {
              id: '0cnejf92', username: 'Miki', email: 'miki@gmail.com',
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.toggledSidebar = !this.toggledSidebar;
    },
  },
};
</script>

<style lang="scss" scoped>
#sidebar-files.toggled {
  width: 5px !important;
  #sidebar-header {
    padding-left: 0 !important;
    padding-right: 0 !important;
    .infos-project, #project-name {
      display: none;
    }
    #button-toggle {
      right: -23px;
      border-radius: 9999px !important;
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
      padding-left: 0 !important;
      padding-right: .25rem !important;
      svg {
        transform: rotate(-180deg) !important;
      }
    }
  }
}

#sidebar-files {
  transition: all .4s;
  background-color: var(--bg-input);
  .infos-project {
    .router-link-active {
      .button-ui {
        background-color: var(--primary);
      }
    }
  }
  #button-toggle {
    position: absolute;
    right: 0;
    border-radius: 9999px !important;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    padding-left: .25rem !important;
    padding-right: 0 !important;
    top: 20px;
    svg {
      transition: all .4s;
    }
  }
}

.infos-project, .list-groups {
  transition: all 0.1s;
  .button-ui {
    border-radius: 0.25rem !important;
    justify-content: start !important;
    min-height: 40px;
  }
}

.list-groups {
  a.router-link-active {
    .button-ui {
      background-color: var(--primary);
    }
  }
}

::v-deep {
  .vs-collapse {
    padding: 0 !important;
    .vs-collapse-item {
      cursor: auto;
      background-color: var(--bg-input);
      margin-bottom: .75rem;
      .vs-collapse-item--header {
        cursor: pointer;
      }
      .vs-collapse-item--content {
        .group-checkbox {
          label {
            span {
              background-color: #ffffff;
            }
          }
          input[type="checkbox"]:checked + label span {
            background-color: var(--primary);
          }
        }
      }
    }
    .vs-collapse-item:last-child {
      margin: 0;
    }
  }
}
</style>
