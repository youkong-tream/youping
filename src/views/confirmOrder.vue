<template>
    <div>
        <header>
            <a href="#/list"><span class="iconfont icon-shangyiyehoutuifanhui header-icon"></span></a>
            <span class="header-edit"></span>
            <span class="header-title">确认订单</span>
        </header>
        <div class="confirm-order-minBox">
            <div class="add-address">
                <div class="add-address-no">
                    <span><i class="iconfont icon-weizhi-xianxing"></i>添加地址</span>
                </div>
                <div class="add-address-yes"></div>
            </div>
            <ul class="confirm-order-ul">
                <li v-for="item in list" class="confirm-order-li">
                    {{ item }}
                </li>
            </ul>

        </div>
        <footer>

        </footer>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                list: [1, 2, 3, 4]
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
    .confirm-order-minBox {
        width: 110%;
        min-width: 110%;
        max-height: 100%;
        padding: 0 10% 0 0;
        overflow-x: hidden;
        overflow-y: scroll;
        background: #f8f8f8;
        position: fixed;
        top: 3.6rem;
        bottom: 45px;
    }

    .add-address {
        height: 7rem;
        width: 100%;
        background: #fff;
        overflow: hidden;
    }

    .add-address-no {
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        margin: 2rem;
    }

    .add-address-no span {
        display: inline-block;
        height: 2rem;
        width: 10rem;
        margin: 0 4.3rem 0 0;
        font-size: 1.4rem;
        color: #333;
    }

    .add-address-no span i {
        color: #333;
        font-size: 2rem;
    }

    .confirm-order-ul {
        padding: 0;
    }

    .confirm-order-li {
        background: #f0fcff;
        min-height: 40rem;
        margin: 1rem 0;
    }
</style>
<style scoped>
    /* footer*/
    footer {
        width: 100%;
        height: 45px;
        min-height: 45px;
        line-height: 45px;
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

</style>
