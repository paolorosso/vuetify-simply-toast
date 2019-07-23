import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import Toast from './plugins/toast.js';

Vue.config.productionTip = false

// Vuetify
Vue.use(Vuetify)

// Plugins
Vue.use(Toast)

new Vue({
  render: h => h(App),
}).$mount('#app')
