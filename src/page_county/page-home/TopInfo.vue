<template>
    <div class="topinfo">
        <div class="inner">
            <div class="left-card card">
                <div class="info">
                    <div class="swiper-container">
                        <div class="swiper-wrapper" v-if="index_fan_summary">
                            <div class="swiper-slide" v-for="v in index_fan_summary.records" :key="v.id">
                                <div class="img"></div>
                                <div class="obj">
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
                                            <div class="value">1</div>
                                        </div>
                                        <div class="item">
                                            <div class="label">本族男丁：</div>
                                            <div class="value">1</div>
                                        </div>
                                        <div class="item">
                                            <div class="label">本族女丁：</div>
                                            <div class="value">0</div>
                                        </div>
                                        <div class="item">
                                            <div class="label">最大年龄：</div>
                                            <div class="value">30</div>
                                        </div>
                                        <div class="item">
                                            <div class="label">最小年龄：</div>
                                            <div class="value">30</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>
            <div class="right-card card">
                <div class="info">
                    <div class="h">
                        <div class="tit">
                            <img src="@/assets/img/gongdejuankuan.png">
                        </div>
                        <div class="act" @click="handleTopay = true">
                            <img src="@/assets/img/icon-help.png" /></div>
                    </div>
                    <div class="b">
                        <span>公益基金：</span>
                        <span class="num">{{index_fund_1 ? index_fund_1.remain : '0'}}</span>
                        <span>元</span>
                    </div>
                    <div class="f">
                        <div class="item" v-for="v in index_architecture_pay_in_person_1" :key="v.id"></div>
                        <router-link class="item more" to="/Charity">···</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="inner">
            <div class="about">
                <div class="h"></div>
                <div class="tag">简介</div>
                <div class="b">{{index_summary ? index_summary.description:''}}</div>
                <div class="f">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(v,i) in zipai_list" :key="i">
                                <div class="tit">张氏本支字派：</div>
                                <router-link to="/c/Culture" class="more">更多>></router-link>
                                <div class="list">
                                    <div class="item" v-for="(itm,idx) in v" :key="idx">
                                        <div class="red sub">{{itm[0]}}</div>
                                        <div class="blue sub">{{itm[1]}}</div>
                                        <span>{{itm[2]}}</span>
                                    </div>
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
import Swiper from 'swiper';
import topay from '@/components/post/topay.vue'
export default {
    name: "TopInfo",
    components: {
        topay,
    },
    computed: {
        index_summary() {
            return this.$store.state.homeData.index_summary
        },
        index_fund_1() {
            return this.$store.state.homeData.index_fund_1
        },
        index_fan_summary() {
            return this.$store.state.homeData.index_fan_summary
        },
        index_architecture_pay_in_person_1() {
            return this.$store.state.homeData.index_architecture_pay_in_person_1
        },
        index_zipai() {
            return this.$store.state.homeData.index_zipai
        },
        zipai_list() {
            let list = this.index_zipai ? this.index_zipai.split(',') : [];
            let obj = [];
            if (list.length) {
                obj = list.map(v => {
                    let _obj = v ? v.split(';') : [];
                    return _obj.map(_v => {
                        return _v.split('|')
                    })
                })
            }
            return obj;
        }
    },
    data() {
        return {
            handleTopay: false,
        }
    },
    mounted: function () {
        new Swiper('.topinfo .card .info .swiper-container', {
            loop: 'auto',
            autoplay: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        new Swiper('.topinfo .about .swiper-container', {
            loop: 'auto',
            autoplay: true,
            direction: 'vertical',
        });
    },
    methods: {
    },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.topinfo {
  background: url("../../assets/img/home_bg.png") no-repeat center;

  .inner {
    position: relative;
    overflow: hidden;
    padding: 32px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .card {
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }

  .left-card {
    float: left;
    width: 720px;

    .info {
      position: relative;
      padding: 20px;
      white-space: nowrap;
      overflow: hidden;

      .img {
        color: #fff;
        background: url(../../assets/img/home_title_a.png) no-repeat center /
          contain;
        float: left;
        text-align: center;
        white-space: normal;
        height: 160px;
        width: 80px;
        margin-right: 24px;
      }

      .obj {
        overflow: hidden;
        position: relative;

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
  }

  .right-card {
    width: 360px;

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

        .act {
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
        padding: 16px 32px;
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

  .about {
    display: block;
    width: 100%;
    text-align: center;

    .h {
      background: url(../../assets/img/title10.png) no-repeat center / auto 24px;
      height: 48px;
    }

    .b {
      font-size: 16px;
      padding: 16px 32px;
    }

    .f {
      background: #fff;
      line-height: 48px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      padding: 16px;
      overflow: hidden;
      white-space: nowrap;
      height: 80px;

      .tit {
        font-size: 24px;
        color: $color;
        font-weight: 700;
        float: left;
      }

      .list {
        overflow: hidden;
        text-align: center;
        height: 48px;

        .item {
          position: relative;
          float: left;
          margin-left: 16px;
          width: 48px;
          height: 48px;
          font-size: 16px;
          font-weight: 700;
          background: url(../../assets/img/icon-fontbg.png) no-repeat center /
            100% 100%;
          .sub {
            font-size: 10px;
            line-height: 20px;
          }

          .red {
            position: absolute;
            right: 85%;
            top: 4px;
            color: $color;
          }

          .blue {
            position: absolute;
            right: 85%;
            bottom: 4px;
            color: blue;
          }
        }
      }

      .more {
        display: block;
        color: $color;
        float: right;
      }
    }
  }
}
</style>
