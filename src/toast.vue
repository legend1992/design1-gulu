<template>
  <div class="toast" :class="toastClass">
    <div class="message">
      <div class="content" v-if="enableHtml" v-html="$slots.default[0]"></div>
      <slot v-else></slot>
    </div>
    <span v-if="closeButton" class="closeButton" @click="closeToast">{{closeButton.text}}</span>
  </div>
</template>

<script>
  export default {
    name: "toast",
    props: {
      isAutoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 50000
      },
      closeButton: {
        type: Object,
        default: () => {
          return {
            text: '关闭',
            callback: undefined
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'middle', 'bottom'].indexOf(value) > -1
        }
      }
    },
    mounted() {
      this.autoClose()
    },
    computed: {
      toastClass() {
        return {
          [`position-${this.position}`]: true
        }
      }
    },
    methods: {
      close() {
        this.$el.remove();
        this.$destroy();
      },
      autoClose() {
        if (this.isAutoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoCloseDelay * 1000)
        }
      },
      closeToast() {
        this.close();
        this.closeButton && typeof this.closeButton.callback === 'function' ? this.closeButton.callback() : '';
      }
    }
  }
</script>

<style scoped lang="scss">
  $font-size: 14px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  .toast {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 1em;
    display: flex;
    align-items: center;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
    color: #fff;
    font-size: $font-size;
    white-space: nowrap;
    &.position-top {
      top: 0;
    }
    &.position-bottom {
      bottom: 0;
    }
    &.position-middle {
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .message {
      display: inline-block;
      position: relative;
      padding: .8em 1em .8em 0;
      margin-right: 1em;
      text-overflow: ellipsis;
      white-space: pre-wrap;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        border-right: 1px solid #666;
      }
      .content {
        line-height: 1.2;
      }
    }
    .closeButton {
      display: inline-block;
    }
  }
</style>