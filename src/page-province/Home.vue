<template>
    <div class="page page-home">
        <Topbar />
        <NavBar :navcurr="0" />
        <Banner />
        <div class="main">
            <div class="inner">
                <div class="sia">
                    <div class="l">
                        <div class="h kt">
                            <router-link to="/More" class="more">查看更多</router-link>
                            <span class="tit">账本公开栏</span>
                        </div>
                        <div class="b">
                            <Card class="item" v-for="v in 4" :key="v">
                                <div class="img"></div>
                                <div class="date">
                                    <div class="day">05/01</div>
                                    <div class="year">2018</div>
                                </div>
                                <div class="obj">
                                    <div class="tit">标题</div>
                                    <div class="txt">描述</div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div class="r">
                        <div class="h kt">
                            <router-link to="/More" class="more">查看更多</router-link>
                            <span class="tit">捐款名人</span>
                        </div>
                        <div class="total">
                            <div class="txt">
                                公益基金总金额：<span>789012.00</span>元
                            </div>
                        </div>
                        <Row class="b" :gutter="16">
                            <i-col :span="8" v-for="v in 6" :key="v">
                                <Card class="item">
                                    <div class="img"></div>
                                    <div class="name">张三</div>
                                    <div class="count">捐款<span>1.00</span>元</div>
                                    <div class="act">
                                        <span>关注</span>
                                        <span>点赞</span>
                                    </div>
                                </Card>
                            </i-col>
                        </Row>
                    </div>
                </div>
            </div>
            <div class="adlinks">
                <img src="@/assets/jpg/adlink.png" alt="">
            </div>
            <div class="inner">
                <div class="sib">
                    <div class="l">
                        <div class="h">
                            <span class="more">更多</span>
                            <span class="tit">家族头条</span>
                        </div>
                        <Card class="b">
                            <div class="img">
                                <div class="tit">标题标题</div>
                            </div>
                        </Card>
                    </div>
                    <div class="r">
                        <div class="h">
                            <div class="tit">省级公告</div>
                        </div>
                        <Card class="b">
                            <div class="headline">
                                <div class="tit">
                                    <span class="flag"></span>
                                    <div class="tit"></div>
                                    <div class="tag"></div>
                                    <div class="txt"></div>
                                </div>
                            </div>
                            <div class="item">

                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
        <FootBar />
    </div>
</template>
<script>
import { Topbar, NavBar, Banner, FootBar } from './c'
export default {
    name: "Home",
    components: {
        Topbar,
        NavBar,
        Banner,
        FootBar,
    },
    data() {
        return {
        };
    },
    computed: {
    },
    mounted: function () {
    },
    methods: {
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.sia {
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
  .r {
    width: 48%;
  }
  .l {
    width: 48%;
    .item {
      margin: 16px 0;
      border-radius: 4px;
      white-space: nowrap;
      overflow: hidden;
      .img {
        height: 64px;
        width: 64px;
        background: whitesmoke;
        float: left;
        margin-right: 16px;
      }
      .date {
        float: right;
        background-color: $colorp;
        color: #fff;
        text-align: center;
        height: 48px;
        width: 48px;
        margin: 8px 0 8px 16px;
        padding: 8px 0;
        line-height: 16px;
        .year {
          font-size: 16px;
        }
      }
      .obj {
        overflow: hidden;
        .tit {
          height: 24px;
          text-overflow: ellipsis;
          overflow: hidden;
          line-height: 24px;
        }
        .txt {
          white-space: normal;
          text-overflow: ellipsis;
          overflow: hidden;
          line-height: 20px;
          height: 40px;
          color: #999;
        }
      }
    }
  }
  .r {
    .total {
      text-align: center;
      font-size: 16px;
      padding-right: 64px;
      background: url(../assets/img/icon-help.png) no-repeat 90% center / auto
        48px;
      span {
        color: $color;
        font-size: 32px;
        font-weight: 700;
        margin-right: 8px;
      }
    }
    .b {
      .item {
        text-align: center;
        margin: 8px 0;
        border-radius: 4px;
        .img {
          margin-left: auto;
          margin-right: auto;
          height: 64px;
          width: 64px;
          clear: both;
          background: whitesmoke no-repeat center / cover;
          border-radius: 50%;
        }
        .count {
          span {
            color: $color;
          }
        }
        .act {
          display: flex;
          justify-content: space-between;
          span {
            padding: 0 8px;
            background: $color;
            color: #fff;
            border-radius: 4px;
          }
        }
      }
    }
  }
  .h {
    height: 48px;
    line-height: 48px;
    padding-left: 32px;
    background: url("./img/title-dot.png") no-repeat left center;
    font-size: 16px;
    .more {
      float: right;
      font-size: 12px;
    }
  }
}

.sib {
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
  .l {
    width: 570px;
    .b {
      .img {
        width: 540px;
        height: 360px;
        position: relative;
        background: whitesmoke no-repeat center;
      }
      .tit {
        position: absolute;
        z-index: 1;
        bottom: 0;
        right: 0;
        width: 100%;
        line-height: 40px;
        height: 40px;
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        padding: 0 16px;
      }
    }
  }
  .r {
    width: 48%;
    .headline {
    }
    .item {
    }
  }
  .h {
    height: 48px;
    line-height: 48px;
    padding-left: 32px;
    background: url("./img/title-dot.png") no-repeat left center;
    font-size: 16px;
    .more {
      float: right;
      font-size: 12px;
    }
  }
}
</style>
