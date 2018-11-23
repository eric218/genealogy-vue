<template>
    <div>
        <Form :label-width="80">
            <FormItem label="头像">
                <Upload class="avatar-uploader" action="//jsonplaceholder.typicode.com/posts/" :format="['jpg','jpeg','png']">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <iconfont v-else name="add" />
                </Upload>
            </FormItem>
        </Form>
        <Form :label-width="80">
            <FormItem label="头像">
                <Upload class="upload" :action="api.admin.base + api.admin.upload_img" name="file" :show-upload-list="false" :on-success="handleSuccess" :format="['jpg','jpeg','png']">
                    <Button type="dashed">
                        <div class="img" :style="api.imgBG(filePath)" v-if="filePath" />
                        <div class="img" :style="formData.fanNewsUploadFileList.length ? api.imgBG(formData.fanNewsUploadFileList[0].filePath) :''" v-else-if="formData.fanNewsUploadFileList"></div>
                        <Icon type="ios-camera" size="40" color="#ccc" v-else></Icon>
                    </Button>
                </Upload>
            </FormItem>
            <FormItem label="昵称">
                <Input placeholder="昵称" />
            </FormItem>
            <FormItem label="简介">
                <Input type="textarea" />
            </FormItem>
            <FormItem>
                <Button type="primary" @click="toSubmit">保存</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: []
        };
    },
    mounted: function () {
        this.user = this.$store.state.user
    },
    methods: {
        toSubmit() { },
    }
};
</script>
<style lang="scss" scoped>
.avatar-uploader {
  height: 40px;
  width: 40px;
  cursor: pointer;
  font-size: 24px;
  line-height: 40px;
  text-align: center;
  border: 1px dashed #ccc;
  color: #ccc;
}
</style>
