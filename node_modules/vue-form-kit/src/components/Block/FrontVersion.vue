<template>
  <a :title="'front' + packageVersion">
    v{{ v }}
    <span
      v-if="sronly"
      class="sr-only"
    >
      {{ sronly }}
    </span>
  </a>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'FrontVersion',
  props: {
    v: {
      type: String,
      default: '0.0.0',
    },
    frontV: {
      type: String,
      default: null,
    },
    sronly: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const packageVersion = ref(props.frontV || process.env.PACKAGE_VERSION);

    return { packageVersion };
  },
};
</script>
