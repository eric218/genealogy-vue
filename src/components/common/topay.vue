<template>
    <div>
        <img src="@/assets/img/paygrid.png" style="margin-bottom:16px;width:100%;">
        <Form ref="form" :model="form" :label-width="80">
            <FormItem label="选择金额">
                <RadioGroup v-model="form.num" type="button">
                    <Radio label="1">1元</Radio>
                    <Radio label="5">5元</Radio>
                    <Radio label="15">15元</Radio>
                    <Radio label="50">50元</Radio>
                    <Radio label="100">100元</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="捐赠金额">
                <i-input placeholder="填入其它金额" v-model="form.num" :maxlength="5" :number="true" @keyup.enter.native="toSubmit">
                    <div slot="suffix" style="line-height:32px;">元</div>
                </i-input>
            </FormItem>
            <FormItem label="支付平台">
                <RadioGroup v-model="form.paytype" type="button">
                    <Radio :label="0">
                        <iconfont name="alipay"/>
                        <span>支付宝</span>
                    </Radio>
                    <Radio :label="1">
                        <iconfont name="weixinzhifu"/>
                        <span>微信支付</span>
                    </Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="是否匿名">
                <i-switch v-model="form.anonymous">
                    <span slot="open">是</span>
                    <span slot="close">否</span>
                </i-switch>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="toSubmit">支付</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                num: "",
                anonymous: false,
                paytype: 0
            }
        };
    },
    mounted: function() {},
    methods: {
        toSubmit() {
            if (!this.form.num) {
                this.$Message.error("请选择支付金额");
                return;
            }
            if (!this.api.isNumber(this.form.num * 100)) {
                this.$Message.error("请输入正确的金额");
                return;
            }
            if (this.form.paytype) {
                this.$Message.warning("暂未开放");
            } else {
                this.api
                    .post(this.api.user.base + this.api.user.pay.ali, {
                        siteId: this.$store.state.siteId,
                        payAmount: this.form.num,
                        anonymous: this.form.anonymous ? 1 : 0,
                        url: location.href + "?back=pay&"
                    })
                    .then(res => {
                        if (res.code == 200) {
                            sessionStorage.callback = 1;
                            const div = document.createElement("div");
                            div.innerHTML = res.data;
                            document.body.appendChild(div);
                            document.forms.punchout_form.submit();
                        }
                    });
            }
        }
    }
};
</script>

<style lang="scss" >
@import "@/assets/css/var.scss";
.g-pay {
    .ivu-modal-content {
        background: #fff url(../../assets/img/paytop.jpg) no-repeat top center /
            100% auto;
    }

    .ivu-modal-body {
        padding-top: 108px;
    }
}
</style>