import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './g-button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Sider from './sider'
import Toast from './toast'
import plugin from './plugin'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);
Vue.component('g-layout', Layout);
Vue.component('g-header', Header);
Vue.component('g-content', Content);
Vue.component('g-footer', Footer);
Vue.component('g-sider', Sider);
Vue.component('g-toast', Toast);
Vue.use(plugin);

new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hi'
  },
  methods: {
    inputChange(e){
      console.log(e)
    },
    showToast(){
      this.$toast('<strong style="color:red">发送成功</strong>', {
        closeButton: {
          text: '知道了',
          callback: ()=> {
            console.log('执行回调')
          }
        },
        enableHtml: true,
        position: 'middle'
      });
    }
  }
});