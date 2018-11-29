<template>
  <div>
    <Button
      type="primary"
      @click="toAdd"
    >开通网站</Button>
    <Table
      border
      :columns="columns"
      :data="list"
      style="margin:16px 0;"
    ></Table>
    <Page
      :total="total"
      @on-change="chgPage"
      :page-size="8"
    />
    <Drawer
      :mask-closable="false"
      title="修改"
      width="50%"
      v-model="isedit"
    >
      <Form
        :model="formData"
        :label-width="80"
      >
        <FormItem label="网站名">
          <Row :gutter="16">
            <i-col :span="12">
              <Input
                v-model="formData.siteName"
                placeholder="标题"
                :maxlength="6"
                @keyup.enter.native="toSubmit"
              />
            </i-col>
            <i-col :span="6">
              {{formData.siteName ? formData.siteName.length : 0}} / 6
            </i-col>
          </Row>
        </FormItem>
        <FormItem label="徽标">
          <Upload
            class="upload"
            :action="api.admin.base + api.admin.upload_img"
            name="file"
            :show-upload-list="false"
            :on-success="handleSuccess"
            :format="['jpg','jpeg','png']"
          >
            <Button type="dashed">
              <div
                class="img"
                :style="api.imgBG(formData.totemPicSrc)"
                v-if="formData.totemPicSrc"
              />
              <Icon
                type="ios-camera"
                size="40"
                color="#ccc"
                v-else
              ></Icon>
            </Button>
          </Upload>
        </FormItem>
        <FormItem label="宣言">
          <Input
            v-model="formData.title"
            placeholder="宣言"
            @keyup.enter.native="toSubmit"
          />
        </FormItem>
        <FormItem label="祖先描述">
          <Input
            type="textarea"
            :rows="6"
            v-model="formData.description"
            placeholder="祖先描述"
            style="font-size:12px;"
            :maxlength="300"
            @keyup.enter.native="toSubmit"
          />
          {{formData.description ? formData.description.length :0}} / 300
        </FormItem>
        <FormItem label="">
          <Button
            type="primary"
            @click="toSubmit"
            style="margin-right:16px;"
          >提交</Button>
          <Button @click="isedit = false">关闭</Button>
        </FormItem>
      </Form>
    </Drawer>
    <Drawer
      :mask-closable="false"
      title="开通县级联谊会网站"
      width="50%"
      v-model="isadd"
    >
      <Form
        :model="formAdd"
        :label-width="80"
      >
        <FormItem label="网站类型">
          {{data.type=="pro" ? '省级联谊会':'县级联谊会'}}
        </FormItem>
        <FormItem label="网站名">
          <Row>
            <i-col
              :span="12"
              style="padding-right:16px"
            >
              <Input
                v-model="formAdd.name"
                placeholder="标题"
                :maxlength="6"
                @keyup.enter.native="toCreat"
              />
            </i-col>
            <i-col :span="6">
              {{formAdd.name.length}} / 6
            </i-col>
          </Row>
        </FormItem>
        <FormItem label="姓氏">
          <Select
            v-model="formAdd.familyCode"
            filterable
            remote
            clearable
            :remote-method="remoteMethod"
            :loading="loading"
            placeholder="搜索姓氏"
          >
            <Option
              v-for="v in options"
              :value="v.id"
              :key="v.id"
            >{{v.value}}</Option>
          </Select>
        </FormItem>
        <FormItem label="地区">
          <al-cascader
            v-model="selected"
            :level="2"
            style="width:100%"
            placeholder="请选择地区"
          />
        </FormItem>
        <FormItem label="">
          <Button
            type="primary"
            @click="toCreat"
            style="margin-right:16px;"
          >提交</Button>
          <Button @click="isadd = false">关闭</Button>
        </FormItem>
      </Form>
    </Drawer>
  </div>
</template>

