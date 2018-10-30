<template>
    <div class="nav">
        <div class="inner">
            <a href="/" class="item right">统谱编修</a>
            <router-link class="item" v-for="(v,i) in navs" :key="i" v-html="v.name" :class="i ==navcurr ?'curr':''" :to="v.url" />
        </div>
    </div>
</template>
<script>
export default {
    name: "NavBar",
    data() {
        return {
            navs: [{
                name: '首页',
                url: '/p/Home',
            }, {
                name: '家族文化',
                url: '/p/Culture',
            }, {
                name: '数字家谱',
                url: '/c/Genealogy',
            }, {
                name: '家族产业',
                url: '/c/Products',
            }, {
                name: '祖先&名人',
                url: '/c/Human',
            }, {
                name: '各地分支',
                url: '/c/Tree',
            }, {
                name: '记录家族',
                url: '/c/Record',
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