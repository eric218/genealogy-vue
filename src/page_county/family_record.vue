<template>
    <div class="page page-culture">
        <Topbar />
        <NavBar :navcurr="6" />
        <div class="main">
            <div class="dynamic">
                <div class="inner">
                    <div class="grid im">
                        <div class="tabs kt">
                            <span class="tit">动态</span>
                            <span class="menu curr">族人实时回话</span>
                        </div>
                        <div class="card">
                            <div class="tit">
                                <span class="mini">发言人数：</span>
                                <span>{{index_message ? index_message.total :''}}</span>
                            </div>
                            <div class="info">
                                <div v-if="index_message">
                                    <div class="other item" v-for="v in index_message.records" :key="v.id">
                                        <div class="img">
                                            <div class="head"></div>
                                            <div class="name">{{v.nickname}}</div>
                                        </div>
                                        <div class="obj">
                                            <div class="text">{{v.message}}</div>
                                        </div>
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
                    <div class="grid list">
                        <div class="tabs kt">
                            <span class="tit">动态</span>
                            <span class="menu" v-for="(v,i) in menuData" v-if="i < 2" :key="i" :class="v.orderIndex == menucurr_a.orderIndex ? 'curr':''" v-html="v.menuName" @click="chgMenu(v,i)"></span>
                        </div>
                        <div class="card">
                            <div class="items">
                                <router-link to="/c/detail" class="item" v-for="v in data_a" :key="v.id">
                                    <div class="img" :style="v.fanNewsUploadFileList.length? api.imgBG(v.fanNewsUploadFileList[0].filePath):''" />
                                    <div class="obj">
                                        <div class="tit" v-text="v.newsTitle"></div>
                                        <div class="intro" v-text="v.newsText"></div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inner">
                <div class="tabs kt">
                    <span class="tit">动态</span>
                    <span class="menu" v-for="(v,i) in menuData" v-if="i > 1" :key="i" :class="v.orderIndex == menucurr_b.orderIndex ? 'curr':''" v-html="v.menuName" @click="chgMenu(v,i)"></span>
                </div>
                <VideoList :data="data_b" v-if="data_b" />
            </div>
        </div>
        <FootBar />
    </div>
</template>


<script>
import { Topbar, NavBar, FootBar } from './c'
import VideoList from './c/video-list.vue';
export default {
    name: "Culture",
    components: {
        Topbar,
        NavBar,
        FootBar,
        VideoList
    },
    computed: {
        index_message() {
            return this.$store.state.homeData.index_message
        },
        navlist() {
            return this.$store.state.navList
        },
        current() {
            return this.$router.history.current.name
        },
        menuData() {
            let menu = [];
            this.navlist.forEach(v => {
                if (v.menuType == this.current) {
                    menu = v.child
                }
            })
            this.chgMenu(menu[0], 0);
            this.chgMenu(menu[2], 2);
            return menu;
        },
    },
    data() {
        return {
            menucurr_a: {},
            menucurr_b: {},
            data_a: {},
            data_b: {},
        }
    },
    mounted: function () {
    },
    methods: {
        getList(i) {
            if(!this.menucurr_b && !this.menucurr_a){
                return;
            }
            let url = i > 1 ? this.menucurr_b.apiUrl : this.menucurr_a.apiUrl;
            this.api.get(url, {}).then(res => {
                if (i > 1) {
                    this.data_b = res.data;
                } else {
                    this.data_a = res.data.records;
                }
            })
        },
        chgMenu(e, i) {
            if (i > 1) {
                this.menucurr_b = e;
            } else {
                this.menucurr_a = e;
            }
            setTimeout(() => {
                this.getList(i);
            }, 300);
        },
    },
};
</script>