<template>
  <div
    v-click-outside="closeSelector"
    class="x-selector"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
  >
    <div
      class="x-selector__input"
      :class="[inputClasses]"
      @click="onClickInput"
    >
      <slot
        name="input"
        v-bind="{toggleSelector, isOpen}"
      >
        <div class="x-selector__label">
          <span
            class="text-indigo-dark"
            v-html="label"
          />
        </div>
      </slot>
    </div>
    <div
      class="x-selector__list"
      :class="[{'hidden':!isOpen}, listClasses]"
    >
      <slot v-bind="{toggleSelector, isOpen}" />
    </div>
  </div>
</template>

<script>
import SelectMixin from './SelectMixin';

export default {
  name: 'CustomSelect',
  mixins: [
    SelectMixin,
  ],
  emits: [
    'mouseenter',
    'mouseleave',
  ],
  methods: {
    mouseenter() {
      this.$emit('mouseenter');
    },
    mouseleave() {
      this.$emit('mouseleave');
    },
  },
};
</script>
