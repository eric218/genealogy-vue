<template>
    <div class="news">
        <div class="inner">
            <div class="tabs kt">
                <span class="tit">资讯</span>
                <span class="menu" v-for="(v,i) in menu" :key="i" :class="v.id == menucurr.id ? 'curr':''" v-html="v.name" @click="chgMenu(v)"></span>
            </div>
            <Row class="items" :gutter="32">
                <i-col :span="12" v-for="v in 6" :key="v">
                    <Card class="item">
                        <div class="img"></div>
                        <div class="obj">
                            <div class="tit">标题</div>
                            <div class="intro">简介</div>
                            <div class="more">查看详情>></div>
                        </div>
                    </Card>
                </i-col>
            </Row>
            <div class="pages">
                <a href="javascript:void(0)" class="item" v-for="v in 5" :key="v" :class="v==pagecurr?'curr':''" @click="pagecurr = v">{{v}}</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menu: [],
            menucurr: {},
            pagecurr: 1,
        }
    },
    mounted: function () {
        this.getMenu()
    },
    methods: {
        getMenu() {
            this.menu = [{
                id: 1,
                name: '家族文化',
            }, {
                id: 2,
                name: '精神传承',
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

.pages {
    padding: 16px;
    overflow: hidden;
    clear: both;
    text-align: center;

    .item {
        background: url(../../assets/img/pages-bg.png) no-repeat center / 100% 100%;
        display: inline-block;
        margin: 4px;
        line-height: 40px;
        text-align: center;
        width: 40px;

        &.curr,
        &:hover {
            background-image: url(../../assets/img/pages-curr.png);
            color: $color;
        }
    }
}
.news {
  .items {
    .item {
      background: #ece9e9;
      margin: 8px 0;
      white-space: nowrap;
      .img {
        width: 96px;
        height: 96px;
        margin-right: 16px;
        float: left;
        background: white;
      }

      .obj {
        overflow: hidden;
        height: 96px;

        .tit {
          font-size: 16px;
          color: $color;
          line-height: 24px;
        }

        .intro {
          color: #999;
          white-space: normal;
          height: 48px;
          line-height: 24px;
        }

        .more {
          color: $color;
        }
      }
    }
  }
}
</style>
