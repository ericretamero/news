import Vue from 'vue'
import App from './app/App.vue'
import store from './app/store'
import router from './app/router'
import vuetify from './plugins/vuetify';
import moment from './plugins/moment';

Vue.config.productionTip = false

new Vue({
  store,
  router,
  moment,
  vuetify,
  render: h => h(App)
}).$mount('#app')
