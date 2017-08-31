<template>
    <div class="footer" @touchstart="select($event)">
        <div class="footer-one" data-number="0">
            <div class='footer-one-box noTouch'>
                <div class="footer-one-icon footer-icon" v-bind:class='{isActive:isActive[0]}'></div>
                <span>首页</span>
            </div>
        </div>
        <div class="footer-two" data-number="1">
            <div class='footer-two-box noTouch'>
                <div class="footer-two-icon footer-icon" v-bind:class='{isActive:isActive[1]}'></div>
                <span>商城</span>
            </div>
        </div>
        <div class="footer-three" data-number="2">
            <div class='footer-three-box noTouch'>
                <div class="footer-three-icon footer-icon" v-bind:class='{isActive:isActive[2]}'></div>
                <span>购物车</span>
            </div>
        </div>
        <div class="footer-four" data-number="3">
            <div class='footer-four-box noTouch'>
                <div class="footer-four-icon footer-icon" v-bind:class='{isActive:isActive[3]}'></div>
                <span>我的</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                isActive: [false, false, false, false],
                address: ['/', '/list', '/login', '/me/index'],
                data: "",
            }
        },
        methods: {
            select(e){
                this.data = e.target.getAttribute("data-number");
                this.isActive = [false, false, false, false];
                this.isActive[this.data] = true;
                this.$router.push(this.address[this.data]);
            },
        },
        created(){
            let that = this;
            for (let i = 0; i < that.address.length; i++) {
                if (that.$route.fullPath == that.address[i]) {
                    that.isActive[i] = true;
                }
            }
        }
    }
</script>
<style lang="less">
    .footer {
        width: 100%;
        height: 45px;
        border-top: 0.1rem solid #e2e2e2;
        display: flex;
        background: #fff;
    }

    span {
        font-size: 1.4rem;
        color: #999999;
        font-family: "Microsoft Yahei", "微软雅黑";
    }

    .footer-one, .footer-two, .footer-three, .footer-four {
        width: 25%;
        height: 45px;
    }

    .footer-one-box, .footer-two-box, .footer-three-box, .footer-four-box {
        width: 80%;
        text-align: center;
        margin: 0.5rem auto 0;
    }

    .footer-one-icon {
        width: 15px;
        height: 14px;
        background: url('../assets/footer/first.png') no-repeat;
    }

    .footer-one-box .isActive {
        width: 15px;
        height: 14px;
        background: url('../assets/footer/first-after.png') no-repeat;
        background-size: 100% 100%;
    }

    .footer-two-icon {
        width: 16px;
        height: 15px;
        background: url('../assets/footer/second.png') no-repeat;
        background-size: 100% 100%;
    }

    .footer-two-box .isActive {
        width: 16px;
        height: 15px;
        background: url('../assets/footer/second-after.png') no-repeat;
        background-size: 100% 100%;
    }

    .footer-three-icon {
        width: 17px;
        height: 15px;
        background: url('../assets/footer/third.png') no-repeat;
    }

    .footer-three-box .isActive {
        width: 17px;
        height: 15px;
        background: url('../assets/footer/third-after.png') no-repeat;
        background-size: 100% 100%;
    }

    .footer-four-icon {
        width: 15px;
        height: 16px;
        background: url('../assets/footer/forth.png') no-repeat;
    }

    .footer-four-box .isActive {
        width: 16px;
        height: 16px;
        background: url('../assets/footer/forth-after.png') no-repeat;
        background-size: 100% 100%;
    }

    .footer-icon {
        margin: 0 auto;
        background-size: 100% 100%;
    }

    .isActive + span {
        color: #dd3a3b;
    }

    .noTouch {
        pointer-events: none;
    }
</style>
