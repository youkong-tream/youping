<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="registerMain">
        <div class="registerNav">
            <a href="#" class="nav_back"><</a>
            <div class="nav_reg">找回密码</div>
        </div>
        <div class="registerInput">
            <label for="regPhoneNumber" class="am-icon-unlock-alt regIcon2">
            </label>
            <input id="regPhoneNumber" v-model="password1" type="text">
            <div class="regPrompt"><span class="am-icon-check regIconGreen" v-show="hasPassword1"></span></div>
        </div>
        <div class="registerInput">
            <label class="am-icon-unlock-alt regIcon2">
            </label>
            <input v-model="password2" type="password">
            <div class="regPrompt"><span class="am-icon-check regIconGreen" v-show="hasPassword2"></span></div>
        </div>
        <button type="submit" class="regSubmit" v-bind:class="{ btnDisabled: isDisabled }">提交</button>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                password1: "",
                password2: "",
            }
        },
        computed: {
            hasPassword1: function () {
                return this.password1 != "";
            },
            hasPassword2: function () {
                return this.password2 != "" && this.password1 == this.password2;
            },
            isDisabled: function () {
                return this.password1 != this.password2;
            }
        }
    }
</script>
<style scoped>
    .btnDisabled {
        background: #dd6d66;
        opacity: 0.7;
        pointer-events: none;
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

    .regIconGreen {
        color: #00bb00;
        font-size: 1.5rem;

    }

    .regIcon2 {
        font-size: 20px;
        margin: 0 20px 0 10px;
        color: #e2bf0d;
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
        background: #dd9497;
        font-size: 1.66666667rem;
        border-radius: 25px;
        color: #fff;
        height: 40px;
        line-height: 40px;
        padding: 0;
    }
</style>
