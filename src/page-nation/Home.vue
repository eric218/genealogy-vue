<template>
    <div class="page">
        <NavHome :navcurr="0" />
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
                            <router-link to="/p/Charity" class="more">查看更多</router-link>
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
                        <Card class="b" dis-hover>
                            <Card class="headline">
                                <div class="tit">
                                    <span class="flag">【置顶公告】</span>
                                    <span>标题</span>
                                </div>
                                <div class="tag">
                                    <iconfont name="newshot" />
                                    <span>2018-10-10</span>
                                    <iconfont name="attention" />
                                    <span>150</span>
                                </div>
                                <div class="txt">描述描述</div>
                            </Card>
                            <Card class="item" v-for="v in 3" :key="v">
                                省级公告标题
                            </Card>
                        </Card>
                    </div>
                </div>
            </div>
            <div class="adlinks">
                <img src="@/assets/jpg/adlinkb.png" alt="">
            </div>
            <div class="inner">
                <Row :gutter="32" class="sic">
                    <i-col :span="12">
                        <div class="h kt">
                            <span class="more">更多</span>
                            <div class="tit">资讯</div>
                        </div>
                        <div class="b">
                            <div class="item curr">联谊会发布</div>
                            <div class="item">个人发布</div>
                        </div>
                        <div class="f">
                            <div class="item" v-for="v in 4" :key="v">
                                <div class="img"></div>
                                <div class="obj">
                                    <div class="tit">标题</div>
                                    <div class="txt">扼要</div>
                                </div>
                            </div>
                        </div>
                    </i-col>
                    <i-col :span="12">
                        <div class="h kt">
                            <span class="more">更多</span>
                            <div class="tit">人物</div>
                        </div>
                        <div class="b">
                            <div class="item curr">家族长老</div>
                            <div class="item">家族栋梁</div>
                        </div>
                        <div class="f">
                            <div class="item" v-for="v in 4" :key="v">
                                <div class="img"></div>
                                <div class="obj">
                                    <div class="tit">标题</div>
                                    <div class="tag">教授</div>
                                    <div class="txt">扼要</div>
                                </div>
                            </div>
                        </div>
                    </i-col>
                </Row>
            </div>
            <div class="adlinks">
                <img src="@/assets/jpg/adlink.png" alt="">
            </div>
            <div class="sid">
                <div class="inner"></div>
            </div>
            <div class="inner">
                <Row :gutter="32" class="sic">
                    <i-col :span="24">
                        <div class="h kt">
                            <span class="more">更多</span>
                            <div class="tit">文化</div>
                        </div>
                        <div class="b">
                            <div class="item curr">文化发布</div>
                            <div class="item">祖先名人</div>
                            <div class="item">字派</div>
                            <div class="item">迁徙之源</div>
                        </div>
                        <div class="f">
                            <Row :gutter="32">
                                <i-col :span="12" v-for="v in 6" :key="v">
                                    <div class="item">
                                        <div class="img"></div>
                                        <div class="obj">
                                            <div class="tit">标题</div>
                                            <div class="txt">扼要</div>
                                        </div>
                                    </div>
                                </i-col>
                            </Row>
                        </div>
                    </i-col>
                </Row>
            </div>
            <div class="sie">
                <div class="inner">
                    <div class="h kt">
                        <span class="more">更多</span>
                        <div class="tit">下级县级官网</div>
                    </div>
                    <div class="b">
                        <div class="item" v-for="v in 12" :key="v">朝阳区</div>
                    </div>
                </div>
            </div>
        </div>
        <FootBar />
    </div>
</template>
<script>
import { TopHome, NavHome, Banner, FootBar } from './c'
export default {
    name: "Home",
    components: {
        TopHome,
        NavHome,
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
          font-size: 12px;
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
    font-size: 20px;
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
        background: #fff no-repeat center;
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
      .tit {
        line-height: 40px;
        font-size: 16px;
        .flag {
          color: $colorp;
          font-size: 20px;
        }
      }
      .tag {
        font-size: 12px;
        color: #999;
        span {
          margin-right: 16px;
        }
      }
      .txt {
        height: 50px;
        line-height: 25px;
        overflow: hidden;
        white-space: normal;
        color: #999;
        display: block;
      }
    }
    .item {
      margin-top: 8px;
    }
  }
  .h {
    height: 48px;
    line-height: 48px;
    padding-left: 32px;
    background: url("./img/title-dot.png") no-repeat left center;
    font-size: 20px;
    .more {
      float: right;
      font-size: 14px;
    }
  }
  .b {
    background-color: whitesmoke;
  }
}

.sic {
  padding: 16px 0;
  .h {
    height: 48px;
    line-height: 48px;
    padding-left: 32px;
    background: url("./img/title-dot.png") no-repeat left center;
    font-size: 20px;
    .more {
      float: right;
      font-size: 14px;
    }
  }
  .b {
    overflow: hidden;
    border-bottom: 1px solid #ddd;
    .item {
      float: left;
      width: 120px;
      line-height: 32px;
      text-align: center;
      cursor: pointer;
      &.curr,
      &:hover {
        background: $colorp;
        color: #fff;
      }
    }
  }
  .f {
    .item {
      padding: 8px 0;
      white-space: nowrap;
      overflow: hidden;
      .img {
        width: 90px;
        height: 90px;
        float: left;
        margin-right: 16px;
        background: whitesmoke no-repeat center / cover;
      }
      .obj {
        overflow: hidden;
        height: 90px;
        .tit {
          line-height: 32px;
          font-size: 16px;
          color: $colorp;
        }
        .txt {
          margin-top: 10px;
          line-height: 16px;
          color: #999;
          white-space: normal;
          height: 80px;
          overflow: hidden;
        }
      }
    }
  }
  .ivu-col:nth-child(2) .f .img {
    width: 120px;
  }
}
.sid {
  background: url(./img/mapbg.jpg) no-repeat center;
  height: 480px;
  .inner {
    overflow: hidden;
  }
}
.sie {
  background: whitesmoke url("./img/linkbot.png") no-repeat center 90% / auto
    40px;
  padding: 32px 0;
  padding-bottom: 48px;
  .h {
    height: 48px;
    line-height: 48px;
    padding-left: 32px;
    background: url("./img/title-dot.png") no-repeat left center;
    font-size: 20px;
    .more {
      float: right;
      font-size: 14px;
    }
  }
  .b {
    display: flex;
    flex-wrap: wrap;
    .item {
      background: url("./img/linkbg.png") no-repeat center / contain;
      height: 60px;
      line-height: 60px;
      color: #fff;
      width: 100px;
      margin: 0 0 16px 16px;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
