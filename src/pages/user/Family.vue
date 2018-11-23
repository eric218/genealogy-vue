<template>
    <div class="page page-user">
        <Topbar />
        <NavBar name="1"/>
        <div class="main">
            <sua />
        </div>
        <FootBar />
    </div>
</template>
<script>
import sua from './c/sua.vue'
import { Topbar, NavBar, FootBar } from './c'
export default {
    components: {
        Topbar,
        NavBar,
        FootBar,
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