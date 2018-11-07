<template>
    <div class="page page-culture">
        <Topbar />
        <NavBar :navcurr="2" />
        <div class="main">
            <div class="adlinks">
                <img src="@/assets/jpg/bg-culture.png" alt="">
            </div>
            <div class="inner">
                <div class="tabs kt">
                    <span class="tit">资讯</span>
                    <span class="menu" v-for="(v,i) in menuData" :key="i" :class="v.orderIndex == menucurr.orderIndex ? 'curr':''" v-html="v.menuName" @click="chgMenu(v)"></span>
                </div>
                <div class="in" v-if="menucurr">
                    <ZipaiList v-if="menucurr.menuType == 'culture_zipai'" />
                    <NewsList v-if="menucurr.menuType == 'culture_news'" />
                </div>
            </div>
        </div>
        <FootBar />
    </div>
</template>

<script>
import { Topbar, NavBar, FootBar } from './c'
import NewsList from '@/components/list/news.vue';
import ZipaiList from '@/components/list/zipai.vue';
export default {
    components: {
        Topbar,
        NavBar,
        FootBar,
        NewsList,
        ZipaiList
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
        }
    },
    mounted: function () {
    },
    methods: {
        getList() {
        },
        chgMenu(e) {
            this.menucurr = e;
        },
    },
};
</script>