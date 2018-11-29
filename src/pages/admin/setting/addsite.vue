<template>
    <div>
        <div class="tabs">
            <Tabs @on-click="chgMenu">
                <TabPane :label="v.name" :name="i+''" v-for="(v,i) in menu" :key="i"></TabPane>
            </Tabs>
            <List :data="menucurr" v-if="menucurr"/>
        </div>
    </div>
</template>

<script>
import List from "./c/addsite-list";
export default {
    components: {
        List
    },
    data() {
        return {
            menu: [
                { name: "县级联谊会", type: "fan" },
                { name: "省级联谊会", type: "pro" }
            ],
            menucurr: null
        };
    },
    mounted() {
        this.chgMenu(0);
    },
    methods: {
        chgMenu(e) {
            this.menucurr = this.menu[e];
        }
    }
};
</script>