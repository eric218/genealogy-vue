<template>
    <div>
        <div class="h">使用手机号登录</div>
        <Form :model="form" class="b">
            <FormItem>
                <Input v-model="form.mobile" placeholder="输入手机号" clearable :maxlength="11" @keyup.enter.native="toSubmit"/>
            </FormItem>
            <FormItem>
                <Input v-model="form.password" type="password" placeholder="输入密码" clearable :maxlength="20" @keyup.enter.native="toSubmit"/>
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
                mobile: "",
                password: ""
            }
        };
    },
    mounted: function() {},
    methods: {
        toSubmit() {
            if (!this.api.isMobile(this.form.mobile)) {
                this.$Message.error("请输入正确的手机号");
                return;
            }
            if (!this.form.password) {
                this.$Message.error("请输入密码");
                return;
            }
            this.api
                .post(this.api.user.base + this.api.user.login, {
                    userName: this.form.mobile,
                    password: this.form.password
                })
                .then(res => {
                    if (res.code === 200) {
                        this.$store.commit("updateUser", res.data);
                        this.$emit("closedialog", true);
                    } else {
                        this.$Message.error(res.msg);
                    }
                });
        }
    }
};
</script>

<style lang="scss">
@import "@/assets/css/var.scss";
.g-auth {
    .ivu-modal-content {
        background: #fff url(../../assets/img/authgrid.png) no-repeat top center /
            100% auto;
    }

    .ivu-modal-body {
        padding-top: 128px;
    }

    .h {
        font-size: 12px;
        line-height: 32px;
        text-align: center;
        margin-bottom: 32px;
    }

    .f {
        overflow: hidden;
        font-size: 12px;

        .r {
            float: right;
        }

        a {
            color: $color;
        }
    }
}
</style>
