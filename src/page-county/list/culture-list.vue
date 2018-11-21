<template>
    <div class="newslist">
        <Card class="item" v-for="(v,i) in list" :key="i">
            <router-link :to="'/c/Detail?type=culture&id='+v.id">
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
                        <div class="site fl">
                            <iconfont name="locationfill" />
                            <span>湖北省武汉市</span>
                        </div>
                    </div>
                </div>
            </router-link>
        </Card>
        <Page :total="total" @on-change="chgPage" :page-size="8" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [],
            page: 1,
            total: 0,
        }
    },
    watch: {
        url: function (curVal, oldVal) {
            if (curVal != oldVal) {
                this.getList();
            }
        },
    },
    mounted: function () {
        this.getList()
    },
    methods: {
        getList() {
            this.api.get(this.url, {
                pageNo: this.page
            }).then(res => {
                this.list = res.data.records
                this.total = res.data.total
            })
        },
        chgPage(e) {
            this.page = e;
            this.getList();
        },
    },
    props: ['url']
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.newslist {
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
