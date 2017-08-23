<template>
   <div class = 'Yfooter'>
       <ul>
           <li v-for = 'item in itemArray' @click = 'routerto(item.routerPath)' v-bind:class = '{active:isActive}'>
               <div class = 'Yfooter-img'></div>
               <span>{{item.text}}</span>
           </li>
       </ul>
   </div>
</template>
<script>
export default {
     data () {
         return {
             itemArray :[
                {text:'首页',routerPath:'/'},
                {text:'商品',routerPath:'/list'},
                {text:'购物车',routerPath:'/shoppingCar'},
                {text:'我的',routerPath:'/me'}
             ],
             active : {
                 isActive:false
             }
         }
     },
     methods: {
         routerto(routerPath,isActive) {
              this.$router.push(routerPath);
              this.isActive = !this.isActive
             }
         }
     }
</script>
<style lang="less">
.Yfooter {
    height: 55px;
}
.Yfooter-img {
     width:17px;
     height:17px;              
     background-size:100% auto;
     margin:0 auto;
}
  li {
      list-style: none;
      width:25%;
      height:20px;
          .isActive {
              background-color:red;
          }
  }
   
  ul {
      display:flex;
  }
</style>


