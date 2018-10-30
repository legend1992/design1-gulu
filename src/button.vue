<template>
  <button class="g-button" :class="{ [`icon-${iconPosition}`]: icon }" @click="$emit('click')">
    <g-icon v-if="icon && !loading" :icon="icon"></g-icon>
    <g-icon v-if="loading" class="loading" icon="loading"></g-icon>
    <div class="content">
      <slot>按钮</slot>
    </div>
  </button>
</template>

<script>
  import Icon from './icon'

  export default {
    components: {
      'g-icon': Icon
    },
    // props: ["icon"]
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return value === 'left' || value === 'right'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .g-button {
    display: inline-flex;
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    cursor: pointer;
    justify-content: center;
    align-items: center;
    vertical-align: top;
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background-color: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }

    &.icon-left {
      > .g-icon {
        margin-right: .3em;
      }
    }
    &.icon-right {
      > .g-icon {
        order: 2;
        margin-left: .3em;
      }
      > .content {
        order: 1;
      }
    }
  }
</style>