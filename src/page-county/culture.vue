<template>
    <div class="page" v-if="$store.state.county.apiList">
        <Topbar />
        <NavBar :navcurr="2" />
        <div class="main">
            <div class="adlinks">
                <img src="./img/culture.jpg" />
            </div>
            <div class="inner">
                <div class="h">
                    <div class="cn">家族文化</div>
                    <Divider class="en">Information</Divider>
                </div>
                <div class="menus">
                    <span class="menu" v-for="(v,i) in menu" :key="i" :class="v.orderIndex == menucurr.orderIndex ? 'curr':''" v-html="v.menuName" @click="chgMenu(i)"></span>
                </div>
                <div class="grid" v-if="menucurr && url">
                    <ZipaiList :url="url" v-if="menucurr.menuType == 'culture_zipai'" />
                    <Culture :url="url" v-else-if="menucurr.menuType == 'culture_news'" />
                </div>
            </div>
        </div>
        <FootBar />
    </div>
</template>
<script>
import { Topbar, NavBar, FootBar } from './c'
import Culture from './list/culture-list.vue';
import ZipaiList from './list/zipai.vue';
export default {
    components: {
        Topbar,
        NavBar,
        FootBar,
        Culture,
        ZipaiList
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
                menuId: 2,
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
