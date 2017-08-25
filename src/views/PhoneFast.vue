<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="loginMain">
        <div class="loginNav">
            <a href="#" class="nav_back"><</a>
            <a href="#" class="nav_reg">注册</a>
        </div>
        <div class="mainLogo"></div>
        <div class="mainBox">
            <form class="clearFix">
                <div class="logoInput fn-left clearFix"><label class=" fn-left am-icon-mobile-phone icon1"></label>
                    <input class="fn-left" v-model="mobile">
                    <span class="am-icon-check icon-ok" v-show="hasMobile"></span>
                </div>
                <div class="logoInput fn-left clearFix">
                    <label class=" fn-left am-icon-check-circle-o regIcon3"></label>
                    <input id="pfVerificationInput" v-model="verification">
                    <div class="pfVerification">
                        <img src="">
                    </div>
                </div>
                <button class="btn btn-red btn-position" v-bind:class="{ btnDisabled: isDisabled }">下一步</button>
            </form>
            <div class="getBack"><a href="">忘记密码?</a></div>
        </div>
        <div class="phoneLogin"><a href="">帐号密码登陆?</a></div>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                mobile: "",
                verification: ""
            }
        },
        computed: {
            hasMobile: function () {
                return this.mobile != "";
            },
            isDisabled: function () {
                return this.mobile == "" || this.verification == "";
            },
        }
    }
</script>
<style scoped>
    #pfVerificationInput {
        width: 45%;
    }

    .pfVerification {
        width: 35%;
        height: 80%;
        margin: 0 auto;
        float: right;
    }

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
        max-height: 100%;
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
        background: #fff;
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
        font-size: 2.8rem;
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
        background: #faffaf;
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
        bottom: 0;
        color: #3ddd4f;
        font-size: 16px;
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
        display: block;
        width: 40px;
        height: 100%;
        float: left;
        line-height: 42px;
        text-align: left;
        padding-left: 10px;
        color: #fff;
        font-size: 1.6rem;
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
        color: #FE6571;
    }
</style>
