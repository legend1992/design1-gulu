<template>
  <div class="tabs-item" :class="itemClasses" @click="itemClick" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabsItem",
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
          active: this.active,
          disabled: this.disabled
        }
      }
    },
    created() {
      if (this.eventBus) {
        this.eventBus.$on('update:selected', ($event, vm) => {
          this.active = $event === this.name
        })
      }
    },
    methods: {
      itemClick() {
        if (this.disabled) {
          return
        }
        this.eventBus && this.eventBus.$emit('update:selected', this.name, this);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-item {
    display: flex;
    flex-shrink: 0;
    padding: .8em 1em;
    cursor: pointer;
    &.active {
      color: blue;
    }
    &.disabled {
      color: gray;
      cursor: not-allowed;
    }
  }
</style>