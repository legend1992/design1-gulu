<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      gutter: {
        type: Number
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
    /*flex-wrap: wrap;*/
    margin-top: 5px;
    text-align: center;
  }
</style>