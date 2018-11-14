<template>
    <div>
        暂未开放
    </div>
</template>

<script>
import Charitable from './c/charitable-list'
export default {
    components: {
        Charitable,
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
            this.api.get(this.api.admin + this.api.urls.culture_list, {
                siteId: this.$store.state.siteId,
                menuId: 3
            }).then(res => {
                this.menu = res.data
                this.chgMenu(2)
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