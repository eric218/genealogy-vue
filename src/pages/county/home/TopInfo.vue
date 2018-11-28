<template>
  <div class="topinfo">
    <div class="inner">
      <div class="card left-card">
        <div class="h">
          <span class="cn">联谊会概况</span>
          <span class="en">survey of sorority</span>
        </div>
        <div class="b">
          <Carousel
            loop
            v-model="summary"
          >
            <CarouselItem
              v-for="(v,i) in index_fan_summary"
              :key="i"
              class="obj"
            >
              <div class="intro">
                <div>堂：{{v.rootGroup}}</div>
                <div>始迁祖：{{v.rootPerson}}</div>
                <div>负责人：{{v.leader}}：{{v.leaderPhone}}</div>
                <div class="mobai">
                  <span>膜拜：</span><span class="num">+{{v.worshipNum}}</span>
                </div>
                <div class="zan">
                  <iconfont name="appreciatefill" />
                  <span>+{{v.praiseNum}}</span>
                </div>
              </div>
              <div class="total">
                <div class="item">
                  <div class="label">总谱人数：</div>
                  <div class="value">-</div>
                </div>
                <div class="item">
                  <div class="label">本族男丁：</div>
                  <div class="value">-</div>
                </div>
                <div class="item">
                  <div class="label">本族女丁：</div>
                  <div class="value">-</div>
                </div>
                <div class="item">
                  <div class="label">最大年龄：</div>
                  <div class="value">-</div>
                </div>
                <div class="item">
                  <div class="label">最小年龄：</div>
                  <div class="value">-</div>
                </div>
              </div>
            </CarouselItem>
          </Carousel>
        </div>
      </div>
      <div class="right-card card">
        <div class="info">
          <div class="h">
            <div class="tit">
              <img src="@/assets/img/gongdejuankuan.png">
            </div>
            <div
              class="link"
              @click="handleTopay = true"
            >
              <img src="../img/topay.png" /></div>
          </div>
          <div class="b">
            <span>公益基金：</span>
            <span
              class="num"
              v-text="index_fund_1.remain"
            ></span>
            <span>元</span>
          </div>
          <div
            class="f"
            v-if="index_architecture_pay_in_person_1"
          >
            <div
              class="item"
              v-for="(v,i) in index_architecture_pay_in_person_1.records"
              :key="i"
              :style="api.imgBG(v.allUserLogin.picSrc)"
            ></div>
            <router-link
              class="item more"
              to="/c/charity_home"
            >···</router-link>
          </div>
        </div>
      </div>
    </div>
    <Modal
      v-model="handleTopay"
      width="480px"
      :footer-hide="true"
      class="g-pay"
    >
      <topay />
    </Modal>
  </div>
</template>
<script>
import topay from '_c/common/topay.vue'
export default {
  name: "TopInfo",
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
      summary: 0,
      index_fan_summary: [],
      index_fund_1: {},
      index_architecture_pay_in_person_1: {},
      handleTopay: false,
    }
  },
  mounted: function () {
    this.get_index_fan_summary()
    this.get_index_fund()
    this.get_index_architecture_pay_in_person_1()
  },
  methods: {
    get_index_fan_summary() {
      this.api.get(this.api.county.base + this.apiList.index_fan_summary.apiUrl, {}).then(res => {
        if (res.code == 200) {
          this.index_fan_summary = res.data.records
        }
      })
    },
    get_index_fund() {
      this.api.get(this.api.county.base + this.apiList.index_fund_1.apiUrl, {}).then(res => {
        if (res.code == 200) {
          this.index_fund_1 = res.data
        }
      })
    },
    get_index_architecture_pay_in_person_1() {
      this.api.get(this.api.county.base + this.apiList.index_architecture_pay_in_person_1.apiUrl, {}).then(res => {
        if (res.code == 200) {
          this.index_architecture_pay_in_person_1 = res.data
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.topinfo {
  .inner {
    position: relative;
    overflow: hidden;
    padding: 32px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .left-card {
    float: left;
    width: 50%;
    .h {
      padding: 0 16px;
      line-height: 40px;
      font-size: 16px;
      padding-left: 24px;
      background: no-repeat left center url("../img/titlebar.png") / auto 20px;
      span {
        display: inline-block;
      }
      .en {
        font-size: 14px;
        color: #999;
        margin-left: 16px;
      }
    }
    .b {
      border-right: 1px solid #ccc;
    }
    .obj {
      position: relative;
      padding: 16px 16px 48px;
      white-space: nowrap;
      background: #fff;
      overflow: hidden;
      .intro {
        float: left;
        line-height: 32px;

        .mobai {
          float: left;
          margin-right: 16px;

          .num {
            padding: 4px 8px;
            border-radius: 4px;
            background: $color;
            color: #fff;
          }
        }

        .zan {
          i {
            font-size: 16px;
            color: $color;
          }
        }
      }

      .total {
        float: right;

        .item {
          line-height: 26px;
          overflow: hidden;
          white-space: nowrap;

          .label {
            float: left;
            width: 80px;
            color: $color;
          }

          .value {
            overflow: hidden;
            color: #2876f4;
            width: 120px;
          }
        }
      }
    }
  }

  .right-card {
    width: 48%;
    display: flex;
    justify-content: center;

    .info {
      .h {
        padding: 16px;
        text-align: center;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .tit {
          padding: 12px;

          img {
            height: 24px;
          }
        }

        .link {
          float: right;

          img {
            height: 48px;
            width: 48px;
          }
        }
      }

      .b {
        overflow: hidden;
        text-align: center;
        line-height: 48px;

        span {
          font-size: 16px;

          &.num {
            font-size: 32px;
            color: $color;
            margin: 0 8px;
          }
        }
      }

      .f {
        padding: 16px;
        display: flex;
        flex: 5;
        justify-content: space-between;

        .item {
          background: whitesmoke no-repeat center / cover;
          border-radius: 100%;
          height: 48px;
          width: 48px;
          line-height: 48px;
          font-size: 40px;
          text-align: center;
          color: #fff;

          &.more {
            background: $color;
          }
        }
      }
    }
  }
}
</style>
