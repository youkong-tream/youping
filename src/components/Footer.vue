<template>
  <div class="footer">
      <flexbox>
          <flexbox-item>
              <div class="footer-content">
                 <div class="footer-one-icon"></div>  
                 <router-link to="/">首页</router-link>
                 <router-view></router-view>
             </div>
          </flexbox-item>
          <flexbox-item>
              <div class="footer-content">
                <div class="footer-two-icon"></div>
                <router-link to="/list">商城</router-link>
                <router-view></router-view>
            </div>
          </flexbox-item>
          <flexbox-item>
              <div class="footer-content">
                <div class="footer-three-icon"></div>
                <router-link to="/shoppingCar">购物车</router-link>
                <router-view></router-view>
            </div>
          </flexbox-item>
          <flexbox-item>
              <div class="footer-content">
                 <div class="footer-four-icon"></div>
                 <router-link to="/me">我的</router-link>
                 <router-view></router-view>
             </div>
          </flexbox-item>
     </flexbox> 
  </div>
</template>

<script>
import { Flexbox, FlexboxItem} from 'vux'
export default {
  components: {
    Flexbox,
    FlexboxItem
  }
}
</script>
<style lang="less">
.footer {
    height:45px;
    border-top: 1px solid grey;
    line-height: 45px;
}
.footer-content {
    text-align: center;
    
}
   :link {
     font-color:black;
   }
   :active,:visited {
       font-color:red;
   }
</style>