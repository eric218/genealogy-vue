<template>
    <div id="app">
        <transition name="router-fade" mode="out-in">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
        </transition>
        <transition name="router-fade" mode="out-in">
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>
    </div>
</template>
<script>
import Vue from 'vue'
import Icon from '@/components/common/iconfont.vue'
Vue.component('iconfont', Icon)
export default {
    name: 'App',
    updated() {
    },
}
</script>
<style lang="scss">
.router-fade-enter-active,
.router-fade-leave-active {
  transition: all 0.2s linear;
}
.router-fade-enter {
  opacity: 0;
}
.router-fade-leave-active {
  opacity: 0;
}
</style>