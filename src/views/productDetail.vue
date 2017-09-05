<template>
    <div>
        <div class="productBac">
            <header>
                <div class="header-back">
                    <a href="#/list"><span
                        class="iconfont icon-shangyiyehoutuifanhui-yuankuang detail-icon0"></span></a>
                </div>
                <div class="header-more">
                    <span class="iconfont icon-caigou-xianxing detail-icon1"></span>
                    <span class="iconfont icon-gengduo-hengxiang detail-icon2" @touchstart="showNav()"></span>
                </div>
            </header>
            <nav class="detail-Nav" v-show="isShowNav">
                <span class="iconfont icon-biaotou-zhengxu detail-Nav-icon"></span>
                <div class="detail-Nav-list"><span class="detail-icon iconfont icon-shouye"></span><span>首页</span></div>
                <div class="detail-Nav-list"><span class="detail-icon iconfont icon-shangpin"></span><span>全部商品</span>
                </div>
                <div class="detail-Nav-list"><span class="detail-icon iconfont icon-yonghu"></span><span>我的账户</span>
                </div>
            </nav>
            <article class="cover">
                <div class="outContain" v-bind:class="{left0:left[0],left1:left[1],left2:left[2],left3:left[3]}">
                    <ul class="contain" v-bind:class="{containLeft:isLeft,containRight:isRight}"
                        @touchstart="touchStart($event)" @touchend="touchEnd($event)">
                        <li v-for="item in middleImgList">
                            <img v-bind:src=item :onerror="logo">
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
                    <div class="join-btn" @touchstart="showPanelBtn()">加入购物车</div>
                </div>
                <div class="buy">
                    <div class="buy-btn" @touchstart="showPanelBtn()">立即购买</div>
                </div>
            </footer>
        </div>

        <div class="buy-panel-cover" v-if="showPanel" v-bind:class="{closePanelDoCover:closePanel}">
        </div>
        <div class="buy-panel" v-if="showPanel" v-bind:class="{closePanelDo:closePanel}">
            <div class="close-panel" @touchstart="doClosePanel()">
                <span class="iconfont icon-cuowuguanbiquxiao-yuankuang close-panel-icon"></span>
            </div>
            <div class="buy-panel-info">
                <div class="panel-info-one"><span class="price-span price-span-panel ">￥{{ price1 }}</span><span
                    class="marketUnit-span">/{{ marketUnit }}</span>
                </div>
                <div class="panel-info-two">
                    库存:&nbsp;{{ stockPayed }}{{ marketUnit }}
                </div>

            </div>
            <div class="buy-panel-other" v-if="buyOther">
                <div class="other-attributes">其他属性:</div>
                <span v-for="item in productGroupList" class="other-attributes-minBox">
                    {{ item.ptTag }}
                </span>
            </div>
            <div class="buy-panel-amount">
                <div class="change-amount">
                    <span class="change-amount-span">数量</span>
                    <div class="change-amount-list amount-list-btn" @click="plus()">+</div>
                    <input class="change-amount-list amount-list-number" type="number" min="1" max="9999"
                           v-model="amountListNumber">
                    <div class="change-amount-list amount-list-btn big-btn" @click="cut()">-</div>
                </div>
                <div class="change-sure-btn">确定</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                endX: 0,
                page: 0,
                startX: 0,
                price1: "",
                productId: "",
                groupBuyDetail: "",
                productStyle: "",
                productName: "",
                marketUnit: "",
                productDetail: "",
                stockAmount: "",
                payedCount: "",
                stockPayed: "",
                middleImgList: [],
                productGroupList: [],
                amountListNumber: 1,
                isLeft: false,
                isRight: false,
                isShowNav: false,
                isScroll: false,
                showPanel: false,
                closePanel: false,
                buyOther: false,
                left: [true, false, false, false],
                logo: 'this.src="' + require('../assets/list/logo.png') + '";this.style="width:46%;height:46%;display:block;margin:27%"',
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
                    }, 400)
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
                    }, 400)
                }
            },
            showNav(){
                this.isShowNav = !this.isShowNav;
            },
            prevent(e){
                e.stopPropagation();
                this.isScroll = true;
            },
            plus(){
                if (this.amountListNumber < 9999) {
                    this.amountListNumber++;
                }
            },
            cut(){
                if (this.amountListNumber > 1) {
                    this.amountListNumber--
                }
            },
            doClosePanel(){
                let that = this;
                that.closePanel = true;
                let timer = setTimeout(function () {
                    that.showPanel = false;
                    that.closePanel = false;
                    console.log(that.showPanel);
                    clearTimeout(timer);
                }, 300);
            },
            showPanelBtn(){
                this.showPanel = true;
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
                    this.stockAmount = res.data.storageInfo.stockAmount;
                    this.payedCount = res.data.storageInfo.payedCount;
                    this.stockPayed = this.stockAmount - this.payedCount;
                    if (res.data.productGroupList.length == 0 || !res.data.productGroupList) {
                        this.buyOther = false;
                    }
                    else {
                        this.buyOther = true;
                        this.productGroupList = res.data.productGroupList;
                    }
                })
                .catch(err => {
                    console.log(err)
                });
        },

    }
