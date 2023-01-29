<template>
  <div
    class="burger-menu"
    @click.prevent="$emit('click')"
  >
    <span />
    <span />
    <span />
    <span />
  </div>
</template>

<script>
export default {
  name: 'BlockBurger',
  emits: ['click'],
};
</script>
