<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabs-head",
    inject: ['eventBus'],
    created() {
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-head{
    display: flex;
    justify-content: flex-start;
    border: 1px solid red;
    >.actions-wrapper {
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em;
    }
  }
</style>