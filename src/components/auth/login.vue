<template>
    <div>
        <div class="h">使用手机号登录</div>
        <Form :model="form" class="b">
            <FormItem>
                <Input v-model="form.mobile" placeholder="输入手机号" clearable />
            </FormItem>
            <FormItem>
                <Input v-model="form.password" type="password" placeholder="输入密码" clearable />
            </FormItem>
            <FormItem>
                <Button type="primary" @click="toSubmit" style="width:100%;">登录</Button>
            </FormItem> 
        </Form>
        <div class="f">
            <div class="r">
                <span>还没有账号？</span>
                <a @click="$emit('urlToReg')">立即注册</a>
            </div>
            <div class="v">
                <a href="javascript:void(0)">忘记密码？</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "AuthLogin",
    data() {
        return {
            form: {
                mobile: '',
                password: '',
            },
        };
    },
    mounted: function () {

    },
    methods: {
        toSubmit() {
            if (!this.form.mobile) {
                this.$Message.error('请输入用户名');
                return;
            }
            if (!this.form.password) {
                this.$Message.error('请输入密码');
                return;
            }
            this.api.request('USER_LOGIN', {
                user: {
                    username: this.form.mobile,
                    password: this.form.password,Î
                }
            }).then(res => {
                if (res.code === 200) {
                    this.$router.push('/User')
                } else {
                    this.$Message.error(res.msg);
                }
            })
        },
    }
};
</script>