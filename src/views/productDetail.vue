<template>
    <div class="productBac">
        <header>
            <i class="iconfont icon-baocun"></i>
        </header>
        <article class="cover">
            <div class="outContain" v-bind:class="{left0:left[0],left1:left[1],left2:left[2],left3:left[3]}">
                <ul class="contain" v-bind:class="{containLeft:isLeft,containRight:isRight}"
                    @touchstart="touchStart($event)" @touchend="touchEnd($event)">
                    <li v-for="item in middleImgList">
                        <img v-bind:src=item>
                    </li>
                </ul>
            </div>
            <ol class="control-contain">
                <li v-bind:class="{active:left[0]}"></li>
                <li v-bind:class="{active:left[1]}"></li>
                <li v-bind:class="{active:left[2]}"></li>
                <li v-bind:class="{active:left[3]}"></li>
            </ol>
        </article>
        <article class="synopsis">
            <div class="price"><span class="price-span">￥{{ price1 }}</span><span class="marketUnit-span">/{{ marketUnit }}</span>
            </div>
            <div class="productName"><span class="style-span">{{ productStyle }}</span> | <span class="name-span">{{ productName }}</span>
            </div>
            <div class="groupBuyDetail">{{ groupBuyDetail }}</div>
        </article>
        <article class="evaluate">
            <h3 class="red-title">商品评价</h3>
        </article>
        <article class="details">
            <h3 class="red-title">商品详情</h3>
            <div v-html="productDetail" class="productDetail"></div>
        </article>
        <footer>
            <div class="collection">
                <div class="iconfont icon-xihuan-xianxing collection-icon"></div>
                <div class="collection-text">收藏</div>
            </div>
            <div class="joinCart">
                <div class="join-btn">加入购物车</div>
            </div>
            <div class="buy">
                <div class="buy-btn">立即购买</div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                productId: "",
                isLeft: false,
                isRight: false,
                startX: 0,
                endX: 0,
                page: 0,
                left: [true, false, false, false],
                middleImgList: [],
                groupBuyDetail: "",
                productStyle: "",
                productName: "",
                price1: "",
                marketUnit: "",
                productDetail: "",
            }
        },
        methods: {
            touchStart (e) {
                this.startX = e.touches[0].clientX
            },
            touchEnd (e) {
                this.endX = e.changedTouches[0].clientX;
                let that = this;
                if (this.endX < this.startX && that.page < that.left.length - 1) {
                    that.isLeft = true;
                    let timer = setTimeout(function () {
                        that.isLeft = false;
                        if (that.page >= 0) {
                            that.left[that.page] = false
                        }
                        that.page++;
                        that.left[that.page] = true;
                        clearTimeout(timer);
                        console.log(that.left)
                    }, 550)
                }
                if (this.endX > this.startX && that.page > 0) {
                    that.isRight = true;
                    let timer = setTimeout(function () {
                        that.isRight = false;
                        if (that.page <= that.left.length - 1) {
                            that.left[that.page] = false
                        }
                        that.page--;
                        that.left[that.page] = true;
                        clearTimeout(timer);
                    }, 550)
                }
            }
        },
        mounted(){

        },
        created (){
            this.productId = this.$route.query.productId;
            console.log(this.$route.query.productId);
            this.$http.get("app/productDetail.htm?productId=" + this.productId)
                .then(res => {
                    this.middleImgList = res.data.bigImgList;
                    this.groupBuyDetail = res.data.info.groupBuyDetail;
                    this.productStyle = res.data.info.productStyle;
                    this.productName = res.data.info.productName;
                    this.price1 = res.data.info.price1;
                    this.marketUnit = res.data.info.marketUnit;
                    this.productDetail = res.data.info.productDetail;
                    console.log(res.data.message);
                    console.log(res.data.info.groupBuyDetail);
                })
                .catch(err => {
                    console.log(err)
                });
        },

    }
