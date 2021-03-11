<template>
  <div class="h-full w-full flex">
    <files></files>
    <router-view />
  </div>
</template>

<script>

import Files from '@/components/Layout/Files.vue';

export default {
  name: 'Manage Snippet',
  components: {
    Files,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped lang="scss">
::v-deep {
  #editing, #preview {
    height: 48%;
    &.h-full {
      height: 100% !important;
    }
  }
}

.separator {
  width: 1px;
  background-color: var(--text-light);
  height: 17.5px;
}
</style>
