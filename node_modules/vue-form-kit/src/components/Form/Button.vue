<template>
  <component
    :is="as"
    class="cursor-pointer btn"
    :class="[`btn--${btnStyle}`]"
  >
    <slot>
      {{ text }}
    </slot>
  </component>
</template>

<script>
export default {
  name: 'FormButton',
  props: {
    as: {
      type: String,
      default: 'a',
    },
    text: {
      type: String,
      default: 'Submit',
    },
    btnStyle: {
      type: String,
      default: 'default',
    },
  },
};
</script>
