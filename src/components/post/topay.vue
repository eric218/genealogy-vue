<template>
    <div>
        <img src="@/assets/jpg/banner-pay.png" style="margin-bottom:16px;">
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
                <i-input placeholder="填入其它金额" v-model="form.num" :maxlength="5" :number="true">
                <div slot="suffix" style="line-height:32px;">元</div>
                </i-input>
            </FormItem>
            <FormItem label="支付平台">
                <RadioGroup v-model="form.paytype" type="button">
                    <Radio :label="0">
                        <iconfont name="alipay" />
                        <span>支付宝</span>
                    </Radio>
                    <Radio :label="1">
                        <iconfont name="weixinzhifu" />
                        <span>微信支付</span>
                    </Radio>
                </RadioGroup>
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
                num: '',
                paytype: 0
            },
        };
    },
    mounted: function () {

    },
    methods: {
        toSubmit() {
            if (!this.form.num) {
                this.$Message.error('请选择支付金额');
            }
            if (!this.form.num < 0) {
                this.$Message.error('请输入正确的金额');
            }
            if (this.form.paytype) {
                this.api.request('PAY_WX', {
                    money: this.form.num,
                    url: location.href
                }).then(res => {

                })
            } else {
                console.log(location.href);
                this.api.request('PAY_ALI', {
                    money: this.form.num,
                    url: location.href
                }).then(res => {
                    const div = document.createElement('div');
                    div.innerHTML = res;
                    document.body.appendChild(div);
                    document.forms.punchout_form.submit();
                })
            }
        },
    }
};
</script>