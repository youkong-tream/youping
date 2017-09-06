// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import {AjaxPlugin,ToastPlugin} from 'vux'
import qs from 'qs'
import App from './App'
import Home from './views/Home'
import Yfooter from './components/Yfooter'
import List from './views/list'
import MeIndex from './views/Me/index'
import MeEdit from './views/Me/edit'
import MeEditChangeNickname from './views/Me/edit-changeNickname'
import ShoppingCar from './views/ShoppingCar'
import LoginIndex from './views/Register/Login'
import PhoneFast from './views/Register/PhoneFast'
import RegisterIndex from './views/Register/Register'
import ForgetStep1 from './views/Register/ForgetStep1'
import ForgetStep2 from'./views/Register/ForgetStep2'
import ForgetStep3 from'./views/Register/ForgetStep3'
import productDetail from './views/productDetail'
import confirmOrder from  './views/confirmOrder'
Vue.use(VueRouter)
Vue.use(AjaxPlugin)
Vue.use(ToastPlugin)
Vue.use(Vuex)

const routes = [
  { path: '/', component: Home},
  { path:'/Yfooter',component:Yfooter},
  { path:'/list',component:List},
  { path:'/me',redirect:'/me/index'},
  { path:'/me/index',component:MeIndex},
  { path:'/me/edit',component:MeEdit},
  { path:'/me/edit/changeNickname',component:MeEditChangeNickname},
  { path:'/shoppingCar',component:ShoppingCar},
  {path: '/login', component: LoginIndex},
  {path: '/login/phoneFast', component: PhoneFast},
  {path: '/register', component: RegisterIndex},
  {path: '/forget/step1', component: ForgetStep1},
  {path: '/forget/step2', component: ForgetStep2},
  {path: '/forget/step3', component: ForgetStep3},
  {path: '/product', component: productDetail},
  {path:'/confirmOrder',component:confirmOrder}
]

const router = new VueRouter({
    routes

})
// router.beforeEach((to,from,next) => {
//   if(to.matched.some( record => record.meta.auth)){
//       // 对路由进行验证
//       if(store.getters.authorizd) { // 已经登陆
//           next()
//       }else{
//           // 未登录,跳转到登陆页面，并且带上 将要去的地址，方便登陆后跳转。
//           next({path:'/login',query:{ referrer: to.fullPath} })
//       }
//   }else{
//       next()
//   }
// })

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
