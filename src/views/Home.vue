<template>
  <div>
    <div class = 'content'>
      <div class = 'home-top'>
        <div class = 'top-font'>
          <h2>优品电商</h2>
        </div>
      </div>
      <div class = 'middle'></div>       
      <div class = 'middle-border'>
        <div class = 'middle-border-first' @click="firstRoute">
          <div class = 'middle-border-first-icon'></div>
          <div class = 'middle-border-first-text'>
            <span class = 'top-one'>精选</span>
            <span class = 'bottom-one'>精挑细选，种类多多</span>
          </div>
          <div class = 'middle-border-first-backimg'></div>
        </div>
        <div class = 'middle-border-second'>
          <div class = 'middle-border-second-icon'></div>
          <div class = 'middle-border-second-text'>
            <span class = 'top-one'>一村一品</span>
            <span class = 'bottom-one'>一村特产，原产新鲜</span>
          </div>
          <div class = 'middle-border-second-backimg'></div>
        </div>
        <div class = 'middle-border-third'>
          <div class = 'middle-border-third-icon'></div>
          <div class = 'middle-border-third-text'>
            <span class = 'top-one'>定向扶贫</span>
            <span class = 'bottom-one'>愉快购物，奉献爱心</span>
          </div>
          <div class = 'middle-border-third-backimg'></div>
        </div>
        <div class = 'middle-border-forth'>
          <div class = 'middle-border-forth-icon'></div>
          <div class = 'middle-border-forth-text'>
            <span class = 'top-one'>全部商品</span>
            <span class = 'bottom-one'>特供便宜，选择多样</span>
          </div>
          <div class = 'middle-border-forth-backimg'></div>
        </div>
      </div> 
    </div>  
    <div class="foot">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from '../components/Footer'

export default {
  components: {
    Footer   
  },
  methods:{
    firstRoute:function(){
      window.location.href='./#/list';
    } 
  }
  
}
</script>
<style lang='less'>
.content {
  padding-bottom:45px;
}
.foot {
  position:fixed;
  bottom:0;
  width:100%;

  
}
.home-top {
  background:url("../assets/home-cook.png") no-repeat;
  background-size:100% auto;
  height:180px;
 
}
    .top-font {
      display:flex;
      align-items:center;
      justify-content: center;
      color:aliceblue;
      font-size:18px;
    }
.middle{
  height:360px;
  background-color:#c0c0c0;
}  
.middle-border {
    height:412px;
    margin-top:-460px;
   
     

   }  
      .middle-border-first {
        margin-top:-60px;
      }
      .middle-border-first,.middle-border-second,.middle-border-third,.middle-border-forth {
        height:88px;
        width:363px;
        background-color:white;
        border-radius: 8px;
        margin:20px auto;
        display:flex;
      }
      .middle-border-first-icon {
        background:url('../assets/home-border-ve.png') no-repeat;
        background-size:100% auto;
        width:90px;
        height:90px;
      }
      .middle-border-first-text,.middle-border-second-text,.middle-border-third-text,.middle-border-forth-text {
        display:flex;
        flex-direction:column;
        margin:auto;
      }
         .bottom-one {
           font-size:14px;
           color:gray;
         }
      .middle-border-first-backimg {
        background:url('../assets/home-border-ve-img.png')no-repeat;
        background-size:100% auto;
        width:30px;
        height:30px;
        margin:auto;
      }
      .middle-border-second-backimg {
        background:url('../assets/home-border-lanzi-img.png')no-repeat;
        background-size:100% auto;
        width:30px;
        height:30px;
        margin:auto;
      }
      .middle-border-third-backimg {
        background:url('../assets/home-border-rice-img.png')no-repeat;
        background-size:100% auto;
        width:30px;
        height:30px;
        margin:auto;
      }
      .middle-border-forth-backimg {
        background:url('../assets/home-border-knife-img.png')no-repeat;
        background-size:100% auto;
        width:30px;
        height:30px;
        margin:auto;
      }
      .middle-border-second-icon {
        background:url('../assets/home-border-egg.png') no-repeat;
        background-size:100% auto;
        width:90px;
        height:90px;
      }
      .middle-border-third-icon {
        background:url('../assets/home-border-rice.png') no-repeat;
        background-size:100% auto;
        width:90px;
        height:90px;
      }
      .middle-border-forth-icon{
        background:url('../assets/home-border-last.png') no-repeat;
        background-size:100% auto;
        width:90px;
        height:90px;

      }
// .foot {
//   background:#8c9cb3;
//   height:80px;
// }    
</style>