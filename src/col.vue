<template>
  <div class="col" :class="colClass" :style="colStyle">
    <div><slot></slot></div>
  </div>
</template>

<script>
  export default {
    props: {
      span: {
        type: Number
      },
      offset: {
        type: Number
      }
    },
    data (){
      return {
        gutter: 0
      }
    },
    computed: {
      colClass() {
        let classArr = [];
        this.span ? classArr.push('col-'+this.span) : "";
        this.offset ? classArr.push('col-offset-'+this.offset) : "";
        return classArr
      },
      colStyle() {
        if(this.gutter){
          return {
            paddingLeft: this.gutter/2 + 'px',
            paddingRight: this.gutter/2 + 'px'
          }
        }else{
          return {}
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .col{
    @for $n from 1 through 24 {
      &-#{$n} { width: $n/24 * 100%; }
    }
    @for $n from 1 through 24 {
      &-offset-#{$n} { margin-left: $n/24 * 100%; }
    }
    > div{
      border: 1px solid red;
    }
  }
</style>