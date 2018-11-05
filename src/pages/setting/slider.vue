<template>
    <div>
        <Table :data="tableData" :columns="tableColumns"></Table>
    </div>
</template>

<script>
import DefImg from '@/assets/images/img.png'
export default {
    data() {
        return {
            DefImg,
            tableData: [],
            tableColumns: [],
        }
    },
    mounted() {
        this.tableColumns = [{
            title: 'ID',
            key: 'id'
        }, {
            title: '图片',
            key: 'image',
            render: (h, params) => {
                console.log(params)
                return h('img', {
                    attrs: {
                        src: this.DefImg
                    },
                    style: {
                        width: '100%'
                    }
                })
            }
        }, {
            title: '备注',
            key: 'remark'
        }, {
            title: '序号',
            key: 'order'
        }, {
            title: '操作',
            key: 'actions',
            width: 80,
            render: (h, params) => {
                return h('Button', {
                    props: {
                        icon: 'ios-eye',
                    },
                })
            }
        }];
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr[i] = {
                id: i + 1,
                image: this.DefImg,
                remark: '备注',
                order: i,
                date: '2016-10-04'
            }
        }
        this.tableData = arr;
    },
}
</script>
