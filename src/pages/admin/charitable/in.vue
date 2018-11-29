<template>
    <div>
        <Charitable :url="url" v-if="url.length" :menu="menucurr.menuType" :type="menucurr.showId"/>
    </div>
</template>

<script>
import Charitable from "./c/charitable-in";
export default {
    components: {
        Charitable
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
                    menuId: 3
                })
                .then(res => {
                    this.menu = res.data;
                    this.chgMenu(1);
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