<template>
    <router-view />
</template>
<script>
import Vue from 'vue'
import Iconfont from '@/components/common/iconfont.vue'
import None from '@/components/common/None.vue'
Vue.component('Iconfont', Iconfont)
Vue.component('None', None)
export default {
    beforeCreate() {
        this.$store.dispatch('handleNavlist')
    },
}
</script>

<style lang="scss">
@import "@/assets/css/app.scss";
.tabs {
  padding: 8px 16px;
  padding-left: 40px;
  line-height: 48px;
  font-size: 18px;
  background: url(../../assets/img/icon-title-bar.png) no-repeat left center /
    auto 24px;

  .act {
    font-size: 14px;
    float: right;
    color: $color;
  }

  .tit {
    margin-right: 16px;
  }

  .menu {
    cursor: pointer;
    padding: 8px 24px;
    margin: 0 2px;

    &.curr,
    &:hover {
      background: $color;
      color: #fff;
    }
  }
}
</style>
