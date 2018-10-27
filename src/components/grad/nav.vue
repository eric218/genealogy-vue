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
    name: "GradNav",
    data() {
        return {
            navs: [{
                name:'首页',
                url:'/Home',
            }, {
                name:'家族文化',
                url:'/Culture',
            }, {
                name:'慈善公益',
                url:'/Charity',
            }, {
                name:'家族产业',
                url:'/Products',
            }, {
                name:'家族名人',
                url:'/Human',
            }, {
                name:'记录家族',
                url:'/Dynamic',
            },{
                name:'祖先分支',
                url:'/Ancestors',
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