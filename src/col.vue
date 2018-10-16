<template>
  <div class="col" :class="colClass" :style="colStyle">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  let validator = (value) => {
    let keys = Object.keys(value);
    let valid = true;
    keys.forEach(key => {
      if (!['span', 'offset'].includes(key)) {
        valid = false
      }
    });
    return valid
  };
  export default {
    props: {
      span: { type: Number },
      offset: { type: Number },
      phone: { type: Object, validator },
      ipad: { type: Object, validator },
      narrowPc: { type: Object, validator },
      pc: { type: Object, validator },
      widePc: { type: Object, validator }
    },
    data() {
      return {
        gutter: 0
      }
    },
    methods: {
      createClasses (obj, str = '') {
        if (!obj) { return [] }
        let array = [];
        if (obj.span) { array.push(`col-${str}${obj.span}`) }
        if (obj.offset) { array.push(`col-${str}offset-${obj.offset}`) }
        return array
      }
    },
    computed: {
      colClass() {
        let { span, offset, phone, ipad, narrowPc, pc, widePc } = this;
        let createClasses = this.createClasses;
        return [
          ...createClasses({span, offset}),
          ...createClasses(phone, 'phone-'),
          ...createClasses(ipad, 'ipad-'),
          ...createClasses(narrowPc, 'narrowPc-'),
          ...createClasses(pc, 'pc-'),
          ...createClasses(widePc, 'widePc-')
        ]
      },
      colStyle() {
        if (this.gutter) {
          return {
            paddingLeft: this.gutter / 2 + 'px',
            paddingRight: this.gutter / 2 + 'px'
          }
        } else {
          return {}
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @mixin set-col-widthAndOffset($name) {
    @for $n from 1 through 24 {
      &.col#{$name}-#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.#{$name}offset-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  .col {
    @include set-col-widthAndOffset('');
    @media (max-width: 1600px) {
      @include set-col-widthAndOffset(-widePc);
    }
    @media (max-width: 1200px) {
      @include set-col-widthAndOffset(-pc);
    }
    @media (max-width: 992px) {
      @include set-col-widthAndOffset(-narrowPc);
    }
    @media (max-width: 768px) {
      @include set-col-widthAndOffset(-ipad);
    }
    @media (max-width: 576px) {
      @include set-col-widthAndOffset(-phone);
    }
    > div {
      border: 1px solid red;
    }
  }
</style>