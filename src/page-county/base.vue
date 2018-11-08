<template>
    <Layout>
        <Content>
            <div style="padding:64px;width:640px;margin:64px auto;">
                <Form :model="form" :label-width="80">
                    <FormItem label="网站id">
                        <Input type="text" v-model.number="form.siteid" placeholder="网站id" :maxlength="5" />
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit('form')">进入</Button>
                    </FormItem>
                </Form>
            </div>
            <div style="padding:64px;width:640px;margin:64px auto;">
                <Form :model="form" :label-width="80">
                    <FormItem label="上传url">
                        <Input type="text" v-model.number="form.uploadurl" placeholder="需带http://" @input="chgIpt" />
                    </FormItem>
                    <FormItem>
                        <Upload multiple :action="uploadurl" :show-upload-list="false">
                            <Button icon="ios-cloud-upload-outline">选择文件上传</Button>
                        </Upload>
                    </FormItem>
                </Form>
            </div>
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
        handleSubmit() {
            if (!this.form.siteid) {
                this.$Modal.warning({
                    title: '提示',
                    content: '请输入网站id'
                });
                return;
            }
            this.$store.commit('updateSiteid', this.form.siteid);
            this.$router.push('/c');
        },
        handleUpload(e) {
            if (!this.form.uploadurl) {
                alert('未配置upload URL');
                return false;
            }
            this.api.upload(this.form.uploadurl, {}, {
                key: 'img',
                file: e,
            }).then(res => {

            })
        }
    }
};
</script>