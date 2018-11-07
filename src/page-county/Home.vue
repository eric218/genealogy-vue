<template>
    <div class="page page-home">
        <Topbar />
        <NavBar :navcurr="1" />
        <Banner />
        <div class="main">
            <TopInfo />
            <Dynamic />
            <NewNews />
            <Famous />
            <div class="adlinks">
                <img src="@/assets/jpg/gg.png" alt="">
            </div>
            <HomeNews />
            <Gongyi />
            <Products />
            <Friends />
        </div>
        <FootBar />
    </div>
</template>
<script>
import { Topbar, NavBar, Banner, FootBar } from './c'
import { TopInfo, Dynamic, NewNews, Famous, HomeNews, Gongyi, Products, Friends } from './page-home';

export default {
    name: "Home",
    components: {
        Topbar,
        NavBar,
        Banner,
        FootBar,
        TopInfo,
        Dynamic,
        NewNews,
        Famous,
        HomeNews,
        Gongyi,
        Products,
        Friends,
    },
    data() {
        return {
        };
    },
    computed: {
    },
    mounted: function () {
        this.$store.dispatch('handleHomeAll')
    },
    methods: {
    }
};
</script>