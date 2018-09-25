import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './g-button-group'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);

new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: true,
    loading3: false
  }
})

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect
// unit test
// 1
{
  const buttonConstructor = Vue.extend(Button)
  const button = new buttonConstructor({
    propsData: {
      icon: 'settings'
    }
  })

  button.$mount()
  let useElement = button.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#icon-settings')
  button.$el.remove()
  button.$destroy()
}
// 2
{
  const buttonConstructor = Vue.extend(Button)
  const button = new buttonConstructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })

  button.$mount()
  let useElement = button.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#icon-loading')
  button.$el.remove()
  button.$destroy()
}
// 3
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const buttonConstructor = Vue.extend(Button)
  const button = new buttonConstructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'left'
    }
  })

  button.$mount(div)
  let svgElement = button.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svgElement)
  expect(order).to.eq('0')
  button.$el.remove()
  button.$destroy()
}
// 4
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const buttonConstructor = Vue.extend(Button)
  const button = new buttonConstructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })

  button.$mount(div)
  let svgElement = button.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svgElement)
  expect(order).to.eq('2')
  button.$el.remove()
  button.$destroy()
}
// 5
{
  const buttonConstructor = Vue.extend(Button)
  const buttonC = new buttonConstructor({
    propsData: {
      icon: 'settings'
    }
  })
  buttonC.$mount()
  let spy = chai.spy(function () {})
  buttonC.$on('click', spy)

  let button = buttonC.$el
  button.click()
  expect(spy).to.have.been.called()
  buttonC.$el.remove()
  buttonC.$destroy()
}