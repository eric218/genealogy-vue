<template>
    <div class="page page-detail">
        <GradTopbar />
        <GradNav :navcurr="0" />
        <div class="main">
            <div class="inner">
                <Breadcrumb>
                    <BreadcrumbItem to="/">首页</BreadcrumbItem>
                    <BreadcrumbItem to="/">分类</BreadcrumbItem>
                    <BreadcrumbItem>详情</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div class="inner">
                <div class="detail">
                    <div class="h">
                        <div class="tit">标题标题</div>
                        <div class="tag">
                            <div class="item">
                                <span>时间：</span>
                                <span>2018年10月01日</span>
                            </div>
                            <div class="item">
                                <span>作者：</span>
                                <span>张三</span>
                            </div>
                            <div class="item">
                                <span>来源：</span>
                                <span>中国新闻社</span>
                            </div>
                        </div>
                    </div>
                    <div class="b">
                        <div class="intro">
                            摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要
                        </div>
                        <div class="content">
                            正文正文正文正文正文
                        </div>
                    </div>
                    <div class="f">
                        <div class="share">
                            <span>分享到：</span>
                            <iconfont name="weibo" />
                        </div>
                        <div class="act">
                            <span>赏</span>
                        </div>
                        <div class="total">
                            <span>收到打赏</span>
                            <span class="num">333</span>
                            <span>次</span>
                        </div>
                    </div>
                </div>
                <div class="feeds">
                    <div class="h">
                        <div class="img"></div>
                        <div class="obj">
                            <div class="user">
                                <div class="count">0/300</div>
                                <span>张三</span>
                                <iconfont name="crownfill" />
                            </div>
                            <div class="textarea">
                                <textarea name="" id="" rows="4"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="pagination">
                        <div class="item" v-for="v in 6" :key="v" :class="v == 1 ? 'curr':''">{{v}}</div>
                    </div>
                    <div class="b">
                        <div class="item" v-for="v in 5" :key="v">
                            <div class="img"></div>
                            <div class="obj">
                                <div class="user">
                                    <span class="name">用户名</span>
                                    <iconfont name="crownfill" />
                                    <span class="date">昨天</span>
                                </div>
                                <div class="text">描述描述</div>
                                <div class="tag">
                                    <div class="itm">
                                        <iconfont name="appreciate_light" />
                                        <span>150</span>
                                    </div>
                                    <div class="itm">
                                        <iconfont name="footprint" />
                                        <span>199</span>
                                    </div>
                                    <div class="itm">
                                        <iconfont name="message_light" />
                                        <span>199</span>
                                    </div>
                                </div>
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
import TopInfo from './components/TopInfo.vue';
import Dynamic from './components/Dynamic.vue';
import NewNews from './components/NewNews.vue';
import Famous from './components/Famous.vue';
import HomeNews from './components/HomeNews.vue';
import Gongyi from './components/Gongyi.vue';
import Products from './components/Products.vue';
import Friends from './components/Friends.vue';

export default {
    name: "Home",
    components: {
        TopInfo,
        Dynamic,
        NewNews,
        Famous,
        HomeNews,
        Gongyi,
        Products,
        Friends,
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