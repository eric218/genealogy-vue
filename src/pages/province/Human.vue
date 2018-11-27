<template>
    <div class="page">
        <Topbar />
        <NavBar :navcurr="3" />
        <div class="main">
            <div class="adlinks">
                <img src="./img/humanbg.png" alt="">
            </div>
            <div class="inner">
                <div class="sia">
                    <div class="h kt">
                        <div class="tit">祖先·名人</div>
                    </div>
                    <div class="b">
                        <div class="item curr">祖先</div>
                        <div class="item">名人</div>
                        <div class="item">精英</div>
                        <div class="item">组织结构</div>
                    </div>
                    <div class="f">
                        <div class="item" v-for="v in 10" :key="v">
                            <div class="img"></div>
                            <div class="obj">张三</div>
                        </div>
                    </div>
                    <Page :total="50" />
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
        }
    },
    computed: {
    },
    mounted: function () {
    },
    methods: {
    }
}
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
    padding: 32px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
    .item {
      margin-bottom: 32px;
      width: 216px;
      background: #fff;
      padding: 16px;
      border-radius: 4px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
      .img {
        width: 184px;
        height: 184px;
        background: rgba(#09c, 0.1) no-repeat center;
      }
    }
  }
}
</style>
