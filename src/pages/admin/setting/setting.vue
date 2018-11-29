<template>
    <div>
        <Form :model="formData" :label-width="80">
            <FormItem label="网站名">
                <Row :gutter="16">
                    <i-col :span="12">
                        <Input v-model="formData.siteName" placeholder="标题" :maxlength="6" @keyup.enter.native="toSubmit"/>
                    </i-col>
                    <i-col :span="6">{{formData.siteName ? formData.siteName.length : 0}} / 6</i-col>
                </Row>
            </FormItem>
            <FormItem label="徽标">
                <Upload class="upload" :action="api.admin.base + api.admin.upload_img" name="file" :show-upload-list="false" :on-success="handleSuccess" :format="['jpg','jpeg','png']">
                    <Button type="dashed">
                        <div class="img" :style="api.imgBG(formData.totemPicSrc)" v-if="formData.totemPicSrc"/>
                        <Icon type="ios-camera" size="40" color="#ccc" v-else></Icon>
                    </Button>
                </Upload>
            </FormItem>
            <FormItem label="宣言">
                <Input v-model="formData.title" placeholder="宣言" @keyup.enter.native="toSubmit"/>
            </FormItem>
            <FormItem label="祖先描述">
                <Input type="textarea" :rows="6" v-model="formData.description" placeholder="祖先描述" style="font-size:12px;" :maxlength="300" @keyup.enter.native="toSubmit"/>
                {{formData.description?formData.description.length:0}} / 300
            </FormItem>
            <FormItem label>
                <Button type="primary" @click="toSubmit" style="margin-right:16px;">提交</Button>
                <Button @click="isedit = false">关闭</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            formData: {
                siteName: "",
                description: "",
                totemPicSrc: ""
            }
        };
    },
    mounted() {
        this.getInfo();
    },
    methods: {
        getInfo() {
            this.api
                .get(this.api.admin.base + this.api.admin.admin_site_info, {
                    siteId: this.$store.state.siteId
                })
                .then(res => {
                    if (res.code == 200) {
                        this.formData = res.data;
                    }
                });
        },
        handleSuccess(res, file) {
            if (res.code == 200) {
                this.formData.totemPicSrc = res.data.file_path;
            }
        },
        toSubmit() {
            if (!this.formData.siteId) {
                return;
            }
            this.api
                .post(this.api.admin.base + this.api.admin.admin_site_edit, {
                    id: this.formData.id,
                    siteName: this.formData.siteName,
                    totemPicSrc: this.formData.totemPicSrc,
                    title: this.formData.title,
                    description: this.formData.description
                })
                .then(res => {
                    if (res.code === 200) {
                        this.$Message.success("修改成功");
                        this.getInfo();
                    }
                });
        }
    }
};
</script>

<style lang="scss" scoped>
.upload {
    button {
        width: 162px;
        height: 162px;
        padding: 0;
        .img {
            width: 160px;
            height: 160px;
            padding: 0;
            background: no-repeat center / cover;
        }
    }
}
</style>