<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div>
        <header>
            <article class="header-title">
                <div class="header-title-left"><a href="#"><span
                    class="iconfont icon-shangyiyehoutuifanhui back"></span></a></div>
                <div class="header-title-center">全部商品</div>
                <div class="header-title-right"><a href="#"><i class="list-shopCart am-icon-md"></i></a><a href="#"
                                                                                                           class=""></a>
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
                    <div class="commodity-pic"><img v-bind:src=item.middlePicPath></div>
                    <div class="commodity-name">{{item.productName}}</div>
                    <div class="commodity-price">￥{{item.price1}}/{{ item.productUnit }}</div>
                </li>
            </ul>
            <div class="prompt-more" v-bind:class="{pulled: canPulled}" v-if="!refresh&&!noMore"><p>上拉加载更多数据...</p>
            </div>
            <div class="prompt-refresh" v-if="refresh&&!noMore"><span>
                <i class="am-icon-refresh am-icon-spin v-refresh"></i>
            </span></div>
            <div class="prompt-refresh" v-if="noMore">~~~~~看看其他的吧~~~~~</div>
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
            }
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
                }, 600);
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
                            }, 600)
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
        width: 100%;
        height: 5.5rem;
        position: relative;
        background: #fff;
        overflow-x: scroll;
        overflow-y: hidden;
    }

    .header-slide-ul {
        height: 100%;
        padding: 0;
        position: absolute;
        pointer-events: none;
    }

    .header-slide-ul li {
        float: left;
        width: 9.5rem;
        height: 5.5rem;
        margin: 0 5px;
    }

    .header-slide-ul li div {
        margin: 0.5rem auto 1rem;
        width: 9.5rem;
        height: 3.4rem;
        font-size: 1.4rem;
        text-align: center;
        line-height: 3.4rem;
        pointer-events: auto;
    }

    .header-slide-ul li .slideLiActive {
        border: 1px solid #f0e4e2;
        box-shadow: 0 0 5px #f0e4e2;
        border-radius: 1.7rem;
        pointer-events: none;
    }

    .commodity {
        position: fixed;
        top: 8rem;
        bottom: 55px;
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
        width: 11rem;
        float: left;
        height: 21rem;
        flex-grow: 1;
        border: 1px solid #d2d2d5;
        margin: 0.5rem 0.5rem 0 0;
        overflow: hidden;
        background: #fff;
    }

    .commodity-pic {
        width: 100%;
        height: 17rem;
        overflow: hidden;
    }

    .commodity-pic img {
        width: 100%;
        height: 100%;
    }

    .commodity-name {
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        color: #333;
        font-size: 1.4rem;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .commodity-price {
        width: 100%;
        height: 1.5rem;
        line-height: 1.5rem;
        color: #666;
        font-size: 1.2rem;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
            bottom: 60px;
        }
        50% {
            bottom: 80px;
        }
        75% {
            bottom: 40px;
        }
        100% {
            bottom: 0;
        }
    }

    .commodityUlKeyframes {
        animation: loadMore 0.6s linear 1;
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
        font-size: 2.5rem;
        color: #191919;
    }

</style>
<style scoped>
    .back {
        font-size: 2.1rem;
    }
</style>
