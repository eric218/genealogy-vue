<template>
    <div class="slider">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="v in imgs" :key="v.id">
                    <div class="img">
                        <img :src="api.imgurl(v.picUrl)" />
                    </div>
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

    watch: {
        imgs: function (c, o) {
            console.log(c,o)
            this.slider = new Swiper('.slider .swiper-container', {
                autoplay: true,
                loop: 'auto',
                observer: true,
                observeParents: true,
            });
        },
    },
    computed: {
        imgs() {
            return this.$store.state.homeData.fan_index_slide_pic
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
