<template>
    <div class="navbar">
        <div class="inner">
            <div class="l">
                <router-link class="item" v-for="(v,i) in navs_l" :key="i" :class="v.id == navcurr ?'curr':''" :to="v.url">
                    <div class="cn">{{v.cn}}</div>
                    <div class="en">{{v.en}}</div>
                </router-link>
            </div>
            <div class="c">
                <div class="img">
                    <img src="../img/logo-white.png" />
                </div>
                <div class="txt kt">炎黄张氏</div>
            </div>
            <div class="r">
                <router-link class="item" v-for="(v,i) in navs_r" :key="i" :class="v.id == navcurr ?'curr':''" :to="v.url">
                    <div class="cn">{{v.cn}}</div>
                    <div class="en">{{v.en}}</div>
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
            navs_l: [{
                id: 1,
                cn: '首页',
                en: 'Home',
                url: '/p/Home',
            }, {
                id: 2,
                cn: '统谱编修',
                en: 'Spectrum',
                url: '/p/Culture',
            }, {
                id: 3,
                cn: '姓氏起源',
                en: 'Origin',
                url: '/p/Genealogy',
            }, {
                id: 4,
                cn: '张氏文化',
                en: 'Culture',
                url: '/p/Genealogy',
            }],

            navs_r: [{
                id: 5,
                cn: '各地分支',
                en: 'Branches',
                url: '/p/Human',
            }, {
                id: 6,
                cn: '寻根问祖',
                en: 'Seeking',
                url: '/p/Human',
            }, {
                id: 7,
                cn: '记录家族',
                en: 'Family',
                url: '/p/Human',
            }, {
                id: 8,
                cn: '登录/注册',
                en: 'User',
                url: '/p/Record',
            }],
        };
    },
    props: {
        'navcurr': {
            default: 0
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.navbar {
  position: relative;
  height: 180px;
  background: #fff;

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
    width: 122px;
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
    &.curr,
    &:hover {
      color: $color;
      background: url(../img/navcurr.png) no-repeat 20% 80%;
    }
  }
}
</style>
