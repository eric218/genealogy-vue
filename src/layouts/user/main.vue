<template>
    <div class="user" v-if="$store.state.county.apiList">
    </div>
</template>
<script>
import {} from './c'
export default {
    components: {
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
    },
    beforeCreate() {
        this.$store.dispatch('countyHomeApi')
    },
}
</script>
<style lang="scss">
@import "@/assets/css/app.scss";
</style>