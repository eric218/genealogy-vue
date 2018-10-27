<template>
    <div class="page page-human">
        <GradTopbar />
        <GradNav :navcurr="4" />
        <div class="main">
            <div class="adlinks">
                <img src="../../assets/jpg/bg-human.png" alt="">
            </div>
            <div class="inner">
                <div class="tabs kt">
                    <span class="tit">人物</span>
                    <span class="menu" v-for="(v,i) in menu" :key="i" :class="v.id == menucurr.id ? 'curr':''" v-html="v.name" @click="chgMenu(v)"></span>
                </div>
                <LIST />
                <div class="pages">
                    <a href="/" class="item" v-for="v in 5" :key="v">{{v}}</a>
                </div>
            </div>
        </div>
        <GradFooter />
    </div>
</template>
<script>
import LIST from '@/components/list/human.vue';
export default {
    components: {
        LIST,
    },
    data() {
        return {
            isadd: false,
            menu: [],
            menucurr: {},
        }
    },
    mounted: function () {
        this.getMenu()
    },
    methods: {
        getMenu() {
            this.menu = [{
                id: 1,
                name: '家族长老',
            }, {
                id: 2,
                name: '家族栋梁',
            }]
            this.menucurr = this.menu[0]
        },
        getList() {

        },
        chgMenu(e) {
            this.menucurr = e;
            this.getList();
        },
    },
};
</script>