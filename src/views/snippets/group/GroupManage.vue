<template>
  <div class="flex flex-col text-left w-full mb-5 px-2">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-xl font-medium title-font text-warning font-bold tracking-wider">
          EDITION
        </h1>
      </div>
    </div>
    <form>
      <div class="flex flex-col justify-around align-center flex-wrap">
        <div class="w-full mx-auto">
          <div class="flex flex-col pt-4 form-group">
            <label for="title" class="text-lg text-default">Title</label>
            <input type="text" name="title" id="title" placeholder="Title" v-model="group.title" class="appearance-none border-none rounded w-full py-2 px-3 text-gray-700 bg-gray-300 mt-1 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="flex items-center mb-2 mt-6">
            <div class="flex mr-4">
              <input v-model="group.isVisible" id="visible" type="checkbox" name="visible" class="hidden" checked />
              <label for="visible" class="flex items-center cursor-pointer text-md mr-3">
                <span class="w-6 h-6 inline-block mr-2 rounded border border-grey flex-no-shrink bg-dark"></span>
                Visible
              </label>
            </div>
            <div class="flex mr-4">
              <input v-model="group.isLocked" id="locked" type="checkbox" name="locked" class="hidden" checked />
              <label for="locked" class="flex items-center cursor-pointer text-md mr-3">
                <span class="w-6 h-6 inline-block mr-2 rounded border border-grey flex-no-shrink bg-dark"></span>
                Lock edition mode
              </label>
            </div>
          </div>
          <div class="teammates mt-5">
            <h4 class="text-md font-bold text-primary mb-1">Teammates</h4>
            <div v-for="teammate in group.teammates" :key="teammate.id"
                 class="flex items-center justify-between">
              <span>{{ teammate.username + ' (' + teammate.email + ')' }}</span>
              <v-mdi name="mdi-minus"></v-mdi>
            </div>
            <div class="mt-3">
              <label for="ajax" class="text-md">
                <span class="text-warning">
                  Add teammate
                </span>
                <multiselect class="mt-2" v-model="newTeammate" :options="users" :custom-label="nameWithMail" placeholder="Search by username or email"  :options-limit="25" :limit-text="limitText" track-by="name" id="ajax" :show-no-results="false" :hide-selected="true" @search-change="asyncFind" :clear-on-select="false" :close-on-select="true" :searchable="true" :loading="selectorIsLoading" :internal-search="false" open-direction="bottom">
                  <template slot="clear" slot-scope="props">
                    <div class="multiselect__clear" v-if="newTeammate.length" @mousedown.prevent.stop="clearAll(props.search)"></div>
                  </template>
                  <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
                </multiselect>
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="divider"></div>
    <div class="w-full py-3 px-4 border border-danger rounded">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-default font-bold">Delete this group</h2>
          <p class="text-sm">Once you delete a group, there is no going back. Please be certain.</p>
        </div>
        <button-ui class="shadow-xl"
                   round type="danger" icon small
                   style="bottom: 20px; right: 20px"
        >
          <v-mdi name="mdi-delete-outline"></v-mdi>
        </button-ui>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
  name: 'GroupManage',
  components: { Multiselect },
  props: {
    group: Object,
  },
  data: () => ({
    group: {
      title: '',
      isVisible: false,
      isLocked: false,
    },
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
  }),
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

.divider {
  width: 75%;
  height: 2px;
  background-color: var(--text-light);
  margin: 1.5rem auto;
}

input[type="radio"] + label span, input[type="checkbox"] + label span {
  transition: all .2s,
  transform .2s;
}
input[type="radio"] + label span:hover,
input[type="radio"] + label:hover span,
input[type="checkbox"] + label span:hover,
input[type="checkbox"] + label:hover span{
  transform: scale(1.1);
}
input[type="radio"]:checked + label span, input[type="checkbox"]:checked + label span {
  background-color: var(--primary); //bg-blue
  box-shadow: 0px 0px 0px 5px white inset;
}
input[type="radio"]:checked + label, input[type="checkbox"]:checked + label{
  color: #3490DC; //text-blue
}

</style>
