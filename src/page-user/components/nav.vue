<template>
    <div class="usernav">
        <router-link :to="v.url" class="item" v-for="(v,i) in menus" :key="i" :class="name == i ? 'curr':''"><span>{{v.name}}</span></router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menus: [{
                url: '/User',
                name: '个人主页',
            }, {
                url: '/User/Family',
                name: '我的族谱',
            }, {
                url: '/User/Donate',
                name: '捐款记录',
            }],
        };
    },
    mounted: function () {

    },
    methods: {
    },
    props: ['name']
};
</script>