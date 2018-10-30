<template>
    <div class="page page-user">
        <Topbar />
        <NavBar name="2" />
        <div class="main">
            <sua />
            <div class="suc">
                <div class="inner grad">
                    <div class="h">
                        <div class="tit">捐款记录</div>
                    </div>
                    <div class="b">
                        <Table border :columns="columns" :data="data"></Table>
                    </div>
                </div>
            </div>
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
            data: [],
            columns: []
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