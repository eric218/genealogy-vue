<template>
    <div class="navbar">
        <div class="inner">
            <router-link to="/Census" class="item right">统谱编修</router-link>
            <router-link class="item" v-for="(v,i) in navs" :key="i" v-html="v.name" :class="i ==navcurr ?'curr':''" :to="v.url" />
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
                url: '/c/Home',
            }, {
                name: '家族文化',
                url: '/c/Culture',
            }, {
                name: '慈善公益',
                url: '/c/Charity',
            }, {
                name: '家族产业',
                url: '/c/Products',
            }, {
                name: '家族名人',
                url: '/c/Human',
            }, {
                name: '记录家族',
                url: '/c/Dynamic',
            }, {
                name: '祖先分支',
                url: '/c/Ancestors',
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
  background-color: $color;

  .inner {
    overflow: hidden;
  }

  .item {
    width: 11%;
    float: left;
    font-weight: 500;
    line-height: 56px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    cursor: pointer;

    &:hover,
    &.curr {
      background: url(../../assets/img/nav-bg.png) no-repeat center;
      background-size: 100% 105%;
    }

    &.right {
      float: right;
    }
  }
}
</style>
