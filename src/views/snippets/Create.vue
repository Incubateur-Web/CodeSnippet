<template v-if="isFileActive">
    <div class="flex flex-col align-center px-10 overflow-x-hidden h-full">
      <div class="flex flex-col text-center w-full mt-5 mb-10">
        <h2 class="text-s text-primary tracking-widest font-bold title-font mb-1">
          LET'S START ALL OVER AGAIN
        </h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-default">
          <v-mdi name="mdi-text-box-plus" class="mr-3 mb-1 font-bold" height="34" width="35"></v-mdi>
          CREATE A NEW PROJECT
        </h1>
      </div>
      <div v-if="errors.length" class="w-3/4 mx-auto mb-5 flex items-center text-sm px-4 py-3 bg-red-lightest border-none border-red-light text-red-dark pl-4 pr-8 py-3 rounded relative bg-red-500" role="alert">
          <v-mdi name="mdi-alert-circle-outline" height="20" width="20" class="mr-3"></v-mdi>
          <div>
            <p v-for="(error, index) in errors" :key="index">{{error}}</p>
        </div>
      </div>
      <form id="createSnippet" @submit="checkForm" method="post" class="relative">
        <div :class='(step == 1) ? "currentStep" : "hiddenStep"' id="step1">
          <div class="flex justify-around align-center flex-wrap w-100">
            <label class="w-full lg:w-2/5 mx-5 label-choice mb-2" for="solo">
              <card-ui class="h-full" :class="(this.snippet.category == 'solo')?'selected':''">
                <input type="radio" name="category" value="solo" id="solo" v-model="snippet.category" hidden>
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
            <label class="w-full lg:w-2/5  mx-5 label-choice mb-2" for="group">
              <card-ui class="h-full" :class="(this.snippet.category == 'group')?'selected':''" >
                <input type="radio" name="category" value="group" id="group" v-model="snippet.category" hidden>
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
          </div>
          <div class="flex justify-center my-5" v-if="this.snippet.category">
            <button-ui icon default submit="false" form="createSnippet" class="primary w-full md:w-1/4 uppercase font-bold text-default hover:bg-blue-500 py-3 px-5 rounded-full">
              <span class="text-uppercase mr-3">
                let's code
              </span>
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
                <path d="M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19M5.64 12.5L1.81 10.87L7.91 8.1C7 9.46 6.22 10.93 5.64 12.5M19.22 4C19.5 4 19.75 4 19.96 4.05C20.13 5.44 19.94 8.3 16.66 11.58C14.96 13.29 12.93 14.6 10.65 15.47L8.5 13.37C9.42 11.06 10.73 9.03 12.42 7.34C15.18 4.58 17.64 4 19.22 4M19.22 2C17.24 2 14.24 2.69 11 5.93C8.81 8.12 7.5 10.53 6.65 12.64C6.37 13.39 6.56 14.21 7.11 14.77L9.24 16.89C9.62 17.27 10.13 17.5 10.66 17.5C10.89 17.5 11.13 17.44 11.36 17.35C13.5 16.53 15.88 15.19 18.07 13C23.73 7.34 21.61 2.39 21.61 2.39S20.7 2 19.22 2M14.54 9.46C13.76 8.68 13.76 7.41 14.54 6.63S16.59 5.85 17.37 6.63C18.14 7.41 18.15 8.68 17.37 9.46C16.59 10.24 15.32 10.24 14.54 9.46M8.88 16.53L7.47 15.12L8.88 16.53M6.24 22L9.88 18.36C9.54 18.27 9.21 18.12 8.91 17.91L4.83 22H6.24M2 22H3.41L8.18 17.24L6.76 15.83L2 20.59V22M2 19.17L6.09 15.09C5.88 14.79 5.73 14.47 5.64 14.12L2 17.76V19.17Z" />
              </svg>
            </button-ui>
          </div>
        </div>
        <div :class='(step == 2) ? "currentStep" : "hiddenStep"' id="step2" class="flex justify-around align-center flex-wrap w-100" >
          <button-ui icon default type="button" @click="step = 1" class="secondary w-full md:w-1/4 uppercase font-bold text-default hover:bg-black py-3 px-5 rounded-full">
            <v-mdi name="mdi-chevron-left" height="20" width="20" class="mr-3"></v-mdi>
            <span class="text-uppercase mr-3">
              CANCEL
            </span>
          </button-ui>
        </div>
      </form>
    </div>
</template>

<script>

export default {
  components: {
  },
  name: 'CreateSnippet',
  data: () => ({
    retrieved: false,
    windowSize: 0,
    errors: [],
    snippet: {
      title: '',
      category: '',
    },
    step: 1,
  }),
  methods: {
    resizeHandler() {
      this.windowSize = window.innerWidth;
    },
    checkForm(e) {
      e.preventDefault();
      if (this.snippet.category === 'solo') {
        if (!this.snippet.title) {
          this.errors.push('Project title required.');
        } else {
          return true;
        }
      } else if (this.snippet.category === 'group') {
        console.log('group');
        this.step = 2;
      }
      // this.errors = [];
      // if (!this.title) {
      //   this.errors.push('Project title required.');
      // }
      return false;
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
<style lang="scss">
.label-choice .card-ui{
  min-height: 250px;
}
#step2{
  position: absolute;
  top: 0;
  width: 100%;
  background: #292a42;
}
#step1, #step2{
  transition: all 1s;
  right: 0%;
  width: 100%
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
</style>
