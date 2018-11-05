<template>
    <div class="navbar">
        <div class="inner">
            <router-link class="item" v-for="(v,i) in navs" :key="i" v-html="v.name" :class="[i == navcurr ?'curr':'', i >= 3? 'r':'']" :to="v.url" />
        </div>
    </div>
</template>
<script>
export default {
    name: "NavBar",
    data() {
        return {
            navs: [{
                name: '首页',
                url: '/p/Home',
            }, {
                name: '家族文化',
                url: '/p/Culture',
            }, {
                name: '数字家谱',
                url: '/p/Genealogy',
            }, {
                name: '祖先&名人',
                url: '/p/Human',
            }, {
                name: '各地分支',
                url: '/p/Tree',
            }, {
                name: '记录家族',
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
  width: 100%;
  background-color: $colorp;

  .inner {
    overflow: hidden;
  }
  .item {
    width: 11%;
    float: left;
    width: 12%;
    float: left;
    font-weight: 500;
    line-height: 48px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    &:hover,
    &.curr {
      background: url(../img/navcurr.png) no-repeat center;
    }
  }
}
</style>
