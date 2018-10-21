<template>
  <div class="sider" :class="{ collapsed: collapsed }">
    <slot></slot>
    <button @click="collapsed = !collapsed">collapse</button>
  </div>
</template>

<script>
  export default {
    name: "g-sider",
    data() {
      return {
        collapsed: false
      }
    }
  }
</script>

<style scoped>
  .sider {
    flex: 0 0 200px;
    transition: all 1s;
  }

  .collapsed {
    flex: 0 0 60px;
  }
</style>