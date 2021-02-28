<template>
  <button
    class="button-ui focus:outline-none flex justify-around align-center "
    v-on="$listeners"
    :type="(submit == 'true') ? 'submit' : 'button'"
    :style="{ width }"
    :disabled="disabled"
    :class="[
      type,
      {
        disabled,
        loading,
        round,
        icon,
        small,
        dark,
        plain,
        large,
        block,
      },
    ]"
  >
    <fontawesome-icon icon="spinner" pulse spin v-if="loading"></fontawesome-icon>
    <span class="button-ui__text" v-else>
      <slot></slot>
    </span>
  </button>
</template>
<script>
import '~/assets/scss/components/_button.scss';

export default {
  name: 'button-ui',
  props: {
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'primary', 'secondary', 'warning', 'danger', 'submit', 'button'].indexOf(value) !== -1;
      },
    },
    width: [Number, String],
    dark: Boolean,
    disabled: Boolean,
    block: Boolean,
    loading: Boolean,
    round: Boolean,
    small: Boolean,
    icon: Boolean,
    plain: Boolean,
    large: Boolean,
    submit: {
      type: String,
      default: 'false',
      validator(value) {
        return value;
      },
    },
  },
};
</script>
