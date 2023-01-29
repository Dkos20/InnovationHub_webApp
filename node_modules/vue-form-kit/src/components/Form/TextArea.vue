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
    <textarea
      :id="id"
      :value="modelValue"
      :dusk="dusk || `form--${name || id || 'input'}`"
      :tabindex="tabindex"
      :name="name"
      :autocomplete="autocomplete"
      :required="required"
      :disabled="disabled"
      class="form-input-text form-input-textarea w-full"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :minlength="minlength"
      :cols="cols"
      :rows="rows"
      @input="(event) => $emit('update:modelValue', event.target.value)"
    />
  </component>
</template>

<script>
export default {
  name: 'FormTextArea',
  props: {
    modelValue: {
      type: String,
      default: '',
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
    maxlength: {
      type: String,
      default: null,
    },
    minlength: {
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
    cols: {
      type: [Number, String],
      default: null,
    },
    rows: {
      type: [Number, String],
      default: null,
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
