<template>
    <div class="humanlist">
        <Card class="item" v-for="(v,i) in data.records" :key="i">
            <router-link to="/c/Detail">
                <div class="img" :style="v.fanNewsUploadFileList.length? api.imgBG(v.fanNewsUploadFileList[0].filePath):''" />
                <div class="obj">
                    <div class="tit" v-html="v.newsTitle"></div>
                    <div class="intro" v-html="v.newsText"></div>
                    <div class="tag">
                        <div class="attention fr">
                            <iconfont name="attention" />
                            <span v-html="v.like"></span>
                        </div>
                        <div class="favor fr">
                            <iconfont name="favorfill" />
                            <span v-html="v.focus"></span>
                        </div>
                        <div class="appreciate fr">
                            <iconfont name="appreciate" />
                            <span v-html="v.visitNum"></span>
                        </div>
                    </div>
                </div>
            </router-link>
        </Card>
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
.humanlist {
  padding: 16px 0;
  .item {
    white-space: nowrap;
    margin: 16px 0;
    background: #ece9e9;
    .img {
      height: 150px;
      width: 200px;
      float: left;
      margin-right: 16px;
      background: whitesmoke no-repeat center / cover;
    }

    .obj {
      height: 150px;
      overflow: hidden;

      .tit {
        color: $color;
        font-size: 16px;
        font-weight: 600;
      }

      .intro {
        white-space: normal;
        width: 80%;
        color: #666;
        height: 72px;
        overflow: hidden;
        line-height: 24px;
        margin-bottom: 16px;
      }

      .tag {
        overflow: hidden;
        color: #999;

        .fl {
          float: left;
          margin-right: 16px;
        }

        .fr {
          float: right;
          margin-left: 16px;
        }
      }
    }
  }
}
</style>
