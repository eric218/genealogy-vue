<template>
    <div>
        <Form :label-width="80">
            <FormItem label="头像">
                <Upload class="avatar-uploader" action="//jsonplaceholder.typicode.com/posts/">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <iconfont v-else name="add" />
                </Upload>
            </FormItem>
        </Form>
        <Form :label-width="80">
            <FormItem label="昵称">
                <Input placeholder="昵称" />
            </FormItem>
            <FormItem label="性别">
                <RadioGroup v-model="form.sex">
                    <Radio label="男" />
                    <Radio label="女" />
                </RadioGroup>
            </FormItem>
            <FormItem label="出生日期">
                <DatePicker type="date" v-model="form.date"></DatePicker>
            </FormItem>
            <FormItem label="现居">
                <Input placeholder="现居" />
            </FormItem>
            <FormItem label="故居">
                <Input placeholder="故居" />
            </FormItem>
            <FormItem label="现居古居">
                <Input placeholder="现居住古居" />
            </FormItem>
            <FormItem label="历代">
                <Input placeholder="历代" />
            </FormItem>
            <FormItem label="近世">
                <Input placeholder="近世" />
            </FormItem>
            <FormItem label="老派">
                <Input placeholder="老派" />
            </FormItem>
            <FormItem label="新派">
                <Input placeholder="新派" />
            </FormItem>
            <FormItem label="统派">
                <Input placeholder="统派" />
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
            form: {
                sex: '男'
            },
            imageUrl: '',
        };
    },
    mounted: function () {

    },
    methods: {
        toSubmit() { },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
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
