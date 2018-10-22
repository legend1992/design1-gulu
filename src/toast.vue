<template>
  <div class="toast">
    <div class="message">
      <slot></slot>
    </div><span v-if="closeButton" class="closeButton" @click="closeToast">{{closeButton.text}}</span>
  </div>
</template>

<script>
  export default {
    name: "toast",
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 50000
      },
      closeButton: {
        type: Object,
        default: ()=> {
          return {
            text: '关闭',
            callback: (toast)=> {
              toast.close()
            }
          }
        }
      }
    },
    created(){
      console.log(this.closeButton);
    },
    mounted(){
      if(this.autoClose) {
        setTimeout(()=>{
          this.close()
        },this.autoCloseDelay * 1000)
      }
    },
    methods: {
      close() {
        this.$el.remove();
        this.$destroy();
      },
      closeToast(){
        this.close();
        this.closeButton.callback();
      }
    }
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
    padding: 0 1em;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
    color: #fff;
    font-size: $font-size;
    .message{
      display: inline-block;
      position: relative;
      padding: .8em 1em .8em 0;
      margin-right: 1em;
      &::after{
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        border-right: 1px solid #666;
      }
    }
    .closeButton{
      display: inline-block;
    }
  }
</style>