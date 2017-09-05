<template>
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
        <section class="commodity" @touchstart="touchStart($event)" @touchmove="touchMove($event)"
                 @touchend="touchEnd($event)" @touchcancel="touchEnd($event)">
            <ul class="commodity-ul" style="transform: translate3d(0px, 0px, 0px);"
                v-bind:class="{SlowTop:SlowTop}">
                <li v-for="item in commodityData" class="commodity-li" @click="toDetails($event)"
                    v-bind:data-Id=item.productId>
                    <div class="commodity-pic"><img v-bind:src=item.middlePicPath :onerror="logo"></div>
                    <div class="commodity-name">{{item.productName}}</div>
                    <div class="commodity-price">￥{{item.price1}}/{{ item.productUnit }}</div>
                </li>
            </ul>
            <div class="prompt-more" v-if="!refresh&&!noMore">上拉加载更多数据...</div>
            <span class="move-refresh iconfont icon-tongbu v-refresh" v-if="refresh&&!noMore"></span>
            <div class="prompt-more" v-if="noMore">看看其他的吧...</div>
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
                SlowTop: false,
                totalPage: 7,
                pageNumber: 1,
                noMore: false,
                refresh: false,
                allCommodity: true,
                dataList: null,
                timer: null,
                productType: "",
                clickProductId: "",
                /* two */
                ul: '',
                ulH: 1000,
                tipH: 40,
                cover: '',
                coverH: '',
                clickY: '',
                ulY: '',
                endY: 0,
                nowY: 0,
                nowY100: '',
                translateY: 0,
                overMs: 210,
                complete: 0,
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
            this.loadProduct()
        },
        mounted () {
            this.getInfo()
        },
        methods: {
            loadProduct(){
                this.$http.get('/app/productList.htm?pageNumber=' + this.pageNumber + '&productType=' + this.productType)
                    .then(res => {
                        if (res.data.list) {
                            this.totalPage = parseInt(res.data.totalpage);
                            this.commodityData = this.commodityData.concat(res.data.list);
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    });
            },
            load(){
                this.complete = 1
                this.$http.get('/app/productList.htm?pageNumber=' + this.pageNumber + '&productType=' + this.productType)
                    .then(res => {
                        if (res.data.list) {
                            this.totalPage = parseInt(res.data.totalpage);
                            this.dataList = res.data.list
                            this.complete = 2
                        }
                    })
                    .catch(err => {
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
                    this.pageNumber = 1
                    this.noMore = false
                    this.refresh = false
                    this.allCommodity = false
                    this.complete = 0
                    this.dataList = null
                    this.SlowTop = false
                    clearTimeout(this.timer)
                    this.timer = null
                    this.loadProduct();
                    this.slide(200, 0)
                }
            },
            toDetails(e){
                this.clickProductId = e.currentTarget.getAttribute("data-Id");
                this.$router.push('/product?productId=' + this.clickProductId);
            },
            touchStart (e) {
                //暂停当前translate
                let computedStyle = window.getComputedStyle(this.ul)
                this.translateY = computedStyle.getPropertyValue('transform').toString().slice(22, -1)
                this.ul.style.transform = 'translate3d(0,' + this.translateY + 'px, 0)'
                this.ul.style.transition = ''
                //初始化ul的高度
                if (this.ulH != this.ul.offsetHeight) {
                    this.ulH = parseInt(this.ul.offsetHeight)
                    this.allH = parseInt(this.coverH - this.ulH - this.tipH)
                    this.allNoTip = parseInt(this.coverH - this.ulH)
                    if (this.allH > 0) {
                        this.allH = -560
                    }
                }
                //获取当前触点位置，并设置定时器更新鼠标位置
                this.clickY = e.touches[0].clientY
                this.nowY = e.touches[0].clientY
                this.nowY100 = this.nowY
                this.dataList = null;
                this.ulY = parseInt(this.ul.style.transform.toString().slice(17, -8))
                this.SlowTop = false
                clearTimeout(this.timer)
                this.timer = setInterval(() => {
                    this.nowY100 = this.nowY
                }, this.overMs)
            },
            touchMove (e) {
                //阻止事件传递,避免安卓机不触发touch end事件BUG
                e.preventDefault()
                let that = this
                //ul跟随触摸点
                requestAnimationFrame(() => {
                    this.nowY = e.touches[0].clientY
                    that.translateY = e.touches[0].clientY - that.clickY + that.ulY
                    if (that.translateY <= 0 && that.translateY >= that.allNoTip) {
                        that.ul.style.transform = 'translate3d(0,' + that.translateY + 'px, 0)'
                    }
                    if (that.translateY > 0) {
                        that.ul.style.transform = 'translate3d(0,' + that.translateY / 2.2 + 'px, 0)'
                    }
                    if (that.translateY < that.allNoTip) {
                        let H = parseInt(that.coverH - that.ulH + (that.translateY - that.allNoTip) / 2.2)
                        that.ul.style.transform = 'translate3d(0,' + H + 'px, 0)'
                        //下拉刷新,不加数据
                        if (parseInt(that.allH - that.translateY) <= 100 && that.complete == 2 || that.complete == 1) {
                            that.refresh = false;
                            that.noMore = false;
                            that.complete = 0;
                            that.pageNumber--;
                            that.dataList = null
                        }
                        if (that.complete == 0 && parseInt(that.translateY - that.allH) < -200) {
                            if (that.pageNumber < that.totalPage) {
                                that.refresh = true;
                                that.pageNumber++;
                                that.load()
                            }
                            else {
                                that.refresh = false;
                                that.noMore = true;
                                that.complete = 3
                                that.complete = 0
                            }
                        }
                    }
                })
            },
            touchEnd (e) {
                let that = this
                //获取end触摸点，计算100ms手指位移distance
                this.endY = e.changedTouches[0].clientY
                console.log(this.endY)
                console.log(this.nowY100)
                let distance = parseInt(this.endY) - parseInt(this.nowY100)
                console.log(distance + '  位移 distance')
                //清空计时器
                clearInterval(that.timer)
                that.timer = null
                //获取当前位置
                that.translateY = parseInt(this.ul.style.transform.toString().slice(17, -8))
                //惯性移动
                if (that.translateY < 0 && that.translateY > that.allH && distance != 0) {
                    let time = distance * 5;
                    //Y为终点位置
                    if (time < 0) {
                        time = -time
                    }
                    if (time > 1000) {
                        time = 1000
                    }
                    if (distance < 70 && distance > -70) {
                        distance = distance / 8
                    }
                    if (distance < 120 && distance >= 70) {
                        distance = distance / 3
                    }
                    if (distance > -120 && distance <= -70) {
                        distance = distance / 3
                    }
                    let X = distance * 4
                    let Y = that.translateY + X
                    if (Y > 0) {
                        time = (-that.translateY) * time / Y
                        Y = 0
                    }
                    if (Y < that.allH) {
                        time = ( that.allH - that.translateY) * time / X
                        console.log(time + 'ms  位移事件--time~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~chu')
                        Y = that.allH
                    }
                    console.log(time + 'ms  位移事件--time')
                    console.log(X + 'px  位移距离--XXX')
                    that.slide(time, Y)
                }

                // 向上 拖拽
                if (that.translateY > 0) {
                    that.ease(400, 0)
                }
                // 向下 拖拽
                if (that.translateY < that.allH) {
                    that.ease(400, that.allH);
                    //松手渲染数据
                    if (that.complete == 2) {
                        that.timer = setTimeout(() => {
                            that.commodityData = that.commodityData.concat(that.dataList);
                            that.dataList = null;
                            that.refresh = false;
                            that.complete = 0
                            clearTimeout(that.timer);
                        }, 300)
                    }
                    if (that.complete == 1) {
                        that.timer = setInterval(() => {
                            if (that.complete == 2) {
                                that.commodityData = that.commodityData.concat(that.dataList);
                                that.dataList = null;
                                that.refresh = false;
                                that.complete = 0
                                clearInterval(that.timer);
                            }
                        }, 300)
                    }
                }
            },
            slide (time, translateY) {
                let that = this
                requestAnimationFrame(function () {
                    that.ul.style.transition = '-webkit-transform ' + time + 'ms cubic-bezier(0.333333, 0.666667, 0.666667, 1) 0s'
                    that.ul.style.transform = 'translate3d(0px,' + translateY + 'px,0px)'
                })
            },
            ease (time, translateY) {
                let that = this
                requestAnimationFrame(function () {
                    that.ul.style.transition = '-webkit-transform ' + time + 'ms ease 0s'
                    that.ul.style.transform = 'translate3d(0px,' + translateY + 'px,0px)'
                })
            },
            getInfo () {
                this.cover = document.getElementsByClassName('commodity')[0]
                this.ul = document.getElementsByClassName('commodity-ul')[0]
                this.coverH = parseInt(this.cover.clientHeight)
            }
        },
        components: {
            Yfooter: Yfooter,
        },
    }
</script>
<style scoped>
    html {
        background: #fafafa;
        position: relative;
    }

    header {
        width: 100%;
        min-width: 250px;
        height: 8rem;
        background: #fafafa;
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

    .foot {
        position: fixed;
        bottom: 0;
        z-index: 99999;
    }

    .commodity {
        position: fixed;
        top: 8rem;
        bottom: 45px;
        z-index: 99999;
        width: 100%;
        min-width: 100%;
        background: #fafafa;
        overflow: hidden;
    }

    .commodity-ul {
        width: 100%;
        padding: 0 1%;
        display: flex;
        flex-wrap: wrap;
        background: #fafafa;
        margin: 0;
        position: absolute;
        z-index: 999999;
        overflow: hidden;
    }

    .commodity-li {
        min-width: 100px;
        width: 48%;
        float: left;
        height: auto;
        flex-grow: 1;
        flex-shrink: 1;
        border: 1px solid #d2d2d5;
        margin: 0.25rem 0;
        padding-bottom: 0.5rem;
        overflow: hidden;
        background: #fff;
    }

    .commodity-li:last-child {
        flex-basis: 49%;
        flex-grow: 0;
    }

    .commodity-li:nth-child(2n+1) {
        margin: 0.25rem 2% 0.25rem 0;
    }

    .commodity-pic {
        width: 95%;
        height: 15rem;
        min-height: 14rem;
        max-height: 16rem;
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
        position: absolute;
        bottom: 0;
        z-index: 1;
    }

    .move-refresh {
        animation: refresh 0.8s infinite;
        position: absolute;
        bottom: 0;
        left: 47%;
        font-size: 23px;
        color: #333;
    }

    @keyframes refresh {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }

    }

</style>
<style scoped>
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
        width: 45%;
    }

    .title-right-icon i {
        display: block;
        margin: 0 auto;
        text-align: center;
    }
</style>
<style scoped>
    @keyframes SlowTopAnimation {
        0% {
            transform: translate3d(0px, 0px, 0px);
        }
        50% {
            transform: translate3d(0px, 20px, 0px);
        }
        100% {
            transform: translate3d(0px, 0px, 0px);
        }
    }

    .SlowTop {
        animation: SlowTopAnimation 0.3s linear 1;
    }
</style>
