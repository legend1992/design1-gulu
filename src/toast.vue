<template>
  <div class="wrapper" :class="toastClass">
    <div class="toast">
      <div class="message">
        <div class="content" v-if="enableHtml" v-html="$slots.default[0]"></div>
        <slot v-else></slot>
      </div>
      <span v-if="closeButton" class="closeButton" @click="closeToast">{{closeButton.text}}</span>
    </div>
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
        this.$emit('close');
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
  @keyframes fade-in {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 100%;
    }
  }
  @keyframes fade {
    0%{ opacity: 0; }
    100%{ opacity: 100%; }
  }
  @keyframes slide-down {
    0%{ opacity: 0; transform: translateY(-100%); }
    100%{ opacity: 100%; transform: translateY(0); }
  }
  @keyframes slide-up {
    0%{ opacity: 0; transform: translateY(100%); }
    100%{ opacity: 100%; transform: translateY(0); }
  }
  .wrapper{
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    &.position-top {
      top: 0;
      .toast{
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        animation: slide-down ease .3s;
      }
    }
    &.position-bottom {
      bottom: 0;
      .toast{
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        animation: slide-up ease .3s;
      }
    }
    &.position-middle {
      top: 50%;
      transform: translate(-50%, -50%);
      .toast{
        animation: fade-in ease .3s;
      }
    }
  }
  .toast {
    padding: 0 1em;
    display: flex;
    align-items: center;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
    color: #fff;
    font-size: $font-size;
    white-space: nowrap;
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