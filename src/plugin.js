import Toast from './toast'
let toast;
export default {
  install (Vue) {
    Vue.prototype.$toast = function (message, toastOptions) {
      let Constructor = Vue.extend(Toast);
      if(toast){
        toast.close()
      }
      toast = new Constructor({
        propsData: toastOptions
      });
      toast.$slots.default = [message];
      toast.$mount();
      toast.$on('close', ()=> {
        toast = null
      });
      document.body.appendChild(toast.$el);
    }
  }
}