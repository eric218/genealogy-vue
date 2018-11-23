<template>
    <div class="navbar" style="margin-top:32px;">
        <router-link :to="v.url" class="item" v-for="(v,i) in menus" :key="i" :class="navcurr == i ? 'curr':''"><span>{{v.name}}</span></router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            navcurr: '',
            menus: [{
                url: 'user',
                name: '个人主页',
            }, {
                url: 'family',
                name: '我的族谱',
            }, {
                url: 'donate',
                name: '捐款记录',
            }],
        };
    },
    mounted: function () {
        this.navcurr = this.$route.name
    },
    methods: {
        jumpurl(e) {
            this.navcurr = e
            this.$router.push(e)
        }
    },
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
