<template>
    <div class="page page-tongpu">
        <Topbar />
        <NavBar :navcurr="9" />
        <div class="main">
        </div>
        <FootBar />
    </div>
</template>


<script>
import { Topbar, NavBar, FootBar } from './c'
export default {
    components: {
        Topbar,
        NavBar,
        FootBar,
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