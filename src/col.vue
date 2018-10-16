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
    computed: {
      colClass() {
        let {span, offset, phone, ipad, narrowPc, pc, widePc} = this;
        return [
          span && 'col-' + span,
          offset && 'col-offset-' + offset,
          phone && phone.span && 'col-phone-' + phone.span,
          phone && phone.offset && 'col-phone-offset-' + phone.offset,
          ipad && ipad.span && 'col-ipad-' + ipad.span,
          ipad && ipad.offset && 'col-ipad-offset-' + ipad.offset,
          narrowPc && narrowPc.span && 'col-narrowPc-' + narrowPc.span,
          narrowPc && narrowPc.offset && 'col-narrowPc-offset-' + narrowPc.offset,
          pc && pc.span && 'col-pc-' + pc.span,
          pc && pc.offset && 'col-pc-offset-' + pc.offset,
          widePc && widePc.span && 'col-widePc-' + widePc.span,
          widePc && widePc.offset && 'col-widePc-offset-' + widePc.offset
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
      &.col-#{$name}-#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.#{$name}-offset-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  .col {
    @for $n from 1 through 24 {
      &-#{$n} {
        width: $n/24 * 100%;
      }
    }
    @for $n from 1 through 24 {
      &-offset-#{$n} {
        margin-left: $n/24 * 100%;
      }
    }
    @media (max-width: 1600px) {
      @include set-col-widthAndOffset(widePc);
    }
    @media (max-width: 1200px) {
      @include set-col-widthAndOffset(pc);
    }
    @media (max-width: 992px) {
      @include set-col-widthAndOffset(narrowPc);
    }
    @media (max-width: 768px) {
      @include set-col-widthAndOffset(ipad);
    }
    @media (max-width: 576px) {
      @include set-col-widthAndOffset(phone);
    }
    > div {
      border: 1px solid red;
    }
  }
</style>