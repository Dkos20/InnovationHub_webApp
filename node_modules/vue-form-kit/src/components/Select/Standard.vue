<template>
  <div
    v-click-outside="onClickOutside"
    class="x-selector"
    :class="[{disabled}, suffix?`x-selector--${suffix}`:'']"
    :tabindex="tabindex"
    @keydown.space.prevent="toggleSelector"
    @keydown.arrow-down.prevent="onArrowDownClick"
    @blur="closeSelector"
  >
    <div
      class="x-selector__input"
      :class="[{'active':isOpen}, inputClasses]"
      @click="toggleSelector"
    >
      <div
        class="x-selector__label"
        :data-value="selected?.value"
      >
        <slot
          v-if="selectedLabel"
          name="selectedLabel"
          v-bind="{selectedLabel}"
        >
          <span
            class="whitespace-nowrap"
            v-html="selectedLabel"
          />
        </slot>
        <slot
          v-else
          name="placeholder"
          v-bind="{label}"
        >
          <span
            class="x-selector__placeholder whitespace-no-wrap"
            v-html="label"
          />
        </slot>
      </div>
      <slot
        name="option-check-icon"
        v-bind="{isOpen, dropIcon}"
      >
        <svg
          v-if="dropIcon"
          class="x-selector__drop-icon origin-center w-4"
          :class="{'transform rotate-180':isOpen}"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17
          0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7
          4.7-12.3 0-17z"
            class=""
          />
        </svg>
      </slot>
    </div>
    <div
      class="x-selector__list"
      :class="[{'hidden':!isOpen}, listClasses]"
    >
      <div
        v-for="option in options"
        :key="option.value"
        class="x-selector__option"
        :dusk="'x-selector__option-' + option.value"
        @click.prevent="onSelect(option)"
      >
        <div
          class="x-selector__option-value"
          v-html="option.label"
        />
        <div
          v-if="selected && option && option.value === selected.value"
          class="x-selector__option-selected"
        >
          <slot name="option-check-icon">
            <svg
              viewBox="0 0 512 512"
              class="w-4"
            >
              <path
                fill="currentColor"
                d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284
              28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971
              0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"
                class=""
              />
            </svg>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectMixin from './SelectMixin';

export default {
  name: 'StandardSelect',
  mixins: [
    SelectMixin,
  ],
};
</script>
