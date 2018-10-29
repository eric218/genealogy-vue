<template>
    <div class="page page-user">
        <UserHead />
        <UserNav name="1"/>
        <div class="main">
            <sua />
        </div>
        <GradFooter />
    </div>
</template>
<script>

import UserHead from './components/head.vue'
import UserNav from './components/nav.vue'
import sua from './components/sua.vue'
export default {
    components: {
        UserHead,
        UserNav,
        sua,
    },
    data() {
        return {
            isedit: false,
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