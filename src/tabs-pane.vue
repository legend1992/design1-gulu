<template>
  <div class="tabs-pane" :class="paneClasses" v-show="active">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tabs-pane",
    inject: ['eventBus'],
    props: {
      name: {
        type: String,
        require: true
      }
    },
    data() {
      return {
        active: false
      }
    },
    computed: {
      paneClasses() {
        return {
          active: this.active
        }
      }
    },
    created() {
      if(this.eventBus){
        this.eventBus.$on('update:selected', ($event)=> {
          this.active = $event === this.name
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-pane{
    &.active{
      background: red;
    }
  }
</style>