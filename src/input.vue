<template>
  <div class="wrapper" :class="{ error }">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly">
    <template v-if="error">
      <g-icon icon="error"></g-icon>
      <span class="error-message">{{ error }}</span>
    </template>
    <template v-if="success">
      <g-icon icon="success"></g-icon>
    </template>
    <template v-if="warning">
      <g-icon icon="warning"></g-icon>
      <span class="warning-message">{{ warning }}</span>
    </template>
  </div>
</template>

<script>
  import Icon from './icon'

  export default {
    components: {
      'g-icon': Icon
    },
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
      },
      error: {
        type: String
      },
      success: {
        type: Boolean,
        default: false
      },
      warning: {
        type: String
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
  $red: #F1453D;
  .wrapper {
    display: inline-flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: $font-size;
    &.error {
      input {
        border-color: $red;
      }
    }
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
    svg{
      margin: 0 .5em;
    }
    .error-message {
      color: var(--error-color);
    }
    .warning-message {
      color: var(--warning-color);
    }
  }
</style>