const expect = chai.expect;
import Vue from 'vue';
import Input from '../src/input';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.exist;
  });
  describe('props', () => {
    it('接收value', () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor({
        propsData: {
          value: '王五'
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.value).to.equal('王五');
      vm.$destroy()
    });
    it('接收disabled', () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.disabled).to.equal(true);
      vm.$destroy()
    });
    it('接收readonly', () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.readOnly).to.equal(true);
      vm.$destroy()
    });
    it('接收error', () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor({
        propsData: {
          error: '错误'
        }
      }).$mount();
      const useElement = vm.$el.querySelector('use');
      expect(useElement.getAttribute('xlink:href')).to.equal('#icon-error');
      const messageElement = vm.$el.querySelector('.error-message');
      expect(messageElement.innerText).to.equal('错误');
      vm.$destroy()
    });
  });
  describe('events', ()=> {
    it('支持change事件', ()=> {

    })
  })
});