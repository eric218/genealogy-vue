<template>
    <div class="page" v-if="$store.state.county.apiList">
        <Topbar />
        <NavBar :navcurr="1" />
        <Banner />
        <div class="main">
            <TopInfo />
            <About />
            <Dynamic />
            <Record />
            <TheNew />
            <Famous />
            <div class="adlinks">
                <img src="@/assets/img/adlinks.jpg">
            </div>
            <Culture />
            <Gongyi />
            <Products />
            <Friends />
        </div>
        <FootBar />
    </div>
</template>
<script>
import { Topbar, NavBar, Banner, FootBar } from '../c'
import { TopInfo, About, Dynamic, Record, TheNew, Famous, Culture, Gongyi, Products, Friends } from '/';

export default {
    name: "Home",
    components: {
        Topbar,
        NavBar,
        Banner,
        FootBar,
        TopInfo,
        About,
        Dynamic,
        Record,
        TheNew,
        Famous,
        Culture,
        Gongyi,
        Products,
        Friends,
    },
    computed: {
        apiList() {
            return this.$store.state.county.apiList
        }
    },
    data() {
        return {
        }
    },
    mounted: function () {
    },
    methods: {
    }
};
</script>