<template>
  <div :id="id" class="tab-snippet w-full" :class="{ 'show': id === active }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabSnippet',
  props: {
    id: String,
    active: String,
  },
};
</script>

<style scoped lang="scss">
.tab-snippet {
  display: none;
}
.tab-snippet.show {
  display: block;
}
</style>
