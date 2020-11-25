<template>
  <div class="pt-3 lg:pt-6 pb-3 px-6">
    <h1 style="font-size: 2rem">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'admin-header',
  props: {
    title: String,
  },
};
</script>

<style scoped>

</style>