<script>
import { pca, pcaa } from 'area-data';
export default {
  data() {
    return {
      isadd: false,
      isedit: false,
      list: [],
      total: 0,
      page: 1,
      formAdd: {
        name: '',
      },
      formData: {
        siteName: '',
        description: '',
        totemPicSrc: '',
      },
      selected: [],
      loading: false,
      options: [],
      columns: [
        { title: 'ID', key: 'id', width: 80 },
        {
          title: '徽标',
          key: 'url',
          width: 72,
          align: 'center',
          render: (h, e) => {
            return h('div', {
              style: {
                height: '32px',
                width: '32px',
                background: 'no-repeat center / cover',
                backgroundImage: 'url(' + this.api.imgurl(e.row.url) + ')'
              }
            })
          }
        },
        { title: '网站名称', key: 'name' },
        { title: '姓氏', key: 'familyName', width: 80 },
        {
          title: '地区',
          key: 'regionCode',
          render: (h, e) => {
            if (!e.row.regionCode) {
              return null
            }
            let a = parseInt(Number(e.row.regionCode) * 0.0001) * 10000
            let b = parseInt(Number(e.row.regionCode) * 0.01) * 100
            let c = Number(e.row.regionCode)
            return h('div', pca[86][a] + ' · ' + pcaa[b][c])
          },
        }, { title: '状态', key: 'status', width: 72 },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, e) => {
            return h('Button', {
              props: {
                type: 'primary',
                size: 'small',
                icon: 'ios-create',
              },
              style: {
                marginRight: '5px'
              },
              on: {
                click: () => {
                  this.toEdit(e.row.id)
                }
              }
            })
          }
        }
      ],
    }
  },
  watch: {
    data: function (curVal, oldVal) {
      if (curVal != oldVal) {
        this.getList();
      }
    },
  },
  mounted: function () {
    this.getList()
  },
  methods: {
    getList(e) {
      this.api.post(this.api.admin.base + this.api.admin.site_list, {
        siteType: this.data.type,
        pageNo: this.page,
      }).then(res => {
        if (res.code == 200) {
          this.list = res.data.records
          this.total = res.data.total
        }
      })
    },
    chgPage(e) {
      this.page = e;
      this.getList();
    },
    toAdd() {
      if (this.data.type == 'pro') {
        this.$Message.warning('暂未开放')
        return
      }
      this.formAdd = {
        name: ''
      }
      this.isadd = true
    },
    toEdit(e) {
      if (!e) {
        return
      }
      if (this.data.type == 'pro') {
        this.$Message.warning('暂未开放')
        return
      }
      this.api.get(this.api.admin.base + this.api.admin.admin_site_info, {
        siteId: e
      }).then(res => {
        if (res.code == 200) {
          this.formData = res.data
          this.isedit = true;
        }
      })
    },
    remoteMethod(e) {
      this.options = [];
      this.loading = true;
      this.api.get(this.api.admin.base + this.api.admin.firstname, {
        value: e
      }).then(res => {
        if (res.code == 200) {
          this.loading = false
          this.options = res.data
        }
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
      this.api.post(this.api.admin.base + this.api.admin.admin_site_edit, {
        id: this.formData.id,
        siteName: this.formData.siteName,
        totemPicSrc: this.formData.totemPicSrc,
        title: this.formData.title,
        description: this.formData.description
      }).then(res => {
        if (res.code === 200) {
          this.$Message.success('修改成功')
          this.getList()
          this.isedit = false
        } else {
          this.$Message.error(res.msg)
        }
      })
    },
    toCreat() {
      if (!this.formAdd.name) {
        this.$Message.error('请输入开通网站的名称')
        return
      }
      if (!this.formAdd.familyCode) {
        this.$Message.error('请搜索姓氏并选择');
        return;
      }
      if (this.selected.length < 3) {
        this.$Message.error('请选择地区');
        return;
      }
      this.api.post(this.api.admin.base + this.api.admin.site_creat, {
        name: this.formAdd.name,
        familyCode: this.formAdd.familyCode,
        regionCode: this.selected[2].code,
        siteType: this.data.type,
      }).then(res => {
        if (res.code === 200) {
          this.$Message.success('网站开通成功')
          this.getList()
          this.isadd = false
        } else {
          this.$Message.error(res.msg)
        }
      })
    },
  },
  props: ['data']
}
</script>
<style lang="scss" scoped>
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