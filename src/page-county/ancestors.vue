<template>
    <div class="page page-ancestors">
        <Topbar />
        <NavBar :navcurr="8" />
        <div class="main">
            <div class="adlinks">
                <img src="./img/detail.jpg" />
            </div>
            <div class="sia">
                <div class="inner">
                    <div class="h">
                        <div class="tabs kt">
                            <span class="tit">祖先分支</span>
                        </div>
                    </div>
                    <div class="b">
                        <div class="item" v-for="v in 10" :key="v">
                            <div class="img"></div>
                            <div class="obj">张三</div>
                        </div>
                    </div>
                    <div class="f">
                        <Page :total="50" />
                    </div>
                </div>
            </div>
            <div class="sib">
                <div class="inner">
                    <div class="h">
                        <div class="img"></div>
                        <div class="obj">
                            <div class="flag"><span>千支同源</span></div>
                            <div class="name">姓名</div>
                            <div class="tag">名头</div>
                        </div>
                        <div class="txt">介绍</div>
                    </div>
                    <div class="f">
                        <div class="item">字派：</div>
                        <div class="item">郡望：</div>
                        <div class="item">堂号：</div>
                    </div>
                </div>
            </div>
            <div class="sic">
                <div class="inner">
                    <div class="grid">
                        <div class="item" v-for="v in 4" :key="v">
                            <div class="img"></div>
                            <div class="obj">
                                <div class="tit">宗谱</div>
                                <div class="txt">
                                    <div>联系人：李四</div>
                                    <div>地区：咸宁</div>
                                    <div>入谱人数：50</div>
                                    <div>始修于2018-10-10</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FootBar />
    </div>
</template>


<script>
import { Topbar, NavBar, FootBar } from './c'
export default {
    components: {
        Topbar,
        NavBar,
        FootBar,
    },
    data() {
        return {
        };
    },
    computed: {
    },
    mounted: function () {
    },
    methods: {
    }
};
</script>
<style lang="scss" scoped>
.page-ancestors {
  background-color: whitesmoke;
}
.sia {
  .b {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
    .item {
      margin-bottom: 32px;
      width: 216px;
      background: #fff;
      padding: 16px;
      border-radius: 4px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
      .img {
        width: 184px;
        height: 184px;
        background: rgba(#09c, 0.1) no-repeat center;
      }
    }
  }
}
.sib {
  background: url(../assets/jpg/bg-ancestors.png) no-repeat center / 100% auto;
  color: #fff;
  text-align: center;
  padding-bottom: 128px;
  .h {
    padding: 32px;
    .img {
      height: 160px;
      width: 160px;
      background: #fff;
      margin-left: auto;
      margin-right: auto;
    }
    .obj {
      .flag {
        padding: 8px 0;
        span {
          padding: 8px 16px;
          background: #111;
          border-radius: 4px;
          font-size: 12px;
        }
      }
      .name {
        font-size: 16px;
      }
    }
    .txt {
      font-size: 12px;
    }
  }
  .f {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
  }
}
.sic {
  padding: 32px 0;
  .grid {
    width: 960px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
  }
  .item {
    width: 450px;
    margin-bottom: 16px;
    background: #fff;
    padding: 32px;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(black, 0.2);
    white-space: nowrap;
    .img {
      float: left;
      margin-right: 16px;
      width: 120px;
      height: 160px;
      background: #09c center no-repeat;
    }
    .obj {
      overflow: hidden;
      .tit {
        font-size: 16px;
        color: #b9381f;
      }
      .txt {
        font-size: 12px;
        line-height: 2;
        color: #999;
      }
    }
  }
}
</style>
