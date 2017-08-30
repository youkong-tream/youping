// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import {AjaxPlugin} from 'vux'
import App from './App'
import Home from './views/Home'
import Yfooter from './components/Yfooter'
import List from './views/list'
import MeIndex from './views/Me-index'
import MeAccount from './views/Me-account'
import ShoppingCar from './views/ShoppingCar'
import LoginIndex from './views/Login'
import PhoneFast from './views/PhoneFast'
import RegisterIndex from './views/Register'
import ForgetStep1 from './views/ForgetStep1'
import ForgetStep2 from'./views/ForgetStep2'
import ForgetStep3 from'./views/ForgetStep3'
import FooterTry from './components/FooterTry'
import productDetail from './views/productDetail'

Vue.use(VueRouter)
Vue.use(AjaxPlugin)

const routes = [
    {path: '/', component: Home},
    {path: '/Yfooter', component: Yfooter},
    {path: '/list', component: List},
    {path: '/me', redirect: '/me/index'},
    {path: '/me/index', component: MeIndex},
    {path: '/me/account', component: MeAccount},
    {path: '/shoppingCar', component: ShoppingCar},
    {path: '/login', component: LoginIndex},
    {path: '/login/phoneFast', component: PhoneFast},
    {path: '/register', component: RegisterIndex},
    {path: '/forget/step1', component: ForgetStep1},
    {path: '/forget/step2', component: ForgetStep2},
    {path: '/forget/step3', component: ForgetStep3},
    {path: '/lala', component: FooterTry},
    {path: '/product', component: productDetail}
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
