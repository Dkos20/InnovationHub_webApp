<template>
  <component
    :is="`${$formKitConfigs.componentPrefix}FormInputWrapper`"
    :id="id"
    :label="label"
    :error="error"
    :required="required"
    :input-wrap-class="inputWrapClass"
  >
    <template
      v-for="(_, slotName) in $slots"
      #[slotName]="slotData"
    >
      <slot
        :name="slotName"
        v-bind="slotData"
      />
    </template>
    <span
      v-if="modelValue"
      class="form-input-action"
      @click.prevent="hidePassword = !hidePassword"
    >
      <slot
        v-if="hidePassword"
        name="show-button"
      >
        Show
      </slot>
      <slot
        v-else
        name="hide-button"
      >
        Hide
      </slot>
    </span>
    <input
      :id="id"
      :value="modelValue"
      :dusk="dusk || `form--${name || id || 'input'}`"
      :tabindex="tabindex"
      :name="name"
      :type="hidePassword?'password':'text'"
      :autocomplete="autocomplete"
      :required="required"
      :disabled="disabled"
      class="form-input-text w-full"
      :class="inputClass"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :minlength="minlength"
      @input="(event) => $emit('update:modelValue', event.target.value)"
    >
  </component>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'FormPassword',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    dusk: {
      type: String,
      default: null,
    },
    inputClass: {
      type: [String, Array, Object],
      default: null,
    },
    tabindex: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    placeholder: {
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
    name: {
      type: String,
      default: null,
    },
    autocomplete: {
      type: String,
      default: null,
    },
    required: {
      type: [String, Boolean],
      default: false,
    },
    disabled: {
      type: [String, Boolean],
      default: false,
    },
    maxlength: {
      type: String,
      default: null,
    },
    minlength: {
      type: String,
      default: null,
    },
    inputWrapClass: {
      type: [String, Object, Array],
      default: null,
    },
  },
  emits: ['update:modelValue'],
  setup() {
    const hidePassword = ref(true);

    return {
      hidePassword,
    };
  },
};
</script>
