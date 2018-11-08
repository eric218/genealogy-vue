<template>
    <div class="gongyi">
        <div class="inner">
            <div class="tabs kt">
                <span class="tit">公益</span>
                <span class="menu" v-for="(v,i) in menu" :key="i" :class="v.id == menucurr.id ? 'curr':''" v-html="v.name" @click="chgMenu(v)"></span>
            </div>
            <div class="cards">
                <div class="left">
                    <div class="grad one">
                        <router-link class="h" to="/Charity">
                            <span class="more">更多</span>
                            <span>支出公开栏</span>
                        </router-link>
                        <div class="b" v-if="leftPayout">
                            <router-link to="/c/Detail" class="item" v-for="v in leftPayout.records" :key="v.id">
                                <div class="date">{{v.createTime}}</div>
                                <div class="tag">【慈善纪要】</div>
                                <div class="tit">{{v.newsTitle}}</div>
                            </router-link>
                        </div>
                    </div>
                    <div class="grad two">
                        <router-link class="h" to="/Charity">
                            <span class="more">更多</span>
                            <span>收益公开栏</span>
                        </router-link>
                        <div class="b" v-if="leftPayin">
                            <router-link to="/c/Detail" class="item" v-for="v in leftPayin.records" :key="v.id">
                                <div class="date">{{v.createTime}}</div>
                                <div class="tag">【慈善纪要】</div>
                                <div class="tit">{{v.newsTitle}}</div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="h">
                        <div class="act" @click="handleTopay = true"></div>
                        <span>公益基金总金额：</span>
                        <span class="num">{{index_fund_2 ? index_fund_2.remain : 0}}</span>
                        <span>元</span>
                    </div>
                    <div class="b" v-if="index_architecture_pay_in_person_2">
                        <div class="item" v-for="v in index_architecture_pay_in_person_2" :key="v.id">
                            <div class="img"></div>
                            <div class="name">{{v.agentAccount}}</div>
                            <div class="txt">
                                <small>捐款</small>
                                <span>{{v.payAmount}}元</span>
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
        <Modal v-model="handleTopay" width="480px" :footer-hide="true" class="g-pay">
            <topay />
        </Modal>
    </div>
</template>
<script>
import topay from '@/components/post/topay.vue'
export default {
    components: {
        topay,
    },
    computed: {
        index_fund_2() {
            return this.$store.state.homeData.index_fund_2
        },
        index_architecture_pay_in_person_2() {
            return this.$store.state.homeData.index_architecture_pay_in_person_2
        },
        leftPayin() {
            return this.$store.state.homeData.index_architecture_pay_in
        },
        leftPayout() {
            return this.$store.state.homeData.index_charity_pay_out
        }
    },
    data() {
        return {
            handleTopay: false,
            menu: [],
            menucurr: {},
        }
    },
    mounted: function () {
        this.getMenu()
    },
    methods: {
        getMenu() {
            this.menu = [{
                id: 1,
                name: '慈善公益',
            }]
            this.menucurr = this.menu[0]
        },
    },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.gongyi {
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .left {
    width: 48%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .one {
      height: 48%;
    }

    .two {
      height: 48%;
    }

    .grad {
      background: #ece9e9;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

      .h {
        display: block;
        margin: 0 8px;
        font-size: 16px;
        line-height: 40px;
        border-bottom: 1px solid $color;

        .more {
          float: right;
          font-size: 14px;
        }
      }

      .b {
        overflow: hidden;
        padding: 8px 0;

        .item {
          padding: 0 8px;
          display: block;
          overflow: hidden;
          font-size: 14px;
          white-space: nowrap;
          line-height: 32px;

          &:hover {
            font-weight: 700;
          }
        }

        .date {
          float: right;
          color: #999;
        }

        .tag {
          float: left;
          color: $color;
        }

        .tit {
          overflow: hidden;
          color: #666;
        }
      }
    }
  }

  .right {
    width: 48%;
    background: #ece9e9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 16px;

    .h {
      line-height: 64px;

      span {
        font-size: 16px;

        &.num {
          font-size: 32px;
          color: $color;
          font-weight: 700;
          margin-right: 8px;
        }
      }

      .act {
        float: right;
        background: url(../../assets/img/icon-help.png) no-repeat center / cover;
        height: 48px;
        width: 48px;
      }
    }

    .b {
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
