<template>
    <div class="products">
        <div class="inner">
            <div class="tabs kt">
                <span class="tit">产业</span>
                <span class="menu" v-for="(v,i) in menu" :key="i" :class="v.id == menucurr.id ? 'curr':''" v-html="v.name" @click="chgMenu(v)"></span>
            </div>
            <div class="items">
                <div class="grad">
                    <router-link to="/Products" class="hd kt">
                        <span class="more">更多</span>
                        <span>公共产业</span>
                    </router-link>
                    <div class="bd">
                        <router-link to="/c/Detail" class="item" v-for="v in 2" :key="v">
                            <div class="img">
                                <div class="tit">标题标题标题标题</div>
                            </div>
                            <div class="flag">
                                <div class="level">
                                    <span>诚信值100</span>
                                </div>
                                <div class="head"></div>
                                <div class="name">姓名</div>
                                <div class="tag"><img src="@/assets/img/icon-tag.png" alt="">[诚信业主]</div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="grad">
                    <router-link to="/Products" class="hd kt">
                        <span class="more">更多</span>
                        <span>私人产业</span>
                    </router-link>
                    <div class="bd">
                        <router-link to="/c/Detail" class="item" v-for="v in 2" :key="v">
                            <div class="img">
                                <div class="tit">标题标题标题标题</div>
                            </div>
                            <div class="flag">
                                <div class="level">
                                    <span>诚信值100</span>
                                </div>
                                <div class="head"></div>
                                <div class="name">姓名</div>
                                <div class="tag"><img src="@/assets/img/icon-tag.png" alt="">[诚信业主]</div>
                            </div>
                        </router-link>
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
            isadd: false,
            menu: [],
            menucurr: {},
        }
    },
    mounted: function () {
        this.getMenu()
    },
    methods: {
        getMenu() {
            this.menu = [{
                id: 1,
                name: '家族产业',
            }, {
                id: 2,
                name: '私人产业',
            }]
            this.menucurr = this.menu[0]
        },
        getList() {

        },
        chgMenu(e) {
            this.menucurr = e;
            this.getList();
        },
    },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.products {
  padding: 8px 0 32px;

  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .grad {
    width: 48%;
    background: #ece9e9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .hd {
    font-size: 16px;
    margin: 0 8px;
    display: block;
    border-bottom: 1px solid $color;
    line-height: 40px;

    .more {
      float: right;
    }
  }

  .bd {
    .item {
      display: block;
      padding: 8px;

      .img {
        height: 240px;
        position: relative;
        background: url(../../assets/jpg/tp10.png) whitesmoke no-repeat center / cover;

        .tit {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 100%;
          padding: 0 16px;
          font-size: 16px;
          color: #fff;
          line-height: 40px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.5);
        }
      }

      .flag {
        white-space: nowrap;
        overflow: hidden;
        padding: 8px 0;
        line-height: 48px;

        .head {
          height: 48px;
          width: 48px;
          float: left;
          background: whitesmoke no-repeat center / cover;
          border-radius: 50%;
        }

        .name {
          float: left;
          margin: 0 16px;
        }

        .tag {
          color: $color;
          font-size: 12px;
          float: left;
          font-weight: 700;

          img {
            width: 20px;
            margin-right: 8px;
          }
        }

        .level {
          float: right;

          span {
            background: $color;
            color: #fff;
            padding: 8px 16px;
            border-radius: 4px;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
