<template>
  <div class="content">
    <div>
      <div class="h">县级联谊会</div>
      <Row
        :gutter="64"
        class="b"
      >
        <i-col
          :span="8"
          v-for="(v,i) in list.county"
          :key="i"
        >
          <div
            class="item"
            @click="link(v,1)"
          >
            <div class="img"></div>
            <div class="name">{{v.name}}</div>
          </div>
        </i-col>
      </Row>
      <div class="h">省级联谊会</div>
      <Row
        :gutter="32"
        class="b"
      >
        <i-col
          :span="6"
          v-for="(v,i) in list.province"
          :key="i"
        >
          <div
            class="item"
            @click="link(v,1)"
          >
            <div class="img"></div>
            <div class="name">{{v.name}}</div>
          </div>
        </i-col>
      </Row>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      list: {
        county: [],
        province: [],
      }
    }
  },
  computed: {
  },
  mounted: function () {
    this.getList()
  },
  methods: {
    getList() {
      this.api.post(this.api.admin.base + this.api.admin.users_sys_site, {
        siteType: 'fan'
      }).then(res => {
        if (res.code == 200) {
          this.list.county = res.data
        }
      })
      this.api.post(this.api.admin.base + this.api.admin.users_sys_site, {
        siteType: 'pro'
      }).then(res => {
        if (res.code == 200) {
          this.list.province = res.data
        }
      })
    },
    link(e, t) {
      this.$store.commit('updateSiteid', e.id);
      setTimeout(() => {
        switch (t) {
          case 1:
            this.$router.push('/c')
            break;
          case 2:
            this.$router.push('/p')
            break;
        }
      }, 3000);
    },
    toHome() {
      if (!this.form.siteid) {
        this.$Modal.warning({
          title: '提示',
          content: '请输入网站id'
        });
        return false;
      }
      this.$router.push('/c');
    },
  }
}
</script>
<style lang="scss" scoped>
.content {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .h {
    font-size: 16px;
    line-height: 1;
    margin: 16px 0;
    padding-left: 16px;
    border-left: 3px solid #ddd;
  }
  .b {
    width: 640px;
    max-width: 90%;
    margin-bottom: 64px;
    .item {
      text-align: center;
      margin-bottom: 16px;
      cursor: pointer;
    }
    .img {
      height: 80px;
      width: 80px;
      background: whitesmoke no-repeat center / cover;
      border-radius: 100%;
      margin: 0 auto;
    }
    .name {
      height: 32px;
      width: 100%;
      line-height: 32px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
