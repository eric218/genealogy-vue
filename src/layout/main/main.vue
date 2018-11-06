<template>
    <router-view />
</template>
<script>
import Vue from 'vue'
import '@/assets/theme/iview.less'
import '@/assets/css/app.scss'
import Iconfont from '@/components/common/iconfont.vue'
Vue.component('Iconfont', Iconfont)
export default {
}
</script>