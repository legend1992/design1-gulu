<template>
  <div class="row" :class="rowClass" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      gutter: {
        type: Number
      },
      align: {
        type: String,
        validate(value){
          return ['left', 'right', 'center'].includes(value)
        }
      }
    },
    mounted(){
      if(this.gutter){
        this.$children.forEach($el=> {
          $el.gutter = this.gutter;
        })
      }
    },
    computed: {
      rowClass() {
        return [ this.align && ('align-' + this.align)]
      },
      rowStyle() {
        if(this.gutter){
          return {
            marginLeft: -this.gutter/2 + 'px',
            marginRight: -this.gutter/2 + 'px'
          }
        }else{
          return {}
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .row{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 5px;
    text-align: center;
    &.align-center{
      justify-content: center;
    }
    &.align-right{
      justify-content: flex-end;
    }
  }
</style>