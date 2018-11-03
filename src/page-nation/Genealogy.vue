<template>
    <div class="page">
        <Topbar />
        <NavBar :navcurr="2" />
        <div class="main">
            <div class="inner">
                <div class="sia">
                    <div class="h kt">
                        <div class="tit">数字家谱</div>
                    </div>
                    <div class="b">
                        <div class="item curr">网络家谱</div>
                        <div class="item">电子分谱</div>
                        <div class="item">统谱编修</div>
                    </div>
                    <Genealogy />
                </div>
            </div>
        </div>
        <FootBar />
    </div>
</template>
<script>
import Genealogy from '@/components/list/genealogy.vue';
import { Topbar, NavBar, Banner, FootBar } from './c'
export default {
    name: "Home",
    components: {
        Topbar,
        NavBar,
        FootBar,
        Genealogy,
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
</style>

