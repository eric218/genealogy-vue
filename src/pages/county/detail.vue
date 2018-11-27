<template>
    <div class="main">
        <div class="adlinks">
            <img src="./img/detail.jpg" />
        </div>
        <div class="inner">
            <Breadcrumb>
                <BreadcrumbItem to="/">首页</BreadcrumbItem>
                <BreadcrumbItem to="/">分类</BreadcrumbItem>
                <BreadcrumbItem>详情</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="inner">
            <div class="detail" v-if="isload">
                <div class="h">
                    <div class="tit" v-html="info.newsTitle || info.personName"></div>
                    <div class="tag">
                        <div class="item">
                            <span>时间：</span>
                            <span>{{dayjs(info.createTime).format('YYYY年MM月DD日 HH:mm:ss')}}</span>
                        </div>
                        <div class="item" v-if="info.createUserName">
                            <span>作者：</span>
                            <span>{{info.createUserName}}</span>
                        </div>
                        <div class="item" v-if="info.visitNum">
                            <span>浏览：</span>
                            <span>{{info.visitNum}}</span>
                        </div>
                    </div>
                </div>
                <div class="b">
                    <div class="content" v-html="info.newsText || info.personSummary"></div>
                </div>
                <div class="f">
                    <div class="share" v-show="false">
                        <span>分享到：</span>
                        <iconfont name="weibo" />
                    </div>
                    <div class="link">
                        <span>赏</span>
                    </div>
                    <div class="total">
                        <span>收到打赏</span>
                        <span class="num">0</span>
                        <span>次</span>
                    </div>
                </div>
            </div>
            <Spin size="large" fix v-else></Spin>
            <div class="feedback" v-if="1 == 2">
                <div class="h">
                    <div class="img"></div>
                    <div class="obj">
                        <div class="user">
                            <div class="count">0/300</div>
                            <span>张三</span>
                            <iconfont name="crownfill" />
                        </div>
                        <div class="textarea">
                            <textarea name="" id="" rows="4"></textarea>
                        </div>
                    </div>
                </div>
                <div class="b">
                    <div class="item" v-for="v in 5" :key="v">
                        <div class="img"></div>
                        <div class="obj">
                            <div class="user">
                                <span class="name">用户名</span>
                                <iconfont name="crownfill" />
                                <span class="date">昨天</span>
                            </div>
                            <div class="text">描述描述</div>
                            <div class="tag">
                                <div class="itm">
                                    <iconfont name="appreciate_light" />
                                    <span>150</span>
                                </div>
                                <div class="itm">
                                    <iconfont name="footprint" />
                                    <span>199</span>
                                </div>
                                <div class="itm">
                                    <iconfont name="message_light" />
                                    <span>199</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            url: '',
            info: {

            },
            isload: false,
        }
    },
    computed: {
        apiList() {
            return this.$store.state.county.apiList
        },
    },
    mounted: function () {
        this.resetUrl()
        this.getInfo()
        let url = 'https://cdnjs.cloudflare.com/ajax/libs/social-share.js/1.0.16/js/social-share.min.js'
        let script = document.createElement('script')
        script.setAttribute('src', url)
        document.getElementsByTagName('head')[0].appendChild(script)
    },
    methods: {
        resetUrl() {
            this.url = this.api.county.base + this.api.county.detail[this.$route.query.type]
            switch (this.$route.query.type) {
                case 'culture':
                    this.navcurr = 2
                    break;
                case 'charity':
                    this.navcurr = 3
                    break;
                case 'industry':
                    this.navcurr = 4
                    break;
                case 'famous':
                    this.navcurr = 5
                    break;
                case 'family_record':
                    this.navcurr = 6
                    break;
            }
        },
        getInfo() {
            this.api.get(this.url, {
                id: this.$route.query.id
            }).then(res => {
                console.log(res.data)
                this.isload = true
                if (res.code == 200) {
                    this.info = res.data
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.ivu-breadcrumb {
  padding: 8px 16px;
}
.detail {
  background: #fff;
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 32px;
  box-shadow: 0 1px 3px rgba(#000, 0.1);

  .h {
    text-align: center;

    .tit {
      padding: 16px;
      font-size: 24px;
      color: $color;
    }

    .tag {
      .item {
        color: #999;
        display: inline-block;
        padding: 0 16px;
      }
    }
  }

  .b {
    padding: 32px;
    .intro {
      background: whitesmoke;
      padding: 8px 16px;
    }

    .content {
      display: block;
      padding: 32px 0;
      min-height: 450px;

      p {
        margin-bottom: 1em;
      }
      iframe{
          width: 100%;
          height: auto;
      }
    }
  }

  .f {
    position: relative;
    text-align: center;

    .share {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      line-height: 64px;

      i {
        font-size: 24px;
      }
    }

    .link {
      span {
        display: inline-block;
        height: 64px;
        width: 64px;
        line-height: 64px;
        font-size: 32px;
        color: #fff;
        background: $color;
        border-radius: 50%;
      }
    }

    .total {
      color: #999;
      line-height: 64px;

      .num {
        margin: 0 8px;
        color: $color;
      }
    }
  }
}

.feedback {
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 32px;

  .h {
    white-space: nowrap;
    overflow: hidden;

    .img {
      margin-right: 16px;
      float: left;
      height: 64px;
      width: 64px;
      background: whitesmoke no-repeat center / cover;
      border-radius: 50%;
    }

    .obj {
      overflow: hidden;

      .user {
        line-height: 40px;

        span {
          margin-right: 16px;
        }

        i {
          color: orange;
        }

        .count {
          float: right;
          color: #999;
          font-size: 12px;
        }
      }

      .textarea {
        textarea {
          border: 1px solid #ddd;
          width: 100%;
          border-radius: 8px;
        }
      }
    }
  }

  .b {
    overflow: hidden;
    padding: 16px;

    .item {
      border-bottom: 1px solid #eee;
      overflow: hidden;
      white-space: nowrap;
      padding: 8px 16px;

      .img {
        margin-right: 16px;
        float: left;
        height: 64px;
        width: 64px;
        background: whitesmoke no-repeat center / cover;
        border-radius: 50%;
      }

      .obj {
        overflow: hidden;

        .user {
          line-height: 32px;

          .name {
            color: $color;
          }

          i {
            margin: 8px;
            color: orange;
          }

          .date {
            color: #999;
          }
        }

        .text {
          white-space: normal;
        }

        .tag {
          color: #999;

          .itm {
            margin-right: 16px;
            display: inline-block;
          }
        }
      }
    }
  }
}
</style>
