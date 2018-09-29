<template>
  <svg class="g-icon">
    <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
</template>

<script>
  import './svg'
  export default {
    props: ["icon"]
  }
</script>

<style lang="scss">
  .g-icon {
    width: 1em;
    height: 1em;
  }
</style>