<template>
    <div>
        <Alert>建议：上传像素为1920*550的图片效果最佳</Alert>
        <Button type="primary" @click="handleAdd">添加</Button>
        <Upload ref="upload" class="upload" :action="api.admin.base + api.admin.upload_img" name="file" :show-upload-list="false" :on-success="handleSuccess" :format="['jpg','jpeg','png']" :max-size="2048" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :default-file-list="list">
            <Button type="primary" id="slider_upload" style="visibility:hidden">上传</Button>
        </Upload>
        <Row :gutter="32" style="margin-top:16px;">
            <i-col :xs="24" :sm="24" :md="12" :lg="12" v-for="item in list" :key="item.id" style="margin-bottom:32px;">
                <div class="bg">
                    <img src="http://iph.href.lu/192x55" class="bgimg">
                    <div class="in">
                        <template v-if="item.status === 'finished'">
                            <div class="img" :style="api.imgBG(item.picUrl)"/>
                            <div class="cover">
                                <div>
                                    <Icon type="ios-create-outline" @click.native="handleEdit(item)"></Icon>
                                    <Icon type="ios-eye-outline" @click.native="handleView(item)"></Icon>
                                    <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                        </template>
                    </div>
                </div>
            </i-col>
        </Row>
        <Modal title="查看图片" v-model="visible" :footer-hide="true">
            <img :src="api.imgurl(curr.picUrl)" v-if="visible" style="width: 100%">
        </Modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            curr: "",
            visible: false
        };
    },
    mounted() {
        this.getList();
    },
    methods: {
        getList() {
            this.api
                .get(this.api.admin.base + this.api.admin.admin_slider_list, {
                    siteId: this.$store.state.siteId
                })
                .then(res => {
                    this.list = res.data;
                });
        },
        handleAdd(e) {
            this.curr = {};
            document.getElementById("slider_upload").click();
        },
        handleEdit(e) {
            this.curr = e;
            document.getElementById("slider_upload").click();
        },
        handleView(e) {
            this.curr = e;
            this.visible = true;
        },
        handleRemove(e) {
            this.$Modal.confirm({
                title: "提示",
                content: "确定删除？",
                onOk: () => {
                    this.api
                        .get(
                            this.api.admin.base +
                                this.api.admin.admin_slider_del,
                            {
                                id: e.id
                            }
                        )
                        .then(res => {
                            this.getList();
                        });
                }
            });
        },
        handleSuccess(res, file) {
            let data = {
                siteId: this.$store.state.siteId,
                picUrl: res.data.file_path
            };
            if (this.curr.id) {
                data.id = this.curr.id;
            }
            this.api
                .post(
                    this.api.admin.base + this.api.admin.admin_slider_edit,
                    data
                )
                .then(res => {
                    this.getList();
                });
        },
        handleFormatError(file) {
            this.$Message.warning("不支持该格式");
        },
        handleMaxSize(file) {
            this.$Message.warning("最大支持上传2M图片");
        }
    }
};
</script>
<style lang="scss" scoped>
.bg {
    position: relative;
    .bgimg {
        visibility: hidden;
        width: 100%;
    }
}
.in {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    margin-right: 4px;
    .img {
        height: 100%;
        width: 100%;
        background: no-repeat center / cover;
    }
    img {
        width: 100%;
        height: 100%;
    }
    .cover {
        display: none;
        position: absolute;
        z-index: 9;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.8);
        flex-direction: column;
        justify-content: center;
        i {
            color: #fff;
            font-size: 32px;
            cursor: pointer;
            margin: 0 8px;
        }
    }
    &:hover {
        .cover {
            display: flex;
        }
    }
}
</style>
