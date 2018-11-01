<template>
    <div class="newslist">
        <Card class="item">
            <router-link to="/c/Detail">
                <div class="img" />
                <div class="obj">
                    <div class="tit" v-html="'标题'"></div>
                    <div class="intro" v-html="'描述'"></div>
                    <div class="tag">
                        <div class="attention fr">
                            <iconfont name="attention" />
                            <span v-html="121"></span>
                        </div>
                        <div class="favor fr">
                            <iconfont name="favorfill" />
                            <span v-html="122"></span>
                        </div>
                        <div class="appreciate fr">
                            <iconfont name="appreciate" />
                            <span v-html="123"></span>
                        </div>
                        <div class="site fl">
                            <iconfont name="locationfill" />
                            <span>湖北省武汉市</span>
                        </div>
                    </div>
                </div>
            </router-link>
        </Card>
        <Card class="item" v-for="(v,i) in list" :key="i">
            <router-link to="/c/Detail">
                <div class="img" :style="api.imgBG(v.pic)" />
                <div class="obj">
                    <div class="tit" v-html="v.title"></div>
                    <div class="intro" v-html="v.summary"></div>
                    <div class="tag">
                        <div class="attention">
                            <iconfont name="attention" />
                            <span v-html="v.like"></span>
                        </div>
                        <div class="favor">
                            <iconfont name="favorfill" />
                            <span v-html="v.focus"></span>
                        </div>
                        <div class="appreciate">
                            <iconfont name="appreciate" />
                            <span v-html="v.collection"></span>
                        </div>
                        <div class="site">
                            <iconfont name="locationfill" />
                            <span>湖北省武汉市</span>
                        </div>
                    </div>
                </div>
            </router-link>
        </Card>
        <Page :total="50" />
    </div>
</template>
<script>
export default {
    props: ['list']
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
        line-height: 24px;
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
