<template>
  <div
    class="form-input-wrap"
    :class="{'has-validation-error': !!error}"
  >
    <label
      v-if="label"
      :for="id"
      class="form-input-label"
      :class="[required===false?'':'form-input-label--required']"
    >
      {{ label }}
    </label>
    <div :class="inputWrapClass">
      <slot name="before-input" />
      <slot />
      <slot name="after-input" />
    </div>
    <div
      v-if="error"
      class="form-validation-error"
      v-html="error"
    />
  </div>
</template>

<script>
export default {
  name: 'FormInputWrapper',
  props: {
    label: {
      type: String,
      default: null,
    },
    error: {
      type: String,
      default: null,
    },
    id: {
      type: String,
      default: null,
    },
    required: {
      type: [String, Boolean],
      default: false,
    },
    inputWrapClass: {
      type: [String, Object, Array],
      default: null,
    },
  },
};
</script>
