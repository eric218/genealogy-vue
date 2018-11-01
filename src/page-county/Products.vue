<template>
    <div class="page page-products">
        <Topbar />
        <NavBar :navcurr="3" />
        <div class="main">
            <div class="adlinks">
                <img src="@/assets/jpg/bg-product.png" alt="">
            </div>
            <div class="inner">
                <div class="tabs kt">
                    <span class="tit">资讯</span>
                    <span class="menu" v-for="(v,i) in menu" :key="i" :class="v.id == menucurr.id ? 'curr':''" v-html="v.name" @click="chgMenu(v)"></span>
                </div>
                <NewsList :list="list" />
            </div>
        </div>
        <FootBar />
    </div>
</template>

<script>
import { Topbar, NavBar, FootBar } from './c'
import NewsList from '@/components/list/news.vue';
export default {
    components: {
        Topbar,
        NavBar,
        FootBar,
        NewsList,
    },
    data() {
        return {
            menu: [],
            menucurr: {},
            list: []
        };
    },
    computed: {
    },
    mounted: function () {
        this.getMenu();
    },
    methods: {
        getMenu() {
            this.menu = [
                {
                    id: 15,
                    name: '家族产业',
                },
                {
                    id: 16,
                    name: '个人产业',
                }]
            this.menucurr = this.menu[0]
            this.getList();
        },
        getList() { },
        chgMenu(e) {
            this.menucurr = e;
            this.getList();
        }
    }
};
</script>