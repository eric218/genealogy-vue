<template>
    <div class="sua">
        <div class="bg"></div>
        <div class="card">
            <div class="img"></div>
            <div class="obj">
                <div class="name" @click="isedit = true">
                    <span>张三丰</span>
                    <iconfont name="writefill" />
                </div>
                <div class="info">
                    <div class="item">英文名：hhehe</div>
                    <div class="item">国籍：中国</div>
                    <div class="item">出生地：武汉</div>
                    <div class="item">职业：教师</div>
                </div>
                <div class="tag">
                    <div class="item">
                        <iconfont name="medalfill" />
                        <span>诚信值：100</span>
                    </div>
                    <div class="item">
                        <iconfont name="attentionfavorfill" />
                        <span>关注：100</span>
                    </div>
                    <div class="item">
                        <iconfont name="group_fill" />
                        <span>粉丝：100</span>
                    </div>
                </div>
                <div class="flag">
                    <div class="item">现居：武汉</div>
                    <div class="item">故居：武汉</div>
                    <div class="item">现居古城：江汉</div>
                </div>
                <div class="flag">
                    <div class="item">历代：张氏</div>
                    <div class="item">近世：张氏</div>
                    <div class="item">老派：张氏</div>
                    <div class="item">新派：张氏</div>
                    <div class="item">统派：张氏</div>
                </div>
                <div class="more">
                    <router-link to="/User/Note" class="item">
                        <iconfont name="formfill" />
                        <span>日志</span>
                        <span>150</span>
                    </router-link>
                    <router-link to="/User/Image" class="item">
                        <iconfont name="picfill" />
                        <span>照片</span>
                        <span>150</span>
                    </router-link>
                    <router-link to="/User/Video" class="item">
                        <iconfont name="video_fill_light" />
                        <span>视频</span>
                        <span>150</span>
                    </router-link>
                    <router-link to="/User/Msg" class="item">
                        <iconfont name="communityfill" />
                        <span>说说</span>
                        <span>150</span>
                    </router-link>
                </div>
            </div>
        </div>
        <Modal title="修改资料" v-model="isedit" width="640px" :footer-hide="true">
            <xiugaiziliao />
        </Modal>
    </div>
</template>
<script>
import xiugaiziliao from '@/components/post/xiugaiziliao.vue'
export default {
    components: {
        xiugaiziliao,
    },
    data() {
        return {
            isedit: false,
        };
    },
    mounted: function () {

    },
    methods: {
    }
};
</script>
<style lang="scss">
@import '@/assets/css/var.scss';
.page-user {
  .sua {
    .bg {
      height: 240px;
      background: url(../../assets/jpg/bg-user.png) no-repeat center;
    }

    .card {
      margin-top: -48px;
      padding-bottom: 64px;
      text-align: center;

      .img {
        height: 96px;
        width: 96px;
        background: whitesmoke no-repeat center / cover;
        border-radius: 50%;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        margin-left: auto;
        margin-right: auto;
      }

      .name {
        line-height: 40px;
        font-size: 16px;

        span {
          margin-right: 16px;
          display: inline-block;
        }
      }

      .info {
        .item {
          text-align: center;
          display: inline-block;
          padding: 0 16px;
        }
      }

      .tag {
        margin: 16px auto;

        .item {
          display: inline-block;
          margin: 0 8px;
          border: 1px solid #ddd;
          background: whitesmoke;
          padding: 0 16px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;

          &:hover {
            background: $color;
            color: #fff;
            border-color: $color;
          }
        }
      }

      .flag {
        width: 800px;
        text-align: left;
        line-height: 32px;
        margin: 0 auto;
        overflow: hidden;

        .item {
          width: 20%;
          float: left;
        }
      }

      .more {
        margin: 16px auto;

        .item {
          display: inline-block;
          padding: 0 16px;

          i {
            color: #999;
          }
        }
      }
    }
  }

  .sub {
    padding: 32px 0 0;
    background-color: whitesmoke;

    .inner {
      display: flex;
      justify-content: space-between;
    }

    .grid {
      width: 48%;
      background: #fff;
      height: 400px;

      .h {
        font-size: 16px;
        line-height: 40px;
        padding: 0 16px;

        .tit {
          border-bottom: 1px solid #eee;
          background: url(../../assets/img/icon-title-bar.png) no-repeat left
            center / auto 20px;
          padding-left: 24px;
        }
      }

      .b {
        overflow-y: auto;
        height: 360px;

        .text {
          padding: 16px;
        }

        .item {
          white-space: nowrap;
          overflow: hidden;
          padding: 8px 16px;

          .img {
            width: 64px;
            height: 64px;
            float: left;
            margin-right: 16px;
            background: whitesmoke no-repeat center / cover;
            border-radius: 50%;
          }

          .obj {
            overflow: hidden;

            .name {
              font-size: 16px;
            }

            .intro {
              color: #666;
            }

            .tag {
              overflow: hidden;
              color: #666;

              i {
                color: #999;
                margin-left: 16px;
              }

              .appreciate {
                float: right;
              }

              .mark {
                float: right;
              }
            }
          }
        }
      }
    }
  }

  .suc {
    background: whitesmoke;
    padding: 32px 0;

    & + .suc {
      padding-top: 0;
    }

    .grid {
      background: #fff;
    }

    .h {
      font-size: 16px;
      line-height: 48px;
      padding: 0 16px;

      .tit {
        border-bottom: 1px solid #eee;
        background: url(../../assets/img/icon-title-bar.png) no-repeat left
          center / auto 20px;
        padding-left: 24px;
      }

      .more {
        float: right;
        font-size: 12px;
        cursor: pointer;
        display: block;
        &.act {
          color: $color;
        }
      }
    }

    .b {
      display: flex;
      padding: 16px;
      justify-content: space-between;

      .item {
        width: 19%;

        .img {
          height: 120px;
          width: 100%;
          background: whitesmoke no-repeat center / cover;
        }

        .obj {
          white-space: nowrap;
          line-height: 24px;

          .total {
            float: right;
            color: #999;
            font-size: 12px;
          }

          .tit {
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>
