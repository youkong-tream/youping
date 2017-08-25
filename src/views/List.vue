<template>
    <div>
      <!-- 顶部 -->
        <div class='list-content'>
            <div class='list-top'>
                <div class='back-icon-box'>
                   <div class='back-icon' @click="routeBack()"></div>
                </div>
                <div class='list-top-text'>精选</div>
                <div class='right-icon'>
                    <div class='shopingCar-icon-box'>
                       <div class='shopingCar-icon' @click="routeShoppingCar()"></div>
                    </div>
                    <div class='search-icon-box'>
                       <div class='search-icon' @click="routeSearch()"></div>
                    </div>
                </div>
            </div>
          <!-- 滑动框 -->
          <div class='button-box'>
             <scroller lock-y :scrollbar-x=false>
                <div class="button">
                   <div class="button-item" v-for="item in itemText" @click='getSth'>{{item}}</div>
                </div>
             </scroller>
          </div>
          <!-- wrapper -->
          <div class='list-wrapper'>
              <ul class = 'list-content'>
                  <li class = 'listPic' v-for = 'item in picData'>
                      <div class = 'pic'>{{item.smallPicPath}}</div>
                      <span class = 'picText'>{{item.ProductName}}</span>
                      <span class = 'picPrice'>{{item.price1}}</span>
                  </li>
              </ul>
          </div>
        </div>
      <!-- 底部组件 -->
      <div class='foot'>
          <Yfooter></Yfooter>
      </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { Scroller, LoadMore } from 'vux'
import Yfooter from '../components/Yfooter'
export default {
  created () {
    this.$http.get('/app/productList.htm')
        .then(res => {
          this.picData = res.data.list;
          console.log(this.picData);
          this.$nextTick(() => { this.scroll = new Bscroll(this.$refs.list-wrapper, {}) })
        })
        .catch(err => {
          console.log(err)
        })
  },
  data() {
    return {
      picData:"",
      itemText: ['全部商品', '生活用品类', '礼品套装', '学生精品杯', '餐饮用品', '茶', '笔']
    }
  },
  components: {
    Yfooter,
    Scroller,
    LoadMore
  },
  methods: {
    getSth() {
      this.$router.push('/')
    },
    routeBack() {
      this.$router.push('/')
    },
    routeShoppingCar() {
      this.$router.push('/shoppingCar')
    },
    routeSearch() {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less">

.list-top {
  height: 42px;
  border-bottom: 1px solid grey;
  display: flex;
  align-items: center;
  position: absolute;
  top:0;
  left:0;
}

.back-icon {
  background: url('../assets/list/back.png') no-repeat;
  width: 23px;
  height: 23px;
  background-size: 100% auto;
}

.list-top-text {
  margin-left: 40%;
  font-size: 20px;
}

.right-icon {
  display: flex;
  justify-content: space-between;
  margin-left: 20%;
  width: 70px;
}

.shopingCar-icon {
  background: url('../assets/list/shoppingCar.png') no-repeat;
  width: 23px;
  height: 23px;
  background-size: 100% auto;
}

.search-icon {
  background: url('../assets/list/search.png');
  width: 23px;
  height: 23px;
  background-size: 100% auto;
}

.button-box {
  height: 60px;
  background-color: aliceblue;
  position: absolute;
  left: 0;
  top:0;
}

.button {
  height: 40px;
  position: relative;
  width: 950px;
}

.button-item {
  width: 120px;
  height: 40px;
  display: inline-block;
  float: left;
  text-align: center;
  line-height: 40px;
  margin-top: 10px;
}

.list-wrapper {
  width:100%;
  height:500px;
  overflow: hidden;
}

.listPic {
  width: 100px;
  height: 230px;
  background-color: aquamarine;
  margin-left: 1%;
  // display: inline-block;
}

</style>

