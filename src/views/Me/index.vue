<template>
    <div>
        <div class='me-top'>
            <div class='me-top-backImg-box'>
                <router-link to='/'>
                    <div class='me-top-backImg'></div>
                </router-link>
                <router-view></router-view>
            </div>
            <div class='me-top-text'>我的优品电商</div>
            <div class='me-top-account' @click='toAccount'>账户管理</div>
        </div>
        <div class="me-middle-cover">
            <div class='me-middle'>
                <div class='me-middle-backImg'>
                    <div class='me-middle-baclImg-picture'></div>
                    <div class='me-middle-backImg-number'></div>
                </div>
                <div class='me-middle-btn-box'>
                    <div class='me-middle-btn'>
                        <div class='me-middle-btn-left'>
                            <div class='me-middle-btn-left-img'></div>
                            <div class='me-middle-btn-left-text'>积分0</div>
                        </div>
                        <div class='me-middle-btn-right'>
                            <div class='me-middle-btn-right-img'></div>
                            <div class='me-middle-btn-right-text' @click='toShoppingCar'>购物车</div>
                        </div>
                    </div>
                </div>
                <div class='me-middle-myList'>
                    <div class='me-middle-myList-order'>
                        <div class='me-middle-myList-order-img'></div>
                        <div class='me-middle-myList-order-text'>我的订单</div>
                        <div class='me-middle-myList-order-back'></div>
                    </div>
                    <div class='me-middle-myList-collect'>
                        <div class='me-middle-myList-collect-img'></div>
                        <div class='me-middle-myList-collect-text'>我的收藏</div>
                        <div class='me-middle-myList-collect-back'></div>
                    </div>
                    <div class='me-middle-myList-coupon'>
                        <div class='me-middle-myList-coupon-img'></div>
                        <div class='me-middle-myList-coupon-text'>我的优惠券</div>
                        <div class='me-middle-myList-coupon-back'></div>
                    </div>
                    <div class='me-middle-myList-address'>
                        <div class='me-middle-myList-address-img'></div>
                        <div class='me-middle-myList-address-text'>我的收货地址</div>
                        <div class='me-middle-myList-addresss-back'></div>
                    </div>
                    <div class='me-middle-myList-balance'>
                        <div class='me-middle-myList-balance-img'></div>
                        <div class='me-middle-myList-balance-text'>余额</div>
                        <div class='me-middle-myList-balance-back'></div>
                    </div>
                    <div class='me-middle-myList-phone'>
                        <div class='me-middle-myList-phone-img'></div>
                        <div class='me-middle-myList-phone-text'>客服电话</div>
                        <div class='me-middle-myList-phone-back'></div>
                    </div>
                </div>
            </div>
        </div>
        <div class='foot'>
            <Yfooter></Yfooter>
        </div>
    </div>
</template>
<script>
    import Yfooter from '../../components/Yfooter'
    export default {
        components: {
            Yfooter
        },
        methods: {
            toAccount() {
                this.$router.push('/me/edit');
            },
            toShoppingCar() {
                this.$router.push('/shoppingCar');
            }
        }
    }
