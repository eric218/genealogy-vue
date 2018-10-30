<template>
    <div class="page page-user">
        <Topbar />
        <NavBar name="0" />
        <div class="main">
            <sua />
            <div class="suc">
                <div class="inner grad">
                    <div class="h">
                        <div class="more act">
                            <iconfont name="edit" />
                            <span>发布</span>
                        </div>
                        <div class="tit">说说</div>
                    </div>
                    <div class="bd">
                        <div class="item" v-for="v in 5" :key="v">
                            <div class="img"></div>
                            <div class="obj">
                                <div class="txt">文字描述文字描述</div>
                                <div class="date">2018-10-10</div>
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
.suc{
    .grad{
        background: transparent;
        .h{
            background: #fff;
        }
    }
}
.bd {
    background: whitesmoke;
  .item {
    display: block;
    background: #fff;
    box-shadow: 0 1px 4px rgba(#000,.1);
    border-radius: 8px;
    margin: 16px 0;
    padding: 16px;
    white-space: nowrap;
    .img {
      height: 64px;
      width: 64px;
      float: left;
      margin-right: 16px;
      background: whitesmoke no-repeat center;
      border-radius: 50%;
    }
    .obj {
      overflow: hidden;
      .date {
        color: #999;
      }
    }
  }
}
</style>
