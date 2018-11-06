<template>
    <div>
        <Table border :columns="columns1" :data="data"></Table>
        <Page :total="0" style="margin-top:16px;" />
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
                    title: '姓名',
                    key: 'user'
                },
                {
                    title: '手机号',
                    key: 'mobile'
                },
                {
                    title: '性别',
                    key: 'sex'
                },
                {
                    title: '上次登录',
                    key: 'lastsign'
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