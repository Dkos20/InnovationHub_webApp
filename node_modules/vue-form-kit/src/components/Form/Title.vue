<template>
  <div
    :class="['form-title', `form-title-h${level}`]"
  >
    <slot>
      {{ title }}
    </slot>
  </div>
</template>

<script>
export default {
  name: 'FormTitle',
  props: {
    title: {
      type: String,
      default: null,
    },
    level: {
      type: [Number, String],
      default: 2,
    },
  },
};
</script>
