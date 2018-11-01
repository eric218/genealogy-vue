<template>
    <div class="zipai">
        <div class="item">
            <div class="tit">
                <span>地域：</span>
                <span>祖先：</span>
            </div>
            <div class="intro">
                <div class="itm" v-for="v in 10" :key="v">
                    <div class="txt">离</div>
                    <div class="up">150</div>
                    <div class="down">31</div>
                </div>
            </div>
            <div class="tag">
                <div class="fl">
                    <iconfont name="formfill" />
                    <span>150</span>
                </div>
                <div class="fl">
                    <iconfont name="picfill" />
                    <span>150</span>
                </div>
                <div class="fl">
                    <iconfont name="video_fill_light" />
                    <span>150</span>
                </div>
                <div class="fl">
                    <iconfont name="communityfill" />
                    <span>150</span>
                </div>
            </div>
        </div>
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
.zipai {
  padding: 16px 0;
  .item {
    white-space: nowrap;
    margin: 16px 0;
    background: #ece9e9;
    .intro {
      overflow: hidden;
      white-space: normal;
      .itm {
        position: relative;
        width: 5%;
        float: left;
        text-align: center;
        .up {
          position: absolute;
          font-size: 10px;
          top: 0;
          left: 0;
        }
        .down {
          font-size: 10px;
          bottom: 0;
          left: 0;
          position: absolute;
        }
        .txt {
          height: 48px;
          width: 48px;
          margin: 0 auto;
          line-height: 40px;
        }
      }
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
</style>
