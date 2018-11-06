<template>
    <div>
        <Form :label-width="120">
            <FormItem label="当前余额">
                88000.00元
            </FormItem>
            <FormItem label="提现金额">
                <i-input placeholder="输入提现金额"></i-input>
            </FormItem>
            <FormItem label="到账银行">
                <i-input placeholder="输入开户行"></i-input>
            </FormItem>
            <FormItem label="到账银行卡号">
                <i-input placeholder="输入银行卡号"></i-input>
            </FormItem>
            <FormItem label="账户名">
                <i-input placeholder="输入账户名"></i-input>
            </FormItem>
            <FormItem>
                <Button type="primary" size="large">提交申请</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
export default {
    name: 'home',
    components: {
    },
    data() {
        return {
        }
    },
    mounted() {
    }
}
</script>