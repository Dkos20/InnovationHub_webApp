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
    <component
      :is="`${$formKitConfigs.componentPrefix}SelectStandard`"
      :id="id"
      :model-value="modelValue"
      :options="options"
      :name="name"
      :label="label"
      :required="required"
      :tabindex="tabindex"
      class="w-full"
      @update:model-value="$emit('update:modelValue', $event)"
    />
  </component>
</template>

<script>
export default {
  name: 'FormSelect',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    tabindex: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      default: () => [],
    },
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
    name: {
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
  emits: ['update:modelValue'],
};
</script>
