<template>
    <div>
        <Table border :columns="columns" :data="data" style="margin:16px 0;"></Table>
        <Page :total="50" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            columns: [
                {
                    title: 'ID',
                    key: 'id',
                    width: 100
                },
                {
                    title: '姓名',
                    key: 'user'
                },
                {
                    title: '内容',
                    key: 'content'
                },
                {
                    title: '时间',
                    key: 'date'
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 150
                }
            ],
            data: []
        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>