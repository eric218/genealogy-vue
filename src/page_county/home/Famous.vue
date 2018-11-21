<template>
    <div class="famous">
        <div class="inner">
            <Anchor :affix="false" show-ink container="#card">
                <AnchorLink href="#rongyuhuizhang" title="荣誉会长" />
                <AnchorLink href="#huizhang" title="会长" />
                <AnchorLink href="#zhixinghuizhang" title="执行会长" />
                <AnchorLink href="#fuhuizhang" title="副会长" />
                <AnchorLink href="#qita" title="其它" />
            </Anchor>
            <div class="card" id="card">
                <div class="row" id="rongyuhuizhang">
                    <div class="h kt"><span>荣誉会长</span></div>
                    <div class="b">
                        <div class="item" v-for="(v,i) in 5" :key="i">
                            <div class="img"></div>
                            <div class="obj">
                                <div class="tit">姓名（称谓）</div>
                                <div class="intro">简介简介简介简介简介简介简介简介简介简介简介简介简介简介</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" id="huizhang">
                    <div class="h kt"><span>会长</span></div>
                    <div class="b">
                        <div class="item" v-for="(v,i) in 6" :key="i">
                            <div class="img"></div>
                            <div class="obj">
                                <div class="tit">姓名（称谓）</div>
                                <div class="intro">简介简介简介简介简介简介简介简介简介简介简介简介简介简介</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" id="zhixinghuizhang">
                    <div class="h kt"><span>执行会长</span></div>
                    <div class="b">
                        <div class="item" v-for="(v,i) in 6" :key="i">
                            <div class="img"></div>
                            <div class="obj">
                                <div class="tit">姓名（称谓）</div>
                                <div class="intro">简介简介简介简介简介简介简介简介简介简介简介简介简介简介</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" id="fuhuizhang">
                    <div class="h kt"><span>副会长</span></div>
                    <div class="b">
                        <div class="item" v-for="(v,i) in 6" :key="i">
                            <div class="img"></div>
                            <div class="obj">
                                <div class="tit">姓名（称谓）</div>
                                <div class="intro">简介简介简介简介简介简介简介简介简介简介简介简介简介简介</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" id="qita">
                    <div class="h kt"><span>其它</span></div>
                    <div class="b">
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
    </div>
</template>
<script>
export default {
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.famous {
  background: #f1f2f3;
  .inner {
    padding: 64px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .menus {
      width: 120px;
      overflow: hidden;
      background: #fff;
    }

    .card {
      width: 960px;
      float: right;
      height: 480px;
      overflow-y: auto;
      padding: 0 16px;
      background: #fff;
      .row {
        padding: 16px 0;
      }
      .h {
        padding: 16px 0;
        span {
          display: inline-block;
          background: $color;
          color: #fff;
          line-height: 32px;
          font-size: 16px;
          border-radius: 8px;
          padding: 0 32px;
        }
      }
      .b {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex: 2;
        .item {
          width: 48%;
          margin: 4px 0;
          white-space: nowrap;
          .img {
            border-radius: 8px;
            height: 120px;
            width: 90px;
            float: left;
            margin-right: 16px;
            background: whitesmoke no-repeat center / cover;
          }

          .obj {
            overflow: hidden;
            height: 120px;

            .tit {
              font-size: 14px;
              color: $color;
              overflow: hidden;
              height: 32px;
              text-overflow: ellipsis;
            }

            .intro {
              white-space: normal;
              color: #999;
              height: 72px;
              font-size: 12px;
              line-height: 24px;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
}
</style>