</script>
<style scoped>
    .productBac {
        background: #fafafa;
        width: 105%;
        padding: 0 5% 4rem 0;
        position: fixed;
        top: 0;
        bottom: 0;
        overflow-y: scroll;
    }

    .cover {
        width: 100%;
        height: 31rem;
        padding: 0;
        overflow: hidden;
        position: relative;
        border-bottom: 1px solid #eee;
    }

    .outContain {
        width: 100%;
        height: 100%;
        padding: 0;
        position: absolute;
        left: 0;
        top: 0;
    }

    .contain {
        background: #eee;
        width: 400%;
        height: 100%;
        padding: 0;
        position: absolute;
        left: 0;
        transform: translate3d(0, 0, 0);
    }

    .containLeft {
        transform: translate3d(0, 0, 0);
        animation: toLeft 0.5s ease forwards;
        pointer-events: none;
    }

    .containRight {
        transform: translate3d(0, 0, 0);
        animation: toRight 0.5s ease forwards;
        pointer-events: none;
    }

    .contain li {
        width: 25%;
        height: 100%;
        padding: 0;
        overflow: hidden;
        float: left;
        list-style: none;
        background: #fff;
    }

    .contain li img {
        width: 100%;
        height: 100%;
    }

    .control-contain {
        position: absolute;
        bottom: -1rem;
        left: 35%;
        right: 35%;
        height: 1.5rem;
        padding: 0;
        z-index: 9999;
    }

    .control-contain li {
        float: left;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background-color: #212121;
        margin-left: 15px;
        opacity: 0.8;
    }

    .control-contain .active {
        background: #0e90d2;
    }

    @keyframes toLeft {
        0% {
            left: 0
        }
        100% {
            left: -100%
        }
    }

    @keyframes toRight {
        0% {
            left: 0%
        }
        100% {
            left: 100%
        }
    }

    .left0 {
        left: 0%
    }

    .left1 {
        left: -100%
    }

    .left2 {
        left: -200%
    }

    .left3 {
        left: -300%
    }

    span {
        font-family: "Microsoft Yahei", "微软雅黑";
    }

    .synopsis {
        width: 100%;
        min-height: 10rem;
        padding: 2rem 1rem 0;
        background: #fff;
    }

    .price {
        height: 30px;
        line-height: 30px;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
    }

    .price-span {
        font-size: 1.7rem;
        color: #d12712;
    }

    .marketUnit-span {
        font-size: 1rem;
        color: #c0c0c0;
    }

    .productName {
        height: 40px;
        line-height: 40px;
        font-weight: 600;
        overflow: hidden;
        color: #333;
    }

    .productDetail {
        background: #fff;
    }

    .style-span {
        font-size: 1.4rem;
    }

    .name-span {
        font-size: 1.6rem;
    }

    .groupBuyDetail {
        font-size: 1.4rem;
        font-weight: 500;
        color: #757575;
    }

    .red-title {
        height: 50px;
        line-height: 50px;
        margin: 1rem 0;
        padding: 0 1rem;
        font-size: 1.6rem;
        font-weight: 700;
        color: #d12712;
        background: #fff;
    }

    footer {
        height: 4rem;
        width: 100%;
        border-top: 0.1rem solid #eaeaea;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 999;
        background: #fff;
        text-align: center;
    }

    .collection {
        float: left;
        width: 20%;
        height: 100%;
    }

    .joinCart {
        float: left;
        width: 42%;
        height: 100%;

    }

    .buy {
        float: left;
        width: 38%;
        height: 100%;

    }

    .join-btn {
        width: 92%;
        height: 2.8rem;
        line-height: 2.5rem;
        font-size: 1.6rem;
        margin: 0.6rem auto;
        border-radius: 1.5rem;
        color: #d12712;
        border: 1px solid #d12712;
    }

    .buy-btn {
        width: 92%;
        height: 2.8rem;
        line-height: 2.5rem;
        font-size: 1.5rem;
        margin: 0.6rem auto;
        border-radius: 1.6rem;
        color: #fff;
        background: #d12712;
        border: 1px solid #d12712;
    }

    .collection-icon {
        color: #ff4300;
        font-size: 2.1rem;
    }

    .collection-text {
        height: 0.8rem;
        font-size: 0.8rem;
        line-height: 0.5rem;
        color: #333;
    }
</style>
