<template>
    <div class="page page-charity">
        <Topbar />
        <NavBar :navcurr="3" />
        <div class="main">
            <div class="counts">
                <div class="inner">
                    <div class="l">
                        <div class="h">
                            <span>基金总额：</span>
                            <span class="num">8888.8</span>
                            <span>元</span>
                        </div>
                        <div class="b">
                            <div class="item" v-for="v in 5" :key="v">
                                <span>修缮祠堂使用</span>
                                <span class="num">999</span>
                                <span>元</span>
                            </div>
                        </div>
                    </div>
                    <div class="r">
                        <div class="h">
                            <div class="act" @click="handleTopay = true">
                                <img src="@/assets/img/icon-help.png" /></div>
                        </div>
                        <div class="b">
                            <div class="item" v-for="v in 3" :key="v">
                                <div class="img"></div>
                                <div class="name">姓名</div>
                                <div class="txt">
                                    <small>捐款</small>
                                    <span>8000元</span>
                                </div>
                                <div class="act">
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
                    <span class="menu" v-for="(v,i) in menu" :key="i" :class="v.id == menucurr.id ? 'curr':''" v-html="v.name" @click="chgMenu(v)"></span>
                </div>
                <NewsList />
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
import topay from '@/components/post/topay.vue'
export default {
    name: "Charity",
    components: {
        Topbar,
        NavBar,
        FootBar,
        NewsList,
        topay,
    },
    data() {
        return {
            menu: [],
            menucurr: {},
            handleTopay: false,
        }
    },
    mounted: function () {
        this.getMenu()
    },
    methods: {
        getMenu() {
            this.menu = [{
                id: 1,
                name: '财务支出',
            }, {
                id: 2,
                name: '捐款名录',
            }]
            this.menucurr = this.menu[0]
        },
        getList() {

        },
        chgMenu(e) {
            this.menucurr = e;
            this.getList();
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
