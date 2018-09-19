<template>
  <button class="g-button" :class="{ [`icon-${iconPosition}`]: icon }">
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
    <div class="content">
      <slot>按钮</slot>
    </div>
  </button>
</template>

<script>
  export default {
    // props: ["icon"]
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return value==='left' || value==='right'
        }
      }
    }
  }
</script>

<style lang="scss">
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

    &.icon-left{
      > .icon{
        order: 1;
        margin-right: .3em;
      }
      > .content{
        order: 2;
      }
    }
    &.icon-right{
      > .icon{
        order: 2;
        margin-left: .3em;
      }
      > .content{
        order: 1;
      }
    }
  }
</style>