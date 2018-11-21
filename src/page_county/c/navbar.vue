<template>
    <div class="navbar">
        <div class="inner">
            <div class="l">
                <router-link class="item" :class="navcurr == 1?'curr':''" to="home">
                    <div class="cn">首页</div>
                    <div class="en">home</div>
                </router-link>
                <router-link class="item" v-for="(v,i) in navsData" :key="i" :class="v.id == navcurr ?'curr':''" :to="v.menuType" v-if="i < 3">
                    <div class="cn">{{v.menuName}}</div>
                    <div class="en">{{v.menuCode}}</div>
                </router-link>
            </div>
            <div class="c">
                <div class="img">
                    <img src="@/assets/img/logo-white.png" />
                </div>
                <div class="txt kt">{{index_summary.siteName}}</div>
            </div>
            <div class="r">
                <router-link class="item" v-for="(v,i) in navsData" :key="i" :class="v.id == navcurr ?'curr':''" :to="v.menuType || 'home'" v-if="i > 2">
                    <div class="cn">{{v.menuName}}</div>
                    <div class="en">{{v.menuCode}}</div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "NavBar",
    data() {
        return {
            index_summary: {},
            navsData: []
        }
    },
    computed: {
        apiList() {
            return this.$store.state.county.apiList
        }
    },
    mounted: function () {
        this.get_index_summary()
        this.getNav()
    },
    methods: {
        get_index_summary() {
            this.api.get(this.api.county.base + this.apiList.index_summary.apiUrl, {}).then(res => {
                if (res.code == 200) {
                    this.index_summary = res.data
                }
            })
        },
        getNav() {
            this.api.get(this.api.county.base + this.api.county.common_site_menu, {
                siteId: this.$store.state.siteId,
                menuId: 1,
            }).then(res => {
                this.navsData = res.data;
            })
        }
    },
    props: {
        'navcurr': {
            default: 1
        }
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.navbar {
  position: relative;
  margin-top: 32px;
  height: 150px;
  background: #1b1c1d;
  .inner {
    white-space: nowrap;
    position: relative;
  }
  .l {
    float: left;
  }
  .r {
    float: right;
  }
  .c {
    width: 192px;
    height: 180px;
    position: absolute;
    z-index: 99;
    top: 0;
    left: 50%;
    margin-left: -96px;
    background: url(../img/logobg.jpg) no-repeat center / cover;
    text-align: center;
    font-size: 24px;
    line-height: 1.5;
    padding: 16px 0;
    img {
      width: 80px;
    }
    .txt {
      color: #fff;
      font-weight: 700;
    }
  }
  .item {
    border-left: 1px solid #ddd;
    height: 128px;
    width: 123px;
    padding: 0 40px;
    float: left;
    line-height: 48px;
    text-align: center;
    font-size: 16px;
    overflow: hidden;
    cursor: pointer;
    color: #fff;
    .cn {
      float: left;
      padding-top: 32px;
      line-height: 1;
      writing-mode: vertical-lr;
    }
    .en {
      float: right;
      color: #ccc;
      padding-top: 32px;
      font-size: 12px;
      line-height: 1;
      writing-mode: vertical-lr;
      text-transform: capitalize;
    }
    &.curr,
    &:hover {
      background: url(../img/navcurr.png) no-repeat 20% 80%;
    }
  }
}
</style>
