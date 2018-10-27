<template>
  <div class="tabs-item" :class="itemClasses" @click="itemClick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tabs-item",
    inject: ['eventBus'],
    props: {
      name: {
        type: String,
        require: true
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        active: false
      }
    },
    computed: {
      itemClasses() {
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
    },
    methods: {
      itemClick() {
        if(this.disable){ return };
        this.eventBus && this.eventBus.$emit('update:selected', this.name);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-item{
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active{
      background: red;
    }
  }
</style>