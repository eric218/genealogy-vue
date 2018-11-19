<template>
    <div class="navbar">
        <div class="inner">
            <router-link to="/c/home" class="item" :class="navcurr == 1 ?'curr':''">首页</router-link>
            <router-link class="item" v-for="(v,i) in navsData" :key="i" v-html="v.menuName" :class="[navcurr == v.fanSysWebMenuId ? 'curr': '', navsData.length + 1 == v.fanSysWebMenuId ? 'right':'']" :to="v.menuType" v-if="v.menuType" />
        </div>
    </div>
</template>
<script>
export default {
    name: "NavBar",
    data() {
        return {
            navsData: []
        }
    },
    computed: {
    },
    mounted: function () {
        this.getNav()
    },
    methods: {
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
            type: Number,
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
