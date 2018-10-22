<template>
  <div class="toast">
    <slot></slot>
    <!--<div></div>-->
    <span class="closeButton">关闭</span>
  </div>
</template>

<script>
  export default {
    name: "toast"
  }
</script>

<style scoped lang="scss">
  $font-size: 14px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  .toast{
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: .8em 1em;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
    color: #fff;
    font-size: $font-size;
    .closeButton{
      display: inline-block;
    }
  }
</style>