<template>
    <div class="page page-culture">
        <Topbar />
        <NavBar :navcurr="6" />
        <div class="main">
            <div class="dynamic">
                <div class="inner">
                    <div class="grad im">
                        <div class="tabs kt">
                            <span class="tit">动态</span>
                            <span class="menu curr">族人实时回话</span>
                        </div>
                        <div class="card">
                            <div class="tit">
                                <span class="mini">发言人数：</span>
                                <span>99</span>
                            </div>
                            <div class="info">
                                <div class="other item">
                                    <div class="img">
                                        <div class="head"></div>
                                        <div class="name">张三</div>
                                    </div>
                                    <div class="obj">
                                        <div class="text">大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好</div>
                                    </div>
                                </div>
                                <div class="other item">
                                    <div class="img">
                                        <div class="head"></div>
                                        <div class="name">张三</div>
                                    </div>
                                    <div class="obj">
                                        <div class="text">大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好</div>
                                    </div>
                                </div>
                                <div class="mine item">
                                    <div class="img">
                                        <div class="head"></div>
                                        <div class="name">张三</div>
                                    </div>
                                    <div class="obj">
                                        <div class="text">大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好</div>
                                    </div>
                                </div>
                                <div class="other item">
                                    <div class="img">
                                        <div class="head"></div>
                                        <div class="name">张三</div>
                                    </div>
                                    <div class="obj">
                                        <div class="text">大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好</div>
                                    </div>
                                </div>
                            </div>
                            <div class="form">
                                <div class="act">发送</div>
                                <div class="ipt">
                                    <input type="text" placeholder="请输入内容" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grad list">
                        <div class="tabs kt">
                            <span class="tit">动态</span>
                            <span class="menu curr">家族动态</span>
                            <span class="menu">县级公告</span>
                        </div>
                        <div class="card">
                            <div class="items">
                                <div class="item" v-for="v in 3" :key="v">
                                    <div class="img"></div>
                                    <div class="obj">
                                        <div class="tit">新闻标题</div>
                                        <div class="intro">正文描述正文描述正文描述正文描述正文描述正文描述正文描述正文描述正文描述正文描述正文描述正文描述正文描述正文描述</div>
                                        <div class="more">查看详情>></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inner">
                <div class="tabs kt">
                    <span class="tit">动态</span>
                    <span class="menu" v-for="(v,i) in menu" :key="i" :class="v.id == menucurr.id ? 'curr':''" v-html="v.name" @click="chgMenu(v)"></span>
                </div>
                <VideoList />
            </div>
        </div>
        <FootBar />
    </div>
</template>


<script>
import { Topbar, NavBar, FootBar } from './c'
import VideoList from '@/components/list/video.vue';
export default {
    name: "Culture",
    components: {
        Topbar,
        NavBar,
        FootBar,
        VideoList
    },
    data() {
        return {
            menu: [],
            menucurr: {},
        }
    },
    mounted: function () {
        this.getMenu()
    },
    methods: {
        getMenu() {
            this.menu = [{
                id: 1,
                name: '家族视频',
            }, {
                id: 2,
                name: '个人视频',
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