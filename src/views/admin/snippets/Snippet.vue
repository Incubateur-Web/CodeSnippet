<template>
  <div>
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-4 lg:px-8">
        <div class="flex items-baseline space-x-4">
          <div class="px-3 rounded-md font-bold">
            index.js
          </div>
          <a @click="goTo('Admin Snippet Details')"
             class="px-3 py-1 rounded-md text-sm font-medium
                hover:text-primary cursor-pointer">
            Details
          </a>
        </div>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-3 sm:px-0">
          <router-view />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Snippet',
  methods: {
    goTo(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>

<style scoped>

</style>
