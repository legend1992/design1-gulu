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
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Toast from './toast'
import PopOver from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

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
Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-head', TabsHead);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-pane', TabsPane);
Vue.component('g-popover', PopOver);
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)
Vue.use(plugin);

new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hi',
    i:0,
    selectedTab: 'sports'
  },
  methods: {
    inputChange(e){
      console.log(e)
    },
    showToast(){
      this.i++;
      this.$toast(`<strong style="color:red">发送成功${this.i}</strong>`, {
        closeButton: {
          text: '知道了',
          callback: ()=> {
            console.log('执行回调')
          }
        },
        enableHtml: true,
        position: 'bottom'
      });
    }
  }
});