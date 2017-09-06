<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="registerMain">
        <div class="registerNav">
            <a href="#" class="nav_back"><span class="iconfont icon-shangyiyehoutuifanhui back"></span></a>
            <div class="nav_reg">注册</div>
        </div>
        <div class="registerInput">
            <label for="regPhoneNumber">
        <span>
          <i class="regIconRed">*</i>
          <i class="iconfont icon-Phoneshouji regIcon1"></i>
        </span>
            </label>
            <input id="regPhoneNumber" v-model="mobile">
            <div class="regPrompt"><span class="iconfont icon-zhengquewancheng-yuankuang regIconGreen" v-show="hasMobile"></span></div>
        </div>
        <div class="registerInput noUnderline">
            <div class="Underline">
                <label for="regVerificationCode">
        <span>
          <i class="regIconRed">*</i>
            <i class="iconfont icon-zhengquewancheng-xianxingyuankuang regIcon3"></i>
        </span>
                </label>
                <input id="regVerificationCode" class="regVerification" v-model="verification">
               <div class="regPrompt1"><span class="iconfont icon-zhengquewancheng-yuankuang regIconGreen" v-show=" identifyCodeLength"></span></div>
            </div>
            <div class="regVerificationBtn" @click = 'identifyCode'>获取验证码</div>
            <!-- <div class="regVerificationBtn" @click = 'identifyCode' v-else-if='didclick'>获取验证码</div> -->
        </div>
        <div class="registerInput">
            <label for="regPassword">
        <span>
          <i class="regIconRed">*</i>
          <i class="iconfont icon-jiesuo regIcon2"></i>
        </span>
            </label>
            <input id="regPassword" v-model="password1">
            <div class="regPrompt"><span class="iconfont icon-zhengquewancheng-yuankuang regIconGreen" v-show="hasPassword1"></span>
                <i class="iconfont icon-xianshikejian regIconPink"></i></div>
        </div>
        <div class="registerInput">
            <label for="regRepeatPassword">
        <span>
          <i class="regIconRed">*</i>
          <i class="iconfont icon-jiesuo regIcon2"></i>
        </span>
            </label>
            <input id="regRepeatPassword" v-model="password2">
            <div class="regPrompt"><span class="iconfont icon-zhengquewancheng-yuankuang regIconGreen" v-show="hasPassword2"></span></div>
        </div>
        <div class="registerInput">
            <label for="regUserType">
        <span>
          <i class="regIconRed">*</i>
          <i class="iconfont icon-yonghu regIcon4"></i>
        </span>
            </label>
            <select id="regUserType" v-model="selected">
                <option value="" selected>请选择用户类型</option>
                <option value="11">会员用户</option>
                <option value="12">服务店铺</option>
                <option value='14'>商户</option>
            </select>
        </div>
        <button type="submit" class="regSubmit" @click = 'register()' v-bind:class="{ btnDisabled: isDisabled }">注册</button>
        <div class="regLogin">已有帐号？<a @click = 'toLogin()'>立即登录</a></div>
    </div>
</template>
<script>
import qs from 'qs'
    export default {
        data(){
            return {
                mobile: "",
                verification: "",
                password1: "",
                password2: "",
                selected: "",
            }
        },
        computed: {
            hasMobile: function () {
                return this.mobile != "";
            },
            identifyCodeLength:function () {
                return this.verification.length === 6;
            },
            hasPassword1: function () {
                return this.password1.length >= 6;
            },
            hasPassword2: function () {
                return this.password2.length >= 6 && this.password1 == this.password2;
            },
            isDisabled: function () {
                return this.mobile == "" || this.verification == "" || this.password1 == "" || this.password2 == "" || this.userType == "" || this.password1 != this.password2;
            },
            
        },
        methods: {
            toLogin:function() {
                 this.$router.push('/login')
            },
            identifyCode:function() {
                let check = /^1\d{10}$/;
                if (check.test(this.mobile)) {
                    this.$http.post('/app/sendSmsCode.htm',qs.stringify({mobile:this.mobile,business:'register'}))
                    .then((res) => {
                         this.$vux.toast.text(res.data.message,'middle')
                    })
                    .catch((err) => {
                         console.log(err)
                    })
                } else {
                    this.$vux.toast.text('请输入正确的手机号码','middle')                  
                }
              
            },
            //先检验是否重复，再请求注册
            register:function() {
                this.$http.post('/app/verifyUser.htm',qs.stringify({
                    userName:this.mobile
                    }))
                    .then((res) => {
                        console.log(res)
                        if(res.data.code === 0) {
                            this.$vux.toast.text(res.data.message,'middle')
                            }else if(res.data.code === 1) {
                                 this.$http.post('/app/frontFirstRegister.htm',qs.stringify({
                                    userName:this.mobile,
                                    code:this.verification,
                                    mobile:this.mobile,
                                    logPassword:this.password1,
                                    logPasswordConfirm:this.password2,
                                    roleCode:this.selected,
                                    ex:'ex'
                                }))
                                    .then((res) => {
                                        console.log(res)
                                        if(res.data.code === 0) {
                                            this.$vux.toast.text(res.data.message,'middle')
                                        }else if(res.data.code === 1) {
                                            this.$vux.toast.text(res.data.message,'middle')
                                            this.$router.push('/')
                                        }
                                    })
                                    .catch((err) => {
                                        console.log(res)
                                    })
                                  }
                                })      
                        
                    .catch((err) => {
                        console.log(err)
                    })
                }    
            }
    }
</script>
<style scoped>
    .alertText {
        height: 60px;
        width:60px;
        position: fixed;
        top:40%;
        left:40%;
        background-color:#5eb95e;
    }

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
        display: inline-block;
        width: 40px;
        height: 100%;
        float: left;
        line-height: 42px;
        text-align: left;
        padding-left: 10px;
        color: #333;
        font-size: 1.6rem;
    }
    .back{
        font-size: 2.1rem;
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

    .Underline label {
        width: 5.5rem;
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
        color: #e73420;
        font-size: 1.5rem;
    }

    .regIconGreen {
        color: #5eb95e;
        font-size: 1.8rem;

    }

    .regIconPink {
        color: #FE6571;
        font-size: 2.3rem;
        float: right;
    }

    .regIcon1 {
        font-size: 2.1rem;
        margin: 0 20px 0 10px;
        color: #3babf4;
    }

    .regIcon2 {
        font-size: 2.1rem;
        margin: 0 20px 0 10px;
        color: #e2bf0d;
    }

    .regIcon3 {
        font-size: 1.8rem;
        margin: 0 20px 0 10px;
        color: #00c26f;
    }

    .regIcon4 {
        font-size: 2.1rem;
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
    .regPrompt1 {
        height: 45px;
        width: 45px;
        position: absolute;
        left: 50%;
        /* top:-1%; */
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


