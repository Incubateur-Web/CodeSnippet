<template v-if="isFileActive">
    <div>
       create
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
