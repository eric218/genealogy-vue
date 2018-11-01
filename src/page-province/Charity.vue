<template>
    <div class="page">
        <Topbar />
        <NavBar :navcurr="9" />
        <div class="main">
            <div class="sia">
                <div class="inner">
                    <Card class="card">
                        <div class="h">基金总额：<span>88000.00</span>元</div>
                        <div class="b">
                            <div class="item" v-for="v in 8" :key="v">干什么使用了<span>8000.00</span>元</div>
                        </div>
                    </Card>
                </div>
            </div>
            <div class="adlinks">
                <img src="./img/charitybg.png">
            </div>
        </div>
        <FootBar />
    </div>
</template>
<script>
import { Topbar, NavBar, Banner, FootBar } from './c'
export default {
    name: "Home",
    components: {
        Topbar,
        NavBar,
        FootBar,
    },
    data() {
        return {
        };
    },
    computed: {
    },
    mounted: function () {
    },
    methods: {
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.sia{
    background: url(../assets/jpg/bg-charity-fill.png) no-repeat center;
    padding: 32px 0;
    .card{
        width: 600px;
        margin-left: auto;
        margin-right: auto;
        white-space: nowrap;
        overflow: hidden;
        .ivu-card-extra{
            line-height: 1;
        }
        .l{
            white-space: normal;
        }
        .h{
            span{
                color:$color;
                font-weight: 700;
                font-size: 24px;
                margin: 0 8px;
            }
        }
        .b{
            height: 252px;
            overflow-y:auto;
            .item{
                line-height: 32px;
                color:#666;
                span{
                    color:steelblue;
                    font-weight: 600;
                    margin: 0 8px;
                }
            }
        }
    }
}
</style>
