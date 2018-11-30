<template>
    <div>
        <Button type="primary" @click="toEdit()">申请提现</Button>
        <Table border :columns="columns" :data="list" style="margin:16px 0;"></Table>
        <Page :total="total" @on-change="chgPage" :page-size="8"/>
        <Drawer :mask-closable="false" title="申请提现" width="50%" v-model="isedit">
            <Form :model="formData" :label-width="80">
                <FormItem label="资金概况">¥ {{finance.remain}}</FormItem>
                <FormItem label="提现金额">
                    <Poptip trigger="focus" placement="right">
                        <Input v-model="formData.drowAmount" prefix="logo-yen" placeholder="提现金额" @keyup.enter.native="toSubmit"/>
                        <div slot="content">{{ formatNumber }}</div>
                    </Poptip>
                </FormItem>
                <FormItem label="提现银行">
                    <Input v-model="formData.drowBank" placeholder="提现银行" @keyup.enter.native="toSubmit"/>
                </FormItem>
                <FormItem label="支行">
                    <Input v-model="formData.drowBankSub" placeholder="支行" @keyup.enter.native="toSubmit"/>
                </FormItem>
                <FormItem label="银行卡号">
                    <Input v-model="formData.drowInAccountCard" placeholder="银行卡号" @keyup.enter.native="toSubmit"/>
                </FormItem>
                <FormItem label="确认卡号">
                    <Input v-model="formData.drowInAccountCardRe" placeholder="再次输入银行卡号" @keyup.enter.native="toSubmit"/>
                </FormItem>
                <FormItem label="开户名">
                    <Input v-model="formData.drowInAccountName" placeholder="开户名" @keyup.enter.native="toSubmit"/>
                </FormItem>
                <FormItem label>
                    <Button type="primary" @click="toSubmit" style="margin-right:16px;">提交</Button>
                    <Button @click="isedit = false">关闭</Button>
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
            finance: {
                remain: ""
            },
            formData: {
                drowAmount: ""
            },
            columns: [
                { title: "ID", key: "id" },
                { title: "操作用户", key: "createUser" },
                { title: "提现金额", key: "drowAmount" },
                { title: "提现银行", key: "drowBank" },
                { title: "支行", key: "drowBankSub" },
                { title: "卡号", key: "drowInAccountCard" },
                { title: "户名", key: "drowInAccountName" },
                { title: "状态", key: "statusName" },
                { title: "创建时间", key: "datetime" }
            ]
        };
    },
    watch: {
        url: function(curVal, oldVal) {
            if (curVal != oldVal) {
                this.getList();
            }
        }
    },
    computed: {
        formatNumber() {
            if (!this.formData.drowAmount) return "输入提现金额";
            return this.formData.drowAmount;
        }
    },
    mounted: function() {
        this.getList();
    },
    methods: {
        getList(e) {
            this.api
                .get(this.api.admin.base + this.url, {
                    siteId: this.$store.state.siteId,
                    pageNo: this.page
                })
                .then(res => {
                    this.getFinance();
                    if (res.code == 200) {
                        let list = res.data.records;
                        list.forEach(v => {
                            v.datetime = this.dayjs(v.createTime).format(
                                "YYYY-MM-DD HH:mm:ss"
                            );
                        });
                        this.list = list;
                        this.total = res.data.total;
                    } else {
                        this.list = [];
                    }
                });
        },
        getFinance() {
            this.api
                .get(this.api.admin.base + this.api.admin.admin_site_finance, {
                    siteId: this.$store.state.siteId
                })
                .then(res => {
                    this.finance = res.data;
                });
        },
        chgPage(e) {
            this.page = e;
            this.getList();
        },
        toEdit() {
            this.formData = {};
            this.isedit = true;
        },
        toSubmit() {
            if (!this.formData.drowAmount) {
                this.$Message.error("请输入提现金额");
                return;
            }
            if (!this.api.isNumber(this.formData.drowAmount * 100)) {
                this.$Message.error("请输入正确的金额");
                return;
            }
            this.formData.drowAmount = parseFloat(this.formData.drowAmount);
            if (
                this.formData.drowAmount < 0 ||
                this.formData.drowAmount > this.finance.remain
            ) {
                this.$Message.error("没有足够的可提现金额");
                return;
            }
            if (!this.formData.drowBank) {
                this.$Message.error("请输入开户行");
                return;
            }
            if (!this.formData.drowInAccountCard) {
                this.$Message.error("请输入银行卡号");
                return;
            }
            if (!this.formData.drowInAccountName) {
                this.$Message.error("请输入开户人姓名");
                return;
            }
            if (!this.formData.drowAmount) {
                this.$Message.error("请输入提现金额");
                return;
            }
            if (
                this.formData.drowInAccountCardRe !=
                this.formData.drowInAccountCard
            ) {
                this.$Message.error("两次输入的银行卡号不一致");
                return;
            }
            let data = {
                siteId: this.$store.state.siteId,
                drowAmount: this.formData.drowAmount,
                drowBank: this.formData.drowBank,
                drowBankSub: this.formData.drowBankSub,
                drowInAccountCard: this.formData.drowInAccountCard,
                drowInAccountName: this.formData.drowInAccountName
            };
            this.api
                .post(
                    this.api.admin.base + this.api.admin.admin_site_withdraw,
                    data
                )
                .then(res => {
                    if (res.code === 200) {
                        this.$Message.success("提交申请，请等待审核");
                        this.getList();
                        this.isedit = false;
                    }
                });
        }
    },
    props: ["url", "menu", "type"]
};
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