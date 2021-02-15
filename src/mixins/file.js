import { searchFilter, tagFilter } from '~/utils/filters';

export default {
  data: () => ({
    search: '',
  }),
  methods: {
    addFile() {
      this.$store.dispatch('files/insert', this.$route.params.folderId);
    },
  },
  computed: {
    showAddFileBtn() {
      const { folderId } = this.$route.params;

      return !(folderId === 'all-snippets' || folderId === 'starred');
    },
    activeFileId() {
      return this.$store.state.activeFile.split('&')[1];
    },
    files() {
      const { folderId } = this.$route.params;
      // console.log(this.$route.params);
      const files = folderId === 'all-snippets' || folderId === 'starred'
        ? this.$store.getters['files/getAll']
        : this.$store.getters['files/getByFolderId'](folderId);

      if (folderId === 'starred') {
        return files.filter((file) => file.star);
      }

      return files;
    },
    filteredFiles() {
      const { activeTag } = this.$store.state;
      const files = activeTag ? tagFilter(this.files, activeTag) : this.files;

      return searchFilter(files, 'title', this.search);
    },
  },
};
