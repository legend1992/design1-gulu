<template>
  <svg class="g-icon" :class="`icon-${icon}`">
    <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
</template>

<script>
  import './svg'
  export default {
    props: ["icon"]
  }
</script>

<style lang="scss" scoped>
  @keyframes spin {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
  .loading{
    animation: spin 2s infinite linear;
  }
  .g-icon {
    width: 1em;
    height: 1em;
    &.icon-error{
      fill: var(--error-color);
    }
    &.icon-warning{
      fill: var(--warning-color);
    }
    &.icon-success{
      fill: var(--success-color);
    }
  }
</style>