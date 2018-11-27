<template>
    <div class="list">
        <div class="inner">
            <div class="h">
                <div class="cn">最新发布</div>
                <Divider class="en">The New Public</Divider>
            </div>
            <div class="b">
                <Row :gutter="32">
                    <i-col :span="12" v-for="v in 6" :key="v">
                        <router-link to="home" class="item">
                            <div class="img">
                            </div>
                            <div class="obj">
                                <div class="tit">标题标题</div>
                                <div class="intro">描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述 </div>
                                <div class="more"><span>查看</span></div>
                            </div>
                        </router-link>
                    </i-col>
                </Row>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.list {
  overflow: hidden;
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
    display: flex;
    height: 420px;
    justify-content: space-between;
    flex-wrap: wrap;
    .item {
      margin: 8px 0;
      display: block;
      overflow: hidden;
      white-space: nowrap;
      .img {
        height: 120px;
        width: 160px;
        float: left;
        margin-right: 16px;
        background: whitesmoke no-repeat center / cover;
      }

      .obj {
        overflow: hidden;
        height: 120px;
        .tit {
          font-size: 16px;
          height: 32px;
          line-height: 32px;
          color: $color;
        }
        .intro {
          white-space: normal;
          color: #999;
          line-height: 24px;
          font-size: 12px;
          height: 48px;
          overflow: hidden;
        }
        .more {
          margin-top: 16px;
          span {
            padding: 4px 32px;
            font-size: 12px;
            border: 1px solid #eee;
            color: #999;
            border-radius: 4px;
            transition: all 0.3s;
          }
        }
      }
      &:hover {
        .more {
          span {
            color: #fff;
            border-color: #fff;
            background: $color;
          }
        }
      }
    }
  }
}
</style>
