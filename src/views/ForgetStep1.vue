<template>
  <div class="registerMain">
    <div class="registerNav">
      <a href="#" class="nav_back"><</a>
      <div class="nav_reg">找回密码</div>
    </div>
    <div class="registerInput">
      <label for="regPhoneNumber">
        <span>
          <i class="am-icon-mobile-phone regIcon1"></i>
        </span>
      </label>
      <input id="regPhoneNumber">
      <div class="regPrompt"><span class="am-icon-check regIconGreen"></span></div>

    </div>
    <div class="registerInput">

      <label for="regVerificationCode">
        <span>
          <i class="am-icon-check-circle-o regIcon3"></i>
        </span>
      </label>
      <input id="regVerificationCode" class="regVerification stepVerificationInput">
      <div class="stepVerification">
        <img src="">
      </div>
    </div>
    <button type="submit" class="regSubmit">下一步</button>
  </div>
</template>
<script>
  export default {}
</script>
<style>
  .stepVerification{
    width: 11rem;
    height: 3.5rem;
    float: right;
    overflow: hidden;
  }
  .registerInput .stepVerificationInput{
    width: 40%;
  }
</style>


