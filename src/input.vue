<template>
  <div class="wrapper">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly">
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 14px;
  $box-shadow-color: rgba(0, 0, 0, .5);
  .wrapper {
    margin-bottom: 20px;
    font-size: $font-size;
    input {
      height: $height;
      padding: 0 .5em;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      &:hover {
        border-color: $border-color-hover;
      }
      &:focus {
        box-shadow: inset 0 1px 3px $box-shadow-color;
        outline: none;
      }
      &[disabled], &[readonly] {
        border-color: #bbb;
        color: #bbb;
      }
      &[disabled] {
        cursor: not-allowed;
      }
    }
  }
</style>