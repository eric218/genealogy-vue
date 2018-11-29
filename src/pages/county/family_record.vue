<template>
    <div class="main">
        <Record/>
        <div class="inner">
            <div class="h">
                <div class="cn">视频</div>
                <Divider class="en">Video</Divider>
            </div>
            <div class="menus">
                <span class="menu" v-for="(v,i) in menu" v-if="i > 1" :key="i" :class="v.orderIndex == menucurr.orderIndex ? 'curr':''" v-html="v.menuName" @click="chgMenu(i)"></span>
            </div>
            <div class="grid" style="minHeight:450px;">
                <VideoList :url="url" v-if="menucurr && url.length"/>
            </div>
        </div>
    </div>
</template>
<script>
import { Record } from "./home";
import VideoList from "./list/video-list.vue";
export default {
    components: {
        Record,
        VideoList
    },
    computed: {
        apiList() {
            return this.$store.state.county.apiList;
        }
    },
    watch: {},
    data() {
        return {
            menu: [],
            menucurr: {},
            url: ""
        };
    },
    mounted: function() {
        this.getNav();
    },
    methods: {
        getNav() {
            this.api
                .get(this.api.county.base + this.api.county.common_site_menu, {
                    siteId: this.$store.state.siteId,
                    menuId: 6
                })
                .then(res => {
                    if (res.code == 200) {
                        this.menu = res.data;
                        this.chgMenu(2);
                    }
                });
        },
        chgMenu(e) {
            this.url = "";
            this.menucurr = this.menu[e];
            setTimeout(() => {
                this.url = this.menucurr
                    ? this.api.county.base + this.menucurr.apiUrl
                    : "";
            }, 300);
        }
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.h {
    text-align: center;
    padding: 32px 0;
    .cn {
        font-size: 24px;
    }
    .en {
        font-weight: 300;
    }
}
.menus {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 16px;
    .menu {
        padding: 0 16px;
        margin: 0 4px;
        cursor: pointer;
        line-height: 32px;
        &.curr,
        &:hover {
            background: $color;
            color: #fff;
            border-radius: 16px;
        }
    }
}
</style>