</script>
<style lang="less" scoped>
    .me-top {
        height: 45px;
        width: 100%;
        display: flex;
        align-items: center;
        background: #faf9f9;
        position: fixed;
        left: 0;
        top: 0;
    }

    .me-top-backImg {
        background: url('../../assets/list/back.png') no-repeat;
        background-size: 100% auto;
        width: 23px;
        height: 23px;
    }

    .me-top-text {
        margin-left: 28%;
    }

    .me-top-account {
        margin-left: 20%;
    }

    .me-middle-backImg {
        height: 270px;
        background: url('../../assets/me/background.png') no-repeat;
        background-size: 100% auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .me-middle-backImg-picture {
        width: 86.25px;
        height: 86.25px;
    }

    .me-middle-btn-box {
        height: 80px;
        background-color: #fafafa;
    }

    .me-middle-btn {
        width: 90%;
        height: 60px;
        margin-left: 5%;
        display: flex;
        background-color: white;
    }

    .me-middle-btn-left {
        width: 50%;
        display: flex;
        align-items: center;
    }

    .me-middle-btn-left-img {
        width: 28px;
        height: 28px;
        background: url('../../assets/me/star.png') no-repeat;
        background-size: 100% auto;
        margin-left: 40px;
        margin-right: 10px;
    }

    .me-middle-btn-right {
        width: 50%;
        display: flex;
        align-items: center;
    }

    .me-middle-btn-right-img {
        width: 28px;
        height: 28px;
        background: url('../../assets/me/shoppingCar.png') no-repeat;
        background-size: 100% auto;
        margin-left: 40px;
        margin-right: 10px;
    }

    .me-middle-myList {

    }

    .me-middle-myList-order {
        height: 60px;
        width: 100%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #999;
    }

    .me-middle-myList-order-img {
        width: 38px;
        height: 38px;
        background: url('../../assets/me/list-order.png') no-repeat;
        background-size: 100% auto;
        margin-left: 20px;
    }

    .me-middle-myList-order-text {
        height: 60px;
        width: 150px;
        line-height: 60px;
        margin-left: 20px;
    }

    .me-middle-myList-order-back {
        width: 10px;
        height: 18px;
        background: url('../../assets/me/list-back.png') no-repeat;
        background-size: 100% auto;
        margin-left: 34%;
    }

    .me-middle-myList-collect {
        height: 60px;
        width: 100%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid grey;
    }

    .me-middle-myList-collect-img {
        width: 38px;
        height: 38px;
        background: url('../../assets/me/list-collect.png') no-repeat;
        background-size: 100% auto;
        margin-left: 20px;
    }

    .me-middle-myList-collect-text {
        height: 60px;
        width: 150px;
        line-height: 60px;
        margin-left: 20px;
    }

    .me-middle-myList-collect-back {
        width: 10px;
        height: 18px;
        background: url('../../assets/me/list-back.png') no-repeat;
        background-size: 100% auto;
        margin-left: 34%;
    }

    .me-middle-myList-coupon {
        height: 60px;
        width: 100%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid grey;
    }

    .me-middle-myList-coupon-img {
        width: 38px;
        height: 38px;
        background: url('../../assets/me/list-coupon.png') no-repeat;
        background-size: 100% auto;
        margin-left: 20px;
    }

    .me-middle-myList-coupon-text {
        height: 60px;
        width: 150px;
        line-height: 60px;
        margin-left: 20px;
    }

    .me-middle-myList-coupon-back {
        width: 10px;
        height: 18px;
        background: url('../../assets/me/list-back.png') no-repeat;
        background-size: 100% auto;
        margin-left: 34%;
    }

    .me-middle-myList-address {
        height: 60px;
        width: 100%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid grey;
    }

    .me-middle-myList-address-img {
        width: 38px;
        height: 38px;
        background: url('../../assets/me/list-address.png') no-repeat;
        background-size: 100% auto;
        margin-left: 20px;
    }

    .me-middle-myList-address-text {
        height: 60px;
        width: 150px;
        line-height: 60px;
        margin-left: 20px;
    }

    .me-middle-myList-address-back {
        width: 10px;
        height: 18px;
        background: url('../../assets/me/list-back.png') no-repeat;
        background-size: 100% auto;
        margin-left: 30%;
    }

    .me-middle-myList-balance {
        height: 60px;
        width: 100%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid grey;

    .me-middle-myList-balance-img {
        width: 38px;
        height: 38px;
        background: url('../../assets/me/list-balance.png') no-repeat;
        background-size: 100% auto;
        margin-left: 20px;
    }

    .me-middle-myList-balance-text {
        height: 60px;
        width: 150px;
        line-height: 60px;
        margin-left: 20px;
    }

    .me-middle-myList-balance-back {
        width: 10px;
        height: 18px;
        background: url('../../assets/me/list-back.png') no-repeat;
        background-size: 100% auto;
        margin-left: 34%;
    }

    }
    .me-middle-myList-phone {
        height: 60px;
        width: 100%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid grey;
    }

    .me-middle-myList-phone-img {
        width: 38px;
        height: 38px;
        background: url('../../assets/me/list-phone.png') no-repeat;
        background-size: 100% auto;
        margin-left: 20px;
    }

    .me-middle-myList-phone-text {
        height: 60px;
        width: 150px;
        line-height: 60px;
        margin-left: 20px;
    }

    .me-middle-myList-phone-back {
        width: 10px;
        height: 18px;
        background: url('../../assets/me/list-back.png') no-repeat;
        background-size: 100% auto;
        margin-left: 34%;
    }

    .foot {
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>
<style scoped>
    .me-middle-cover {
        position: fixed;
        top: 45px;
        bottom: 45px;
        min-width: 110%;
        padding-right: 10%;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    .me-middle-myList div {
        border-bottom: 1px solid #eee;
    }
</style>
