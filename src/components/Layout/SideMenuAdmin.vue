<template>
  <!--<nav
    class="h-screen bg-card py-6">
    <simplebar class="h-full px-4">
      &lt;!&ndash;<list-ui
        tag="router-link"
        class="mb-2 capitalize"
        to="/">
        <mdicon
          name="archive-outline"
          slot="prefix"></mdicon>
        Home
      </list-ui>&ndash;&gt;
      <div class="library">
        <p class="mb-4">Administration</p>
        <list-ui
          tag="router-link"
          class="mb-2 capitalize"
          to="/admin/dashboard">
          <mdicon
            name="view-dashboard"
            slot="prefix"></mdicon>
          Dashbaord
        </list-ui>
        <list-ui
          tag="router-link"
          class="mb-2 capitalize"
          to="/admin/users">
          <mdicon
            name="account-box"
            slot="prefix"></mdicon>
          Users
        </list-ui>
        <list-ui
          tag="router-link"
          class="mb-2 capitalize"
          to="/admin/projects">
          <mdicon
            name="cube-scan"
            slot="prefix"></mdicon>
          Projects
        </list-ui>
      </div>
    </simplebar>
  </nav>-->
  <div class="w-full" style="background-color: #292a42 !important;">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-8 w-8" :src="logo" alt="Workflow">
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a @click="goTo('Admin Dashboard')"
                class="px-3 py-2 rounded-md text-sm font-medium
                text-white hover:text-white hover:bg-gray-700
                cursor-pointer">
                Dashboard
              </a>
              <a @click="goTo('Admin Users')"
                class="px-3 py-2 rounded-md text-sm font-medium
                text-white hover:text-white hover:bg-gray-700
                cursor-pointer">
                Users
              </a>
              <a @click="goTo('Admin Projects')"
                class="px-3 py-2 rounded-md text-sm font-medium
                text-white hover:text-white hover:bg-gray-700
                cursor-pointer">
                Projects
              </a>
              <a @click="goTo('Admin Snippets')"
                 class="px-3 py-2 rounded-md text-sm font-medium
                text-white hover:text-white hover:bg-gray-700
                cursor-pointer">
                Snippets
              </a>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <a @click="goTo('Snippets')"
               class="px-3 py-2 rounded-md text-sm font-medium
                text-white hover:text-white hover:bg-gray-700
                cursor-pointer">
              CodeSnippets
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable import/no-extraneous-dependencies */

import SideMenu from '~/mixins/SideMenu';
import LogoWhite from '~/assets/logo-white.png';

export default {
  name: 'side-menu-admin',
  mixins: [SideMenu],
  data() {
    return {
      logo: LogoWhite,
    };
  },
  methods: {
    goTo(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>
<style scoped>
@screen lg {
  nav {
    width: 240px;
  }
}
</style>
