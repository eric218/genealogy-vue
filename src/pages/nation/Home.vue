<template>
    <div class="page">
        <NavHome :navcurr="1"/>
        <Banner/>
        <div class="main">
            <Search/>
            <div class="sia">
                <div class="inner">
                    <div class="h">
                        <div class="tit">动态</div>
                    </div>
                    <div class="b">
                        <Row :gutter="32">
                            <i-col :span="8" v-for="v in 6" :key="v">
                                <div class="item">
                                    <div class="img">
                                        <img src="http://iph.href.lu/60x60">
                                    </div>
                                    <div class="obj">
                                        <div class="tit">标题</div>
                                        <div class="txt">描述</div>
                                        <div class="more">More</div>
                                    </div>
                                </div>
                            </i-col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
        <FootBar/>
    </div>
</template>
<script>
import { TopHome, NavHome, Banner, FootBar, Search } from "./c";
export default {
    name: "Home",
    components: {
        TopHome,
        NavHome,
        Banner,
        FootBar,
        Search
    },
    data() {
        return {};
    },
    computed: {},
    mounted: function() {},
    methods: {}
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.sia {
    padding: 32px 0;
    .h {
        .tit {
            position: relative;
            width: 120px;
            margin: 0 auto;
            line-height: 48px;
            font-size: 16px;
        }
    }
    .b {
        .item {
            display: block;
            margin-bottom: 16px;
            .img {
                position: relative;
                img {
                    width: 100%;
                }
            }
            .obj {
                position: relative;
                .tit {
                    white-space: nowrap;
                    font-size: 16px;
                    line-height: 32px;
                    height: 32px;
                    width: 100%;
                    overflow: hidden;
                }
                .txt {
                    color: #999;
                    line-height: 24px;
                    height: 48px;
                    overflow: hidden;
                }
                .more {
                    position: absolute;
                    top: 0;
                    right: 0;
                    line-height: 32px;
                    padding: 0 16px;
                    border-radius: 4px;
                    border: 1px solid #ddd;
                    transition: all 0.3s;
                }
            }
            &:hover {
                cursor: pointer;
                .more {
                    background: $color;
                    color: #fff;
                    border-color: $color;
                }
            }
        }
    }
}
</style>
