<template>
    <div class="news">
        <div class="inner">
            <div class="tabs kt">
                <span class="tit">资讯</span>
                <span class="menu curr">家族文化</span>
            </div>
            <Row class="items" :gutter="32" v-if="index_family_culture">
                <i-col :span="12" v-for="v in index_family_culture.records" :key="v.id">
                    <Card class="item">
                        <router-link :to="'/c/detail?id='+v.id">
                            <div class="img" :style="v.fanNewsUploadFileList.length? api.imgBG(v.fanNewsUploadFileList[0].filePath):''" />
                            <div class="obj">
                                <div class="tit">{{v.newsTitle}}</div>
                                <div class="intro">{{v.newsText}}</div>
                                <div class="more">查看详情>></div>
                            </div>
                        </router-link>
                    </Card>
                </i-col>
            </Row>
            <div class="pages">
                <Page :total="index_family_culture ? index_family_culture.total :0" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pagecurr: 1,
        }
    },
    computed: {
        index_family_culture() {
            return this.$store.state.homeData.index_family_culture
        },
    },
    mounted: function () {
    },
    methods: {
    },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.news {
  .items {
    .item {
      background: #ece9e9;
      display: block;
      white-space: nowrap;
      margin-bottom: 16px;
      a{
          display: block;
      }
      .img {
        width: 96px;
        height: 96px;
        margin-right: 16px;
        float: left;
        background: white;
      }

      .obj {
        overflow: hidden;
        height: 96px;

        .tit {
          font-size: 16px;
          color: $color;
          line-height: 24px;
        }

        .intro {
          color: #999;
          white-space: normal;
          height: 48px;
          overflow: hidden;
          line-height: 24px;
        }

        .more {
          color: $color;
        }
      }
    }
  }
}
</style>
