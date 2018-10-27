<template>
    <div class="news">
        <div class="inner">
            <div class="tabs kt">
                <span class="tit">资讯</span>
                <span class="menu" v-for="(v,i) in menu" :key="i" :class="v.id == menucurr.id ? 'curr':''" v-html="v.name" @click="chgMenu(v)"></span>
            </div>
            <div class="items">
                <div class="item" v-for="v in 6" :key="v">
                    <div class="img"></div>
                    <div class="obj">
                        <div class="tit">标题</div>
                        <div class="intro">简介</div>
                        <div class="more">查看详情>></div>
                    </div>
                </div>
            </div>
            <div class="pages">
                <a href="javascript:void(0)" class="item" v-for="v in 5" :key="v" :class="v==pagecurr?'curr':''" @click="pagecurr = v">{{v}}</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menu: [],
            menucurr: {},
            pagecurr: 1,
        }
    },
    mounted: function () {
        this.getMenu()
    },
    methods: {
        getMenu() {
            this.menu = [{
                id: 1,
                name: '家族文化',
            }, {
                id: 2,
                name: '精神传承',
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