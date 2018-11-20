<template>
    <div class="zipai">
        <div class="item" v-for="v in list" :key="v.id">
            <div class="tit">
                <span v-if="v.ziapiLocation">地域：{{v.ziapiLocation}}</span>
                <span v-if="v.ancestorsName">祖先：{{v.ancestorsName}}</span>
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
                    <span>{{v.visitNum}}</span>
                </div>
            </div>
        </div>
        <Page :total="total" @on-change="chgPage" :page-size="8" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [],
            page: 1,
            total: 0,
        }
    },
    watch: {
        url: function (curVal, oldVal) {
            if (curVal != oldVal) {
                this.getList();
            }
        },
    },
    mounted: function () {
        this.getList()
    },
    methods: {
        getList() {
            this.api.get(this.url, {
                pageNo: this.page
            }).then(res => {
                this.list = res.data.records
                this.total = res.data.total
            })
        },
        chgPage(e) {
            this.page = e;
            this.getList();
        },
        formatZipai(e) {
            let list = e ? e.split(';') : [];
            let obj = [];
            if (list.length) {
                obj = list.map(v => {
                    return v.split('|')
                })
            }
            return obj;
        },
    },
    props: ['url']
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
