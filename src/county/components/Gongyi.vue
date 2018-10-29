<template>
    <div class="gongyi">
        <div class="inner">
            <div class="tabs kt">
                <span class="tit">公益</span>
                <span class="menu" v-for="(v,i) in menu" :key="i" :class="v.id == menucurr.id ? 'curr':''" v-html="v.name" @click="chgMenu(v)"></span>
            </div>
            <div class="cards">
                <div class="left">
                    <div class="grad one">
                        <router-link class="h" to="/Charity">
                            <span class="more">更多</span>
                            <span>支出公开栏</span>
                        </router-link>
                        <div class="b">
                            <router-link to="/Detail" class="item" v-for="v in 5" :key="v">
                                <div class="date">2018-05-01</div>
                                <div class="tag">【慈善纪要】</div>
                                <div class="tit">标题</div>
                            </router-link>
                        </div>
                    </div>
                    <div class="grad two">
                        <router-link class="h" to="/Charity">
                            <span class="more">更多</span>
                            <span>收益公开栏</span>
                        </router-link>
                        <div class="b">
                            <router-link to="/Detail" class="item" v-for="v in 5" :key="v">
                                <div class="date">2018-05-01</div>
                                <div class="tag">【慈善纪要】</div>
                                <div class="tit">标题</div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="h">
                        <div class="act" @click="handleTopay = true"></div>
                        <span>公益基金总金额：</span>
                        <span class="num">99999.00</span>
                        <span>元</span>
                    </div>
                    <div class="b">
                        <div class="item" v-for="v in 6" :key="v">
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
        <Modal v-model="handleTopay" width="480px" :footer-hide="true" class="g-pay">
            <topay />
        </Modal>
    </div>
</template>
<script>
import topay from '@/components/post/topay.vue'
export default {
    components: {
        topay,
    },
    data() {
        return {
            handleTopay: false,
            menu: [],
            menucurr: {},
        }
    },
    mounted: function () {
        this.getMenu()
    },
    methods: {
        getMenu() {
            this.menu = [{
                id: 1,
                name: '慈善公益',
            }, {
                id: 2,
                name: '奉献助人',
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