<template>
    <div class="slider">
        <Carousel loop autoplay>
            <CarouselItem v-for="v in fan_index_slide_pic" :key="v.id">
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
            fan_index_slide_pic: [],
            index_summary: {},
            slider: {}
        };
    },
    computed: {
        apiList() {
            return this.$store.state.county.apiList;
        }
    },
    mounted: function() {
        this.get_fan_index_slide_pic();
        this.get_index_summary();
    },
    methods: {
        get_fan_index_slide_pic() {
            this.api
                .get(
                    this.api.county.base +
                        this.apiList.fan_index_slide_pic.apiUrl,
                    {}
                )
                .then(res => {
                    if (res.code == 200) {
                        this.fan_index_slide_pic = res.data;
                    }
                });
        },
        get_index_summary() {
            this.api
                .get(
                    this.api.county.base + this.apiList.index_summary.apiUrl,
                    {}
                )
                .then(res => {
                    if (res.code == 200) {
                        this.index_summary = res.data;
                    }
                });
        }
    }
};
</script>
<style lang="scss" scoped>
.slider {
    width: 100%;
    .img {
        position: relative;
        overflow: hidden;
        height: 500px;
        background: no-repeat center;
        .tips {
            position: absolute;
            bottom: 48px;
            font-size: 16px;
            right: 0;
            width: 100%;
            text-align: center;
        }
    }
}
</style>