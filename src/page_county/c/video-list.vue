<template>
    <div>
        <Row :gutter="32" class="videolist">
            <i-col :span="6" v-for="v in data.records" :key="v.id">
                <div class="item">
                    <div class="img" :style="v.fanNewsUploadFile.length ? api.imgBG(v.fanNewsUploadFile[0].filePath) : ''">
                        <img src="@/assets/img/100x100.png" />
                    </div>
                    <div class="obj">
                        <div class="tit">{{v.title}}</div>
                        <div class="user">
                            <div class="head"></div>
                            <div class="name">{{v.auth}}</div>
                        </div>
                        <div class="tag">
                            <div class="date">2018-10-10</div>
                            <div class="total">
                                <iconfont name="recordfill" />
                                <span>0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </i-col>
        </Row>
        <Page :total="data.total" />
    </div>
</template>
<script>
export default {
    props: ['data']
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.videolist {
  overflow: hidden;
  padding: 16px 0;

  .item {
    margin: 8px 0;
    position: relative;
    .img {
      width: 100%;
      background: whitesmoke no-repeat center / cover;
      img {
        width: 100%;
        visibility: hidden;
      }
    }

    .obj {
      .tit {
        font-size: 16px;
        line-height: 40px;
      }

      .user {
        overflow: hidden;
        white-space: nowrap;
        line-height: 32px;

        .head {
          height: 32px;
          width: 32px;
          float: left;
          margin-right: 8px;
          background: whitesmoke;
          border-radius: 50%;
        }
      }

      .tag {
        white-space: nowrap;
        color: #999;

        .date {
          float: right;
        }
      }
    }
  }
}
</style>
