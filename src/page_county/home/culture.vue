<template>
    <div class="news">
        <div class="inner">
            <div class="tabs kt">
                <span class="tit">资讯</span>
                <span class="menu curr">家族文化</span>
            </div>
            <Row class="items" :gutter="32">
                <i-col :span="12" v-for="v in list" :key="v.id">
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
                <Page :total="total" @on-change="chgPage" :page-size="pageSize" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [],
            total: 0,
            page: 1,
            pageSize: 6,
        }
    },
    computed: {
        url() {
            return this.$store.state.county.apiList.index_family_culture.apiUrl
        },
    },
    mounted: function () {
        this.getInfo();
    },
    methods: {
        getInfo() {
            this.api.get(this.api.county.base + this.url, {
                pageSize: this.pageSize,
                pageNo: this.page
            }).then(res => {
                if (res.code == 200) {
                    this.list = res.data.records
                    this.total = res.data.total
                }
            })
        },
        chgPage(e) {
            this.page = e;
            this.getInfo();
        },
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
      a {
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
