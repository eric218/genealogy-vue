<template>
    <div>
        <Button type="primary" @click="toEdit()">申请提现</Button>
        <Table border :columns="columns" :data="list" style="margin:16px 0;"></Table>
        <Page :total="total" @on-change="chgPage" :page-size="8" />
        <Drawer title="申请提现" width="50%" :closable="false" v-model="isedit">
            <Form :model="formData" :label-width="80">
                <FormItem label="资金概况">¥ 0.00</FormItem>
                <FormItem label="提现金额">
                    <Input v-model="formData.drowAmount" placeholder="提现金额" />
                </FormItem>
                <FormItem label="提现银行">
                    <Input v-model="formData.drowBank" placeholder="提现银行" />
                </FormItem>
                <FormItem label="支行">
                    <Input v-model="formData.drowBankSub" placeholder="支行" />
                </FormItem>
                <FormItem label="银行卡号">
                    <Input v-model="formData.drowInAccountCard" placeholder="银行卡号" />
                </FormItem>
                <FormItem label="开户名">
                    <Input v-model="formData.drowInAccountName" placeholder="开户名" />
                </FormItem>
                <FormItem label="">
                    <Button type="primary" @click="toSubmit">提交</Button>
                </FormItem>
            </Form>
        </Drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isedit: false,
            list: [],
            total: 0,
            page: 1,
            formData: {},
            columns: [
                {
                    title: 'ID',
                    key: 'id'
                }, {
                    title: '操作用户',
                    key: 'createUser'
                }, {
                    title: '提现金额',
                    key: 'drowAmount'
                }, {
                    title: '提现银行',
                    key: 'drowBank',
                }, {
                    title: '支行',
                    key: 'drowBankSub',
                }, {
                    title: '卡号',
                    key: 'drowInAccountCard',
                }, {
                    title: '户名',
                    key: 'drowInAccountName',
                }, {
                    title: '状态',
                    key: 'statusName',
                }, {
                    title: '创建时间',
                    key: 'datetime',
                }
            ],
        }
    },
    watch: {
        url: function (curVal, oldVal) {
            if (curVal != oldVal) {
                this.getList();
            }
        },
    },
    mounted: function () {
        this.getList()
    },
    methods: {
        getList(e) {
            this.api.get(this.url, {
                siteId: this.$store.state.siteId,
                pageNo: this.page
            }).then(res => {
                if (res.code == 200) {
                    let list = res.data.records;
                    list.forEach(v => {
                        v.datetime = this.dayjs(v.createTime).format('YYYY-MM-DD HH:mm:ss')
                    })
                    this.list = list;
                    this.total = res.data.total
                } else {
                    this.list = [];
                }
            })
        },
        chgPage(e) {
            this.page = e;
            this.getList();
        },
        toEdit() {
            this.formData = {}
            this.isedit = true;
        },
        toSubmit() {
            let data = {
                siteId: this.$store.state.siteId,
                drowAmount: this.formData.drowAmount,
                drowBank: this.formData.drowBank,
                drowBankSub: this.formData.drowBankSub,
                drowInAccountCard: this.formData.drowInAccountCard,
                drowInAccountName: this.formData.drowInAccountName,
            }
            this.api.post(this.api.admin + this.api.urls.admin_site_withdraw, data).then(res => {
                if (res.code === 200) {
                    this.$Message.success('提交申请，请等待审核');
                    this.getList();
                    this.isedit = false;
                }
            })
        },
    },
    props: ['url', 'menu', 'type']
}
</script>
<style lang="scss" scoped>
.upload {
  button {
    width: 162px;
    height: 122px;
    padding: 0;
    .img {
      width: 160px;
      height: 120px;
      padding: 0;
      background: no-repeat center / cover;
    }
  }
}
</style>