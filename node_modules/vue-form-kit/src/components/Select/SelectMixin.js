export default {
  props: {
    tabindex: {
      type: String,
      default: null,
    },
    dropIcon: {
      type: Boolean,
      default: true,
    },
    label: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: [Number, String],
      default: null,
    },
    defaultValue: {
      type: [Number, String],
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    deselectable: {
      type: Boolean,
      default: false,
    },
    listClasses: {
      type: [Object, Array],
      default: () => ({}),
    },
    inputClasses: {
      type: Object,
      default: () => ({}),
    },
    open: {
      type: Boolean,
      default: false,
    },
    closeOnClickOutside: {
      type: Boolean,
      default: true,
    },
    customOnClickInput: {
      type: Function,
      default: null,
    },
    initializeDefaultValue: {
      type: Boolean,
      default: false,
    },
    suffix: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      selected: null,
      isOpen: false,
      initialized: false,
    };
  },
  mounted() {
    this.findSelected();
    this.initialized = true;
    if (this.modelValue) {
      this.findSelected();
    }
  },
  computed: {
    selectedLabel() {
      if (this.selected) {
        return this.selected.label;
      }
      return null;
    },
  },
  watch: {
    modelValue() {
      this.findSelected();
    },
    open(newVal) {
      if (this.isOpen !== newVal) {
        this.toggleSelector();
      }
    },
    isOpen(newVal) {
      this.$emit('toggle', newVal);
    },
    disabled(newValue) {
      if (newValue) {
        this.closeSelector();
      }
    },
  },
  methods: {
    findSelected() {
      const result = this.options.find((obj) => {
        if (this.initialized) {
          return obj.value === this.modelValue;
        }
        // prevent compare int
        return `${obj.value}` === `${this.defaultValue}`;
      });
      if (!this.initialized && this.initializeDefaultValue) {
        if (result) {
          this.onSelect(result);
        }
      } else if (result) {
        this.selected = result;
      } else {
        this.selected = null;
      }
    },
    emitInput() {
      if (this.selected) {
        this.$emit('update:modelValue', this.selected.value);
        return;
      }
      this.$emit('update:modelValue', null);
    },
    onSelect(option) {
      // eslint-disable-next-line eqeqeq
      if (this.deselectable && this.selected && this.selected.value == option.value) {
        this.selected = null;
      } else {
        this.selected = option;
      }
      this.emitInput();
      this.closeSelector();
    },
    onArrowDownClick() {
      if (!this.options.length) {
        return;
      }

      if (!this.selected) {
        // eslint-disable-next-line prefer-destructuring
        this.selected = this.options[0];
      } else {
        const index = parseInt(this.options.findIndex((option) => option.value === this.selected.value), 10);
        if (Number.isNaN(index) || (this.options.length === (index + 1))) {
          // eslint-disable-next-line prefer-destructuring
          this.selected = this.options[0];
        } else {
          this.selected = this.options[index + 1];
        }
      }
      this.emitInput();
    },
    onClickInput() {
      if (this.customOnClickInput) {
        this.customOnClickInput(this);
      } else {
        this.toggleSelector();
      }
    },
    toggleSelector() {
      if (!this.disabled) {
        this.isOpen = !this.isOpen;
      }
    },
    closeSelector() {
      this.isOpen = false;
    },
    openSelector() {
      this.isOpen = true;
    },
    onClickOutside() {
      if (this.closeOnClickOutside) {
        this.closeSelector();
      }
    },
  },
};
