<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "g-layout",
    data(){
      return {
        layoutClass: {
          hasSider: false
        }
      }
    },
    mounted () {
      this.$children.forEach((vm)=> {
        if(vm.$options.name === 'g-sider'){
          this.layoutClass.hasSider = true;
        }
      })
    }
  }
</script>

<style scoped lang="scss">
  .layout{
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    &.hasSider{
      flex-direction: row;
      flex: 1;
    }
  }
</style>