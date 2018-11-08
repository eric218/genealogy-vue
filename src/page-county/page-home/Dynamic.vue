<template>
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
            <div class="grad list">
                <div class="tabs kt">
                    <span class="tit">动态</span>
                    <span class="menu" v-for="(v,i) in menu" :key="i" :class="v.id == menucurr.id ? 'curr':''" v-html="v.name" @click="chgMenu(v)"></span>
                </div>
                <div class="card">
                    <div class="items" v-if="menucurr.id == 1 && index_family_record1">
                        <router-link to="/c/Detail" class="item" v-for="v in index_family_record1.records" :key="v.id">
                            <div class="img" :style="v.fanNewsUploadFileList.length? api.imgBG(v.fanNewsUploadFileList[0].filePath):''" />
                            <div class="obj">
                                <div class="tit" v-html="v.newsTitle"></div>
                                <div class="intro" v-html="v.newsText"></div>
                                <div class="more">查看详情>></div>
                            </div>
                        </router-link>
                    </div>
                    <div class="items" v-if="menucurr.id == 2 && index_family_record2">
                        <router-link to="/c/Detail" class="item" v-for="v in index_family_record2.records" :key="v.id">
                            <div class="img" :style="v.fanNewsUploadFileList.length? api.imgBG(v.fanNewsUploadFileList[0].filePath):''" />
                            <div class="obj">
                                <div class="tit" v-html="v.newsTitle"></div>
                                <div class="intro" v-html="v.newsText"></div>
                                <div class="more">查看详情>></div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menu: [],
            menucurr: {},
        }
    },
    computed: {
        index_message() {
            return this.$store.state.homeData.index_message
        },
        index_family_record1() {
            return this.$store.state.homeData.index_family_record1
        },
        index_family_record2() {
            return this.$store.state.homeData.index_family_record2
        },
    },
    mounted: function () {
        this.getMenu()
    },
    methods: {
        getMenu() {
            this.menu = [{
                id: 1,
                name: '家族动态',
            }, {
                id: 2,
                name: '县级公告',
            }]
            this.menucurr = this.menu[0]
        },
        chgMenu(e) {
            this.menucurr = e;
        },
    },
};
</script>