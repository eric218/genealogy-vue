<template>
    <div>
        <Row :gutter="16">
            <i-col :sm="24" :md="12" :lg="8">
                <Card class="userinfo">
                    <div class="h">
                        <Avatar icon="ios-person" size="large" />
                        <div class="name">李四</div>
                        <div class="welcome">欢迎登录炎黄统谱网管理后台!</div>
                        <div class="intro">
                            炎黄统谱网修家谱具有亲缘一目了然、世系查阅快捷、增修纠错方便、添加照片、丰富人生、完善自传、资料永久保存、世代传承、亲情交流边界、智慧相传、子孙世袭等诸多优点。
                        </div>
                    </div>
                    <div class="b">
                        <Row>
                            <i-col :span="8">
                                <div class="num">56</div>
                                <div class="label">家谱</div>
                            </i-col>
                            <i-col :span="8">
                                <div class="num">7312</div>
                                <div class="label">注册宗亲</div>
                            </i-col>
                            <i-col :span="8">
                                <div class="num">512<small>万</small></div>
                                <div class="label">宗亲访问</div>
                            </i-col>
                        </Row>
                    </div>
                </Card>
                <Card class="feeds" style="margin:16px 0;">
                    <p slot="title">留言板<span>155</span>条</p>
                    <a href="#" slot="extra">全部</a>
                    <div class="b">
                        <div class="item" v-for="v in 5" :key="v">
                            <div class="img">
                                <Avatar icon="ios-person" size="large" />
                                <div class="name">用户名</div>
                            </div>
                            <div class="flag" v-if="v==2">已回复</div>
                            <div class="flag" v-else>
                                <Button type="warning" size="small" ghost>回复</Button>
                            </div>
                            <div class="obj">
                                <div class="txt">问题</div>
                                <div class="date">2018-10-10 15:00</div>
                                <div class="reply" title="回复时间：2018-10-10 15:00" v-if="v==2">张三：回复内容</div>
                                <div class="reply" title="回复时间：2018-10-10 15:00" v-if="v==2">张三：回复内容</div>
                            </div>
                        </div>
                    </div>
                </Card>
            </i-col>
            <i-col :sm="24" :md="12" :lg="8">
                <Card>
                    <p slot="title">家族基金余额<span>88000.00</span>元</p>
                    <Button type="warning" slot="extra" size="small" @click="model_deposit = true">提现</Button>
                    <chart-pie style="height: 320px;" :value="pieData" text="基金统计"></chart-pie>
                </Card>
                <Card style="margin:16px 0;">
                    <chart-total style="height:208px;" :value="puTotal" text="上谱统计"></chart-total>
                </Card>
                <Card style="margin:16px 0;">
                    <chart-bar style="height: 300px;" :value="imTotal" text="实时聊天数"></chart-bar>
                </Card>
            </i-col>
            <i-col :sm="24" :md="12" :lg="8">
                <Card class="list palist">
                    <p slot="title">捐款人次<span>151</span>人</p>
                    <Row class="b">
                        <i-col :span="4" v-for="v in 17" :key="v" class="item">
                            <Avatar icon="ios-person" size="large" />
                            <div class="name">姓名</div>
                        </i-col>
                        <i-col :span="4" class="item">
                            <Avatar size="large" style="background:#2d8cf0">MORE</Avatar>
                            <div class="name">更多</div>
                        </i-col>
                    </Row>
                </Card>
                <Card class="list newslist" style="margin:16px 0;">
                    <p slot="title">文章总数<span>151</span>篇</p>
                    <Tag color="warning" slot="extra" size="small">更多</Tag>
                    <div v-for="v in 6" :key="v" class="item">
                        <p>文章标题</p>
                    </div>
                </Card>
                <Card class="list videolist" style="margin:16px 0;">
                    <p slot="title">视频总数<span>151</span>篇</p>
                    <Tag color="warning" slot="extra" size="small">更多</Tag>
                    <Row :gutter="16">
                        <i-col :span="6" v-for="v in 8" :key="v" class="item">
                            <div class="obj">
                                <img src="@/assets/images/img.png" alt="">
                                <div class="bg">
                                    <Icon type="md-arrow-dropright-circle" />
                                </div>
                            </div>
                        </i-col>
                    </Row>
                </Card>
            </i-col>
        </Row>
        <Modal title="申请提现" v-model="model_deposit" width="640px" :footer-hide="true" >
            <ModelDeposit />
        </Modal>
    </div>
