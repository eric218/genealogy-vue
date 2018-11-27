<template>
    <div>
        <Button type="primary" @click="toEdit(0)">添加</Button>
        <Row :gutter="32" style="margin-top:16px;">
            <i-col :xs="24" :sm="12" :md="8" :lg="6" v-for="(v,i) in list" :key="i" style="margin-bottom:32px;">
                <div class="bg">
                    <img src="http://iph.href.lu/80x45" class="bgimg" />
                    <div class="in">
                        <div class="img" :style="api.imgBG(v.fanNewsUploadFile[0].filePath)" />
                        <div class="cover">
                            <div>
                                <Icon type="ios-create-outline" @click.native="toEdit(v.id)"></Icon>
                                <Icon type="ios-eye-outline" @click.native="handleView(v.fanUploadVedioList[0].filePath)"></Icon>
                                <Icon type="ios-trash-outline" @click.native="handleRemove(v)"></Icon>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tit">{{v.title}}</div>
            </i-col>
        </Row>
        <Page :total="total" @on-change="chgPage" :page-size="8" v-if="list.length" />
        <Modal v-model="visible" style="text-align:center;" width="830" :footer-hide='true'>
            <video width="800" height="450" controls v-if="curr">
                <source :src="api.imgurl(curr)" type="video/mp4">
            </video>
        </Modal>
        <Drawer :mask-closable="false" :title="formData.id ? '修改':'添加'" width="50%" v-model="isedit">
            <Form :model="formData" :label-width="80">
                <FormItem label="标题">
                    <Input v-model="formData.title" placeholder="标题" />
                </FormItem>
                <FormItem label="预览图">
                    <Upload class="upload" :action="api.admin.base + api.admin.upload_img" name="file" :show-upload-list="false" :on-success="uploadImage" :format="['jpg','jpeg','png']">
                        <Button type="dashed">
                            <div class="img" :style="api.imgBG(picPath)" v-if="picPath"></div>
                            <div class="img" :style="formData.fanNewsUploadFile.length ? api.imgBG(formData.fanNewsUploadFile[0].filePath) : ''" v-else-if="formData.fanNewsUploadFile.length"></div>
                            <Icon type="ios-camera" size="40" color="#ccc" v-else></Icon>
                        </Button>
                    </Upload>
                </FormItem>
                <FormItem label="视频文件">
                    <Upload :action="api.admin.base + api.admin.upload_img" name="file" :show-upload-list="false" :on-success="uploadVideo">
                        <Button type="dashed">{{formData.fanUploadVedioList.length || vedioPath ? '替换':'上传'}}</Button>
                    </Upload>
                </FormItem>
                <FormItem label="浏览数" v-if="formData.id">
                    <Input v-model="formData.visitNum" placeholder="浏览数" />
                </FormItem>
                <FormItem label="">
                    <Button type="primary" @click="toSubmit" style="margin-right:16px;">提交</Button>
                    <Button @click="isedit = false">关闭</Button>
                </FormItem>
            </Form>
        </Drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isedit: false,
            list: [],
            total: 0,
            page: 1,
            curr: '',
            formData: {
                fanNewsUploadFile: [],
                fanUploadVedioList: [],
            },
            picfileName: '',
            picPath: '',
            vedioFileName: '',
            vedioPath: '',
            visible: false,
        }
    },
    watch: {
        url: function (curVal, oldVal) {
            if (curVal != oldVal) {
                this.getList();
            }
        },
    },
    mounted() {
        this.getList()
    },
    methods: {
        getList() {
            this.api.get(this.api.admin.base + this.url, {
                siteId: this.$store.state.siteId,
                pageNo: this.page,
            }).then(res => {
                this.list = res.data.records;
                this.total = res.data.total
            })
        },
        chgPage(e) {
            this.page = e;
            this.getList();
        },
        toEdit(e) {
            this.picfileName = ''
            this.picPath = ''
            this.vedioFileName = ''
            this.vedioPath = ''
            if (!e) {
                this.formData = {
                    fanNewsUploadFile: [],
                    fanUploadVedioList: [],
                }
                this.isedit = true;
            } else {
                this.api.get(this.api.admin.base + this.api.admin.media_info, {
                    id: e
                }).then(res => {
                    this.formData = res.data;
                    this.isedit = true;
                })
            }
        },
        handleView(e) {
            this.curr = '';
            this.visible = true;
            setTimeout(() => {
                this.curr = e;
            }, 300);
        },
        handleRemove(e) {
            this.$Modal.confirm({
                title: '提示',
                content: '确定删除？',
                onOk: () => {
                    this.api.get(this.api.admin.base + this.api.admin.media_del, {
                        id: e.id
                    }).then(res => {
                        this.getList();
                    })
                },
            });
        },
        uploadImage(res, file) {
            this.picfileName = res.data.file_name
            this.picPath = res.data.file_path
        },
        uploadVideo(res, file) {
            this.vedioFileName = res.data.file_name
            this.vedioPath = res.data.file_path
        },
        handleFormatError(file) {
            this.$Message.warning('不支持该格式');
        },
        handleMaxSize(file) {
            this.$Message.warning('最大支持上传2M图片');
        },
        toSubmit() {
            if (!this.formData.title) {
                this.$Message.warning('请输入标题')
                return;
            }
            let data = {
                showId: this.type,
                title: this.formData.title,
                visitNum: this.formData.visitNum ? this.formData.visitNum : 0,
            }
            if (this.formData.id) {
                data.id = this.formData.id
            } else {
                if (!this.picfileName) {
                    this.$Message.warning('未上传图片');
                    return;
                }
                if (!this.vedioFileName) {
                    this.$Message.warning('未上传视频');
                    return;
                }
            }
            if (this.picfileName) {
                data.picfileName = this.picfileName
                data.picPath = this.picPath
            }
            if (this.vedioFileName) {
                data.vedioFileName = this.vedioFileName
                data.vedioPath = this.vedioPath
            }
            this.api.post(this.api.admin.base + this.api.admin.media_edit, data).then(res => {
                if (res.code === 200) {
                    if (data.id) {
                        this.$Message.success('修改成功');
                    } else {
                        this.$Message.success('添加成功');
                    }
                    this.getList();
                    this.isedit = false;
                }
            })
        },
    },
    props: ['url', 'menu', 'type']
}
</script>
<style lang="scss" scoped>
.bg {
  position: relative;
  .bgimg {
    visibility: hidden;
    width: 100%;
  }
}
.tit {
  font-size: 14px;
  line-height: 32px;
  height: 32px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
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
.upload {
  button {
    width: 162px;
    height: 122px;
    padding: 0;
    .img {
      width: 160px;
      height: 120px;
      padding: 0;
      background: no-repeat center / cover;
    }
  }
}
</style>