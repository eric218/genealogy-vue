<template>
    <div class="page" v-if="$store.state.county.apiList">
        <Topbar />
        <NavBar :navcurr="5" />
        <div class="main">
            <div class="adlinks">
                <img src="@/assets/jpg/bg-human.png" alt="">
            </div>
            <div class="inner">
                <div class="tabs kt">
                    <span class="tit">人物</span>
                    <span class="menu" v-for="(v,i) in menu" :key="i" :class="v.orderIndex == menucurr.orderIndex ? 'curr':''" v-html="v.menuName" @click="chgMenu(i)"></span>
                </div>
                <div class="in" v-if="menucurr && url.length">
                    <FamousList :url="url" />
                </div>
            </div>
        </div>
        <FootBar />
    </div>
</template>
<script>
import FamousList from './list/famous-list.vue';
import { Topbar, NavBar, FootBar } from './c'
export default {
    components: {
        Topbar,
        NavBar,
        FootBar,
        FamousList,
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
                menuId: 5,
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