</template>
<script>
import { ChartPie, ChartBar, ChartTotal } from '_c/charts'
import ModelDeposit from './coms/deposit'
export default {
    name: 'home',
    components: {
        ChartPie,
        ChartBar,
        ChartTotal,
        ModelDeposit,
    },
    data() {
        return {
            model_deposit:false,
            pieData: [
                { value: 335, name: '个人捐款' },
                { value: 310, name: '企业捐款' },
                { value: 234, name: '产业产出' },
                { value: 335, name: '平台盈利' },
                { value: 150, name: '其它' }
            ],
            imTotal: {
                "0-8": 3253,
                "8-12": 4235,
                "12-18": 6321,
                "18-20": 2340,
                "20-24": 4643
            },
            puTotal: [
                { value: 6353, name: '男' },
                { value: 5461, name: '女' },
            ]
        }
    },
    mounted() {
    }
}
</script>
<style lang="less" scoped>
.userinfo {
  .h {
    text-align: center;
    .name {
      line-height: 2.5;
    }
    .welcome {
      color: #999;
    }
    .intro {
      text-align: left;
      padding: 16px 0;
    }
  }
  .b {
    text-align: center;
    padding-bottom: 32px;
    .num {
      font-size: 32px;
      small {
        font-size: 14px;
      }
    }
    .label {
      position: relative;
      line-height: 2;
      &::before {
        content: "";
        height: 2px;
        width: 32px;
        margin-left: -16px;
        position: absolute;
        top: 120%;
        left: 50%;
        background: #2d8cf0;
      }
    }
  }
  .ivu-avatar-large {
    height: 96px;
    width: 96px;
    line-height: 96px;
    border-radius: 50%;
    &.ivu-avatar-icon {
      font-size: 64px;
    }
    .ivu-icon {
      line-height: 96px;
    }
  }
}
.ivu-card-head {
  p {
    font-weight: 400;
  }
  span {
    font-size: 24px;
    color: #2d8cf0;
    vertical-align: text-bottom;
    margin: 0 8px;
  }
}
.feeds {
  .item {
    padding: 8px 16px;
    border-bottom: 1px solid #eee;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    .img {
      float: left;
      margin-right: 16px;
      text-align: center;
      font-size: 12px;
      .name {
        height: 32px;
        line-height: 32px;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #999;
      }
    }
    .flag {
      position: absolute;
      right: 16px;
      font-size: 12px;
      color: #999;
    }
    .obj {
      overflow: hidden;
      font-size: 12px;
      .txt {
        white-space: normal;
        padding: 8px 0;
      }
      .date {
        color: #999;
      }
      .reply {
        padding: 8px;
        background: whitesmoke;
        border: 1px dashed #ddd;
        border-radius: 4px;
        margin-top: 8px;
      }
    }
  }
}
.list {
  .item {
    margin: 8px 0;
  }
  &.palist {
    .b {
      text-align: center;
    }
    .name {
      color: #999;
      font-size: 12px;
      line-height: 32px;
    }
  }
  &.newslist {
    padding: 0;
    .item {
      margin: 0;
      line-height: 40px;
      & + .item {
        border-top: 1px solid #eee;
      }
    }
  }
  &.videolist {
    padding: 0;
    .item {
      img {
        width: 100%;
        display: block;
      }
      .obj {
        position: relative;
        .bg {
          position: absolute;
          right: 0;
          top: 0;
          width: 100%;
          height: 100%;
          text-align: center;
          opacity: 0;
        }
        i {
          position: absolute;
          top: 50%;
          left: 0;
          color: #fff;
          width: 100%;
          text-align: center;
          font-size: 40px;
          line-height: 40px;
          margin-top: -20px;
        }
      }
      &:hover {
        .bg {
          background: rgba(0, 0, 0, 0.5);
          opacity: 1;
        }
      }
    }
  }
}
</style>
