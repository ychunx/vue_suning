import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'

import store from './store'

import './mock/mockServe'

import 'swiper/css/swiper.css'

// 注册全局分页器组件
import Pagination from './components/Pagination'
Vue.component(Pagination.name, Pagination)

// 去除提示
Vue.config.productionTip = false

// 引入全部api，同全局事件总线挂载到原型上
import * as API from './api'

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  }
}).$mount('#app')
