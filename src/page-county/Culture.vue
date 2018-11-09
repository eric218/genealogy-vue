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
                <div class="in" v-if="menucurr && url.length">
                    <ZipaiList :url="url" v-if="menucurr.menuType == 'culture_zipai'" />
                    <Culture :url="url" v-if="menucurr.menuType == 'culture_news'" />
                </div>
            </div>
        </div>
        <FootBar />
    </div>
</template>

<script>
import { Topbar, NavBar, FootBar } from './c'
import Culture from '@/components/list/culture.vue';
import ZipaiList from '@/components/list/zipai.vue';
export default {
    components: {
        Topbar,
        NavBar,
        FootBar,
        Culture,
        ZipaiList
    },
    data() {
        return {
            menucurr: {},
            url: '',
        }
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