<template>
    <div class="friends">
        <div class="inner">
            <div class="h">
                <div class="tit"></div>
            </div>
            <div class="b">
                <a href="/" class="item" v-for="v in 32" :key="v">
                    湖北省
                </a>
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
.friends {
  background: #ece9e9;

  .inner {
    overflow: hidden;
  }

  .h {
    position: relative;
    text-align: center;
    background: url(../../assets/img/icon-title-tip.png) no-repeat bottom center / auto
      24px;
    padding: 24px 0;

    .tit {
      display: block;
      height: 32px;
      background: url(../../assets/img/home-friends.png) no-repeat center / auto 24px;
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
    padding: 32px 0;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    margin: 0 -16px;

    .item {
      padding: 0 16px;
      text-align: center;
      background: #333;
      color: #fff;
      margin: 8px 16px;

      &:hover {
        background: $color;
        color: #fff;
      }
    }
  }
}
</style>