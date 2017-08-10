<template>
  <div>
    <div class = 'top'>
      <div class = 'top-font'>
        <h2>优品电商</h2>
      </div>
    </div>
    <div class = 'middle'>
      <div class = 'middle-border'>
      <div class = 'middle-border-first'></div>
      <div class = 'middle-border-second'></div>
      <div class = 'middle-border-third'></div>
      <div class = 'middle-border-forth'></div>
    </div>
    </div>  
    <div class="foot"></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer'

export default {
  components: {
    Footer   
  }
}
</script>
<style lang='less'>
.top {
  // background:url("../assets/home-cook.png") no-repeat #e5e5e6;
  // background-size:100% auto;
  height:140px;
  background-color:bisque;

}
    .top-font {
      display:flex;
      align-items:center;
      justify-content: center;
      color:aliceblue;

      // color:white;
    }
.middle {
  height:412px;
  background-color:grey;
}    
.foot {
  background:#8c9cb3;
  height:40px;
}    
</style>