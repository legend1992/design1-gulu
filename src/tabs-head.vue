<template>
  <div class="tabs-head" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabsHead",
    inject: ['eventBus'],
    methods: {
      updateLinePosition (selectedVm) {
        let {width, left} = selectedVm.$el.getBoundingClientRect()
        let {left: left2} = this.$refs.head.getBoundingClientRect()
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left - left2}px`
      }
    },
    mounted() {
      this.eventBus.$on('update:selected', (item, vm) => {
        this.updateLinePosition(vm)
      })
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-head{
    display: flex;
    justify-content: flex-start;
    position: relative;
    border-bottom: 1px solid gray;
    .line{
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid blue;
      transition: all 350ms;
    }
    >.actions-wrapper {
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em;
    }
  }
</style>