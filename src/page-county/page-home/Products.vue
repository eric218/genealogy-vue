<template>
    <div class="products">
        <div class="inner">
            <div class="tabs kt">
                <span class="tit">产业</span>
                <span class="menu" v-for="(v,i) in menu" :key="i" :class="v.id == menucurr.id ? 'curr':''" v-html="v.name" @click="chgMenu(v)"></span>
            </div>
            <div class="items">
                <div class="grad">
                    <router-link to="/Products" class="hd kt">
                        <span class="more">更多</span>
                        <span>公共产业</span>
                    </router-link>
                    <div class="bd">
                        <router-link to="/c/Detail" class="item" v-for="v in 2" :key="v">
                            <div class="img">
                                <div class="tit">标题标题标题标题</div>
                            </div>
                            <div class="flag">
                                <div class="level">
                                    <span>诚信值100</span>
                                </div>
                                <div class="head"></div>
                                <div class="name">姓名</div>
                                <div class="tag"><img src="@/assets/img/icon-tag.png" alt="">[诚信业主]</div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="grad">
                    <router-link to="/Products" class="hd kt">
                        <span class="more">更多</span>
                        <span>私人产业</span>
                    </router-link>
                    <div class="bd">
                        <router-link to="/c/Detail" class="item" v-for="v in 2" :key="v">
                            <div class="img">
                                <div class="tit">标题标题标题标题</div>
                            </div>
                            <div class="flag">
                                <div class="level">
                                    <span>诚信值100</span>
                                </div>
                                <div class="head"></div>
                                <div class="name">姓名</div>
                                <div class="tag"><img src="@/assets/img/icon-tag.png" alt="">[诚信业主]</div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isadd: false,
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
                name: '家族产业',
            }, {
                id: 2,
                name: '私人产业',
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