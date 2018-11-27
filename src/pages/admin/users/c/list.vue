<template>
    <div>
        <Table border :columns="columns" :data="list" style="margin:16px 0"></Table>
        <Page :total="total" @on-change="chgPage" :page-size="8" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            columns: [
                { title: 'ID', width: 80, key: 'id' },
                { title: '手机号', key: 'mobilePhone' },
                { title: '昵称', key: 'nickName' },
                { title: '注册时间', key: 'datetime' },
            ],
            list: [],
            total: 0,
            page: 1,
        }
    },
    mounted() {
        this.getList()
    },
    methods: {
        getList() {
            this.api.post(this.api.admin.base + this.api.admin.user_list, {
                pageNo: this.page
            }).then(res => {
                if (res.code == 200) {
                    let list = res.data.records
                    list.forEach(v => {
                        v.datetime = this.dayjs(v.creatTime).format('YYYY-MM-DD HH:mm:ss')
                    })
                    this.list = list
                    this.total = res.data.total
                } else {
                    this.list = []
                }
            })
        },
        chgPage(e) {
            this.page = e
            this.getList()
        },
    }
}
</script>