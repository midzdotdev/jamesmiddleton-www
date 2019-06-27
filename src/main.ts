import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'

import './sass/index.sass'

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
