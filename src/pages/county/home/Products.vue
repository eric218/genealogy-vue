<template>
    <div class="products">
        <div class="inner">
            <div class="h">
                <div class="cn">家族产业 奋斗的精神</div>
                <Divider class="en">Industry</Divider>
            </div>
            <div class="b">
                <div class="grid">
                    <router-link to="industry_home" class="hd">
                        <span class="more">More</span>
                        <span class="tit kt">公共产业</span>
                    </router-link>
                    <div class="bd" v-if="index_industry_public">
                        <router-link :to="'/c/Detail?type=industry&id='+v.id" class="item" v-for="v in index_industry_public.records" :key="v.id">
                            <div class="img" :style="v.fanNewsUploadFileList.length? api.imgBG(v.fanNewsUploadFileList[0].filePath):''">
                                <div class="tit">{{v.newsTitle}}</div>
                            </div>
                            <div class="site">位于：{{v.industryLocation}}</div>
                            <div class="intro">{{v.newsText}}</div>
                        </router-link>
                    </div>
                </div>
                <div class="grid">
                    <router-link to="industry_home" class="hd">
                        <span class="more">More</span>
                        <span class="tit kt">私人产业</span>
                    </router-link>
                    <div class="bd" v-if="index_industry_person">
                        <router-link :to="'/c/Detail?type=industry&id='+v.id" class="item" v-for="v in index_industry_person.records" :key="v.id">
                            <div class="img" :style="v.fanNewsUploadFileList.length? api.imgBG(v.fanNewsUploadFileList[0].filePath):''">
                                <div class="tit">{{v.newsTitle}}</div>
                            </div>
                            <div class="site">位于：{{v.industryLocation}}</div>
                            <div class="intro">{{v.newsText}}</div>
                        </router-link>
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
            index_industry_person: {},
            index_industry_public: {},
        }
    },
    computed: {
        apiList() {
            return this.$store.state.county.apiList
        },
    },
    mounted: function () {
        this.get_index_industry_public()
        this.get_index_industry_person()
    },
    methods: {
        get_index_industry_public() {
            this.api.get(this.api.county.base + this.apiList.index_industry_public.apiUrl, {
                pageSize: 2,
            }).then(res => {
                if (res.code == 200) {
                    this.index_industry_public = res.data
                }
            })
        },
        get_index_industry_person() {
            this.api.get(this.api.county.base + this.apiList.index_industry_person.apiUrl, {
                pageSize: 2,
            }).then(res => {
                if (res.code == 200) {
                    this.index_industry_person = res.data
                }
            })
        },
    },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.products {
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
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .grid {
    width: 48%;
  }

  .hd {
    font-size: 16px;
    padding: 8px 0;
    display: block;
    line-height: 32px;
    .tit {
      display: inline-block;
      padding: 0 32px;
      background: $color;
      color: #fff;
      border-radius: 16px;
    }
    .more {
      float: right;
      font-weight: 300;
      transition: all 0.3s;
      &:hover {
        transform: translate(-16px);
      }
    }
  }

  .bd {
    .item {
      display: block;
      padding: 8px;

      .img {
        height: 240px;
        position: relative;
        background: whitesmoke no-repeat center / cover;

        .tit {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 100%;
          padding: 0 16px;
          font-size: 16px;
          color: #fff;
          line-height: 40px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.5);
        }
      }
      .site {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 32px;
        color:#333;
      }
      .intro {
        height: 48px;
        line-height: 24px;
        overflow: hidden;
        color: #999;
      }
    }
  }
}
</style>
