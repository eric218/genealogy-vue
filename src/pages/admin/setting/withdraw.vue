<template>
    <div>
        <Withdraw :url="url" v-if="url.length"/>
    </div>
</template>

<script>
import Withdraw from "./c/withdraw-list";
export default {
    components: {
        Withdraw
    },
    data() {
        return {
            url: this.api.admin.admin_site_withdraw_list
        };
    },
    mounted() {},
    methods: {}
};
</script>