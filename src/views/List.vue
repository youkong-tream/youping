<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div>
        <header>
            <article class="header-title">
                <div class="header-title-left">
                    <span class="iconfont icon-shangyiyehoutuifanhui list-icon3"></span>
                </div>
                <!-- 00000 -->
                <div class="header-title-center">全部商品</div>
                <div class="header-title-right">
                    <span class="title-right-icon"><i class="iconfont icon-caigou-xianxing list-icon2"></i></span>
                    <span class="title-right-icon"><i class="iconfont icon-sousuo-xianxing list-icon1"></i></span>
                </div>
            </article>
            <div class="slide-cover">
                <article class="header-slide">
                    <ul class="header-slide-ul" @click="replaceRst($event)">
                        <li class="header-slide-li">
                            <div v-bind:class="{slideLiActive:allCommodity}" data-type="">全部商品</div>
                        </li>
                        <li v-for="item in itemText" class="header-slide-li">
                            <div v-bind:data-type=item.productType>{{ item.name }}</div>
                        </li>
                    </ul>
                </article>
            </div>
        </header>
        <section class="commodity">
            <ul class="commodity-ul" v-bind:class="{commodityUlKeyframes:doAnimation}">
                <li v-for="item in commodityData" class="commodity-li" @click="toDetails($event)"
                    v-bind:data-Id=item.productId>
                    <div class="commodity-pic"><img v-bind:src=item.middlePicPath :onerror="logo"></div>
                    <div class="commodity-name">{{item.productName}}</div>
                    <div class="commodity-price">￥{{item.price1}}/{{ item.productUnit }}</div>
                </li>
            </ul>
            <div class="prompt-more" v-bind:class="{pulled: canPulled}" v-if="!refresh&&!noMore"><p>上拉加载更多数据...</p>
            </div>
            <div class="prompt-refresh move-refresh" v-if="refresh&&!noMore"><span>
                <i class="iconfont icon-tongbu v-refresh"></i>
            </span></div>
            <div class="prompt-refresh" v-if="noMore">看看其他的吧...</div>
        </section>

        <!-- 底部组件 -->
        <div class='foot'>
            <Yfooter></Yfooter>
        </div>
    </div>
