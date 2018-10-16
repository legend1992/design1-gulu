<template>
  <div class="col" :class="span && [`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      'span': {
        type: Number
      }
    }
  }
</script>

<style scoped lang="scss">
  .col{
    width: 50%;
    border: 1px solid red;
    @for $n from 1 through 24 {
      &-#{$n} { width: $n/24 * 100%; }
    }
  }
</style>