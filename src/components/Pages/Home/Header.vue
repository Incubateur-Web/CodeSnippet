<template>
  <div>
    <!-- OBSOLETE -->
  </div>
</template>
<script>
export default {
  props: {
    file: Object,
    hide: Boolean,
  },
  data: () => ({
    editTitle: false,
    fileTitle: '',
  }),
  methods: {
    updateFile(data) {
      this.$store.dispatch('files/update', {
        fileId: this.file.id,
        folderId: this.file.folderId,
        data,
      });
    },
    toggleStar() {
      this.updateFile({
        star: !this.file.star,
      });
    },
    editFileTitle() {
      if (!this.fileTitle) return;

      this.updateFile({
        title: this.fileTitle,
      });

      this.editTitle = false;
      this.fileTitle = '';
    },
    openMobileMenu() {
      this.$store.commit('changeState', {
        key: 'mobileMenu',
        data: true,
      });
    },
    darkMode() {
      const currentTheme = !this.$store.state.dark;

      this.$store.commit('changeState', {
        key: 'dark',
        data: currentTheme,
      });
      this.$dark(currentTheme);
    },
    deleteFile() {
      this.$store.dispatch('files/delete', {
        fileId: this.file.id,
        folderId: this.file.folderId,
      });
    },
  },
};
</script>
<style scoped>
.file-name{
  cursor: pointer;
  @apply text-lg font-semibold;
}
</style>
