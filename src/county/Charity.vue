<template>
    <div class="page page-charity">
        <GradTopbar />
        <GradNav :navcurr="2" />
        <div class="main">
            <div class="counts">
                <div class="inner">
                    <div class="l">
                        <div class="h">
                            <span>基金总额：</span>
                            <span class="num">8888.8</span>
                            <span>元</span>
                        </div>
                        <div class="b">
                            <div class="item" v-for="v in 5" :key="v">
                                <span>修缮祠堂使用</span>
                                <span class="num">999</span>
                                <span>元</span>
                            </div>
                        </div>
                    </div>
                    <div class="r">
                        <div class="h">
                            <div class="act" @click="handleTopay = true">
                                <img src="@/assets/img/icon-help.png" /></div>
                        </div>
                        <div class="b">
                            <div class="item" v-for="v in 3" :key="v">
                                <div class="img"></div>
                                <div class="name">姓名</div>
                                <div class="txt">
                                    <small>捐款</small>
                                    <span>8000元</span>
                                </div>
                                <div class="act">
                                    <div class="flow">
                                        <span>关注</span>
                                    </div>
                                    <div class="zan">
                                        <img src="@/assets/img/icon-zan.png" alt="">
                                        <span>150</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="adlinks">
                <img src="@/assets/jpg/bg-charity.png" alt="">
            </div>
            <div class="inner">
                <div class="tabs kt">
                    <span class="tit">资讯</span>
                    <span class="menu" v-for="(v,i) in menu" :key="i" :class="v.id == menucurr.id ? 'curr':''" v-html="v.name" @click="chgMenu(v)"></span>
                </div>
                <NewsList />
                <div class="pages">
                    <a href="/" class="item" v-for="v in 5" :key="v">{{v}}</a>
                </div>
            </div>
        </div>
        <GradFooter />
        <Modal v-model="handleTopay" width="480px" :footer-hide="true" class="g-pay">
            <topay />
        </Modal>
    </div>
</template>
<script>
import NewsList from '@/components/list/news.vue';
import topay from '@/components/post/topay.vue'
export default {
    name: "Charity",
    components: {
        NewsList,
        topay,
    },
    data() {
        return {
            menu: [],
            menucurr: {},
            handleTopay: false,
        }
    },
    mounted: function () {
        this.getMenu()
    },
    methods: {
        getMenu() {
            this.menu = [{
                id: 1,
                name: '财务支出',
            }, {
                id: 2,
                name: '捐款名录',
            }]
            this.menucurr = this.menu[0]
        },
        getList() {

        },
        chgMenu(e) {
            this.menucurr = e;
            this.getList();
        },
    },
};
</script>