<template>
    <div class="navbar">
        <router-link :to="v.url" class="item" v-for="(v,i) in menus" :key="i" :class="name == i ? 'curr':''"><span>{{v.name}}</span></router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menus: [{
                url: '/User',
                name: '个人主页',
            }, {
                url: '/User/Family',
                name: '我的族谱',
            }, {
                url: '/User/Donate',
                name: '捐款记录',
            }],
        };
    },
    props: ['name']
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.navbar {
  text-align: center;

  .item {
    display: inline-block;
    width: 120px;
    line-height: 48px;

    span {
      display: inline-block;
      border-bottom: 2px solid transparent;
    }

    &.curr {
      span {
        color: $color;
        border-bottom: 2px solid $color;
      }
    }
  }
}
</style>
