<template>
    <div class="main">
        <div class="inner grid">
            <div class="h">
                <div class="tit">捐款记录</div>
            </div>
            <div class="b">
                <Table border :columns="columns" :data="data"></Table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {
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