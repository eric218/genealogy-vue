<template>
    <div class="im">
        <div class="inner">
            <div class="h">
                <div class="cn">族人实时会话</div>
                <Divider class="en">DYNAMIC</Divider>
            </div>
            <div class="b">
                <div class="tit">
                    <span class="mini">发言人数：</span>
                    <span>{{index_message.total}}</span>
                </div>
                <div class="info">
                    <div class="other item" v-for="v in index_message.records" :key="v.id">
                        <div class="img">
                            <div class="head"></div>
                            <div class="name">{{v.nickname}}</div>
                        </div>
                        <div class="obj">
                            <div class="text">{{v.message}}</div>
                        </div>
                    </div>
                </div>
                <div class="form">
                    <div class="act">发送</div>
                    <div class="ipt">
                        <Input type="text" placeholder="请输入内容" />
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
            index_message: {
                total: 0,
                records: [],
            },
        }
    },
    computed: {
        apiList() {
            return this.$store.state.county.apiList
        },
    },
    mounted: function () {
        this.get_index_message()
    },
    methods: {
        get_index_message() {
            this.api.get(this.api.county.base + this.apiList.index_message.apiUrl, {}).then(res => {
                if (res.code == 200) {
                    this.index_message = res.data
                }
            })
        },
    },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.im {
  padding: 32px 0;
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
  .b {
    position: relative;
    background: no-repeat right center url(../img/imbg.png);
    padding-right: 50%;
    .tit {
      line-height: 40px;
      font-size: 20px;
      border-bottom: 1px solid #ddd;

      .mini {
        font-size: 14px;
      }
    }
    .info {
      height: 340px;
      overflow-y: auto;

      .items {
        overflow: hidden;
      }

      .item {
        display: block;
        padding: 8px;
        overflow: hidden;
        white-space: nowrap;

        .img {
          float: left;
          width: 48px;

          .head {
            height: 48px;
            width: 48px;
            border-radius: 50%;
            background: whitesmoke no-repeat center center;
          }

          .name {
            white-space: nowrap;
            height: 24px;
            line-height: 24px;
            font-size: 12px;
            width: 100%;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }

        .obj {
          overflow: hidden;
          padding: 8px 16px;
          white-space: normal;
          word-break: break-all;

          .text {
            position: relative;
            font-size: 12px;
            float: left;
            background: #ece9e9;
            max-width: 80%;
            padding: 8px;
            border-radius: 2px;
            line-height: 24px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

            &::before {
              content: "";
              position: absolute;
              top: 24px;
              right: 100%;
              margin-top: -8px;
              display: block;
              border: 8px solid transparent;
              border-right-color: #ece9e9;
            }
          }
        }

        &.mine {
          .img {
            float: right;
          }

          .obj {
            .text {
              float: right;
              &::before {
                right: auto;
                left: 100%;
                border-right-color: transparent;
                border-left-color: #ece9e9;
              }
            }
          }
        }
      }
    }

    .form {
      background: #f1f2f3;
      position: relative;
      .ipt {
        input {
          background: transparent;
          height: 32px;
          width: 100%;
          padding: 0 16px;
          margin: 0;
          border: none;
        }
      }

      .act {
        position: absolute;
        z-index: 1;
        cursor: pointer;
        right: 0;
        top: 0;
        background: $color;
        color: #fff;
        padding: 0 16px;
        line-height: 32px;
      }
    }
  }
}
</style>
