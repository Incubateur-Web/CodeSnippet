<template v-if="isFileActive">
    <div class="flex flex-col justify-center align-center h-full">
      <h2>
          CREATE A SNIPPET PROJECT
      </h2>
      <form id="createSnippet" class="flex justify-around align-center">
        <label for="solo" class="w-2/5 rounded shadow bg-gray-100 p-5 border-gray-100 hover:border-gray-400 focus:border-indigo- 400">
          <input type="radio" name="type" value="solo" id="solo" hidden>
          <v-mdi name="mdi-plus-circle-outline" class="mr-2"></v-mdi>
          <h2>
            PERSONNAL SNIPPET
          </h2>
          <hr>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit explicabo sint provident nesciunt dolor excepturi cum, perspiciatis quos temporibus aliquam expedita ab modi eum quisquam tempora iure veniam architecto consequuntur.
          </p>
          <input type="text" name="title" placeholder="Project's title" id="title" />
          <label for="private">
            <input type="checkbox" name="private" value="private" id="private" />
            Keep this project private
          </label>
           <label class="inline-flex items-center mt-3">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" checked><span class="ml-2 text-gray-700">label</span>
            </label>
        </label>
        <label for="group" class="w-2/5 rounded shadow bg-gray-100 p-5">
          <input type="radio" name="type" value="group" id="group" hidden>
          <v-mdi name="mdi-plus-circle-outline" class="mr-2"></v-mdi>
          <h2>
          GROUP SNIPPET
          </h2>
          <hr>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit explicabo sint provident nesciunt dolor excepturi cum, perspiciatis quos temporibus aliquam expedita ab modi eum quisquam tempora iure veniam architecto consequuntur.
          </p>
        </label>
      </form>
      <div class="flex justify-center my-5">
        <button type="submit" form="createSnippet" class="w-1/4 uppercase font-bold bg-black text-white hover:bg-blue-500 py-3 px-5 rounded-full">
          let's code
          <v-mdi name="mdi-chevron-right-circle-outline" slot="prefix" class="ml-2"></v-mdi>
        </button>
      </div>
    </div>
</template>

<script>

export default {
  components: {
  },
  name: 'Create Snippet',
  data: () => ({
    retrieved: false,
    windowSize: 0,
  }),
  methods: {
    resizeHandler() {
      this.windowSize = window.innerWidth;
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
