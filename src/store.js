import Vue from 'vue'
import Vuex from 'vuex'
import { AjaxPlugin } from 'vux'

Vue.use(Vuex)
let modules = {
    state:{ authorizd:true },
    getters:{
        authorizd: state => state.authorizd
    },
    actions: { 
        login({commit},payload){
            // ajax 登陆流程，
            this.$http.get('/app/userInfo.htm')
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
            commit("login", 登陆信息)
        }
    },
    mutations:{
        login(state,loginInfo){
            state.authorizd = Info // 假定登陆成功后，设置 state.
        }
    }
}
export default new Vuex.Store({
    modules: modules
})