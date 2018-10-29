<template>
    <div class="nav">
        <div class="inner">
            <a href="/" class="item right">统谱编修</a>
            <router-link class="item" v-for="(v,i) in navs" :key="i" v-html="v.name" :class="i ==navcurr ?'curr':''" :to="v.url"/>
        </div>
    </div>
</template>
<script>
export default {
    name: "NavBar",
    data() {
        return {
            navs: [{
                name:'首页',
                url:'/c/Home',
            }, {
                name:'家族文化',
                url:'/c/Culture',
            }, {
                name:'慈善公益',
                url:'/c/Charity',
            }, {
                name:'家族产业',
                url:'/c/Products',
            }, {
                name:'家族名人',
                url:'/c/Human',
            }, {
                name:'记录家族',
                url:'/c/Dynamic',
            },{
                name:'祖先分支',
                url:'/c/Ancestors',
            }],
        };
    },
    props: {
        'navcurr': {
            default: 1
        }
    }
};
</script>