<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "Tabs",
    props: {
      selected: {
        type: String,
        require: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) > -1
        }
      }
    },
    data() {
      return {
        eventBus: new Vue()
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    methods: {
      selectTab () {
        this.$children.forEach((vm) => {
          if (vm.$options.name === 'TabsHead') {
            vm.$children.forEach((childVm) => {
              if (childVm.$options.name === 'TabsItem' && childVm.name === this.selected) {
                this.eventBus.$emit('update:selected', this.selected, childVm)
              }
            })
          }
        })
      }
    },
    mounted() {
      this.selectTab()
    }
  }
</script>

<style scoped>

</style>