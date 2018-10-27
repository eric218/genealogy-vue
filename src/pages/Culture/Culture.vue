<template>
    <div class="page page-culture">
        <GradTopbar />
        <GradNav :navcurr="1" />
        <div class="main">
            <div class="adlinks">
                <img src="../../assets/jpg/bg-culture.png" alt="">
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
    </div>
</template>

<script>
import NewsList from '@/components/list/news.vue';
export default {
    name: "Culture",
    components: {
        NewsList,
    },
    data() {
        return {
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
                name: '本地字派',
            }, {
                id: 2,
                name: '家族祠堂',
            }, {
                id: 3,
                name: '源流',
            }, {
                id: 4,
                name: '序',
            }, {
                id: 5,
                name: '宗规族约',
            }, {
                id: 6,
                name: '传说典故',
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