// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './views/Home'
import Try from './views/Try'
import Footer from './components/Footer'
import Grid from './components/grid'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home},
  { path: '/try',component:Try},
  { path:'/footer',component:Footer},
  { path:'/grid',component:Grid}
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
