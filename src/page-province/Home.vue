<template>
    <div class="page page-home">
        <Topbar />
        <NavBar :navcurr="0" />
        <Banner />
        <div class="main">
            <div class="inner">
                <div class="sia">
                    <div class="r">
                        <div class="h">捐款名人</div>
                        <div class="total"></div>
                        <div class="b">
                            <div class="item">
                                <div class="img"></div>
                                <div class="name"></div>
                                <div class="count">捐款<span>1.00</span>元</div>
                                <div class="act">
                                    <span>关注</span>
                                    <span>点赞</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="l">
                        <div class="h">账本公开栏</div>
                        <div class="b">
                            <div class="item">
                                <div class="img"></div>
                                <div class="date"></div>
                                <div class="obj">
                                    <div class="tit"></div>
                                    <div class="txt"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="adlink"></div>
            <div class="inner">
                <div class="sib">
                    <div class="r">
                        <div class="h">
                            <div class="tit">省级公告</div>
                        </div>
                        <div class="b">
                            <div class="headline">
                                <div class="tit">
                                    <span class="flag"></span>
                                    <div class="tit"></div>
                                    <div class="tag"></div>
                                    <div class="txt"></div>
                                </div>
                            </div>
                            <div class="item">

                            </div>
                        </div>
                    </div>
                    <div class="l">
                        <div class="h">
                            <span class="more">更多</span>
                            <span class="tit">家族头条</span>
                        </div>
                        <div class="b">
                            <div class="obj">
                                <div class="img"></div>
                                <div class="tit"></div>
                            </div>
                            <div class="txt"></div>
                        </div>
                    </div>
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