</template>
<script>
    import Yfooter from '../components/Yfooter';
    export default{
        data(){
            return {
                logo: 'this.src="' + require('../assets/list/logo.png') + '";this.style="width:60%;height:60%;display:block;margin:20% auto 20%"',
                commodityData: [],
                activeElement: {
                    removeAttribute: function () {
                    }
                },
                widgetHeight: 50,
                totalPage: 7,
                pageNumber: 1,
                firstEnter: 0,
                refresh: false,
                canPulled: false,
                doAnimation: false,
                noMore: false,
                allCommodity: true,
                productType: "",
                clickProductId: "",
                itemText: [
                    {
                        name: '生活用品类',
                        productType: "0002",
                    },
                    {
                        name: '礼品套装',
                        productType: "0003",
                    },
                    {
                        name: '学生精品杯',
                        productType: "0004",
                    },
                    {
                        name: '餐饮用品',
                        productType: "0005",
                    },
                    {
                        name: '茶',
                        productType: "0006",
                    },
                    {
                        name: '笔',
                        productType: "0007",
                    },
                ]
            }
        },
        created (){
            this.loadProduct();
        },
        methods: {
            loadProduct(fn){
                this.$http.get('/app/productList.htm?pageNumber=' + this.pageNumber + '&productType=' + this.productType)
                    .then(res => {
                        if (res.data.list) {
                            this.totalPage = parseInt(res.data.totalpage);
                            this.commodityData = this.commodityData.concat(res.data.list);
                            this.firstEnter = 0;
                            if (fn) {
                                fn();
                            }
                        }
                        else {
                            this.firstEnter = 4;
                        }
                    })
                    .catch(err => {
                        this.firstEnter = 4;
                        console.log(err)
                    });
            },
            replaceRst(e){
                if (e.target && e.target.nodeName == "DIV") {
                    if (e.stopPropagation) {
                        e.stopPropagation();
                    }
                    else {
                        e.cancelBubble = true;
                    }//阻止冒泡
                    this.allCommodity = false;
                    this.activeElement.removeAttribute("class");
                    this.activeElement = e.target;
                    this.productType = this.activeElement.getAttribute("data-type");
                    this.activeElement.setAttribute("class", "slideLiActive");
                    this.commodityData = [];
                    this.pageNumber = 1;
                    this.firstEnter = 999;
                    this.refresh = false;
                    this.canPulled = false;
                    this.doAnimation = false;
                    this.noMore = false;
                    this.loadProduct();
                    let timer = setTimeout(function () {
                        this.firstEnter = 0;
                        clearTimeout(timer);
                    }, 500);
                }
            },
            toDetails(e){
                console.log(e.currentTarget);
                this.clickProductId = e.currentTarget.getAttribute("data-Id");
                this.$router.push('/product?productId=' + this.clickProductId);
            },
        },
        components: {
            Yfooter: Yfooter,
        },
        mounted() {
            let commodity = document.getElementsByClassName("commodity")[0];
            let prompt = document.getElementsByClassName("prompt-more")[0];
            let that = this;

            function down() {
                let timer = setTimeout(function () {
                    that.canPulled = false;
                    that.refresh = false;
                    clearTimeout(timer);
                }, 500);
            }

            commodity.addEventListener('scroll', function () {
                    requestAnimationFrame(function () {
                        let commodity = document.getElementsByClassName("commodity")[0];
                        let commodityUl = document.getElementsByClassName("commodity-ul")[0];
                        if (commodity.scrollTop + commodity.clientHeight >= commodityUl.clientHeight + that.widgetHeight && that.firstEnter == 0) {
                            that.firstEnter = 1;
                            that.doAnimation = true;
                            let timer = setTimeout(function () {
                                that.firstEnter = 2;
                                that.canPulled = true;
                                that.doAnimation = false;
                                clearTimeout(timer);
                            }, 500)
                        }
                        if (commodity.scrollTop + commodity.clientHeight >= commodityUl.clientHeight + that.widgetHeight && that.firstEnter == 2) {
                            if (that.pageNumber < that.totalPage) {
                                that.pageNumber++;
                                that.firstEnter = 3;
                                that.refresh = true;
                                that.loadProduct(down);
                            }
                            else {
                                that.firstEnter = 6;
                            }
                        }
                        if (commodity.scrollTop + commodity.clientHeight >= commodityUl.clientHeight + that.widgetHeight && that.firstEnter == 4) {
                            that.firstEnter = 404;
                            that.noMore = true;
                        }
                        if (commodity.scrollTop + commodity.clientHeight >= commodityUl.clientHeight + that.widgetHeight && that.firstEnter == 6) {
                            that.firstEnter = 304;
                            that.noMore = true;
                        }
                    });
                }
            )
        },
    }
