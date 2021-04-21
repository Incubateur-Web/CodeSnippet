<template>
  <vs-collapse-item class="rounded">
    <div slot="header">
      Groupe {{ group.id }}
    </div>
    <div>
      <div class="group-checkbox mb-1">
        <input id="visible" type="checkbox" name="visible" class="hidden" v-model="isVisible" checked />
        <label for="visible" class="flex items-center cursor-pointer text-sm font-bold">
          <span class="w-4 h-4 inline-block mr-2 rounded flex-no-shrink shadow-xl"></span>
          Visible par les autres
        </label>
      </div>
      <div class="group-checkbox">
        <input id="locked" type="checkbox" name="locked" class="hidden" v-model="isLocked" checked />
        <label for="locked" class="flex items-center cursor-pointer text-sm font-bold">
          <span class="w-4 h-4 inline-block mr-2 rounded flex-no-shrink shadow-xl"></span>
          Verrouiller l'édition
        </label>
      </div>
      <div class="teammates mt-3">
        <h4 class="text-sm font-bold text-primary">Teammates</h4>
        <div v-for="teammate in group.teammates" :key="teammate.id"
             class="flex items-center justify-between">
          <span>{{ teammate.username + ' (' + teammate.email + ')' }}</span>
          <mdicon name="minus"></mdicon>
        </div>
        <div class="mt-1">
          <label for="ajax" class="text-sm">
            <span class="text-warning">
              Add teammate
            </span>
            <multiselect v-model="newTeammate" :options="users" :custom-label="nameWithMail" placeholder="Search by username or email"  :options-limit="25" :limit-text="limitText" track-by="name" id="ajax" :show-no-results="false" :hide-selected="true" @search-change="asyncFind" :clear-on-select="false" :close-on-select="true" :searchable="true" :loading="selectorIsLoading" :internal-search="false" open-direction="bottom">
              <template slot="clear" slot-scope="props">
                <div class="multiselect__clear" v-if="newTeammate.length" @mousedown.prevent.stop="clearAll(props.search)"></div>
              </template>
              <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
            </multiselect>
          </label>
        </div>
      </div>
    </div>
  </vs-collapse-item>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
  name: 'CollapseGroupComponent',
  components: {
    Multiselect,
  },
  props: {
    group: Object,
  },
  data() {
    return {
      isVisible: this.group.isVisible,
      isLocked: this.group.isLocked,
      users: [
        // USERS ASYNC : https://vue-multiselect.js.org/#sub-asynchronous-select
        { name: 'Gregg', email: 'Gregg@mail.fr' },
        { name: 'Suzette', email: 'Suzette@mail.fr' },
        { name: 'Aimee', email: 'Aimee@mail.fr' },
        { name: 'Miki', email: 'Miki@mail.fr' },
        { name: 'Antoine', email: 'Antoine@mail.fr' },
        { name: 'Alexis', email: 'Alexis@mail.fr' },
      ],
      newTeammate: [],
      selectorIsLoading: false,
    };
  },
  methods: {
    nameWithMail({ name, email }) {
      return `${name} (${email})`;
    },
    limitText(count) {
      return `and ${count} other users`;
    },
    asyncFind() {
      this.selectorIsLoading = true;
      // console.log(query);
      // console.log(ajaxFindUsers);
      // ajaxFindUsers(query).then((response) => {
      // this.users = response;
      this.selectorIsLoading = false;
      // });
    },
    clearAll() {
      this.newTeammate = [];
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep {

}
</style>
