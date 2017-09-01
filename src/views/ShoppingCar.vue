<template>
    <div>
        <header>
            <a href="#/list"><span class="iconfont icon-shangyiyehoutuifanhui header-icon"></span></a>
            <span class="header-edit">编辑</span>
            <span class="header-title">购物车</span>
        </header>
        <div class="shopping-cart-minBox">
            <ul class="shopping-cart-ul">
                <li v-for="item in carts" class="shopping-cart-li">
                    <div class="cart-li-title">
                        <span>金品购物shopping-</span>
                    </div>
                    <div class="cart-li-info">
                        <div class="li-info-left">
                            <span class="iconfont icon-zhengquewancheng-yuankuang icon-selected"></span>
                        </div>
                        <div class="li-info-right">
                            <div class="info-right-pic">
                                <div class="right-pic-top">
                                    <img src="../assets/list/logo.png">
                                </div>
                                <div class="right-pic-bottom">
                                    <div class="change-amount-list amount-list-btn" @click="plus()">-</div>
                                    <input class="change-amount-list amount-list-number" type="number" min="1"
                                           max="9999"
                                           v-model="amountListNumber">
                                    <div class="change-amount-list amount-list-btn big-btn" @click="cut()">+</div>
                                </div>
                            </div>
                            <div class="info-right-name">
                                <p>{{ item }}</p>
                                <p>价格:<span>￥40.00/个</span></p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <footer>
            <span class="footer-icon">
                <i class="iconfont icon-zhengquewancheng-yuankuang icon-selected"></i>
                全选
            </span>
            <span class="footer-amount">
                去结算({{ amount }})
            </span>
            <p class="footer-price">
                合计
                <span>￥{{ price }}</span>
            </p>
        </footer>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                carts: ['魅族', '小米', '农家豆芽', '番茄鸡蛋', '苹果'],
                price: "200.00",
                amount: 5,
            }
        }
    }
</script>
<style scoped>
    /* header*/
    header {
        width: 100%;
        min-width: 240px;
        height: 3.6rem;
        min-height: 3.6rem;
        line-height: 3.6rem;
        background: #faf9f9;
        border-bottom: 1px solid #d6d6d6;
        color: #333333;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
    }

    span {
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .header-icon {
        float: left;
        width: 8rem;
        height: 100%;
        text-align: left;
        text-indent: 1rem;
        font-size: 2.3rem;
        color: #666;
    }

    .header-title {
        display: block;
        text-align: center;
        height: 100%;
        font-size: 1.8rem;
        color: #333;
    }

    .header-edit {
        float: right;
        width: 8rem;
        height: 100%;
        text-align: right;
        padding: 0 1rem 0 0;
        font-size: 1.6rem;
        color: #333;
    }

</style>
<style scoped>
    /* content*/
    .shopping-cart-minBox {
        width: 110%;
        min-width: 110%;
        max-height: 100%;
        padding: 0 10% 0 0;
        overflow-x: hidden;
        overflow-y: scroll;
        background: #f8f8f8;
        position: fixed;
        top: 3.6rem;
        bottom: 4.5rem;
    }

    .shopping-cart-ul {
        width: 100%;
        min-width: 100%;
        background: #f8f8f8;
        padding: 0;
    }

    .shopping-cart-li {
        width: 100%;
        min-height: 16rem;
        background: #fff;
        margin: 1rem auto;
        overflow: hidden;
    }

    .cart-li-title {
        width: 100%;
        height: 3rem;
        border-bottom: 1px solid #eee;
        background: #fff;
        line-height: 3rem;
        padding: 0 1.6rem;
    }

    .cart-li-title span {
        font-size: 1.5rem;
        color: #5e5e5e;
    }

    .cart-li-info {
        width: 100%;
        min-height: 13rem;
        padding: 0 0 0 1.5rem;
        overflow: hidden;
    }

    .li-info-left {
        width: 4rem;
        max-width: 10%;
        float: left;
        margin: 0;
    }

    .li-info-right {
        width: 86%;
        min-height: 13rem;
        overflow: hidden;
        float: right;
    }

    .shopping-cart-minBox .icon-selected {
        display: inline-block;
        min-height: 100%;
        line-height: 13rem;
    }

    .info-right-pic, .info-right-name {
        float: left;
        width: 10rem;
        max-width: 45%;
        min-height: 13rem;
    }

    .info-right-pic {
    }

    .info-right-name {
    }

    .right-pic-top {
        width: 90px;
        height: 90px;
        margin: 1rem auto 0;
        overflow: hidden;
    }

    .right-pic-top img {
        width: 100%;
        height: 100%;
    }

    .right-pic-bottom {
        margin: 0 0 0 1.4rem;
    }

    .info-right-name p {
        height: 2rem;
        line-height: 2rem;
        margin: 1rem 0 0;
        font-size: 1.2rem;
        color: #333;
        text-indent: 1rem;
    }

    .info-right-name p span {
        color: #ff4300;
        font-size: 1.3rem;
    }

    .change-amount-list {
        display: inline-block;
    }

    .amount-list-btn {
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
        line-height: 1.8rem;
        text-align: center;
        border: 1px solid #9e9e9e;
    }

    .amount-list-number {
        height: 1.5rem;
        width: 2.8rem;
        padding: 0.25rem;
        line-height: 2rem;
        margin-bottom: 0.5rem;
        outline: none;
        border: none;
    }
</style>
<style scoped>
    /* footer*/
    footer {
        width: 100%;
        height: 4.45rem;
        min-height: 4.45rem;
        line-height: 4.45rem;
        border-top: 1px solid #ecf0ef;
        color: #000;
        background: #fff;
        overflow: hidden;
        padding: 0 0.5rem;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 999;
    }

    .footer-icon {
        float: left;
        width: 5rem;
        height: 4.45rem;
        line-height: 4.45rem;
        font-size: 1.3rem;
        color: #333;
    }

    .footer-price {
        font-size: 1.4rem;
        height: 4.45rem;
        line-height: 1.6rem;
        color: #333;
        text-align: left;
        text-indent: 2rem;
    }

    .footer-price span {
        color: #ff4300;
    }

    .footer-amount {
        float: right;
        width: 7rem;
        font-size: 1.4rem;
        color: #fff;
        height: 3rem;
        line-height: 3rem;
        border-radius: 1.5rem;
        background: #d12712;
        margin: 0.6rem auto;
    }

    .icon-selected {
        font-size: 2rem;
        color: #f24417;
    }
</style>


