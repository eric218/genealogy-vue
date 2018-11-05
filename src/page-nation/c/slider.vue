<template>
    <div class="slider">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="img">
                        <img src="../img/banner.jpg"></div>
                </div>
                <div class="swiper-slide">
                    <div class="img">
                        <img src="../img/banner.jpg"></div>
                </div>
                <div class="swiper-slide">
                    <div class="img">
                        <img src="../img/banner.jpg"></div>
                </div>
                <div class="swiper-slide">
                    <div class="img">
                        <img src="../img/banner.jpg"></div>
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
    margin-top: -40px;
  width: 100%;
  .swiper-slide {
    height: 100%;
    width: 100%;
    .img {
      position: relative;
      overflow: hidden;
      height:500px;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height:500px;
      }
    }
  }
}
</style>
