<template>
    <div class="page" v-if="$store.state.county.apiList">
        <Topbar />
        <NavBar :navcurr="3" />
        <div class="main">
            <div class="counts" v-if="1==2">
                <div class="inner">
                    <div class="l">
                        <div class="hd">
                            <span>基金总额：</span>
                            <span class="num">{{index_fund_3.remain}}</span>
                            <span>元</span>
                        </div>
                        <div class="bd">
                        </div>
                    </div>
                    <div class="r">
                        <div class="hd">
                            <div class="link" @click="handleTopay = true">
                                <img src="@/assets/img/icon-help.png" /></div>
                        </div>
                        <div class="bd" v-if="index_architecture_pay_in_person_3.length">
                            <div class="item" v-for="v in index_architecture_pay_in_person_3" :key="v.id">
                                <div class="img"></div>
                                <div class="name">{{v.allUserLogin.userName}}</div>
                                <div class="txt">
                                    <small>捐款</small>
                                    <span>{{v.fanNewsCharityPayIn.payAmount}}元</span>
                                </div>
                                <div class="link" v-if="1==2">
                                    <div class="flow">
                                        <span>关注</span>
                                    </div>
                                    <div class="zan">
                                        <img src="@/assets/img/icon-zan.png" alt="">
                                        <span>150</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="adlinks">
                <img src="./img/culture.jpg" />
            </div>
            <div class="inner">
                <div class="h">
                    <div class="cn">慈善公益</div>
                    <Divider class="en">Charitable</Divider>
                </div>
                <div class="menus">
                    <span class="menu" v-for="(v,i) in menu" :key="i" :class="v.orderIndex == menucurr.orderIndex ? 'curr':''" v-html="v.menuName" @click="chgMenu(i)"></span>
                </div>
                <div class="grid" style="minHeight:450px;">
                    <CharityList :url="url" v-if="menucurr && url.length" />
                </div>
            </div>
        </div>
        <FootBar />
        <Modal v-model="handleTopay" width="480px" :footer-hide="true" class="g-pay">
            <topay />
        </Modal>
    </div>
</template>
<script>
import { Topbar, NavBar, FootBar } from './c'
import CharityList from './list/charity-list';
import topay from '_c/auth/topay.vue'
export default {
    name: "Charity",
    components: {
        Topbar,
        NavBar,
        FootBar,
        CharityList,
        topay,
    },
    computed: {
        apiList() {
            return this.$store.state.county.apiList
        },
    },
    data() {
        return {
            menu: [],
            menucurr: {},
            url: '',
            handleTopay: false,
            index_architecture_pay_in_person_3: {},
            index_fund_3: {},
        }
    },
    mounted: function () {
        this.getNav()
        this.get_index_architecture_pay_in_person_3()
        this.get_index_fund_3()
    },
    methods: {
        get_index_architecture_pay_in_person_3() {
            this.api.get(this.api.county.base + this.apiList.index_architecture_pay_in_person_3.apiUrl, {}).then(res => {
                if (res.code == 200) {
                    this.index_architecture_pay_in_person_3 = res.data
                }
            })
        },
        get_index_fund_3() {
            this.api.get(this.api.county.base + this.apiList.index_fund_3.apiUrl, {}).then(res => {
                if (res.code == 200) {
                    this.index_fund_3 = res.data
                }
            })
        },
        getNav() {
            this.api.get(this.api.county.base + this.api.county.common_site_menu, {
                siteId: this.$store.state.siteId,
                menuId: 3,
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
