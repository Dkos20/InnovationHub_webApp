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
    <input
      :id="id"
      :value="modelValue"
      :dusk="dusk || `form--${name || id || 'input'}`"
      :tabindex="tabindex"
      :name="name"
      :type="type"
      :autocomplete="autocomplete"
      :required="required"
      :disabled="disabled"
      class="form-input-text w-full"
      :class="inputClass"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :minlength="minlength"
      :max="max"
      :min="min"
      :step="step"
      @input="(event) => $emit('update:modelValue', event.target.value)"
    >
  </component>
</template>

<script>
export default {
  name: 'FormTextInput',
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
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
    type: {
      type: String,
      default: null,
    },
    maxlength: {
      type: String,
      default: null,
    },
    minlength: {
      type: String,
      default: null,
    },
    max: {
      type: String,
      default: null,
    },
    min: {
      type: String,
      default: null,
    },
    step: {
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
    dusk: {
      type: String,
      default: null,
    },
    inputWrapClass: {
      type: [String, Object, Array],
      default: null,
    },
  },
  emits: ['update:modelValue'],
};
</script>
