<template>
  <div class="newslist">
    <router-link
      :to="'/c/Detail?type=culture&id='+v.id"
      class="item"
      v-for="(v,i) in list"
      :key="i"
    >
      <div
        class="img"
        :style="v.fanNewsUploadFileList.length? api.imgBG(v.fanNewsUploadFileList[0].filePath):''"
      />
      <div class="obj">
        <div class="tit" v-html="v.newsTitle"></div>
        <div class="intro" v-html="v.newsText"></div>
        <div class="tag">
          <div class="attention fr">
            <iconfont name="attention" v-if="v.visitNum"/>
            <span v-html="v.visitNum"></span>
          </div>
          <div class="favor fr" v-if="v.focus">
            <iconfont name="favorfill"/>
            <span v-html="v.focus"></span>
          </div>
          <div class="appreciate fr" v-if="v.like">
            <iconfont name="appreciate"/>
            <span v-html="v.like"></span>
          </div>
        </div>
      </div>
    </router-link>
    <Page :total="total" @on-change="chgPage" :page-size="8" v-if="total"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      page: 1,
      total: 0
    };
  },
  watch: {
    url: function(curVal, oldVal) {
      if (curVal != oldVal) {
        this.getList();
      }
    }
  },
  mounted: function() {
    this.getList();
  },
  methods: {
    getList() {
      this.api
        .get(this.url, {
          pageNo: this.page
        })
        .then(res => {
          if (res.code == 200) {
            this.list = res.data.records;
            this.total = res.data.total;
          }
        });
    },
    chgPage(e) {
      this.page = e;
      this.getList();
    }
  },
  props: ["url"]
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.newslist {
  padding: 16px 0;
  .item {
    white-space: nowrap;
    display: block;
    border-bottom: 1px solid #eee;
    padding: 16px 0;
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
