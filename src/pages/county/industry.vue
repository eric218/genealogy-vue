<template>
    <div class="page" v-if="$store.state.county.apiList">
        <Topbar />
        <NavBar :navcurr="4" />
        <div class="main">
            <div class="adlinks">
                <img src="./img/industry.jpg" />
            </div>
            <div class="inner">
                <div class="h">
                    <div class="cn">家族产业</div>
                    <Divider class="en">Industry</Divider>
                </div>
                <div class="menus">
                    <span class="menu" v-for="(v,i) in menu" :key="i" :class="v.orderIndex == menucurr.orderIndex ? 'curr':''" v-html="v.menuName" @click="chgMenu(i)"></span>
                </div>
                <div class="grid" style="minHeight:450px;">
                    <Industry :url="url" v-if="menucurr && url.length" />
                </div>
            </div>
        </div>
        <FootBar />
    </div>
</template>

<script>
import { Topbar, NavBar, FootBar } from './c'
import Industry from './list/industry-list.vue';
export default {
    components: {
        Topbar,
        NavBar,
        FootBar,
        Industry,
    },
    data() {
        return {
            menu: [],
            menucurr: {},
            url: '',
        }
    },
    mounted: function () {
        this.getNav()
    },
    methods: {
        getNav() {
            this.api.get(this.api.county.base + this.api.county.common_site_menu, {
                siteId: this.$store.state.siteId,
                menuId: 4,
            }).then(res => {
                if (res.code == 200) {
                    this.menu = res.data
                    this.chgMenu(0)
                }
            })
        },
        chgMenu(e) {
            this.url = ''
            this.menucurr = this.menu[e];
            setTimeout(() => {
                this.url = this.menucurr ? this.api.county.base + this.menucurr.apiUrl : '';
            }, 300);
        },
    },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.h {
  text-align: center;
  padding: 32px 0;
  .cn {
    font-size: 24px;
  }
  .en {
    font-weight: 300;
  }
}
.menus {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 16px;
  .menu {
    padding: 0 16px;
    margin: 0 4px;
    cursor: pointer;
    line-height: 32px;
    &.curr,
    &:hover {
      background: $color;
      color: #fff;
      border-radius: 16px;
    }
  }
}
</style>
