import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import lodash from 'lodash'
import VueLodash from 'vue-lodash'

Vue.use(VueLodash, lodash)

Vue.config.productionTip = false

require('./assets/font-awesome/4.5.0/css/font-awesome.min.css')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
