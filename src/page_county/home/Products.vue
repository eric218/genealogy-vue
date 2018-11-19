<template>
    <div class="products">
        <div class="inner">
            <div class="tabs kt">
                <span class="tit">产业</span>
                <span class="menu curr">家族产业</span>
            </div>
            <div class="items">
                <div class="grid">
                    <router-link to="/Products" class="hd kt">
                        <span class="more">更多</span>
                        <span>公共产业</span>
                    </router-link>
                    <div class="bd" v-if="index_industry_public">
                        <router-link to="/c/Detail" class="item" v-for="v in index_industry_public.records" :key="v.id">
                            <div class="img" :style="v.fanNewsUploadFileList.length? api.imgBG(v.fanNewsUploadFileList[0].filePath):''">
                                <div class="tit">{{v.newsText}}</div>
                            </div>
                            <div class="flag">
                                <div class="level">
                                    <span>诚信值{{v.visitNum}}</span>
                                </div>
                                <div class="head"></div>
                                <div class="name">{{v.newsTitle}}</div>
                                <div class="tag" v-if="v.status"><img src="@/assets/img/icon-tag.png" alt="">[诚信业主]</div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="grid">
                    <router-link to="/Products" class="hd kt">
                        <span class="more">更多</span>
                        <span>私人产业</span>
                    </router-link>
                    <div class="bd" v-if="index_industry_person">
                        <router-link to="/c/Detail" class="item" v-for="v in index_industry_person.records" :key="v.id">
                            <div class="img" :style="v.fanNewsUploadFileList.length? api.imgBG(v.fanNewsUploadFileList[0].filePath):''">
                                <div class="tit">{{v.newsText}}</div>
                            </div>
                            <div class="flag">
                                <div class="level">
                                    <span>诚信值{{v.visitNum}}</span>
                                </div>
                                <div class="head"></div>
                                <div class="name">{{v.newsTitle}}</div>
                                <div class="tag" v-if="v.status"><img src="@/assets/img/icon-tag.png" alt="">[诚信业主]</div>
                            </div>
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
  padding: 8px 0 32px;

  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .grid {
    width: 48%;
    background: #ece9e9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .hd {
    font-size: 16px;
    margin: 0 8px;
    display: block;
    border-bottom: 1px solid $color;
    line-height: 40px;

    .more {
      float: right;
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

      .flag {
        white-space: nowrap;
        overflow: hidden;
        padding: 8px 0;
        line-height: 48px;

        .head {
          height: 48px;
          width: 48px;
          float: left;
          background: whitesmoke no-repeat center / cover;
          border-radius: 50%;
        }

        .name {
          float: left;
          margin: 0 16px;
        }

        .tag {
          color: $color;
          font-size: 12px;
          float: left;
          font-weight: 700;

          img {
            width: 20px;
            margin-right: 8px;
          }
        }

        .level {
          float: right;

          span {
            background: $color;
            color: #fff;
            padding: 8px 16px;
            border-radius: 4px;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
