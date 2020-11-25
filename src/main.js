import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false

new Vue({
  router,
  BootstrapVue,
  IconsPlugin,
  vuetify,
  render: h => h(App)
}).$mount('#app')
