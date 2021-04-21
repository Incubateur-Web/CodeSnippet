<template v-if="isFileActive">
    <div class="flex flex-col align-center px-10 overflow-x-hidden h-full">
      <!-- ANCHOR TITLE -->
      <div class="flex flex-col text-center w-full mt-5 mb-10">
        <h2 class="text-s text-primary tracking-widest font-bold title-font mb-1">
          LET'S START ALL OVER AGAIN
        </h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-default">
          <v-mdi name="mdi-text-box-plus" class="mr-3 mb-1 font-bold" height="34" width="35"></v-mdi>
          CREATE A NEW PROJECT
        </h1>
      </div>
      <!-- ANCHOR ERROR HANDLING -->
      <div v-if="errors.length" id="errorContainer" class="w-3/4 mx-auto mb-5 flex items-center text-sm px-4 py-3 bg-red-lightest border-none border-red-light text-red-dark pl-4 pr-8 py-3 rounded relative bg-red-500" role="alert">
        <v-mdi name="mdi-alert-circle-outline" height="20" width="20" class="mr-3"></v-mdi>
        <div>
          <p v-for="(error, index) in errors" :key="index">{{error}}</p>
        </div>
        <button class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-3 mr-6 outline-none focus:outline-none" @click="closeAlert">
          <span>×</span>
        </button>
      </div>
      <!-- ANCHOR FORM CREATE SNIPPET -->
      <form id="createSnippet" @submit="checkForm" method="post" class="relative">
        <!-- SECTION STEP 1 -->
        <div :class='(step == 1) ? "currentStep" : "hiddenStep"' id="step1">
          <div class="flex justify-around align-center flex-wrap w-100">
            <!-- SECTION SOLO SNIPPET -->
            <label class="w-full lg:w-2/5 mx-5 label-choice mb-2" for="solo">
              <card-ui class="h-full" :class="(this.snippet.category == 'solo')?'selected':''">
                <!-- ANCHOR HIDDEN INPUT SOLO -->
                <input type="radio" name="category" value="solo" id="solo" v-model="snippet.category" hidden>
                <!-- ANCHOR DESCRIPTION INPUT SOLO -->
                <div class="flex items-center mb-5">
                  <div class="p-3 mr-3 inline-flex items-center justify-center rounded-full bg-primary flex-shrink-0">
                    <v-mdi name="mdi-account-outline" class="text-white"></v-mdi>
                  </div>
                  <h2 class="text-default text-lg">PERSONNAL SNIPPET</h2>
                </div>
                <hr>
                <div class="flex-grow mt-4">
                  <p class="leading-relaxed text-base">
                    By creating a personnal snippet, you will be the only one authorized to edit it. You will be able to share it to others for them to see your work and review it.
                  </p>
                </div>
                <!-- ANCHOR TITLE INPUT SNIPPET -->
                <label for="title" class="flex flex-wrap items-stretch w-full mb-1 relative mt-5">
                  <input type="text" name="title" placeholder="Snippet's title" id="title" v-model="snippet.title" @focus="snippet.category = 'solo'" class="flex-shrink flex-grow flex-auto text-black leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" :required="this.snippet.category == 'solo'" />
                  <div class="flex -mr-px">
                    <span class="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none px-3 whitespace-no-wrap text-grey-dark text-sm">
                      <v-mdi name="mdi-pencil-outline" class="text-white"></v-mdi>
                    </span>
                  </div>
                </label>
                <!-- REMOVED Private field : le snippet est privé tant qu'une url ne partage n'est pas créée
                <label for="private">
                  <input type="checkbox" name="private" value="private" id="private" />
                  Keep this project private
                </label>
                -->
              </card-ui>
            </label>
            <!-- !SECTION SOLO SNIPPET -->
            <!-- SECTION GROUP SNIPPET -->
            <label class="w-full lg:w-2/5  mx-5 label-choice mb-2" for="group">
              <card-ui class="h-full" :class="(this.snippet.category == 'group')?'selected':''" >
                <!-- ANCHOR HIDDEN INPUT GROUP -->
                <input type="radio" name="category" value="group" id="group" v-model="snippet.category" hidden>
                <!-- ANCHOR DESCRIPTION INPUT GROUP -->
                <div class="flex items-center mb-5">
                  <div class="p-3 mr-3 inline-flex items-center justify-center rounded-full bg-primary flex-shrink-0">
                    <v-mdi name="mdi-account-group-outline" class="text-white"></v-mdi>
                  </div>
                  <h2 class="text-default text-lg title-font font-bold">GROUP SNIPPET</h2>
                </div>
                <hr>
                <div class="flex-grow mt-4">
                  <p class="leading-relaxed text-base">
                    By creating a group project, you will be able to work simultaneously with your friends, coworkers or teachers.
                    Anyone who has the link to the project can view it by default, but you can adjust this parameter later on.
                  </p>
                  <p class='mt-2'>
                    You can work with up to <b class="text-primary">20 collaborators !</b>
                  </p>
                </div>
              </card-ui>
            </label>
            <!-- !SECTION GROUP SNIPPET -->
          </div>
          <!-- ANCHOR START SOLO OR GO TO STEP 2 -->
          <div class="flex justify-center my-5" v-if="this.snippet.category">
            <button-ui icon default form="createSnippet" class="primary w-full md:w-1/4 uppercase font-bold text-default hover:bg-blue-500 py-3 px-5 rounded-full" @click="checkForm">
              <span class="text-uppercase mr-3">
                let's code
              </span>
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
                <path d="M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19M5.64 12.5L1.81 10.87L7.91 8.1C7 9.46 6.22 10.93 5.64 12.5M19.22 4C19.5 4 19.75 4 19.96 4.05C20.13 5.44 19.94 8.3 16.66 11.58C14.96 13.29 12.93 14.6 10.65 15.47L8.5 13.37C9.42 11.06 10.73 9.03 12.42 7.34C15.18 4.58 17.64 4 19.22 4M19.22 2C17.24 2 14.24 2.69 11 5.93C8.81 8.12 7.5 10.53 6.65 12.64C6.37 13.39 6.56 14.21 7.11 14.77L9.24 16.89C9.62 17.27 10.13 17.5 10.66 17.5C10.89 17.5 11.13 17.44 11.36 17.35C13.5 16.53 15.88 15.19 18.07 13C23.73 7.34 21.61 2.39 21.61 2.39S20.7 2 19.22 2M14.54 9.46C13.76 8.68 13.76 7.41 14.54 6.63S16.59 5.85 17.37 6.63C18.14 7.41 18.15 8.68 17.37 9.46C16.59 10.24 15.32 10.24 14.54 9.46M8.88 16.53L7.47 15.12L8.88 16.53M6.24 22L9.88 18.36C9.54 18.27 9.21 18.12 8.91 17.91L4.83 22H6.24M2 22H3.41L8.18 17.24L6.76 15.83L2 20.59V22M2 19.17L6.09 15.09C5.88 14.79 5.73 14.47 5.64 14.12L2 17.76V19.17Z" />
              </svg>
            </button-ui>
          </div>
        </div>
        <!-- !SECTION STEP 1 -->
        <!-- SECTION STEP 2 -->
        <div :class='(step == 2) ? "currentStep" : "hiddenStep"' id="step2" class="flex flex-col justify-around align-center flex-wrap px-10" >
          <div class="w-2/3 mx-auto">
            <!-- ANCHOR GO BACK TO STEP 1 -->
            <button-ui icon default type="button" @click="step = 1" class="secondary w-full md:w-1/4 uppercase font-bold text-default hover:bg-black py-3 px-5 rounded-full text-default hover:text-white">
              <v-mdi name="mdi-chevron-left" height="20" width="20" class="mr-3"></v-mdi>
              <span class="text-uppercase mr-3">
                CANCEL
              </span>
            </button-ui>
            <!-- SECTION GROUP SNIPPET FIELDS -->
            <div>
              <!-- ANCHOR TITLE INPUT SNIPPET -->
              <label for="title" class="flex flex-wrap items-stretch w-full mb-1 relative mt-5">
                <input type="text" name="title" placeholder="Snippet's title" id="title" v-model="snippet.title" class="flex-shrink flex-grow flex-auto text-black leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" :required="this.snippet.category == 'group'" />
              </label>
              <!-- ANCHOR TITLE INPUT SNIPPET -->
              <label for="description" class="flex flex-wrap items-stretch w-full mb-1 relative mt-5">
                <textarea type="text" name="description" placeholder="Snippet's description" id="description" v-model="snippet.description" class="flex-shrink flex-grow flex-auto text-black leading-normal w-px flex-1 border border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow p-2" rows="3"></textarea>
              </label>
              <hr class="border my-5">
              <!-- ANCHOR SELECTION COLLABORATEURS -->
              <label for="ajax" class="text-default text-lg">
                COLLABORATORS
                <multiselect v-model="snippet.collaborators" :options="users" :custom-label="nameWithMail" placeholder="Type to search ans select users by username or email" :multiple="true"  :options-limit="25" :limit-text="limitText" :max-height="1000" track-by="name" id="ajax" :show-no-results="false" :hide-selected="true" @search-change="asyncFind" :clear-on-select="false" :close-on-select="true" :searchable="true" :loading="selectorIsLoading" :internal-search="false" open-direction="bottom">
                  <template slot="clear" slot-scope="props">
                    <div class="multiselect__clear" v-if="snippet.collaborators.length" @mousedown.prevent.stop="clearAll(props.search)"></div>
                  </template>
                  <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
                </multiselect>
              </label>
              <hr class="border my-5">
              <!-- ANCHOR CHOIX PRIVÉ / PUBLIC -->
              <label for="mode" class="text-default text-lg">
                GROUP MODE
              </label>
              <div class="pl-12 flex mt-2">
                <div class="flex items-center mr-5">
                  <input v-model="snippet.mode" id="team" type="radio" name="mode" value="team" class="hidden" checked />
                  <label for="team" class="flex items-center cursor-pointer text-xl">
                    <span class="w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink bg-dark"></span>
                    Team mode
                  </label>
                </div>
                <div class="flex items-center ml-5">
                  <input v-model="snippet.mode" id="teach" type="radio" name="mode" value="teach" class="hidden" />
                  <label for="teach" class="flex items-center cursor-pointer text-xl">
                    <span class="w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink bg-dark"></span>
                    Teach mode
                  </label>
                </div>
              </div>
              <hr class="border my-5">
              <!-- ANCHOR CHOIX PRIVÉ / PUBLIC -->
              <div>
                EXAM MODE
                <div class="pl-12 flex mt-2">
                  <div class="flex mr-4 mb-4">
                    <input v-model="snippet.locked" id="locked" type="checkbox" name="locked" class="hidden" checked />
                    <label for="locked" class="flex items-center cursor-pointer text-xl mr-3">
                      <span class="w-8 h-8 inline-block mr-2 rounded border border-grey flex-no-shrink bg-dark"></span>
                      Set an unlocked period for the project :
                    </label>
                    <div>
                      <vc-date-picker
                        v-model="snippet.lockedDate"
                        mode="dateTime"
                        :masks="masks"
                        :is-dark="this.$store.state.dark"
                        is-range
                      >
                        <template v-slot="{ inputValue, inputEvents, isDragging }">
                          <div class="flex flex-col sm:flex-row justify-start items-center">
                            <!-- DATE START -->
                            <div class="relative flex-grow bg-dark">
                              <svg
                                class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                ></path>
                              </svg>
                              <input
                                class="flex-grow pl-8 pr-2 py-1 bg-card border rounded w-full"
                                :class="isDragging ? 'text-default' : 'text-default'"
                                :value="inputValue.start"
                                v-on="inputEvents.start"
                              />
                            </div>
                            <span class="flex-shrink-0 m-2">
                              <svg
                                class="w-4 h-4 stroke-current text-default"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                              </svg>
                            </span>
                            <!-- DATE END -->
                            <div class="relative flex-grow">
                              <svg
                                class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                ></path>
                              </svg>
                              <input
                                class="flex-grow pl-8 pr-2 py-1 bg-card border rounded w-full"
                                :class="isDragging ? 'text-default' : 'text-default'"
                                :value="inputValue.end"
                                v-on="inputEvents.end"
                              />
                            </div>
                          </div>
                        </template>
                      </vc-date-picker>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr class="border my-5">
            <!-- ANCHOR START SOLO OR GO TO STEP 2 -->
            <div>
              MORE OPTIONS
              <div class="pl-12 flex mt-2 flex items-center">
                <div class="mr-5">
                    <input v-model="snippet.git" id="git" type="checkbox" name="git" class="hidden" checked />
                    <label for="git" class="flex items-center cursor-pointer text-xl mr-3">
                      <span class="w-8 h-8 inline-block mr-2 rounded border border-grey flex-no-shrink bg-dark"></span>
                      Create a GitHub repo
                    </label>
                </div>
                <div class="ml-5">
                    <input v-model="snippet.private" id="private" type="checkbox" name="private" class="hidden" checked />
                    <label for="private" class="flex items-center cursor-pointer text-xl mr-3">
                      <span class="w-8 h-8 inline-block mr-2 rounded border border-grey flex-no-shrink bg-dark"></span>
                      Keep the project private
                    </label>
                </div>
              </div>
            </div>
            <!-- ANCHOR START SOLO OR GO TO STEP 2 -->
            <div class="flex justify-center my-5">
              <button-ui icon default submit="true" form="createSnippet" class="primary w-full md:w-1/4 uppercase font-bold text-default hover:bg-blue-500 py-3 px-5 rounded-full">
                <span class="text-uppercase mr-3">
                  let's code
                </span>
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19M5.64 12.5L1.81 10.87L7.91 8.1C7 9.46 6.22 10.93 5.64 12.5M19.22 4C19.5 4 19.75 4 19.96 4.05C20.13 5.44 19.94 8.3 16.66 11.58C14.96 13.29 12.93 14.6 10.65 15.47L8.5 13.37C9.42 11.06 10.73 9.03 12.42 7.34C15.18 4.58 17.64 4 19.22 4M19.22 2C17.24 2 14.24 2.69 11 5.93C8.81 8.12 7.5 10.53 6.65 12.64C6.37 13.39 6.56 14.21 7.11 14.77L9.24 16.89C9.62 17.27 10.13 17.5 10.66 17.5C10.89 17.5 11.13 17.44 11.36 17.35C13.5 16.53 15.88 15.19 18.07 13C23.73 7.34 21.61 2.39 21.61 2.39S20.7 2 19.22 2M14.54 9.46C13.76 8.68 13.76 7.41 14.54 6.63S16.59 5.85 17.37 6.63C18.14 7.41 18.15 8.68 17.37 9.46C16.59 10.24 15.32 10.24 14.54 9.46M8.88 16.53L7.47 15.12L8.88 16.53M6.24 22L9.88 18.36C9.54 18.27 9.21 18.12 8.91 17.91L4.83 22H6.24M2 22H3.41L8.18 17.24L6.76 15.83L2 20.59V22M2 19.17L6.09 15.09C5.88 14.79 5.73 14.47 5.64 14.12L2 17.76V19.17Z" />
                </svg>
              </button-ui>
            </div>
          </div>
        </div>
        <!-- !SECTION STEP 2 -->
      </form>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect';
