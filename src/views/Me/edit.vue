<template>
    <div class = 'me-edit'>
        <div class = 'top'>
            <div class = 'back-icon' @click = 'toIndex'></div>
            <span class = 'title'>我的账户</span>
        </div>
        <div class = 'content'>
            <div class = 'pic'>
                <span class = 'text'>头像</span>
                <div class = 'human'></div>
                <div class = 'enter-icon'></div>
            </div>
            <div class = 'username'>
                <span class = 'text'>用户名</span>
                <span class = 'lala'>15025448997</span>
            </div>
            <div class = 'nickname'>
                <span class = 'text'>昵称</span>
                <span class = 'lala'>15025448997</span>
                <div class = 'enter-icon'  @click = 'changeNickname'></div>
            </div>
            <div class = 'password'>
                <span class ='text'>登录密码</span>
                <span class = 'lala'>修改登录密码</span>
                <div class = 'enter-icon'></div>
            </div>
            <div class = 'number'>
                <span class='text'>手机号</span>
                <span class = 'lala'>修改手机号</span>
                <div class = 'enter-icon'></div>
            </div>
            <div class = 'operation'>
                <span class = 'text'>操作</span>
                <span class = 'lala'>退出</span>
                <div class = 'enter-icon'></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  methods:{
      toIndex:function(){
          this.$router.push('/me/index')
      },
      changeNickname:function() {
          this.$router.push('/me/edit/changeNickname')
      }
  }
}
</script>
<style lang="less" scoped>
.me-edit {
    
}
.top {
    width:100%;
    height: 42px;
    border-top:1px solid #BEBEBE;
    border-bottom:1px solid #BEBEBE;
    display:flex;
    align-items:center;
}
.back-icon {
    background:url('../../assets/list/back.png')no-repeat;
    background-size:100% auto;
    width:20px;
    height:20px;
    margin-left:15px;  
}
.title {
    font-size:20px;
    position: absolute;
    left:35%;
    width:30%;
    padding-left:20px;
}
.content {
    width:100%;
}
.pic {
    width:100%;
    height: 84px;
    display: flex;
    align-items:center;
    border-bottom:1px solid #BEBEBE;

}
.text {
    font-size:18px;
    margin-left:10px;
}
.human {
    width:60px;
    height:60px;
    background-color:antiquewhite;
    position:absolute;
    right:50px;
}
.enter-icon {
    background:url('../../assets/me/list-back.png')no-repeat;
    background-size:100% auto;
    width:5px;
    height:14px;
    position: absolute;
    right:20px;
}
.lala {
    position: absolute;
    right:50px;
    font-size:14px;
}
.username,.nickname,.password,.number,.operation{
    width:100%;
    height: 60px;
    border-bottom:1px solid #BEBEBE;
    display: flex;
    align-items:center;
}

</style>


