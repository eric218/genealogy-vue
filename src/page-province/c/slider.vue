<template>
    <div class="slider">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="img">
                        <img src="../img/banner1.jpg"></div>
                </div>
                <div class="swiper-slide">
                    <div class="img">
                        <img src="../img/banner2.jpg"></div>
                </div>
                <div class="swiper-slide">
                    <div class="img">
                        <img src="../img/banner3.jpg"></div>
                </div>
                <div class="swiper-slide">
                    <div class="img">
                        <img src="../img/banner4.jpg"></div>
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
      height: 900px;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 900px;
      }
    }
  }
}
</style>
