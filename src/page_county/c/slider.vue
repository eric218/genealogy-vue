<template>
    <div class="slider">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="img">
                        <img src="@/assets/jpg/banner1.png"></div>
                </div>
                <div class="swiper-slide">
                    <div class="img">
                        <img src="@/assets/jpg/banner2.png"></div>
                </div>
                <div class="swiper-slide">
                    <div class="img">
                        <img src="@/assets/jpg/banner3.png"></div>
                </div>
                <div class="swiper-slide">
                    <div class="img">
                        <img src="@/assets/jpg/banner4.png"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
export default {
    name: "slider",
    data() {
        return {
            slider: {},
        }
    },
    mounted: function () {
        this.slider = new Swiper('.slider .swiper-container', {
            autoplay: true,
            loop: 'auto',
            autoplay: true,
        });
    },
    destroyed() {
        this.slider = {}
    },
    methods: {
    },
}
</script>
<style lang="scss" scoped>
.slider {
  width: 100%;
  .swiper-slide {
    height: 100%;
    width: 100%;
    .img {
      position: relative;
      overflow: hidden;
      img {
        display: block;
      }
    }
  }
}
</style>
