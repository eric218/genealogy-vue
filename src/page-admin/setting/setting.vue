<template>
    <div>
        <Form :model="formData" :label-width="80">
            <FormItem label="网站名">
                <Input v-model="formData.siteName" placeholder="标题" />
            </FormItem>
            <FormItem label="徽标">
                <Upload class="upload" :action="api.admin + api.urls.upload_img" name="file" :show-upload-list="false" :on-success="handleSuccess" :format="['jpg','jpeg','png']">
                    <Button type="dashed">
                        <div class="img" :style="api.imgBG(formData.totemPicSrc)" v-if="formData.totemPicSrc" />
                        <Icon type="ios-camera" size="40" color="#ccc" v-else></Icon>
                    </Button>
                </Upload>
            </FormItem>
            <FormItem label="宣言">
                <Input v-model="formData.title" placeholder="宣言" />
            </FormItem>
            <FormItem label="祖先描述">
                <Input v-model="formData.description" placeholder="祖先描述" />
            </FormItem>
            <FormItem label="">
                <Button type="primary" @click="toSubmit">保存</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            formData: {
                totemPicSrc: '',
            },
        }
    },
    mounted() {
        this.getInfo();
    },
    methods: {
        getInfo() {
            this.api.get(this.api.admin + this.api.urls.admin_site_info, {
                siteId: this.$store.state.siteId,
            }).then(res => {
                this.formData = res.data
            })
        },
        handleSuccess(res, file) {
            if (res.code == 200) {
                this.formData.totemPicSrc = res.data.file_path
            }
        },
        toSubmit() {
            if (!this.formData.id) {
                return;
            }
            this.api.post(this.api.admin + this.api.urls.admin_site_edit, {
                id: this.formData.id,
                totemPicSrc: this.formData.totemPicSrc,
                title: this.formData.title,
                description: this.formData.description
            }).then(res => {
                if (res.code === 200) {
                    this.$Message.success('修改成功');
                    this.getInfo();
                }
            })
        }
    }
}
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