<template>
    <Layout>
        <Content>
            <Row :gutter="32" style="width:80%;max-width:960px;margin:0 auto;">
                <i-col :span="24">
                    <div style="padding:64px 0;">
                        <Form :model="form" :label-width="80" @submit.native.prevent="toHome">
                            <FormItem label="网站id">
                                <Input type="text" v-model.number="form.siteid" placeholder="网站id" :maxlength="5" />
                            </FormItem>
                            <FormItem>
                                <Button type="primary" @click="toHome('form')">进入</Button>
                            </FormItem>
                        </Form>
                    </div>
                    <div style="padding:64px 0;">
                        <Form :model="form" :label-width="80" @submit.native.prevent>
                            <FormItem label="上传url">
                                <Input type="text" v-model.number="form.uploadurl" placeholder="需带http://" @input="chgIpt" />
                            </FormItem>
                            <FormItem>
                                <Upload :before-upload="handleUpload" action="">
                                    <Button icon="ios-cloud-upload-outline">选择文件上传</Button>
                                </Upload>
                            </FormItem>
                        </Form>
                    </div>
                </i-col>
            </Row>
        </Content>
    </Layout>
</template>


<script>
export default {
    data() {
        return {
            form: {
                siteid: '',
                uploadurl: '',
            },
            index: 1,
            formDynamic: {
                url: '',
                value: '',
            }
        };
    },
    computed: {
    },
    mounted: function () {
        if (localStorage.uploadurl) {
            this.form.uploadurl = localStorage.uploadurl;
        }
    },
    methods: {
        chgIpt(e) {
            this.form.uploadurl = e;
            localStorage.uploadurl = e;
        },
        toHome() {
            if (!this.form.siteid) {
                this.$Modal.warning({
                    title: '提示',
                    content: '请输入网站id'
                });
                return false;
            }
            this.$store.commit('updateSiteid', this.form.siteid);
            this.$router.push('/c');
        },
        handleUpload(e) {
            if (!this.form.uploadurl) {
                this.$Message.error('未配置upload URL')
                return false;
            }
            this.api.upload(this.form.uploadurl, {}, {
                key: 'file',
                file: e,
            }).then(res => {
                return false;
            })
        },
    }
};
</script>