<template>
    <div class="newnews">
        <div class="inner">
            <div class="h">
                <div class="tit"></div>
                <div class="date">2018年8月15日</div>
            </div>
            <div class="b">
                <div class="item" v-for="v in 6" :key="v">
                    <div class="hd">
                        <div class="img"></div>
                        <div class="obj">标题</div>
                    </div>
                    <div class="bd">
                        <div class="intro">描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述 </div>
                        <div class="more">详细>></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.newnews {
  .inner {
    overflow: hidden;
  }

  .h {
    position: relative;
    text-align: center;
    background: url(../../assets/img/icon-title-tip.png) no-repeat bottom center /
      auto 24px;
    padding: 24px 0;

    .tit {
      display: block;
      height: 32px;
      background: url(../../assets/img/home_newnews.png) no-repeat center / auto
        24px;
    }

    .date {
      font-size: 12px;
      line-height: 16px;
    }

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      height: 1px;
      width: 40%;
      background: $color;
    }

    &:before {
      right: 0;
    }
  }

  .b {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .item {
      width: 32%;
      padding: 8px;
      margin: 16px 0;
      background: #ece9e9;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      transition: all 0.2s;

      &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }

      .hd {
        overflow: hidden;
        white-space: nowrap;
      }

      .bd {
        padding: 8px;
        position: relative;
        line-height: 24px;
      }

      .img {
        height: 48px;
        width: 48px;
        float: left;
        margin-right: 16px;
        background: whitesmoke no-repeat center / cover;
      }

      .obj {
        line-height: 48px;
        font-size: 16px;
        color: $color;
      }

      .intro {
        height: 48px;
        color: #999;
      }

      .more {
        position: absolute;
        right: 8px;
        bottom: 8px;
        color: $color;
      }
    }
  }
}
</style>
