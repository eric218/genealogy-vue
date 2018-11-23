<template>
    <div class="main">
        <Banner />
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
</template>
<script>
import { Banner, TopInfo, About, Dynamic, Record, TheNew, Famous, Culture, Gongyi, Products, Friends } from '/';
export default {
    name: "Home",
    components: {
        Banner,
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