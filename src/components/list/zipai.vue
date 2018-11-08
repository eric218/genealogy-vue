<template>
    <div class="zipai">
        <div class="item" v-for="v in data.records" :key="v.id">
            <div class="tit">
                <span>地域：{{v.ziapiLocation}}</span>
                <span>祖先：{{v.ancestorsName}}</span>
            </div>
            <div class="intro">
                <div class="itm" v-for="(itm,idx) in formatZipai(v.zipaiTxt)" :key="idx">
                    <div class="red tag">{{itm[0]}}</div>
                    <div class="blue tag">{{itm[1]}}</div>
                    <span>{{itm[2]}}</span>
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
        <Page :total="data.total" />
    </div>
</template>
<script>
export default {
    methods: {
        formatZipai(e) {
            let list = e ? e.split(';') : [];
            let obj = [];
            if (list.length) {
                obj = list.map(v => {
                    return v.split('|')
                })
            }
            return obj;
        }
    },
    props: ['data']
};
</script>


<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.zipai {
  padding: 16px 0;
  .item {
    white-space: nowrap;
    margin: 16px 0;
    padding: 16px;
    background: #ece9e9;
    border-radius: 8px;
    .tit {
      span {
        margin-right: 16px;
      }
    }
    .intro {
      overflow: hidden;
      white-space: normal;
      padding: 16px 0;

      .itm {
        position: relative;
        text-align: center;
        float: left;
        margin-left: 16px;
        width: 48px;
        height: 48px;
        font-size: 16px;
        line-height: 48px;
        font-weight: 700;
        background: url(../../assets/img/icon-fontbg.png) no-repeat center /
          100% 100%;

        .tag {
          font-size: 10px;
          line-height: 20px;
        }

        .red {
          position: absolute;
          right: 85%;
          top: 4px;
          color: $color;
        }

        .blue {
          position: absolute;
          right: 85%;
          bottom: 4px;
          color: blue;
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
