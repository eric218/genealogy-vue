<template>
    <div>
        <Table border :columns="columns" :data="data" style="margin:16px 0;"></Table>
        <Page :total="0" />
    </div>
</template>

<script>
export default {
    name: 'home',
    components: {
    },
    data() {
        return {
            columns: [{
                title: 'ID',
                key: 'id'
            }, {
                title: '角色',
                key: 'name'
            }, {
                title: '事件',
                key: 'act'
            }, {
                title: '操作时间',
                key: 'time'
            }, {
                title: '操作IP',
                key: 'ip'
            }],
            data: [],
        }
    },
    mounted() {
    }
}
</script>
