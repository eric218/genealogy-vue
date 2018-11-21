<template>
    <div class="page" v-if="$store.state.county.apiList">
        <Topbar />
        <NavBar :navcurr="2" />
        <div class="main">
            <div class="adlinks">
                <img src="@/assets/jpg/bgculture.png">
            </div>
            <div class="inner">
                <div class="tabs kt">
                    <span class="tit">资讯</span>
                    <span class="menu" v-for="(v,i) in menu" :key="i" :class="v.orderIndex == menucurr.orderIndex ? 'curr':''" v-html="v.menuName" @click="chgMenu(i)"></span>
                </div>
                <div class="in" v-if="menucurr && url">
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
import Culture from './list/culture-list.vue';
import ZipaiList from './list/zipai.vue';
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
            menu: [],
            menucurr: {},
            url: '',
        }
    },
    mounted: function () {
        this.getNav()
    },
    methods: {
        getNav() {
            this.api.get(this.api.county.base + this.api.county.common_site_menu, {
                siteId: this.$store.state.siteId,
                menuId: 2,
            }).then(res => {
                if (res.code == 200) {
                    this.menu = res.data
                    this.chgMenu(0)
                }
            })
        },
        chgMenu(e) {
            this.url = ''
            this.menucurr = this.menu[e];
            setTimeout(() => {
                this.url = this.menucurr ? this.api.county.base + this.menucurr.apiUrl : '';
            }, 300);
        },
    },
};
</script>