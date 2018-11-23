<template>
    <div class="page page-user">
        <Topbar />
        <NavBar name="0" />
        <div class="main">
            <sua />
            <div class="suc">
                <div class="inner grid">
                    <div class="h">
                        <div class="more link">
                            <iconfont name="edit" />
                            <span>写日志</span>
                        </div>
                        <div class="tit">日志</div>
                    </div>
                    <div class="bd">
                        <div class="item">
                            <div class="img"></div>
                            <div class="obj">
                                <div class="tit">标题</div>
                                <div class="intro">简介</div>
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
import sua from './c/sua.vue'
import { Topbar, NavBar, FootBar } from './c'
export default {
    components: {
        Topbar,
        NavBar,
        FootBar,
        sua,
    },
    data() {
        return {
            isedit: false,
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
.bd {
  .item {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    padding: 16px;
    .img {
      float: left;
      margin-right: 16px;
      height: 120px;
      width: 160px;
      background: whitesmoke no-repeat;
    }
    .obj {
      overflow: hidden;
      .intro{
          color:#999;
      }
    }
  }
}
</style>
