<template>
  <div class="tabs-pane" :class="paneClasses" v-show="active">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabsPane",
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
    mounted() {
      if(this.eventBus){
        this.eventBus.$on('update:selected', ($event)=> {
          console.log($event);
          this.active = $event === this.name
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-pane{
    padding: 1em;
  }
</style>