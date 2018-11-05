<template>
    <div>
        <Card>
            <tables ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns" @on-delete="handleDelete" />
            <Button style="margin: 16px 0;" type="primary" @click="exportExcel">导出为Csv文件</Button>
        </Card>
    </div>
</template>

<script>
import Tables from '_c/tables'
export default {
    name: 'tables_page',
    components: {
        Tables
    },
    data() {
        return {
            columns: [
                { title: 'ID', key: 'id', sortable: true },
                { title: '用户', key: 'name', sortable: true },
                { title: '捐款金额', key: 'number', editable: true },
                { title: '支付方式', key: 'type', editable: true },
                { title: '被赞次数', key: 'count', editable: true },
                { title: '创建时间', key: 'createTime' },
            ],
            tableData: []
        }
    },
    methods: {
        handleDelete(params) {
        },
        exportExcel() {
            this.$refs.tables.exportCsv({
                filename: `table-${(new Date()).valueOf()}.csv`
            })
        }
    },
}
</script>