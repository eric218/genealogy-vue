<template>
    <div class="page page-home">
        <GradTopbar />
        <GradNav :navcurr="0" />
        <GradBanner />
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
        <GradFooter />
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import TopInfo from './components/TopInfo.vue';
import Dynamic from './components/Dynamic.vue';
import NewNews from './components/NewNews.vue';
import Famous from './components/Famous.vue';
import HomeNews from './components/HomeNews.vue';
import Gongyi from './components/Gongyi.vue';
import Products from './components/Products.vue';
import Friends from './components/Friends.vue';

export default {
    name: "Home",
    components: {
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
    },
    methods: {

    }
};
</script>