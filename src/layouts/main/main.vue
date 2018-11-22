<template>
    <router-view />
</template>
<script>
export default {
    beforeCreate() {
        this.$store.dispatch('handleHomeApi')
    },
}
</script>

<style lang="scss">
@import "@/assets/css/app.scss";
</style>
