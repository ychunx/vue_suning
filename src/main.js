import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'

import store from './store'
import './mock/mockServe'
import 'swiper/css/swiper.css'
import Pagination from './components/Pagination'
Vue.component(Pagination.name, Pagination)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
