<template>
  <div
    v-if="value"
    class="form-flash"
    :class="[`form-flash--${type}`, required===false?'':'form-flash--required']"
  >
    <div v-html="value" />
    <a
      v-if="required===false"
      class="form-flash__close"
      @click.prevent="value = null"
    >
      <component
        :is="`${$formKitConfigs.componentPrefix}IconClose`"
        class="w-4 h-4"
      />
    </a>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'BlockFlash',
  props: {
    content: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'success',
    },
    required: {
      type: [String, Boolean],
      default: false,
    },
  },
  setup(props) {
    const value = ref(props.content);
    // eslint-disable-next-line no-return-assign
    watch(() => props.content, (newVal) => value.value = newVal);

    return {
      value,
    };
  },
};
</script>
