<template>
    <div class="famous">
        <div class="inner">
            <Anchor :affix="false" container="#card">
                <AnchorLink :href="'#aaa_'+i" :title="v" v-for="(v,i) in keys" :key="i" />
            </Anchor>
            <div class="card" id="card">
                <div class="row" :id="'aaa_'+i" v-for="(v,i) in list" :key="i">
                    <div class="h kt"><span>{{keys[i]}}</span></div>
                    <div class="b">
                        <div class="item" v-for="itm in index_architecture[keys[i]]" :key="itm.id">
                            <div class="img" :style="itm.picFileSrc? api.imgBG(itm.picFileSrc):''" :alt="itm.personName" />
                            <div class="obj">
                                <div class="tit">{{itm.personName}}</div>
                                <div class="intro">{{itm.personSummary}}</div>
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
    data() {
        return {
            index_architecture: {},
            keys: [],
            list: [],
        }
    },
    computed: {
        apiList() {
            return this.$store.state.county.apiList
        },
    },
    mounted: function () {
        this.get_index_architecture()
    },
    methods: {
        get_index_architecture() {
            this.api.get(this.api.county.base + this.apiList.index_architecture.apiUrl, {}).then(res => {
                if (res.code == 200) {
                    let list = res.data
                    this.index_architecture = list
                    this.keys = Object.keys(list)
                    this.list = Object.values(list)
                    console.log(this.list);
                }
            })
        },
        formatname(e) {
            return JSON.parse(e)
        }
    }
}
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
