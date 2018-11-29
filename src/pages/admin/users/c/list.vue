<template>
  <div>
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
      :title="formData.id ? '修改':'添加'"
      width="50%"
      v-model="isedit"
    >
      <Form
        :model="formData"
        :label-width="80"
      >
        <FormItem label="ID">{{formData.id}}</FormItem>
        <FormItem label="userId">{{formData.userId}}</FormItem>
        <FormItem label="注册时间">{{this.dayjs(formData.creatTime).format('YYYY-MM-DD HH:mm:ss')}}</FormItem>
        <FormItem label="手机号">{{formData.mobilePhone}}</FormItem>
        <FormItem label="真实姓名">
          <Input
            v-model="formData.realName"
            placeholder="真实姓名"
            @keyup.enter.native="toSubmit"
          />
        </FormItem>
        <FormItem label="昵称">
          <Input
            v-model="formData.nickName"
            placeholder="昵称"
            @keyup.enter.native="toSubmit"
          />
        </FormItem>
        <FormItem label="头像">
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
                :style="api.imgBG(formData.picSrc)"
                v-if="formData.picSrc"
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
        <FormItem
          label="设为管理员"
          v-if="user.role == 9"
        >
          <Select
            v-model="formData.role"
            style="width:200px;margin-right:16px;"
            @on-change="getSiteInfo"
          >
            <Option
              v-for="v in roleList"
              :value="v.value"
              :key="v.value"
              :disabled="v.disabled"
            >{{ v.label }}</Option>
          </Select>
          <Select
            v-model="formData.siteId"
            style="width:200px;"
            v-if="roleSite.length"
          >
            <Option value="">
              --
            </Option>
            <Option
              v-for="v in roleSite"
              :value="v.id"
              :key="v.id"
              :disabled="false"
            >{{ v.name }}</Option>
          </Select>
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
      formData: {
      },
      roleList: [
        { label: '--', value: 0, disabled: false },
        { label: '县级平台', value: 1, disabled: false },
        { label: '省级平台', value: 2, disabled: false },
        { label: '国级平台', value: 3, disabled: true },
        { label: '总平台', value: 9, disabled: false },
      ],
      roleType: ['', 'fan', 'pro'],
      roleSite: [],
      columns: [
        { title: 'ID', width: 80, key: 'id' },
        { title: '手机号', key: 'mobilePhone' },
        { title: '昵称', key: 'nickName' },
        { title: '注册时间', key: 'datetime' },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            if (this.user.role < 9) {
              return null
            }
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
                  this.toEdit(this.list[params.index].id)
                }
              }
            })
          }
        }
      ],
    }
  },
  props: ['url'],
  watch: {
    url: function (curVal, oldVal) {
      if (curVal != oldVal) {
        this.getList();
      }
    },
  },
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.api.post(this.url, {
        pageNo: this.page
      }).then(res => {
        if (res.code == 200) {
          let list = res.data.records
          list.forEach(v => {
            v.datetime = this.dayjs(v.creatTime).format('YYYY-MM-DD HH:mm:ss')
          })
          this.list = list
          this.total = res.data.total
        } else {
          this.list = []
        }
      })
    },
    chgPage(e) {
      this.page = e
      this.getList()
    },
    toEdit(e) {
      this.roleSite = []
      this.api.post(this.api.admin.base + this.api.admin.users_info, {
        id: e
      }).then(res => {
        if (res.code == 200) {
          this.formData = res.data;
          if (res.data.role && res.data.siteId) {
            this.getSiteInfo(res.data.role)
          }
          this.isedit = true;
        } else {
          this.$Message.error('发生错误')
        }
      })
    },
    getSiteInfo(e) {
      this.roleSite = []
      if (e > 3 && !e) {
        return
      }
      this.api.post(this.api.admin.base + this.api.admin.site_list, {
        siteType: this.roleType[e]
      }).then(res => {
        if (res.code == 200) {
          this.roleSite = res.data
        }
      })
    },
    handleSuccess(res, file) {
      if (res.code == 200) {
        this.formData.picSrc = res.data.file_path
      }
    },
    toSubmit() {
      let data = {
        id: this.formData.id,
        realName: this.formData.realName || '',
        nickName: this.formData.nickName,
        picSrc: this.formData.picSrc,
        role: 0,
        siteId: 0,
      }
      if (this.formData.role) {
        if (this.formData.role < 9 && !this.formData.siteId) {
          this.$Message.error('未选择关联站点')
          return;
        }
        data.role = this.formData.role
        data.siteId = this.formData.siteId
      }
      this.api.post(this.api.admin.base + this.api.admin.users_edit, data).then(res => {
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