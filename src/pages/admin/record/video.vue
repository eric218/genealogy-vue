<template>
    <div>
        <Videolist :url="url" v-if="url.length" :menu="menucurr.menuType" :type="menucurr.showId"/>
    </div>
</template>

<script>
import Videolist from "./c/video-list";
export default {
    components: {
        Videolist
    },
    data() {
        return {
            menu: [],
            menucurr: {},
            url: ""
        };
    },
    mounted() {
        this.getMenu();
    },
    methods: {
        getMenu() {
            this.api
                .get(this.api.admin.base + this.api.admin.admin_sys_menu, {
                    siteId: this.$store.state.siteId,
                    menuId: 6
                })
                .then(res => {
                    this.menu = res.data;
                    this.chgMenu(2);
                });
        },
        chgMenu(e) {
            this.menucurr = this.menu[e];
            setTimeout(() => {
                this.url = this.menucurr ? this.menucurr.apiAdminUrl : "";
            }, 300);
        }
    }
};
</script>