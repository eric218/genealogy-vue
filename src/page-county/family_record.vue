<template>
    <div class="page" v-if="apiList">
        <Topbar />
        <NavBar :navcurr="6" />
        <div class="main">
            <Record />
            <div class="inner">
                <div class="tabs kt">
                    <span class="tit">动态</span>
                    <span class="menu" v-for="(v,i) in menu" v-if="i > 1" :key="i" :class="v.orderIndex == menucurr_b.orderIndex ? 'curr':''" v-html="v.menuName" @click="chgMenu(v,i)"></span>
                </div>
                <VideoList :data="data_b" v-if="data_b" />
            </div>
        </div>
        <FootBar />
    </div>
</template>


<script>
import { Topbar, NavBar, FootBar } from './c'
import { Record } from './home';
import VideoList from './list/video-list.vue';
export default {
    name: "Culture",
    components: {
        Topbar,
        NavBar,
        FootBar,
        Record,
        VideoList
    },
    computed: {
        apiList() {
            return this.$store.state.county.apiList
        },
    },
    watch: {
        apiList(n, o) {
            this.get_index_message()
        }
    },
    data() {
        return {
            index_message: {
                total: 0,
                records: [],
            },
            menu: [],
            menucurr_a: {},
            menucurr_b: {},
            data_a: {},
            data_b: {},
        }
    },
    mounted: function () {
        this.getNav()
        this.get_index_message()
    },
    methods: {
        get_index_message() {
            if (!this.apiList) {
                return
            }
            this.api.get(this.api.county.base + this.apiList.index_message.apiUrl, {}).then(res => {
                if (res.code == 200) {
                    this.index_message = res.data
                }
            })
        },
        getNav() {
            this.api.get(this.api.county.base + this.api.county.common_site_menu, {
                siteId: this.$store.state.siteId,
                menuId: 6,
            }).then(res => {
                if (res.code == 200) {
                    this.menu = res.data
                    this.chgMenu(this.menu[0], 0);
                    this.chgMenu(this.menu[2], 2);
                }
            })
        },
        getList(i) {
            if (!this.menucurr_b && !this.menucurr_a) {
                return;
            }
            let url = i > 1 ? this.api.county.base + this.menucurr_b.apiUrl : this.api.county.base + this.menucurr_a.apiUrl;
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
            this.getList(i);
        },
    },
};
</script>