<template>
  <v-popover placement="bottom" offset="10">
    <div class="select-ui" tabindex="0" :class="{ block }">
      <div class="select-ui--inner">
        <mdicon :name="prefixIcon" v-if="prefixIcon" class="mr-2"></mdicon>
        <slot name="selected" :value="value">
          <p class="text-overflow text">{{ value }}</p>
        </slot>
        <mdicon name="chevron-down" class="ml-3"></mdicon>
      </div>
    </div>
    <card-ui slot="popover" class="shadow-xl border select-ui--content">
      <p class="font-semibold mb-3" v-if="!!title">{{ title }}</p>
      <list-ui
       dense
       class="cursor-pointer"
       v-for="item in list"
       :key="item"
       @click="emitEvent(item)"
       v-close-popover>
        <slot name="option" :value="item">{{ item }}</slot>
      </list-ui>
    </card-ui>
  </v-popover>
</template>
<script>
import '~/assets/scss/components/_select.scss';

export default {
  name: 'select-ui',
  props: {
    value: [String, Number],
    list: Array,
    block: Boolean,
    title: String,
    prefixIcon: String,
  },
  methods: {
    emitEvent(value) {
      this.$emit('input', value);
      this.$emit('change', value);
    },
  },
};
</script>
