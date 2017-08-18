<template>
  <div class="footer">
      <div class="footer-one" @click='toHome' :class='oneisRed'>
          <div class ='footer-one-box'>
              <div class="footer-one-icon"></div>  
              <span>首页</span>
          </div>  
      </div>
      <div class="footer-two" @click='toList' :class = 'twoisRed'>
          <div class = 'footer-two-box'>
              <div class="footer-two-icon"></div>
              <span>商城</span>
          </div>  
      </div>
      <div class="footer-three" @click='toShoppingCar' :calss = 'threeisRed'>
          <div class = 'footer-three-box'>
              <div class="footer-three-icon"></div>
              <span>购物车</span>
          </div>
      </div> 
      <div class="footer-four" @click='toMe' :class = 'fourisRed'>
          <div class = 'footer-four-box'>
              <div class="footer-four-icon"></div>
              <span>我的</span>
          </div>      
      </div>
  </div>
</template>
<script>
export default {
  data(){
      return {
          oneisRed:false,
          twoisRed:false,
          threeisRed:false,
          fourisRed:false
      }
  },
  methods:{
      toHome() {
          this.$router.push('/');
          oneisRed = true;
          twoisRed = false;
          threeisRed = false;
          fourisRed = false
      },
      toShoppingCar() {
          this.$router.push('/login')
          twoisRed = true;
          oneisRed = false;
          threeisRed = false;
          fourisRed = false
      },
      toList() {
          this.$router.push('/list')
          threeisRed = true;
          oneisRed = false;
          twoisRed = false;
          fourisRed = false
      },
      toMe() {
          this.$router.push('/me')
          fourisRed = true;
          oneisRed = false;
          twoisRed = false;
          threeisRed = false
      }
   }
}
</script>
<style lang="less">
.footer {
    width:100%;
    height:55px;
    border-top: 1px solid grey;
    display:flex;
}
 span {
    font-size:14px;
    font-family:"Times New Roman",Georgia,Serif;
}
.oneisRed {
    color:red;
}
.twoisRed {
    color:red;
}
   .footer-one, .footer-two, .footer-three, .footer-four{
       width:25%;
       height:55px;       
   }
      .footer-one-box,.footer-two-box,.footer-three-box,.footer-four-box {
          margin:10px auto;
          width:80%;
          text-align: center;
      }
            .footer-one-icon {
                width:17px;
                height:17px;
                background:url('../assets/footer/first.png')no-repeat;
                background-size:100% auto;
                margin:0 auto;
            } 
            .footer-two-icon {
                width:17px;
                height:17px;
                margin:0 auto;
                background:url('../assets/footer/second.png')no-repeat;
                background-size:100% auto;
            }
            .footer-three-icon {
                width:17px;
                height:17px;
                margin:0 auto;
                background:url('../assets/footer/third.png')no-repeat;
                background-size:100% auto;
            }
            .footer-four-icon {
                width:17px;
                height:17px;
                margin:0 auto;
                background:url('../assets/footer/forth.png')no-repeat;
                background-size:100% auto;
            }
// .footer-content {
//     text-align: center;
// }
//    :link {
//      font-color:black;
//    }
//    :active,:visited {
//        font-color:red;
//    }
</style>