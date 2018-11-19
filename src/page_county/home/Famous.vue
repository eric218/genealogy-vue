<template>
    <div class="famous">
        <div class="inner">
            <div class="tabs kt">
                <div class="item curr">会长</div>
                <div class="item">族长</div>
                <div class="item">官员</div>
                <div class="item">企业家</div>
                <div class="item">店主</div>
            </div>
            <div class="card">
                <div class="title">会长</div>
                <div class="top">
                    <div class="img"></div>
                    <div class="obj">
                        <div class="tit">姓名（称谓）</div>
                        <div class="intro">简介简介简介简介简介简介简介简介简介简介简介简介简介简介</div>
                    </div>
                </div>
                <div class="title">副会长</div>
                <div class="items">
                    <div class="item" v-for="(v,i) in 6" :key="i">
                        <div class="img"></div>
                        <div class="obj">
                            <div class="tit">姓名（称谓）</div>
                            <div class="intro">简介简介简介简介简介简介简介简介简介简介简介简介简介简介</div>
                        </div>
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
.famous {
  background: url(../../assets/img/bg01.png) repeat;

  .inner {
    padding: 64px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .tabs {
      width: 20%;
      overflow: hidden;
      text-align: center;
      background: #fff;
      padding: 0;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

      .item {
        margin: 16px auto;
        background: url(../../assets/img/famous-menu.png) no-repeat center /
          100% 100%;
        color: #fff;
        width: 90%;
        height: 64px;
        line-height: 64px;
        font-size: 20px;
        cursor: pointer;

        &.curr,
        &:hover {
          background-image: url(../../assets/img/famous-curr.png);
        }
      }
    }

    .card {
      width: 75%;
      background: #fff;
      height: 540px;
      overflow-y: auto;
      padding: 16px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

      .title {
        background: $color;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 20px;
        border-radius: 8px;
      }

      .top {
        padding: 8px 0;
        overflow: hidden;
        white-space: nowrap;

        .img {
          border-radius: 8px;
          height: 120px;
          width: 120px;
          float: left;
          margin-right: 16px;
          background: whitesmoke no-repeat center / cover;
        }

        .obj {
          overflow: hidden;
          white-space: normal;

          .tit {
            font-size: 20px;
            color: $color;
          }

          .intro {
            color: #999;
            height: 80px;
            line-height: 20px;
          }
        }
      }

      .items {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 8px 0;

        .item {
          width: 48%;
          margin: 4px 0;
          white-space: nowrap;

          .img {
            border-radius: 8px;
            height: 75px;
            width: 75px;
            float: left;
            margin-right: 16px;
            background: whitesmoke no-repeat center / cover;
          }

          .obj {
            overflow: hidden;
            white-space: normal;

            .tit {
              font-size: 16px;
              color: $color;
            }

            .intro {
              color: #999;
              height: 48px;
              line-height: 24px;
            }
          }
        }
      }
    }
  }
}
</style>
