<template>
    <div class="page page-user">
        <UserHead />
        <UserNav name="2" />
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