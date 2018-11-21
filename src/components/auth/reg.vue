<template>
    <div>
        <div class="h">使用手机号注册</div>

        <Form :model="form" :label-width="80" class="b">
            <FormItem label="手机号">
                <Input v-model="form.mobile" placeholder="输入手机号" clearable />
            </FormItem>
            <FormItem label="验证码">
                <Row>
                    <i-col span="11">
                        <Input v-model="form.sms" placeholder="输入验证码" clearable />
                    </i-col>
                    <i-col span="2">&nbsp;</i-col>
                    <i-col span="11">
                        <Button type="primary" @click="toSendSms">{{looptext}}</Button>
                    </i-col>
                </Row>
            </FormItem>
            <FormItem label="密码">
                <Input v-model="form.password" type="password" placeholder="输入密码" clearable />
            </FormItem>
            <FormItem label="确认密码">
                <Input v-model="form.repassword" type="password" placeholder="再次输入密码" clearable />
            </FormItem>
            <FormItem label="姓氏">
                <Select v-model="form.truename" style="width:200px">
                    <Option label="张" value="张"></Option>
                </Select>
            </FormItem>
            <FormItem label="地区">
                <al-cascader v-model="selected" :level="2" style="width:100%" placeholder="请选择地区" />
            </FormItem>
            <FormItem>
                <Button type="primary" @click="toSubmit">注册</Button>
            </FormItem>
        </Form>
        <div class="f">
            <div class="r">
                <a @click="$emit('urlToLogin')">返回登录</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "AuthReg",
    data() {
        return {
            form: {
                mobile: '',
                sms: '',
                password: '',
                repassword: '',
                truename: '',
            },
            looptime: 60,
            looptext: "获取验证码",
            loop: null,
            selected: [],
        };
    },
    mounted: function () {

    },
    methods: {
        toSendSms() {
            if (!this.regform.mobile) {
                this.$Message.error('请输入手机号');
                return;
            }
            this.api.post('', {
                mobilPhone: this.regform.mobile
            }).then(res => {
                this.loopData();
            })
        },
        loopData() {
            clearInterval(this.loop);
            if (this.looptime > 1) {
                this.looptime--;
                this.looptext = this.looptime + "'";
                this.loop = setTimeout(() => {
                    this.loopData();
                }, 1000)
            } else {
                this.looptime = 60;
                this.looptext = '获取验证码';
            }
        },
        toSubmit() {
            if (!this.form.mobile) {
                this.$Message.error('请输入手机号');
                return;
            }
            if (!this.form.password) {
                this.$Message.error('请输入密码');
                return;
            }
            if (this.form.password != this.form.repassword) {
                this.$Message.error('两次密码不一致');
                return;
            }
            if (this.selected.length < 3) {
                this.$Message.error('请选择地区');
                return;
            }
            this.api.post(this.api.user.base + this.api.user.reg, {
                mobilePhone: this.form.mobile,
                sms: this.form.sms,
                password: this.form.password,
                familyCode: this.form.truename,
                region: this.selected[2].code,
            }).then(res => {
                if (res.code == 200) {
                    this.$Message.success('注册成功')
                } else {
                    this.$Message.error(res.msg)
                }
            })
        },
    }
};
</script>