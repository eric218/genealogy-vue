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
import GradTopbar from '@/components/grad/topbar.vue'
import GradNav from '@/components/grad/nav.vue'
import GradBanner from '@/components/grad/banner.vue'
import GradFooter from '@/components/grad/footer.vue'
import Editor from '@/components/common/editor.vue';
Vue.component('iconfont', Icon)
Vue.component('GradTopbar', GradTopbar)
Vue.component('GradNav', GradNav)
Vue.component('GradBanner', GradBanner)
Vue.component('GradFooter', GradFooter)
Vue.component('Editor', Editor)

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
