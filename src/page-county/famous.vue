<template>
    <div class="page page-famous">
        <Topbar />
        <NavBar :navcurr="5" />
        <div class="main">
            <div class="adlinks">
                <img src="@/assets/jpg/bg-human.png" alt="">
            </div>
            <div class="inner">
                <div class="tabs kt">
                    <span class="tit">人物</span>
                    <span class="menu" v-for="(v,i) in menuData" :key="i" :class="v.orderIndex == menucurr.orderIndex ? 'curr':''" v-html="v.menuName" @click="chgMenu(v)"></span>
                </div>
                <HumanList :data="data" />
            </div>
        </div>
        <FootBar />
    </div>
</template>
<script>
import HumanList from '@/components/list/human.vue';
import { Topbar, NavBar, FootBar } from './c'
export default {
    components: {
        Topbar,
        NavBar,
        FootBar,
        HumanList,
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
            data: {},
        }
    },
    mounted: function () {
    },
    methods: {
        getList() {
            let url = this.menucurr.apiUrl;
            console.log(url)
            this.api.get(url, {}).then(res => {
                this.data = res.data;
            })
        },
        chgMenu(e) {
            this.menucurr = e;
            setTimeout(() => {
                this.getList();
            }, 300);
        },
    },
};
</script>