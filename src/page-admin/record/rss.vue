<template>
    <div>
        <Rsslist :url="url" v-if="url.length" :menu="menucurr.menuType" :type='menucurr.showId' />
    </div>
</template>

<script>
import Rsslist from './c/rss-list'
export default {
    components: {
        Rsslist,
    },
    data() {
        return {
            menu: [],
            menucurr: {},
            url: '',
        }
    },
    mounted() {
        this.getMenu();
    },
    methods: {
        getMenu() {
            this.api.get(this.api.admin.base + this.api.urls.culture_list, {
                siteId: this.$store.state.siteId,
                menuId: 6
            }).then(res => {
                this.menu = res.data
                this.chgMenu(0)
            })
        },
        chgMenu(e) {
            this.menucurr = this.menu[e];
            setTimeout(() => {
                this.url = this.menucurr ? this.menucurr.apiAdminUrl : '';
            }, 300);
        },
    }
}
</script>