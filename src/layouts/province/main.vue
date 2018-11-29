<template>
    <div class="page" v-if="$store.state.county.apiList" style="padding-top:32px;">
        <Topbar/>
        <router-view/>
        <FootBar/>
    </div>
</template>
<script>
import { Topbar, FootBar } from "./c";
export default {
    components: {
        Topbar,
        FootBar
    },
    data() {
        return {};
    },
    computed: {},
    mounted: function() {},
    methods: {},
    beforeCreate() {
        this.$store.dispatch("provinceHomeApi");
    }
};
</script>
<style lang="scss">
@import "@/assets/css/app.scss";
</style>