import Toast from './toast'
export default {
  install (Vue) {
    Vue.prototype.$toast = function (message, toastOptions) {
      let Constructor = Vue.extend(Toast);
      let toast = new Constructor({
        propsData: {
          closeButton: toastOptions.closeButton,
          enableHtml: toastOptions.enableHtml
        }
      });
      toast.$slots.default = [message];
      toast.$mount();
      document.body.appendChild(toast.$el);
    }
  }
}