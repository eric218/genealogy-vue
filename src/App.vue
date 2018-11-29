<template>
    <router-view/>
</template>
<script>
import Vue from "vue";
import Iconfont from "@/components/common/iconfont.vue";
import None from "@/components/common/None.vue";
Vue.component("Iconfont", Iconfont);
Vue.component("None", None);
export default {
    beforeCreate() {
        this.$store.dispatch("resetUser");
    }
};
</script>