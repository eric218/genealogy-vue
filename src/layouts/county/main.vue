<template>
  <div
    class="page"
    v-if="$store.state.county.apiList"
  >
    <Topbar />
    <NavBar />
    <router-view />
    <FootBar />
  </div>
</template>
<script>
import { Topbar, NavBar, FootBar } from './c'
export default {
  components: {
    Topbar,
    NavBar,
    FootBar,
  },
  data() {
    return {
    }
  },
  computed: {
  },
  mounted: function () {
    this.$store.dispatch('countyHomeApi')
  },
  
  methods: {
  },
}
</script>
<style lang="scss">
@import "@/assets/css/app.scss";
</style>