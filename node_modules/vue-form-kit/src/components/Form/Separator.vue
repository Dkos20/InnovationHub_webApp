<template>
  <div
    :class="[
      'form-separator',
      `form-separator-h${level}`,
      separatorStyle ?`form-separator--${separatorStyle}`:'',
      symmetric !== false?'form-separator--symmetric':'',
    ]"
  />
</template>

<script>
export default {
  name: 'FormSeparator',
  props: {
    level: {
      type: [Number, String],
      default: 1,
    },
    symmetric: {
      type: [Boolean, String],
      default: false,
    },
    separatorStyle: {
      type: String,
      default: null,
    },
  },
};
</script>