import Vue from 'vue';
// import { ajaxFindUsers } from './ajaxFindUsersApi';
import VCalendar from 'v-calendar';

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: 'vc',
});

export default {
  components: {
    Multiselect,
  },
  name: 'CreateSnippet',
  data: () => ({
    retrieved: false,
    windowSize: 0,
    errors: [],
    selectorIsLoading: false,
    masks: {
      input: 'YYYY-MM-DD h:mm A',
    },
    snippet: {
      title: '',
      category: '',
      mode: 'team',
      collaborators: [],
      locked: false,
      lockedDate: {
        start: new Date(),
        end: new Date().setDate(new Date().getDate() + 5),
      },
      git: false,
      private: false,
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
    step: 1,
  }),
  methods: {
    resizeHandler() {
      this.windowSize = window.innerWidth;
    },
    nameWithMail({ name, email }) {
      return `${name} (${email})`;
    },
    checkForm(e) {
      this.errors = [];
      e.preventDefault();
      if (this.snippet.category === 'solo') {
        if (!this.snippet.title) {
          this.errors.push('Project title required.');
        } else {
          return true;
        }
      } else if (this.snippet.category === 'group') {
        // console.log(this.snippet);
        this.step = 2;
      }

      if (this.errors.length > 0) {
        const errorContainer = document.getElementById('errorContainer');
        errorContainer.style.display = 'flex';
      }
      // this.errors = [];
      // if (!this.title) {
      //   this.errors.push('Project title required.');
      // }
      return false;
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
      this.selectedUsers = [];
    },
    closeAlert() {
      const errorContainer = document.getElementById('errorContainer');
      errorContainer.style.display = 'none';
      this.errors = [];
    },
  },
  computed: {
    mobileMenu() {
      return this.$store.state.mobileMenu;
    },
  },
  created() {
    this.$store.dispatch('retrieve').then(({ dark }) => {
      // this.$router.push('/all');
      this.$dark(dark);
      this.retrieved = true;
    });
  },
  mounted() {
    this.resizeHandler();
    window.addEventListener('resize', this.resizeHandler);
    // const { CodeMirror } = document.querySelector('.CodeMirror');
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
.label-choice .card-ui{
  min-height: 250px;
}
#step1, #step2{
  transition-property: left, right;
  transition-duration: 1s, 1s;
  right: 0%;
  width: 100%
}
#step2{
  position: absolute;
  top: 0;
  width: 100%;
  background: var(--bg-lighter);
}
.currentStep{
  position: absolute;
  right: 0%;
}
#step1.hiddenStep{
  position: absolute;
  right: 100%;
}
#step2.hiddenStep{
  position: absolute;
  right: -100%;
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
