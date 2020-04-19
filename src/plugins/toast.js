import ToastComponent from "./toast.vue"
import {
  EventBus
} from "./toastEventBus"

const ToastPlugin = {
  install(Vue) {

    Vue.component('toast', ToastComponent)

    Vue.prototype.$toast = {

      info(msg) {
        EventBus.$emit('ToastMessage', 'info', msg)
      },

      warning(msg) {
        EventBus.$emit('ToastMessage', 'warning', msg)
      },

      success(msg) {
        EventBus.$emit('ToastMessage', 'success', msg)
      },

      error(msg) {
        EventBus.$emit('ToastMessage', 'error', msg)
      },

      close() {
        EventBus.$emit('ToastMessage', '', '')
      },
    }

  }
}

export default ToastPlugin