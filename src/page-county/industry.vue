<template>
    <div class="page">
        <Topbar />
        <NavBar :navcurr="4" />
        <div class="main">
            <div class="adlinks">
                <img src="@/assets/jpg/bg-product.png" alt="">
            </div>
            <div class="inner">
                <div class="tabs kt">
                    <span class="tit">资讯</span>
                    <span class="menu" v-for="(v,i) in menuData" :key="i" :class="v.orderIndex == menucurr.orderIndex ? 'curr':''" v-html="v.menuName" @click="chgMenu(v)"></span>
                </div>
                <div class="in" v-if="menucurr && url.length">
                    <NewsList :url="url" />
                </div>
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
    computed: {
        navlist() {
            return this.$store.state.navList
        },
        current() {
            return this.$router.history.current.name
        },
        menuData() {
            let menu = [];
            this.navlist.forEach(v => {
                if (v.menuType == this.current) {
                    menu = v.child
                }
            })
            this.chgMenu(menu[0]);
            return menu;
        },
    },
    data() {
        return {
            menucurr: {},
            url: {},
        }
    },
    mounted: function () {
    },
    methods: {
        chgMenu(e) {
            this.menucurr = e;
            this.url = '';
            setTimeout(() => {
                this.url = this.menucurr ? this.menucurr.apiUrl : '';
            }, 300);
        },
    },
};
</script>