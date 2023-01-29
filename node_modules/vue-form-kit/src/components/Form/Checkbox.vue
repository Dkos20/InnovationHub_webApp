<template>
  <div class="form-input-wrap">
    <label class="control control-checkbox relative">
      <input
        :id="id"
        v-model="checkboxValue"
        :dusk="dusk || `form--${name || id || 'input'}`"
        :tabindex="tabindex"
        :type="type"
        :name="name"
        :required="required"
        :disabled="disabled"
        :value="value"
        @change="$emit('change', $event)"
      >
      <div class="control_indicator" />
      <div class="flex">
        <slot
          name="label-prefix"
          v-bind="{required, label}"
        />
        <slot
          name="label"
          v-bind="{required, label}"
        >
          <span
            class="pl-2"
            :class="[required!==null?'form-label--required':'', labelClass]"
            v-html="label"
          />
        </slot>
        <slot
          name="label-suffix"
          v-bind="{required, label}"
        />
      </div>
    </label>
    <div
      v-if="error"
      class="form-validation-error"
      v-html="error"
    />
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'FormCheckbox',
  props: {
    modelValue: {
      type: [String, Boolean, Array],
      default: null,
    },
    error: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'checkbox',
    },
    label: {
      type: String,
      default: null,
    },
    labelClass: {
      type: [String, Object],
      default: null,
    },
    dusk: {
      type: String,
      default: null,
    },
    id: {
      type: String,
      default: null,
    },
    tabindex: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    value: {
      type: [String, Boolean, Number],
      default: null,
    },
    required: {
      type: String,
      default: null,
    },
    disabled: {
      type: [String, Boolean],
      default: null,
    },
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const checkboxValue = ref(props.modelValue);
    watch(checkboxValue, (newVal) => emit('update:modelValue', newVal));
    // eslint-disable-next-line no-return-assign
    watch(() => props.modelValue, (newVal) => checkboxValue.value = newVal);
    return {
      checkboxValue,
    };
  },
};
</script>
