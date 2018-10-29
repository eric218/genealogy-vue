<template>
    <div class="page page-user">
        <UserHead />
        <UserNav name="0"/>
        <div class="main">
            <sua />
            <div class="sub">
                <div class="inner">
                    <div class="grad">
                        <div class="h">
                            <div class="tit">最新文章</div>
                        </div>
                        <div class="b">
                            <div class="text">正文部分</div>
                        </div>
                    </div>
                    <div class="grad">
                        <div class="h">
                            <div class="tit">精彩说说</div>
                        </div>
                        <div class="b">
                            <div class="item" v-for="v in 6" :key="v">
                                <div class="img"></div>
                                <div class="obj">
                                    <div class="name">李四</div>
                                    <div class="intro">描述</div>
                                    <div class="tag">
                                        <div class="mark">
                                            <iconfont name="markfill" />
                                            <span>15</span>
                                        </div>
                                        <div class="appreciate">
                                            <iconfont name="appreciatefill" />
                                            <span>15</span>
                                        </div>
                                        <div class="date">2018-10-10 16:12</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="suc">
                <div class="inner grad">
                    <div class="h">
                        <div class="more">全部</div>
                        <div class="tit">视频</div>
                    </div>
                    <div class="b">
                        <div class="item" v-for="v in 5" :key="v">
                            <div class="img"></div>
                            <div class="obj">
                                <div class="total">
                                    <iconfont name="recordfill" />
                                    <span>150</span>
                                </div>
                                <div class="tit">张氏祖堂</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="suc">
                <div class="inner grad">
                    <div class="h">
                        <div class="more">全部</div>
                        <div class="tit">图片</div>
                    </div>
                    <div class="b">
                        <div class="item" v-for="v in 5" :key="v">
                            <div class="img"></div>
                            <div class="obj">
                                <div class="tit">张氏祖堂</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <GradFooter />
    </div>
</template>
<script>

import UserHead from './components/head.vue'
import UserNav from './components/nav.vue'
import sua from './components/sua.vue'
export default {
    components: {
        UserHead,
        UserNav,
        sua,
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