<template>
  <div class="content">
    <div>
      <div class="h">县级联谊会</div>
      <div class="b">
        <div
          class="item"
          @click="link(v,1)"
          v-for="(v,i) in list.county"
          :key="i"
        >
          <div class="img">
            <div
              class="image"
              :style="api.imgBG(v.url)"
            ></div>
          </div>
          <div class="name">{{v.name}}</div>
          <div class="area">{{formatArea(v.regionCode)}} · {{v.familyCode}}</div>
        </div>
      </div>
      <div class="h">省级联谊会</div>
      <div class="b">
        <div
          class="item"
          @click="link(v,2)"
          v-for="(v,i) in list.province"
          :key="i"
        >
          <div class="img">
            <div
              class="image"
              :style="api.imgBG(v.url)"
            ></div>
          </div>
          <div class="name">{{v.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { pca, pcaa } from 'area-data';
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
    formatArea(e) {
      let a = parseInt(Number(e) * 0.0001) * 10000
      let b = parseInt(Number(e) * 0.01) * 100
      let c = Number(e)
      return pca[86][a] + ' · ' + pcaa[b][c]
    },
    link(e, t) {
      this.$store.commit('updateSiteid', e.id);
      switch (t) {
        case 1:
          this.$router.push('/c')
          break;
        case 2:
          this.$Message.warning('即将开放')
          //   this.$router.push('/p')
          break;
      }
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
  background: url("../../assets/img/base.jpg") whitesmoke no-repeat center /
    auto 100%;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 160px;
  overflow-y: auto;
  .h {
    font-size: 16px;
    line-height: 1;
    margin: 16px 0;
    padding-left: 16px;
    border-left: 3px solid #ddd;
  }
  .b {
    width: 960px;
    max-width: 90%;
    margin-bottom: 64px;
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 192px;
      padding: 32px 0;
      text-align: center;
      margin-bottom: 16px;
      cursor: pointer;
    }
    .img {
      position: relative;
      height: 80px;
      width: 80px;
      border-radius: 100%;
      overflow: hidden;
      margin: 0 auto;
      .image {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 80px;
        width: 80px;
        margin-left: -40px;
        margin-top: -40px;
        transform: scale(1);
        background: #fff no-repeat center / cover;
        transition: all 0.3s;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
    .name {
      height: 32px;
      width: 100%;
      font-size: 14px;
      line-height: 32px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .area {
      height: 20px;
      width: 100%;
      line-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
