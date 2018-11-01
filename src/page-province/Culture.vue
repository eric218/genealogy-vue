<template>
    <div class="page">
        <Topbar />
        <NavBar :navcurr="1" />
        <div class="main">
            <div class="adlinks">
                <img src="./img/culturebg.png">
            </div>
            <div class="inner">
                <div class="sia">
                    <div class="h">
                        <div class="item" v-for="(v,i) in menu" :key="i" :class="v.id == menucurr.id ? 'curr':''" v-html="v.name" @click="chgMenu(v)"></div>
                    </div>
                    <div class="b" v-if="menucurr.id == 1">
                    </div>
                    <NewsList v-else />
                </div>
            </div>
        </div>
        <FootBar />
    </div>
</template>
<script>
import NewsList from '@/components/list/news.vue';
import { Topbar, NavBar, Banner, FootBar } from './c'
export default {
    name: "Home",
    components: {
        Topbar,
        NavBar,
        FootBar,
        NewsList,
    },
    data() {
        return {
            menu: [],
            menucurr: {},
        };
    },
    computed: {
    },
    mounted: function () {
        this.getMenu()
    },
    methods: {
        getMenu() {
            this.menu = [{
                id: 1,
                name: '本地字派',
            }, {
                id: 2,
                name: '家族祠堂',
            }, {
                id: 3,
                name: '源流',
            }, {
                id: 4,
                name: '序',
            }, {
                id: 5,
                name: '宗规族约',
            }, {
                id: 6,
                name: '传说典故',
            }]
            this.menucurr = this.menu[0]
        },
        getList() {

        },
        chgMenu(e) {
            this.menucurr = e;
            this.getList();
        },
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.sia {
  padding: 32px 0;
  .h {
    overflow: hidden;
    border-bottom: 1px solid #ddd;
    .item {
      float: left;
      width: 120px;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
      &.curr,
      &:hover {
        background: $colorp;
        color: #fff;
      }
    }
  }
  .b {
    .sort {
      padding: 8px 16px;
      margin: 16px 0;
      overflow: hidden;
      border-radius: 8px;
      background: #eee;
      .searchbar {
        float: right;
        input {
          line-height: 28px;
          padding: 0 8px;
          border-radius: 4px;
          border: 0;
        }
        .act {
          float: right;
          padding: 0 8px;
          background: $color;
          color: #fff;
          border-radius: 4px;
          margin-left: 4px;
        }
      }
      .item {
        float: left;
        width: 80px;
        text-align: center;
        span {
          cursor: pointer;
          padding: 4px 8px;
        }
        &.label {
          text-align: left;
        }
        &.curr,
        &:hover {
          span {
            background: $color;
            color: #fff;
            border-radius: 4px;
          }
        }
      }
    }
    .items {
      .item {
        text-align: center;
        margin: 8px 0;
        border-radius: 4px;
        .img {
          margin-left: auto;
          margin-right: auto;
          height: 64px;
          width: 64px;
          clear: both;
          background: whitesmoke no-repeat center / cover;
          border-radius: 50%;
        }
        .count {
          span {
            color: $color;
          }
        }
        .act {
          display: flex;
          font-size: 12px;
          justify-content: space-between;
          span {
            padding: 0 8px;
            background: $color;
            color: #fff;
            border-radius: 4px;
          }
        }
      }
    }
  }
}
</style>
