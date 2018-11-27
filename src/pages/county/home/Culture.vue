<template>
    <div class="list">
        <div class="inner">
            <div class="h">
                <div class="cn">家族文化 精神传承</div>
                <Divider class="en">Infomation</Divider>
            </div>
            <div class="b">
                <Row :gutter="32">
                    <i-col :span="12" v-for="v in list" :key="v.id" class="item">
                        <router-link :to="'/c/detail?type=culture&id='+v.id">
                            <div class="img" :style="v.fanNewsUploadFileList.length? api.imgBG(v.fanNewsUploadFileList[0].filePath):''" />
                            <div class="obj">
                                <div class="tit">{{v.newsTitle}}</div>
                                <div class="intro">{{v.newsText}}</div>
                                <div class="more"><span>查看</span></div>
                            </div>
                        </router-link>
                    </i-col>
                </Row>
            </div>
            <Page :total="total" @on-change="chgPage" :page-size="pageSize" />
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