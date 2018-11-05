<template>
    <div>
        <Button type="primary" size="large">添加</Button>
        <Table border :columns="columns1" :data="data" style="margin:16px 0;"></Table>
        <Page :total="0" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            columns1: [
                {
                    title: 'ID',
                    key: 'id'
                },
                {
                    title: '名称',
                    key: 'name'
                },
                {
                    title: '备注',
                    key: 'rename'
                },
                {
                    title: '链接',
                    key: 'link'
                },
                {
                    title: '添加时间',
                    key: 'addtime'
                },
                {
                    title: '操作',
                    key: 'action',
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