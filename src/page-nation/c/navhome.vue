<template>
    <div class="navbar">
        <div class="inner">
            <router-link class="item" v-for="(v,i) in navs_l" :key="i" :class="[i == navcurr ?'curr':'', i > 3? 'r':'']" :to="v.url">
                <div class="cn">{{v.cn}}</div>
                <div class="en">{{v.en}}</div>
            </router-link>
            <router-link class="item" v-for="(v,i) in navs_r" :key="i" :class="[i == navcurr ?'curr':'', i > 3? 'r':'']" :to="v.url">
                <div class="cn">{{v.cn}}</div>
                <div class="en">{{v.en}}</div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "NavBar",
    data() {
        return {
            navs_l: [{
                cn: '首页',
                en: 'Home',
                url: '/p/Home',
            }, {
                cn: '统谱编修',
                en: 'Spectrum',
                url: '/p/Culture',
            }, {
                cn: '姓氏起源',
                en: 'Origin',
                url: '/p/Genealogy',
            }, {
                cn: '张氏文化',
                en: 'Culture',
                url: '/p/Genealogy',
            }],

            navs_r: [{
                cn: '各地分支',
                en: 'Branches',
                url: '/p/Human',
            }, {
                cn: '寻根问祖',
                en: 'Seeking',
                url: '/p/Human',
            }, {
                cn: '记录家族',
                en: 'Family',
                url: '/p/Human',
            }, {
                cn: '登录/注册',
                en: 'User',
                url: '/p/Record',
            }],
        };
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
  height: 148px;
  background: #fff;

  .inner {
    overflow: hidden;
  }

  .item {
    border-left: 1px solid #ddd;
    height: 128px;
    width: 96px;
    padding: 0 32px;
    float: left;
    line-height: 48px;
    text-align: center;
    font-size: 16px;
    overflow: hidden;
    cursor: pointer;
    .cn {
      float: left;
      padding-top: 32px;
      line-height: 1;
      writing-mode: vertical-lr;
    }
    .en {
      float: right;
      color: #999;
      padding-top: 32px;
      font-size: 12px;
      line-height: 1;
      writing-mode: vertical-lr;
    }
    &.r {
      float: right;
    }
  }
}
</style>
