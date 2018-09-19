<template>
  <svg class="g-icon">
    <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
</template>

<script>
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