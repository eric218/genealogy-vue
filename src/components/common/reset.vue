<template>
    <div>
        <div class="h">修改密码</div>
        <Form :model="form" :label-width="80" class="b">
            <FormItem label="原密码">
                <Input v-model="form.oldpassword" type="password" placeholder="输入密码" clearable :maxlength="20" @keyup.enter.native="toSubmit" />
            </FormItem>
            <FormItem label="新密码">
                <Input v-model="form.newpassword" type="password" placeholder="输入新密码" clearable :maxlength="20" @keyup.enter.native="toSubmit" />
            </FormItem>
            <FormItem label="确认新密码">
                <Input v-model="form.repassword" type="password" placeholder="再次输入新密码" clearable :maxlength="20" @keyup.enter.native="toSubmit" />
            </FormItem>
            <FormItem>
                <Button type="primary" @click="toSubmit">提交</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
export default {
    name: "AuthReg",
    data() {
        return {
            form: {
                oldpassword: '',
                newpassword: '',
                repassword: '',
            },
        }
    },
    mounted: function () {

    },
    methods: {
        toSubmit() {
            if (!this.form.oldpassword) {
                this.$Message.error('请输入原密码');
                return;
            }
            if (!this.form.newpassword) {
                this.$Message.error('请输入新密码');
                return;
            }
            if (this.form.oldpassword == this.form.newpassword) {
                this.$Message.error('新旧密码一致，密码未变更');
                return;
            }
            if (this.form.newpassword != this.form.repassword) {
                this.$Message.error('两次密码不一致');
                return;
            }
            this.api.post(this.api.user.base + this.api.user.reset, {
                oldPassword: this.form.oldpassword,
                newPassword: this.form.newpassword,
            }).then(res => {
                if (res.code == 200) {
                    this.$Message.success('修改成功')
                    // this.$store.commit('updateUser', res.data);
                    this.$emit('closedialog', true);
                } else {
                    this.$Message.error(res.msg)
                }
            })
        },
    }
}
</script>