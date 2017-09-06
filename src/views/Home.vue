<template>
  <div>
    <div class = 'content'>
       <div class = 'home-top'>
        <div class = 'top-font'>
          <span>优品电商</span>
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
        <div class = 'middle-border-second' @click='secondRoute'>
          <div class = 'middle-border-second-icon'></div>
          <div class = 'middle-border-second-text'>
            <span class = 'top-one'>一村一品</span>
            <span class = 'bottom-one'>一村特产，原产新鲜</span>
          </div>
          <div class = 'middle-border-second-backimg'></div>
        </div>
        <div class = 'middle-border-forth' @click='thirdRoute'>
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
      <Yfooter></Yfooter>
    </div>
  </div>
</template>

<script>
import Yfooter from '../components/Yfooter'

export default {
  components: {
    Yfooter
  },
  methods:{
    firstRoute:function(){
      this.$router.push('/list');
      console.log('lala');
      this.$http.post('/app/listRecommendProduct.htm')
         .then(res => {
           console.log(res)
         })
         .catch(err => {
           console.log(err)
         });
     },
    secondRoute:function() {
      this.$router.push('/list');
      console.log('haha');
      this.$http.get('/app/productList.htm',{
        params:{
          pageNumber:2
        }
      })
         .then(res => {
           console.log(res);
           this.$http.post('/app/productList.htm')
              .then(res => {
                console.log(res);
                console.log(res.data.list[1].bigPicPath1)
              })
              .catch(err => {
                console.log(err)
              })
         })
         .catch(err => {
           console.log(err)
         })
    },
    thirdRoute:function() {
      this.$router.push('/list');
      console.log('hehe')
    },
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
    background:url("../assets/home/cook.png") no-repeat;
    background-size:100% auto;
    height:180px;
}
    .top-font span{
      display:flex;
      align-items:center;
      justify-content: center;
      color:aliceblue;
      font-size:1.8rem;
    }
.middle{
  height:280px;;
  background-color:#EBEBEB;
}
.middle-border {
    height:320px;
    margin-top:-350px;
   }
      .middle-border-first,.middle-border-second,.middle-border-forth {
        height:88px;
        width:96%;
        background-color:white;
        border-radius:0.8rem;
        margin:2rem auto;
        display:flex;
      }
      .middle-border-first-icon {
        background:url('../assets/home/border-ve.png') no-repeat;
        background-size:100% auto;
        width:90px;
        height:90px;
      }
      .middle-border-first-text,.middle-border-second-text,.middle-border-forth-text {
        display:flex;
        flex-direction:column;
        margin:auto;
      }
         .bottom-one {
           font-size:14px;
           color:gray;
         }
      .middle-border-first-backimg {
        background:url('../assets/home/border-ve-img.png')no-repeat;
        background-size:100% auto;
        width:30px;
        height:30px;
        margin:auto;
      }
      .middle-border-second-backimg {
        background:url('../assets/home/border-lanzi-img.png')no-repeat;
        background-size:100% auto;
        width:30px;
        height:30px;
        margin:auto;
      }
      .middle-border-forth-backimg {
        background:url('../assets/home/border-knife-img.png')no-repeat;
        background-size:100% auto;
        width:30px;
        height:30px;
        margin:auto;
      }
      .middle-border-second-icon {
        background:url('../assets/home/border-egg.png') no-repeat;
        background-size:100% auto;
        width:90px;
        height:90px;
      }
      .middle-border-forth-icon{
        background:url('../assets/home/border-last.png') no-repeat;
        background-size:100% auto;
        width:90px;
        height:90px;
      }
</style>
