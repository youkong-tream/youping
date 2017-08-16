<template>
  <div>  
    <div class = 'list-content'>
        <div class = 'list-top'>
        <div class = 'back-icon-box'>
          <router-link to='/'>
            <div class = 'back-icon'></div>
          </router-link>
          <router-view></router-view>
        </div>
        <div class = 'list-top-text'>精选</div>
        <div class = 'right-icon'>
          <div class = 'shopingCar-icon-box'>
            <router-link to='/grid'>
              <div class = 'shopingCar-icon'></div>
            </router-link>
            <router-view></router-view>
          </div>
          <div class = 'search-icon-box'>
            <router-link to='/grid'>
              <div class = 'search-icon'></div>
            </router-link>
            <router-view></router-view>
          </div>
        </div>
      </div>
      <div class = 'button-box'>
        <scroller lock-y :scrollbar-x=false>
          <div class="button">
              <div class="button-item" v-for="i in itemText" @click='getSth'>{{i}}</div>
          </div>
      </scroller>   
      </div>
      <div class = 'img'>
        <div class = 'img-left'></div>
        <div class = 'img-right'></div>
      </div>
    </div>
    <div class = 'foot'>
      <Footer></Footer>
    </div>
  </div>  
    
  
</template>

<script>
import { Scroller,LoadMore } from 'vux'
import Footer from '../components/Footer'
export default {
  data(){
    return {
      itemText:['全部商品','生活用品类','礼品套装','学生精品杯','餐饮用品','茶','笔']
    }
  },
  components:{
    Footer,
    Scroller
  },
  methods:{
    getSth() {
      this.$router.push('/')
    }
  }
  
}
</script>

<style lang="less">
.list-top {
    height:42px;
    border-bottom:1px solid grey;
    display:flex;
    align-items:center;   
}
    .back-icon {
      background:url('../assets/list/back.png') no-repeat;
      width:23px;
      height:23px;
      background-size:100% auto;
    }
    .list-top-text {
    margin-left:40%;
    font-size:20px;
    }
    .right-icon {
    display:flex; 
    justify-content: space-between;
    margin-left:20%;
    width:70px;
    }
      .shopingCar-icon {
        background:url('../assets/list/shoppingCar.png') no-repeat;
        width:23px;
        height:23px;
        background-size:100% auto;
      }
      .search-icon {
        background:url('../assets/list/search.png');
        width:23px;
        height:23px;
        background-size:100% auto;
      }
.button-box {
   height:60px;
   background-color:aliceblue;
}      
.button {
  height: 40px;
  position: relative;
  width: 950px;
}
    .button-item {
      width: 120px;
      height: 40px;
      display:inline-block;
      float: left;
      text-align: center;
      line-height: 40px;
      margin-top:10px;
    }
         .button-item:visited {
           border-radius: 5px;
           border:1px solid lightgoldenrodyellow;
           color:red;
         }
.img {
  display:flex;
  margin-top:2px;
}         
.img-left {
   width:48.5%;
   height:230px;
   background-color:aquamarine;
   margin-left:1%;
   display:inline-block;
 }
 .img-right {
   width:48.5%;
   height:230px;
   background-color:aquamarine;
   margin-left:1%;
   display:inline-block;
 }        
</style>

