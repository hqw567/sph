import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


import TypeNav from '@/pages/Home/TypeNav'

import router from '@/router'

import store from '@/store'
import {
  reqCategoryList
} from '@/api/index'
reqCategoryList()
Vue.component(TypeNav.name, TypeNav)
new Vue({
  render: h => h(App),
  router, // 注册路由信息: 当这里书写router的时候，组件身上都拥有$route,router属性
  store  //注册仓库：组件实例的身上会多一个属性$store
}).$mount('#app')