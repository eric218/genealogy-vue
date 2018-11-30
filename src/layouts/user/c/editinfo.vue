<template>
    <div>
        <Form :label-width="80">
            <FormItem label="头像">
                <Upload class="upload" :action="api.admin.base + api.admin.upload_img" name="file" :show-upload-list="false" :on-success="handleSuccess" :format="['jpg','jpeg','png']">
                    <Button type="dashed">
                        <div class="img" :style="api.imgBG(user.picSrc)" v-if="user.picSrc"></div>
                        <Icon type="ios-camera" size="40" color="#ccc" v-else></Icon>
                    </Button>
                </Upload>
            </FormItem>
            <FormItem label="昵称">
                <Input placeholder="昵称" v-model="user.nickName" @keyup.enter.native="toSubmit"/>
            </FormItem>
            <FormItem label="真实姓名">
                <Input placeholder="行不更名 坐不改姓" v-model="user.realName" @keyup.enter.native="toSubmit"/>
            </FormItem>
            <FormItem label="手机号">
                <Input placeholder="手机号" v-model="user.mobilePhone" @keyup.enter.native="toSubmit" disabled/>
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
    mounted: function() {
        this.user = [];
        this.user = this.$store.state.user;
    },
    methods: {
        handleSuccess(res, file) {
            if (res.code == 200) {
                this.user.picSrc = res.data.file_path;
            }
        },
        toSubmit() {
            this.api
                .post(this.api.user.base + this.api.user.update, {
                    nickName: this.user.nickName,
                    realName: this.user.realName,
                    picSrc: this.user.picSrc
                })
                .then(res => {
                    if (res.code == 200) {
                        this.$Message.success("修改成功");
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
<style lang="scss" scoped>
.upload {
    button {
        width: 122px;
        height: 122px;
        padding: 0;
        .img {
            width: 120px;
            height: 120px;
            padding: 0;
            background: no-repeat center / cover;
        }
    }
}
</style>