<template>
    <div class="navbar">
        <div class="inner">
            <router-link to="/c/home" class="item" :class="navcurr == 1 ?'curr':''">首页</router-link>
            <router-link class="item" v-for="(v,i) in navsData" :key="i" v-html="v.menuName" :class="[navcurr == v.fanSysWebMenuId ?'curr':'',navsData.length + 1 == v.fanSysWebMenuId ? 'right':'']" :to="v.menuType" />
        </div>
    </div>
</template>
<script>
export default {
    name: "NavBar",
    computed: {
        navsData() {
            return this.$store.state.navList
        },
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
