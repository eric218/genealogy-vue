<template>
    <div class="list">
        <div class="inner">
            <div class="h">
                <div class="cn">动态新闻</div>
                <Divider class="en">News</Divider>
            </div>
            <div class="b">
                <div class="l" :style="'backgroundImage:url('+imgbg+')'"></div>
                <div class="r">
                    <div class="menus kt">
                        <div class="menu" v-for="(v,i) in menu" :key="i" :class="v.id == menucurr.id ? 'curr':''" v-html="v.name" @click="chgMenu(v)"></div>
                    </div>
                    <div class="card">
                        <div class="items" v-if="menucurr.id == 1 && index_family_record2">
                            <router-link :to="'/c/detail?type=family_record&id='+v.id" class="item" v-for="v in index_family_record2.records" :key="v.id">
                                <div class="obj">
                                    <div class="tit" v-html="v.newsTitle"></div>
                                    <div class="intro" v-html="v.newsText"></div>
                                </div>
                            </router-link>
                        </div>
                        <div class="items" v-if="menucurr.id == 2 && index_family_record1">
                            <router-link :to="'/c/detail?type=family_record&id='+v.id" class="item" v-for="v in index_family_record1.records" :key="v.id">
                                <div class="obj">
                                    <div class="tit" v-html="v.newsTitle"></div>
                                    <div class="intro" v-html="v.newsText"></div>
                                </div>
                            </router-link>
                        </div>
                        <Page :total="index_family_record1.total" @on-change="chgPage1" :page-size="3" v-if="menucurr.id == 2" size="small" />
                        <Page :total="index_family_record2.total" @on-change="chgPage2" :page-size="3" v-else size="small" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import imgbg from '../img/newsex.png';
export default {
    data() {
        return {
            imgbg: imgbg,
            menu: [],
            menucurr: {},
            curr: {
                fanNewsUploadFileList: []
            },
            index_family_record1: {
                total: 0,
                records: [],
            },
            index_family_record2: {
                total: 0,
                records: [],
            },
            page: {
                a: 1,
                b: 1,
            }
        }
    },
    computed: {
        apiList() {
            return this.$store.state.county.apiList
        },
    },
    mounted: function () {
        this.get_index_family_record1()
        this.get_index_family_record2()
        this.getMenu()
    },
    methods: {
        get_index_family_record1() {
            this.api.get(this.api.county.base + this.apiList.index_family_record1.apiUrl, {
                pageNo: this.page.a,
                pageSize: 3
            }).then(res => {
                if (res.code == 200) {
                    this.index_family_record1 = res.data
                    this.curr = this.index_family_record1.records[0]
                    console.log(this.curr);
                }
            })
        },
        get_index_family_record2() {
            this.api.get(this.api.county.base + this.apiList.index_family_record2.apiUrl, {
                pageNo: this.page.b,
                pageSize: 3
            }).then(res => {
                if (res.code == 200) {
                    this.index_family_record2 = res.data
                }
            })
        },
        getMenu() {
            this.menu = [{
                id: 1,
                name: '县级公告',
            }, {
                id: 2,
                name: '家族动态',
            }]
            this.menucurr = this.menu[0]
        },
        chgMenu(e) {
            this.menucurr = e;
        },
        chgPage1(e) {
            this.page.a = e;
            this.get_index_family_record1();
        },
        chgPage2(e) {
            this.page.b = e;
            this.get_index_family_record2();
        },
    },
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.list {
  overflow: hidden;
  padding: 32px 0;
  .h {
    text-align: center;
    padding: 32px 0;
    .cn {
      font-size: 24px;
    }
    .en {
      font-weight: 300;
    }
  }
  .b {
    overflow: hidden;
    white-space: nowrap;
    .l {
      width: 480px;
      height: 360px;
      float: left;
      margin-right: 32px;
      background: #f1f2f3 no-repeat center / cover;
    }
    .r {
      overflow: hidden;
    }
  }
  .items {
    padding: 8px;
    height: 294px;
    overflow: hidden;
    .item {
      display: block;
      overflow: hidden;
      padding: 8px;
      white-space: nowrap;

      .img {
        float: left;
        height: 120px;
        width: 160px;
        background: whitesmoke no-repeat center / cover;
        margin-right: 16px;
      }

      .obj {
        overflow: hidden;
        .tit {
          font-size: 16px;
          line-height: 32px;
          height: 32px;
          text-overflow: ellipsis;
          width: 100%;
          overflow: hidden;
          color: $color;
        }

        .intro {
          white-space: normal;
          height: 48px;
          line-height: 24px;
          overflow: hidden;
          color: #999;
          font-size: 12px;
        }
      }
    }
    .link {
      text-align: center;
      padding: 15px;
    }
  }
}
.menus {
  .menu {
    display: inline-block;
    cursor: pointer;
    padding: 0 24px;
    border-radius: 16px;
    line-height: 32px;
    margin: 0 2px;
    font-size: 16px;
    &.curr,
    &:hover {
      background: $color;
      color: #fff;
    }
  }
}
</style>
