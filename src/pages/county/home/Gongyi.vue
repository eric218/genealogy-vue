<template>
    <div class="gongyi">
        <div class="inner">
            <div class="h">
                <div class="cn">慈善公益 奉献助人</div>
                <Divider class="en">Charitable Publicity</Divider>
            </div>
            <div class="b">
                <div class="grid">
                    <router-link class="hd" to="/c/charity_home">
                        <span class="more">More</span>
                        <span class="tit kt">支出公开栏</span>
                    </router-link>
                    <div class="bd">
                        <router-link :to="'/c/detail?type=charity&id='+v.id" class="item" v-for="v in index_charity_pay_out.records" :key="v.id">
                            <div class="date">
                                <div class="day">{{dayjs(v.createTime).format('DD')}}</div>
                                <div class="year">{{dayjs(v.createTime).format('YYYY-MM')}}</div>
                            </div>
                            <div class="info">
                                <div class="tit">{{v.newsTitle}}</div>
                                <div class="intro">{{v.newsText}}</div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="grid">
                    <router-link class="hd" to="/c/charity_home">
                        <span class="more">More</span>
                        <span class="tit kt">收益公开栏</span>
                    </router-link>
                    <div class="bd">
                        <router-link :to="'/c/detail?type=charity?id='+v.id" class="item" v-for="v in index_architecture_pay_in.records" :key="v.id">
                            <div class="date">
                                <div class="day">{{dayjs(v.createTime).format('DD')}}</div>
                                <div class="year">{{dayjs(v.createTime).format('YYYY-MM')}}</div>
                            </div>
                            <div class="info">
                                <div class="tit">{{v.newsTitle}}</div>
                                <div class="intro">{{v.newsText}}</div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="f" v-if="1==2">
            <div class="hd">
                <div class="link" @click="handleTopay = true"></div>
                <span>公益基金总金额：</span>
                <span class="num">{{index_fund_2 ? index_fund_2.remain : 0}}</span>
                <span>元</span>
            </div>
            <div class="bd" v-if="index_architecture_pay_in_person_2">
                <div class="item" v-for="v in index_architecture_pay_in_person_2" :key="v.id">
                    <div class="img"></div>
                    <div class="name">{{v.allUserLogin ? v.allUserLogin.userName:''}}</div>
                    <div class="txt">
                        <small>捐款</small>
                        <span>{{v.fanNewsCharityPayIn?v.fanNewsCharityPayIn.payAmount:0}}元</span>
                    </div>
                    <div class="link" v-if="1==2">
                        <div class="flow">
                            <span>关注</span>
                        </div>
                        <div class="zan">
                            <Icon type="ios-thumbs-up" color="darkred" />
                            <span>150</span>
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
import topay from '_c/common/topay.vue'
export default {
    components: {
        topay,
    },
    computed: {
        apiList() {
            return this.$store.state.county.apiList
        },
    },
    data() {
        return {
            handleTopay: false,
            index_fund_2: {},
            index_architecture_pay_in_person_2: {},
            index_architecture_pay_in: {},
            index_charity_pay_out: {},
            menu: [],
            menucurr: {},
        }
    },
    mounted: function () {
        this.getMenu()
        this.get_index_fund_2()
        this.get_index_architecture_pay_in_person_2()
        this.get_index_architecture_pay_in()
        this.get_index_charity_pay_out()
    },
    methods: {
        get_index_fund_2() {
            this.api.get(this.api.county.base + this.apiList.index_fund_2.apiUrl, {}).then(res => {
                if (res.code == 200) {
                    this.index_fund_2 = res.data
                }
            })
        },
        get_index_architecture_pay_in_person_2() {
            this.api.get(this.api.county.base + this.apiList.index_architecture_pay_in_person_2.apiUrl, {}).then(res => {
                if (res.code == 200) {
                    this.index_architecture_pay_in_person_2 = res.data
                }
            })
        },
        get_index_architecture_pay_in() {
            this.api.get(this.api.county.base + this.apiList.index_architecture_pay_in.apiUrl, {}).then(res => {
                if (res.code == 200) {
                    this.index_architecture_pay_in = res.data
                }
            })
        },
        get_index_charity_pay_out() {
            this.api.get(this.api.county.base + this.apiList.index_charity_pay_out.apiUrl, {}).then(res => {
                if (res.code == 200) {
                    this.index_charity_pay_out = res.data
                }
            })
        },
        getMenu() {
            this.menu = [{
                id: 1,
                name: '慈善公益',
            }]
            this.menucurr = this.menu[0]
        },
    },
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.gongyi {
  background: url(../img/gongyibg.png) no-repeat top right;
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
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .b {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex: 2;
    .grid {
      width: 48%;
      .hd {
        display: block;
        padding: 8px 0;
        display: block;
        padding-left: 24px;
        line-height: 32px;
        .tit {
          display: inline-block;
          padding: 0 32px;
          background: $color;
          color: #fff;
          border-radius: 16px;
        }
        .more {
          float: right;
          font-size: 12px;
          color: #999;
        }
      }

      .bd {
        overflow: hidden;
        .item {
          padding: 8px;
          display: block;
          overflow: hidden;
          font-size: 14px;
          white-space: nowrap;
          line-height: 32px;
          .date {
            float: left;
            color: #999;
            width: 96px;
            text-align: center;
            margin-right: 16px;
            border-right: 1px solid #ddd;
            .day {
              font-size: 20px;
              line-height: 32px;
            }
            .year {
              line-height: 16px;
              font-size: 12px;
              color: #999;
            }
          }
          .info {
            overflow: hidden;
            .tit {
              overflow: hidden;
              color: #666;
            }
            .intro {
              color: #999;
              font-size: 12px;
              line-height: 24px;
              height: 24px;
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
  }

  .right {
    width: 48%;
    background: #ece9e9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 16px;
    height: 450px;
    .hd {
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

      .link {
        float: right;
        background: url(../img/icon-help.png) no-repeat center / cover;
        height: 48px;
        width: 48px;
      }
    }

    .bd {
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

        .link {
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
