<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="loginMain">
        <div class="loginNav">
            <a class="nav_back" @click='toHome'><span class="iconfont icon-shangyiyehoutuifanhui back"></span></a>
            <a class="nav_reg" @click='toRegister'>注册</a>
        </div>
        <div class="mainLogo"></div>
        <div class="mainBox">
            <form class="clearFix">
                <div class="logoInput fn-left clearFix"><label
                    class=" iconfont fn-left icon-Phoneshouji icon1"></label>
                    <input class="fn-left" v-model="mobile" placeholder="请填写手机号"><span
                        class="iconfont icon-zhengquewancheng-yuankuang icon-ok"
                        v-show="hasMobile"></span>
                </div>
                <div class="logoInput fn-left clearFix" v-if="isShowPassword">
                    <label class="iconfont fn-left icon-jiesuo icon2"></label>
                    <input class="fn-left" v-model="passWord" type="password" placeholder="请填写您的密码">
                    <span class="iconfont icon-zhengquewancheng-yuankuang icon-ok" v-show="hasPassword"></span>
                    <div @click='showPassword' class="div-icon-check">
                        <i class="iconfont icon-xianshikejian eyePink"></i>
                    </div>
                </div>
                <div class="logoInput fn-left clearFix" v-else>
                    <label class=" iconfont fn-left icon-jiesuo icon2"></label>
                    <input class="fn-left" v-model="passWord" type="text" placeholder="请填写您的密码">
                    <span class="iconfont icon-zhengquewancheng-yuankuang icon-ok" v-show="hasPassword"
                          @click='showPassword'></span>
                    <div @click='showPassword' class="div-icon-check">
                        <i class="iconfont icon-yincangbukejian eyePink"></i>
                    </div>
                </div>
                <button class="btn btn-red btn-position" @click='login' v-bind:class="{ btnDisabled: isDisabled }">登录
                </button>
            </form>
            <div class="getBack" @click='forgetPassword'><a>忘记密码?</a></div>
        </div>
        <div class="phoneLogin" @click='phoneLogin'><a>手机号快捷登录?</a></div>
    </div>
</template>
<script>
import qs from 'qs'
    export default {
        data: function () {
            return {
                mobile: "",
                passWord: "",
                isShowPassword: true,
            }
        },
        methods: {
            login: function () {
                this.$http.post('/app/login.htm',qs.stringify({
                    mobile: this.mobile,
                    passWord: this.passWord,
                    ex:'ex',
                    captcha:''})
                    )
                    .then((res) => {
                        console.log(res);
                        if(res.status === 200 && res.data.code === 1){                       
                        this.$router.push('/')
                        this.$vux.toast.text(res.message,'middle')     
                        }else if(res.data.code != 1 && res.status == 200) {
                            this.$vux.toast.text(res.data.message,'middle')
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    });
            },
            toHome: function () {
                this.$router.push('/')
            },
            toRegister: function () {
                this.$router.push('/register')
            },
            forgetPassword: function () {
                this.$router.push('/forget/step1')
            },
            phoneLogin: function () {
                this.$router.push('/login/phonefast')
            },
            showPassword: function () {
                this.isShowPassword = !this.isShowPassword;
            }
        },
        computed: {
            hasMobile: function () {
                return this.mobile != "";
            },
            hasPassword: function () {
                return this.passWord.length >= 6;
            },
            isDisabled: function () {
                return this.mobile == "" || this.passWord.length <6;
            },
        }
    }
</script>

<style scoped>
    .clearFix:after {
        content: '.';
        clear: both;
        display: block;
        height: 0;
        visibility: hidden;
    }

    .fn-left {
        float: left;
    }

    .loginMain {
        width: 100%;
        min-height: 100%;
        background: url("../assets/login/loginbg.png") no-repeat;
        background-size: 100% auto;
        display: inline-block;
    }

    .mainLogo {
        background: url("../assets/login/login-logbg.png") no-repeat;
        width: 105px;
        height: 45px;
        position: absolute;
        top: 100px;
        left: 50%;
        margin-left: -52.5px;
        background-size: 100% auto;
    }

    .mainBox {
        min-width: 256px;
        border-radius: 15px;
        margin: 21.25rem 1rem 0;
        padding: 20px 0 60px 0;
        background: #fdfdfd;
        opacity: 0.98;
        position: relative;
    }

    .btn {
        width: 14.16rem;
        height: 3.5rem;
        font-size: 1.66rem;
        border-radius: 25px;
        text-align: center;
        line-height: 3.5rem;
        border: none;
    }

    .btn-red {
        background: #dd3a3b;
        color: #fff;
    }

    .btnDisabled {
        background: #dd6760;
        opacity: 0.8;
        pointer-events: none;
    }

    .btn-position {
        position: absolute;
        bottom: -1.5rem;
        left: 50%;
        margin-left: -7.3rem;
    }

    .logoInput {
        width: 92%;
        line-height: 57px;
        height: 57px;
        text-align: left;
        margin: 0 10px;
        border-bottom: 2px solid #eee;
        position: relative;
    }

    .icon1 {
        font-size: 2.1rem;
        line-height: 57px;
        color: #63b6f6;
    }

    .icon2 {
        font-size: 2.1rem;
        line-height: 57px;
        color: #cbba09;
    }

    .logoInput label {
        display: inline-block;
        text-align: right;
        width: 8%;
        height: 100%;
        margin: 0 20px 0 0;
    }

    .logoInput input {
        display: inline-block;
        border: none;
        outline: none;
        box-shadow: none;
        width: 77%;
        height: 32px;
        font-size: 15px;
        padding: 5px;
        line-height: 32px;
        margin: 10px 0;
    }

    .getBack {
        width: 100px;
        height: 40px;
        float: right;
    }

    .getBack a {
        display: block;
        width: 100px;
        height: 30px;
        font-size: 14px;
        line-height: 40px;
        text-align: center;
    }

    .icon-ok {
        position: absolute;
        right: 15%;
        color: #5eb95e;
        font-size: 1.6rem;
    }

    .phoneLogin {
        width: 150px;
        height: 40px;
        margin: 20px auto;
    }

    .phoneLogin a {
        display: block;
        width: 150px;
        height: 40px;
        font-size: 14px;
        line-height: 40px;
        text-align: center;
    }

    .loginNav {
        width: 100%;
        height: 40px;
        min-height: 40px;
        line-height: 40px;
    }

    .loginNav .nav_back {
        display: inline-block;
        width: 40px;
        height: 100%;
        float: left;
        line-height: 42px;
        text-align: left;
        padding-left: 10px;
        color: #fff;
        font-size: 1.6rem;
    }
    .back{
        font-size: 2.1rem;
    }

    .loginNav .nav_reg {
        display: block;
        width: 50px;
        height: 100%;
        float: right;
        line-height: 42px;
        text-align: center;
        color: #fff;
        font-size: 1.6rem;
    }

    .div-icon-check {
        display: inline-block;
    }

    .eyePink {
        font-size: 2.3rem;
        color: #FE6571;
    }
</style>
