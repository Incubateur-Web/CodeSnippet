<template>
  <nav
    class="h-screen bg-card py-6">
    <simplebar class="h-full px-4">
      <!--<list-ui
        tag="router-link"
        class="mb-2 capitalize"
        to="/">
        <v-mdi
          name="mdi-archive-outline"
          slot="prefix"></v-mdi>
        Home
      </list-ui>-->
      <div class="library">
        <p class="mb-4">Administration</p>
        <list-ui
          tag="router-link"
          class="mb-2 capitalize"
          to="/admin/dashboard">
          <v-mdi
            name="mdi-view-dashboard"
            slot="prefix"></v-mdi>
          Dashbaord
        </list-ui>
        <list-ui
          tag="router-link"
          class="mb-2 capitalize"
          to="/admin/users">
          <v-mdi
            name="mdi-account-box"
            slot="prefix"></v-mdi>
          Users
        </list-ui>
        <list-ui
          tag="router-link"
          class="mb-2 capitalize"
          to="/admin/projects">
          <v-mdi
            name="mdi-cube-scan"
            slot="prefix"></v-mdi>
          Projects
        </list-ui>
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
  name: 'side-menu-admin',
  components: { simplebar },
  mixins: [SideMenu],
};
</script>
<style scoped>
@screen lg {
  nav {
    width: 240px;
  }
}
</style>