</script>
<style scoped>
    header {
        min-width: 15rem;
        width: 100%;
        height: 3.5rem;
        line-height: 3.5rem;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        overflow: hidden;
    }

    .header-back {
        width: 5rem;
        height: 100%;
        float: left;
        text-align: center;
        opacity: 0.4;
    }

    .header-more {
        width: 8rem;
        height: 100%;
        float: right;
    }

    .header-more span {
        display: inline-block;
        width: 45%;
        height: 100%;
        text-align: center;
    }

    .detail-icon0 {
        font-size: 2.4rem;
        color: #333;
    }

    .detail-icon1 {
        font-size: 2.3rem;
        color: #000000;
    }

    .detail-icon2 {
        font-size: 2.6rem;
        color: #000000;
    }

    .detail-Nav {
        position: fixed;
        padding: 0.2rem 0 0;
        right: 1rem;
        top: 3.8rem;
        z-index: 9999;
        width: 13.4rem;
        min-width: 150px;
        height: 13rem;
        border-radius: 3px;
        background: #616161;
        opacity: 0.7;
    }

    .detail-Nav-icon {
        font-size: 2.5rem;
        line-height: 0;
        color: #616161;
        position: absolute;
        right: 0.25rem;
        top: -0.2rem;
    }

    .detail-Nav-list {
        width: 100%;
        height: 4.3rem;
        line-height: 4.3rem;
        margin: 0;
        color: #fff;
        font-size: 1.4rem;
    }

    .detail-Nav-list span {
        color: #fff;
        font-size: 1.4rem;
        display: inline-block;
        text-indent: 2rem;
    }

    .detail-Nav-list .detail-icon {
        color: #fff;
        font-size: 1.8rem;
        text-indent: 2rem;
    }

    .productBac {
        background: #f6f6f6;
        width: 105%;
        min-width: 300px;
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
    }

    .containLeft {
        animation: toLeft 0.35s ease forwards;
        pointer-events: none;
    }

    .containRight {
        animation: toRight 0.35s ease forwards;
        pointer-events: none;
    }

    .contain li {
        width: 25%;
        height: 100%;
        padding: 0;
        overflow: hidden;
        float: left;
        list-style: none;
        background: url(../assets/list/logo.png) #fff no-repeat center;
        background-size: 46% 46%;
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
            transform: translate3d(0, 0, 0);
        }
        100% {
            transform: translate3d(-25%, 0, 0);
        }
    }

    @keyframes toRight {
        0% {
            transform: translate3d(0, 0, 0);
        }
        100% {
            transform: translate3d(25%, 0, 0);
        }
    }

    .left0 {
        transform: translate3d(0, 0, 0);
    }

    .left1 {
        transform: translate3d(-100%, 0, 0);
    }

    .left2 {
        transform: translate3d(-200%, 0, 0);
    }

    .left3 {
        transform: translate3d(-300%, 0, 0);
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
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
    }

    .price-span {
        font-size: 1.7rem;
        color: #d12712;
    }

    .price-span-panel {
        color: #ff4300;
    }

    .marketUnit-span {
        font-size: 1rem;
        color: #c0c0c0;
    }

    .productName span {
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
        height: 48px;
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
        position: relative;
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

    .join-btn, .buy-btn {
        width: 92%;
        height: 34px;
        line-height: 32px;
        margin: 6px auto;
        border-radius: 17px;
        border: 1px solid #d12712;
        font-size: 1.5rem;
    }

    .join-btn {
        color: #d12712;
    }

    .buy-btn {
        color: #fff;
        background: #d12712;
    }

    .collection-icon {
        color: #ff4300;
        font-size: 28px;
        position: absolute;
        top: -6px;
        left: 30%;
    }

    .collection-text {
        font-size: 12px;
        color: #333;
        position: absolute;
        bottom: 0;
        left: 32%;
    }
</style>
<style scoped>
    .buy-panel-cover {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999998;
        width: 100%;
        height: 100%;
        background: #333;
        opacity: 0.6;
        overflow: hidden;
    }

    @keyframes closePanel {
        0% {
            width: 100%;
            position: fixed;
            left: 0;
            opacity: 1;
            transform: rotateX(0deg);
        }
        100% {
            width: 94%;
            position: fixed;
            left: 3%;
            right: 3%;
            opacity: 0;
            transform: rotateX(20deg);
        }
    }

    @keyframes buyPanel {
        0% {
            width: 96%;
            position: fixed;
            left: 2%;
            right: 2%;
            opacity: 0;
            transform: rotateX(-30deg);
        }
        100% {
            width: 100%;
            position: fixed;
            left: 0;
            opacity: 1;
            transform: rotateX(0deg);
        }
    }

    .buy-panel {
        width: 100%;
        margin: 0 auto;
        height: auto;
        min-height: 200px;
        background: #fff;
        position: fixed;
        bottom: 0;
        z-index: 999999;
        animation: buyPanel 0.2s linear 1;
    }

    .closePanelDo {
        animation: closePanel 0.3s linear 1;
    }

    .close-panel {
        width: 2rem;
        height: 2.2rem;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        background: #de3b3e;
        overflow: hidden;
        position: absolute;
        right: 0.5rem;
        top: 0;
        text-align: center;
        line-height: 2.2rem;
    }

    .close-panel-icon {
        color: #fff;
        font-size: 1.8rem;
    }

    .buy-panel-info, .buy-panel-other {
        height: 10rem;
        border-bottom: 1px solid #eee;
        background: #fff;
        padding: 0 1rem;
    }

    .buy-panel-amount {
        height: 10rem;
        background: #fff;
    }

    .other-attributes {
        width: 100%;
        height: 2rem;
        margin: 1rem auto;
        text-align: left;
        line-height: 2rem;
        color: #565656;
    }

    .other-attributes-minBox {
        display: inline-block;
        margin: 5px;
        padding: 5px 10px;
        border: 1px solid #999999;
        border-radius: 3px;
        color: #999999;
    }

    .panel-info-one {
        height: 5rem;
        line-height: 5rem;
        font-size: 1.5rem;
    }

    .panel-info-two {
        height: 3rem;
        line-height: 3rem;
        font-size: 1.3rem;
        color: #666;
    }

    .change-amount {
        height: 5rem;
        line-height: 5rem;
    }

    .change-amount input {
        outline: none;
        border: none;
    }

    .change-amount input:focus {
        outline: none;
        border: none;
    }

    .change-amount-list {
        float: right;
    }

    .change-sure-btn {
        background: #de3b3e;
        border-color: #de3b3e;
        width: 90%;
        height: 3.6rem;
        margin: 0.5rem auto;
        border-radius: 1.8rem;
        line-height: 3.6rem;
        color: #fff;
        font-size: 1.6rem;
        text-align: center;
    }

    .change-amount-span {
        float: left;
        width: 8rem;
        text-align: left;
        text-indent: 2rem;
        font-size: 1.4rem;
        color: #333;
    }

    .amount-list-btn {
        border: 1px solid #afafaf;
        border-radius: 1.5rem;
        height: 3rem;
        line-height: 2.5rem;
        width: 3rem;
        text-align: center;
        font-weight: normal;
        font-size: 2.4rem;
        margin: 1rem;
    }

    .big-btn {
        font-size: 3.3rem;
    }

    .amount-list-number {
        width: 6rem;
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        font-size: 1.4rem;
        margin: 1.5rem auto;
    }
</style>
