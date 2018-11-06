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
                <Input placeholder="输入姓氏" clearable />
            </FormItem>
            <FormItem label="地区">
                <Cascader trigger="hover" :data="options" v-model="selectedOptions" style="width:100%" />
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
            options: [{
                value: '1',
                label: '中国',
                children: [{
                    value: '11',
                    label: '北京'
                }, {
                    value: '12',
                    label: '上海'
                }, {
                    value: '13',
                    label: '天津'
                }, {
                    value: '14',
                    label: '重庆'
                }, {
                    value: '19',
                    label: '湖北',
                    children: [{
                        value: '191',
                        label: '武汉'
                    }, {
                        value: '192',
                        label: '咸宁',
                        children: [{
                            value: '1921',
                            label: '咸安'
                        }, {
                            value: '1922',
                            label: '赤壁'
                        }, {
                            value: '1923',
                            label: '嘉鱼'
                        }, {
                            value: '1924',
                            label: '崇阳'
                        }, {
                            value: '1925',
                            label: '通山'
                        }, {
                            value: '1926',
                            label: '通城'
                        }]
                    }]
                }]
            }, {
                value: '2',
                label: '其它',
            }],
            selectedOptions: ['1', '19', '192', '1921'],
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
            this.api.post('USER_SMS', {
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
            this.api.post('USER_REG', {
                mobilePhone: this.form.mobile,
                yanzheng: this.form.sms,
                password: this.form.password,
            }).then(res => {

            })
        },
    }
};
</script>