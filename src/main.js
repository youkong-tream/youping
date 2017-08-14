// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './views/Home'
import Footer from './components/Footer'
import List from './views/list'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home},
  { path:'/footer',component:Footer},
  { path:'/list',component:List}
]

const router = new VueRouter({
  routes
  
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
