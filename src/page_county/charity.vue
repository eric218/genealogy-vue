<template>
    <div class="page" v-if="$store.state.county.apiList">
        <Topbar />
        <NavBar :navcurr="3" />
        <div class="main">
            <div class="counts">
                <div class="inner">
                    <div class="l">
                        <div class="h">
                            <span>基金总额：</span>
                            <span class="num">{{index_fund_3.remain}}</span>
                            <span>元</span>
                        </div>
                        <div class="b">
                        </div>
                    </div>
                    <div class="r">
                        <div class="h">
                            <div class="act" @click="handleTopay = true">
                                <img src="@/assets/img/icon-help.png" /></div>
                        </div>
                        <div class="b" v-if="index_architecture_pay_in_person_3.length">
                            <div class="item" v-for="v in index_architecture_pay_in_person_3" :key="v.id">
                                <div class="img"></div>
                                <div class="name">{{v.allUserLogin.userName}}</div>
                                <div class="txt">
                                    <small>捐款</small>
                                    <span>{{v.fanNewsCharityPayIn.payAmount}}元</span>
                                </div>
                                <div class="act" v-if="1==2">
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
                <img src="@/assets/jpg/bg-charity.png" alt="">
            </div>
            <div class="inner">
                <div class="tabs kt">
                    <span class="tit">资讯</span>
                    <span class="menu" v-for="(v,i) in menu" :key="i" :class="v.orderIndex == menucurr.orderIndex ? 'curr':''" v-html="v.menuName" @click="chgMenu(i)"></span>
                </div>
                <div class="in" v-if="menucurr && url.length">
                    <NewsList :url="url" />
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
import NewsList from '@/components/list/news.vue';
import topay from './c/topay.vue'
export default {
    name: "Charity",
    components: {
        Topbar,
        NavBar,
        FootBar,
        NewsList,
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
.counts {
  background: url(../assets/jpg/bg-charity-fill.png) no-repeat center;
  padding: 64px 0;

  .inner {
    display: flex;
    justify-content: space-between;
  }

  .l {
    width: 48%;

    .h {
      line-height: 64px;
      font-size: 24px;

      .num {
        color: $color;
        font-size: 32px;
      }
    }

    .b {
      .item {
        .num {
          color: #2876f4;
        }
      }
    }
  }

  .r {
    width: 48%;

    .h {
      text-align: center;

      .act {
        display: inline-block;
        width: 64px;
        height: 64px;
      }
    }

    .b {
      margin-top: 16px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .item {
        width: 30%;
        background: #fff;
        margin-bottom: 16px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        padding: 8px;
        border-radius: 8px;
        text-align: center;

        .img {
          width: 64px;
          height: 64px;
          background: whitesmoke no-repeat center / cover;
          border-radius: 100%;
          clear: both;
          margin: 0 auto;
        }

        .name {
          font-size: 16px;
        }

        .act {
          overflow: hidden;
          font-size: 12px;

          .zan {
            float: right;
            width: 50%;

            img {
              height: 16px;
              width: 16px;
              margin-right: 4px;
            }
          }

          .flow {
            float: left;
            width: 50%;

            span {
              padding: 4px 8px;
              background: $color;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
