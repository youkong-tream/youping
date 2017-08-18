<template>
  <div class="loginMain">
    <div class="loginNav">
      <a href="#" class="nav_back"><</a>
      <a href="#" class="nav_reg">注册</a>
    </div>
    <div class="mainLogo"></div>
    <div class="mainBox">
      <form class="clearFix">
        <div class="logoInput fn-left clearFix"><label class=" fn-left am-icon-mobile-phone icon1"></label><input
          class="fn-left"> <span class="am-icon-check icon-ok"></span></div>
        <div class="logoInput fn-left clearFix">
          <label>
        <span>
          <i class="am-icon-check-circle-o regIcon3"></i>
        </span>
          </label>
          <input id="pfVerificationInput">
          <div class="pfVerification">
            <img src="">
          </div>
        </div>
        <div class="btn btn-red btn-position">下一步</div>
      </form>
      <div class="getBack"><a href="">忘记密码?</a></div>
    </div>
    <div class="phoneLogin"><a href="">帐号密码登陆?</a></div>
  </div>
</template>
<script>
  export default {
    data: {}
  }
</script>
<style>
  #pfVerificationInput {
    width: 45%;
    background: none;
  }

  .pfVerification {
    width: 35%;
    height: 80%;
    margin: 0 auto;
    float: right;
  }
</style>
