<template>
    <div class="slider">
        <Carousel loop>
            <CarouselItem v-for="v in info" :key="v.id">
                <div class="img" :style="api.imgBG(v.picUrl)"></div>
            </CarouselItem>
        </Carousel>
    </div>
</template>
<script>
export default {
    name: "slider",
    data() {
        return {
            info: [],
            slider: {},
        }
    },
    computed: {
        url() {
            return this.$store.state.county.apiList.fan_index_slide_pic.apiUrl
        },
    },
    mounted: function () {
        this.getInfo()
    },
    methods: {
        getInfo() {
            this.api.get(this.api.county.base + this.url, {}).then(res => {
                if (res.code == 200) {
                    this.info = res.data
                }
            })
        },
    },
}
</script>
<style lang="scss" scoped>
.slider {
  width: 100%;
  .img {
    position: relative;
    overflow: hidden;
    height: 450px;
    background: no-repeat center;
  }
}
</style>