</script>
<style scoped>
    html {
        overflow: hidden;
    }

    header {
        width: 100%;
        min-width: 250px;
        height: 8rem;
        overflow: hidden;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999;
    }

    header .header-title {
        width: 100%;
        height: 3.6rem;
        line-height: 3.6rem;
        position: relative;
        background: #fafafa;
        border-bottom: 2px solid #eee;
    }

    header .header-title .header-title-left {
        width: 8rem;
        height: 100%;
        text-align: left;
        text-indent: 1rem;
        position: absolute;
        left: 0;
        top: 0;
    }

    .header-title-left a {
        color: #333;
        font-size: 1.6rem;
    }

    header .header-title .header-title-center {
        height: 100%;
        position: absolute;
        left: 8rem;
        right: 8rem;
        text-align: center;
        line-height: 3.6rem;
        font-size: 1.8rem;
    }

    header .header-title .header-title-right {
        width: 8rem;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
    }

    .slide-cover {
        width: 100%;
        height: 4rem;
        overflow: hidden;
    }

    header .header-slide {
        min-width: 100%;
        height: 5.5rem;
        background: #fff;
        overflow-x: scroll;
        overflow-y: hidden;
    }

    .header-slide-ul {
        height: 5.5rem;
        padding: 0;
        white-space: nowrap;
    }

    .header-slide-ul li {
        display: inline-block;
        width: 9.5rem;
        height: 5.5rem;
        margin: 0 5px;
    }

    .header-slide-ul li div {
        margin: 0.5rem auto 1rem;
        width: 9.5rem;
        height: 3.2rem;
        font-size: 1.4rem;
        text-align: center;
        line-height: 3.2rem;
        color: #666;
        pointer-events: auto;
    }

    .header-slide-ul li .slideLiActive {
        border: 1px solid #f0e4e2;
        box-shadow: 0 0 5px #f0e4e2;
        border-radius: 1.6rem;
        pointer-events: none;
        color: #de3b3e;
    }

    .commodity {
        position: fixed;
        top: 8rem;
        bottom: 45px;
        width: 106%;
        min-width: 250px;
        padding: 0 6% 0 0;
        overflow-y: scroll;
        background: #f4f4f4;
    }

    .commodity-ul {
        width: 100%;
        padding: 0 0 0 0.5rem;
        display: flex;
        flex-wrap: wrap;
        position: relative;
    }

    .commodity-li {
        min-width: 100px;
        width: 12rem;
        float: left;
        height: auto;
        flex-grow: 1;
        border: 1px solid #d2d2d5;
        margin: 0.5rem 0.5rem 0 0;
        padding-bottom: 0.5rem;
        overflow: hidden;
        background: #fff;
    }

    .commodity-pic {
        width: 95%;
        min-height: 11rem;
        max-height: 13.5rem;
        margin: 0.5rem auto 1rem;
        background: url(../assets/list/logo.png) no-repeat center;
        background-size: 60% 60%;
        overflow: hidden;
    }

    .commodity-pic img {
        width: 100%;
        height: 100%;
    }

    .commodity-name, .commodity-price {
        width: 100%;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-indent: 1rem;
    }

    .commodity-name {
        height: 2rem;
        line-height: 2rem;
        color: #555;
        font-size: 1.4rem;
    }

    .commodity-price {
        height: 1.5rem;
        line-height: 1.5rem;
        color: #999;
        font-size: 1.2rem;
    }

    /*下拉刷新*/
    .prompt-more {
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 1.4rem;
        color: #333;
    }

    .commodity .pulled {
        height: 50px;
    }

    @keyframes loadMore {
        0% {
            bottom: 0;
        }
        25% {
            bottom: 35px;
        }
        50% {
            bottom: 55px;
        }
        75% {
            bottom: 20px;
        }
        100% {
            bottom: 0;
        }
    }

    .commodityUlKeyframes {
        animation: loadMore 0.4s linear 1;
    }

    .prompt-refresh {
        width: 100%;
        height: 20px;
        text-align: center;
        line-height: 20px;
        font-size: 1.4rem;
        color: #3b3b3b;
        margin-bottom: 10px;
    }

    .prompt-refresh span {
        display: block;
        width: 100%;
        text-align: center;
        line-height: 20px;
    }

    .v-refresh {
        font-size: 2.2rem;
        color: #191919;
    }
    .move-refresh{
        animation: refresh 0.5s infinite;
    }

    @keyframes refresh {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(180deg);
        }

    }

</style>
<style scoped>
    /*1111111*/
    .list-icon1 {
        font-size: 2.1rem;
        color: #333;
    }

    .list-icon2 {
        font-size: 2.2rem;
        color: #333;
    }

    .list-icon3 {
        font-size: 2.3rem;
        color: #333;
    }

    .title-right-icon {
        display: inline-block;
        margin: 0;
        width: 46%;
    }

    .title-right-icon i {
        display: block;
        margin: 0 auto;
        text-align: center;
    }
</style>
