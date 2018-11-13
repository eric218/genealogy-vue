<template>
    <div>
        <div class="tabs">
            <Tabs @on-click="chgMenu">
                <TabPane :label="v.menuName" :name="i+''" v-for="(v,i) in menu" :key="i"></TabPane>
            </Tabs>
        </div>
    </div>
</template>

<script>
import zipailist from './c/zipai-list'
export default {
    components() {
        zipailist
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
                menuId: 2
            }).then(res => {
                this.menu = res.data
                this.menucurr = this.menu[0]
            })
        },
        chgMenu(e) {
            this.menucurr = this.menu[e];
            this.url = '';
            setTimeout(() => {
                this.url = this.menucurr ? this.menucurr.apiUrl : '';
            }, 300);
        },
    },
}
</script>