<template>
    <div class="page">
        <Topbar />
        <NavBar :navcurr="5" />
        <div class="main">
            <div class="inner">
                <div class="sia">
                    <div class="h kt">
                        <div class="tit">家族动态</div>
                    </div>
                    <div class="b">
                        <div class="item curr">家族头条</div>
                        <div class="item">省级公告</div>
                        <div class="item">家族动态</div>
                    </div>
                    <div class="f">
                        <Row :gutter="32">
                            <i-col :span="12" v-for="v in 4" :key="v">
                                <div class="item">
                                    <div class="img"></div>
                                    <div class="obj">
                                        <div class="tit">标题</div>
                                        <div class="intro">简介</div>
                                    </div>
                                </div>
                            </i-col>
                        </Row>
                    </div>
                </div>
                <div class="sib">
                    <div class="h">
                        <div class="item curr">最新图片</div>
                        <div class="item">最新视频</div>
                    </div>
                    <div class="b">
                    </div>
                </div>
            </div>
        </div>
        <FootBar />
    </div>
</template>
<script>
import { Topbar, NavBar, Banner, FootBar } from './c'
export default {
    name: "Home",
    components: {
        Topbar,
        NavBar,
        Banner,
        FootBar,
    },
    data() {
        return {
        };
    },
    computed: {
    },
    mounted: function () {
    },
    methods: {
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.sia {
  padding: 16px 0;
  .h {
    height: 48px;
    line-height: 48px;
    padding-left: 32px;
    background: url("./img/title-dot.png") no-repeat left center;
    font-size: 20px;
  }
  .b {
    overflow: hidden;
    border-bottom: 1px solid #ddd;
    .item {
      float: left;
      width: 120px;
      line-height: 32px;
      text-align: center;
      cursor: pointer;
      &.curr,
      &:hover {
        background: $colorp;
        color: #fff;
      }
    }
  }
  .f {
    .item {
      overflow: hidden;
      padding: 8px 0;
      white-space: nowrap;
      .img {
        width: 120px;
        height: 90px;
        float: left;
        margin-right: 16px;
        background: whitesmoke no-repeat center / cover;
      }
      .obj {
        overflow: hidden;
        height: 90px;
        .tit {
          font-size: 16px;
        }
        .intro {
          white-space: normal;
          color: #999;
        }
      }
    }
  }
}
.sib {
  padding: 32px 0;
  .h {
    overflow: hidden;
    border-bottom: 1px solid #ddd;
    .item {
      float: left;
      width: 120px;
      line-height: 32px;
      text-align: center;
      cursor: pointer;
      &.curr,
      &:hover {
        background: $colorp;
        color: #fff;
      }
    }
  }
}
</style>
