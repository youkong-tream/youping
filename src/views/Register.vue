<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="registerMain">
        <div class="registerNav">
            <a href="#" class="nav_back"><</a>
            <div class="nav_reg">注册</div>
        </div>
        <div class="registerInput">
            <label for="regPhoneNumber">
        <span>
          <i class="regIconRed">*</i>
          <i class="am-icon-mobile-phone regIcon1"></i>
        </span>
            </label>
            <input id="regPhoneNumber" v-model="mobile">
            <div class="regPrompt"><span class="am-icon-check regIconGreen" v-show="hasMobile"></span></div>
        </div>
        <div class="registerInput noUnderline">
            <div class="Underline">
                <label for="regVerificationCode">
        <span>
          <i class="regIconRed">*</i>
          <i class="am-icon-check-circle-o regIcon3"></i>
        </span>
                </label>
                <input id="regVerificationCode" class="regVerification" v-model="verification">
            </div>
            <div class="regVerificationBtn">获取验证码</div>
        </div>
        <div class="registerInput">
            <label for="regPassword">
        <span>
          <i class="regIconRed">*</i>
          <i class="am-icon-unlock-alt regIcon2"></i>
        </span>
            </label>
            <input id="regPassword" v-model="password1">
            <div class="regPrompt"><span class="am-icon-check regIconGreen" v-show="hasPassword1"></span>
                <i class="am-icon-eye regIconPink"></i></div>
        </div>
        <div class="registerInput">
            <label for="regRepeatPassword">
        <span>
          <i class="regIconRed">*</i>
          <i class="am-icon-unlock-alt regIcon2"></i>
        </span>
            </label>
            <input id="regRepeatPassword" v-model="password2">
            <div class="regPrompt"><span class="am-icon-check regIconGreen" v-show="hasPassword2"></span></div>
        </div>
        <div class="registerInput">
            <label for="regUserType">
        <span>
          <i class="regIconRed">*</i>
          <i class="am-icon-user regIcon4"></i>
        </span>
            </label>
            <select id="regUserType" v-model="userType">
                <option value="1">普通用户</option>
                <option value="2">会员用户</option>
            </select>
        </div>
        <button type="submit" class="regSubmit" v-bind:class="{ btnDisabled: isDisabled }">注册</button>
        <div class="regLogin">已有帐号？<a href="#">立即登录</a></div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                mobile: "",
                verification: "",
                password1: "",
                password2: "",
                userType: "1",
            }
        },
        computed: {
            hasMobile: function () {
                return this.mobile != "";
            },
            hasPassword1: function () {
                return this.password1 != "";
            },
            hasPassword2: function () {
                return this.password2 != "" && this.password1 == this.password2;
            },
            isDisabled: function () {
                return this.mobile == "" || this.verification == "" || this.password1 == "" || this.password2 == "" || this.userType == "" || this.password1 != this.password2;
            }
        }
    }
</script>
<style scoped>

    .registerMain {
        width: 100%;
        max-height: 100%;
        display: inline-block;
    }

    .registerNav {
        height: 42px;
        min-height: 42px;
        line-height: 42px;
        background-color: #faf9f9;
        border-bottom: 1px solid #d6d6d6;
    }

    .registerNav .nav_back {
        width: 40px;
        height: 100%;
        float: left;
        line-height: 42px;
        text-align: left;
        padding-left: 10px;
        color: #333;
        font-size: 1.6rem;
    }

    .registerNav .nav_reg {
        display: block;
        width: 100%;
        height: 100%;
        line-height: 42px;
        text-align: center;
        text-indent: -20px;
        color: #333;
        font-size: 1.6rem;
    }

    .registerInput {
        padding-top: 10px;
        padding-bottom: 10px;
        margin: 0 10px;
        border-bottom: 1px solid #d2d1d1;
        height: 58px;
        width: auto;
        min-width: 310px;
        line-height: 58px;
        overflow: hidden;
        position: relative;
    }

    .noUnderline {
        border-bottom: none;
    }

    .Underline {
        width: 58%;
        height: 45px;
        display: inline-block;
        border-bottom: 1px solid #d2d1d1;
    }

    .registerInput label {
        display: inline-block;
        height: 100%;
    }

    .registerInput input {
        border: none;
        outline: none;
        box-shadow: none;
        width: 75%;
        height: 30px;
        padding: 5px;
        margin: 0 0 1.5rem 0;
    }

    .registerInput select {
        border: none;
        outline: none;
        box-shadow: none;
        width: 75%;
        height: 30px;
        padding: 5px;
        margin: 0 0 1.5rem 0;
        font-size: 1.4rem;
    }

    .noUnderline .regVerification {
        max-width: 58%;
    }

    .regVerificationBtn {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        float: right;
        margin: 0 20px 0 0;
        text-align: center;
        background: #ff5113;
        border-color: #dd514c;
        color: #fff;
        font-size: 1.4rem;
        border-radius: 5px;
        width: 105px;
        height: 36px;
        line-height: 36px;
        max-width: 35%;
    }

    .regIconRed {
        color: red;
        font-size: 1.5rem;
    }

    .regIconGreen {
        color: #00bb00;
        font-size: 1.5rem;

    }

    .regIconPink {
        color: #FE6571;
        font-size: 1.5rem;
        float: right;
    }

    .regIcon1 {
        font-size: 28px;
        margin: 0 20px 0 10px;
        color: #3babf4;
    }

    .regIcon2 {
        font-size: 20px;
        margin: 0 20px 0 10px;
        color: #e2bf0d;
    }

    .regIcon3 {
        font-size: 18px;
        margin: 0 20px 0 10px;
        color: #00c26f;
    }

    .regIcon4 {
        font-size: 20px;
        margin: 0 20px 0 10px;
        color: #8c8c8c;
    }

    .regPrompt {
        height: 45px;
        width: 45px;
        position: absolute;
        right: 10px;
        bottom: 0;
    }

    .regSubmit {
        border: none;
        outline: none;
        box-shadow: none;
        display: block;
        width: 90%;
        margin: 30px auto 20px;
        background: #dd4b4b;
        font-size: 1.66666667rem;
        border-radius: 25px;
        color: #fff;
        height: 40px;
        line-height: 40px;
        padding: 0;
    }

    .regLogin {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        width: 150px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        float: right;
        color: #333;
        font-size: 1.4rem;
    }

    .btnDisabled {
        background: #dd6d66;
        opacity: 0.7;
        pointer-events: none;
    }
</style>


