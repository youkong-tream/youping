<template>
  <div class="footer">
      <div class="footer-one" @click='toHome'>
          <div class ='footer-one-box'>
              <div class="footer-one-icon" v-bind:class = 'isActive'></div>  
              <span>首页</span>
          </div>  
      </div>
      <div class="footer-two" @click='toList' >
          <div class = 'footer-two-box'>
              <div class="footer-two-icon" v-bind:class = 'isActive'></div>
              <span>商城</span>
          </div>  
      </div>
      <div class="footer-three" @click='toShoppingCar'>
          <div class = 'footer-three-box'>
              <div class="footer-three-icon" v-bind:class = 'isActive'></div>
              <span>购物车</span>
          </div>
      </div> 
      <div class="footer-four" @click='toMe'>
          <div class = 'footer-four-box'>
              <div class="footer-four-icon" v-bind:class = 'isActive'></div>
              <span>我的</span>
          </div>      
      </div>
  </div>
</template>
<script>
export default {
  data(){
      return {     
           isActive : false
      }
  },
  methods:{
      toHome(isActive) {
          this.$router.push('/');
          this.isActive = ! this.isActive
      },
      toShoppingCar(isActive) {
          this.$router.push('/login');
           this.isActive = ! this.isActive
      },
      toList(isActive) {
          this.$router.push('/list');
           this.isActive = ! this.isActive
      },
      toMe(isActive) {
          this.$router.push('/me');
           this.isActive = ! this.isActive

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
    background-color:white;
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
                .footer-one-icon .isActive {
                    width:17px;
                    height:17px;
                    background:url('../assets/footer/first-after.png')no-repeat;
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
                .footer-two-icon .isActive {
                    width:17px;
                    height:17px;
                    background:url('../assets/footer/second-after.png')no-repeat;
                    background-size:100% auto;
                    margin:0 auto;
                }
            .footer-three-icon {
                width:17px;
                height:17px;
                margin:0 auto;
                background:url('../assets/footer/third.png')no-repeat;
                background-size:100% auto;
            }
                .footer-three-icon .isActive {
                    width:17px;
                    height:17px;
                    margin:0 auto;
                    background:url('../assets/footer/third-after.png')no-repeat;
                    background-size:100% auto;
                }
            .footer-four-icon {
                width:17px;
                height:17px;
                margin:0 auto;
                background:url('../assets/footer/forth.png')no-repeat;
                background-size:100% auto;
            }
                .footer-four-icon .isActive {
                    width:17px;
                    height:17px;
                    margin:0 auto;
                    background:url('../assets/footer/forth-after.png')no-repeat;
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