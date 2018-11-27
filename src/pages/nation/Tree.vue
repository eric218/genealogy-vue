<template>
    <div class="page">
        <Topbar />
        <NavBar :navcurr="4" />
        <div class="main">
            <div class="adlinks">
                <img src="./img/culturebg.png">
            </div>
            <div class="inner">
                <div class="sia">
                    <div class="h kt">
                        <div class="tit">已建网络谱地区</div>
                    </div>
                    <div class="b"></div>
                </div>
            </div>
        </div>
        <FootBar />
    </div>
</template>
<script>
import { Topbar, NavBar, Banner, FootBar } from './c'
export default {
    name: "Home",
    components: {
        Topbar,
        NavBar,
        Banner,
        FootBar,
    },
    data() {
        return {
        }
    },
    computed: {
    },
    mounted: function () {
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.sia {
  padding: 16px 0;
  .h {
    height: 48px;
    line-height: 48px;
    padding-left: 32px;
    background: url("./img/title-dot.png") no-repeat left center;
    font-size: 20px;
  }
  .b{
      height: 450px;
  }
}
</style>
