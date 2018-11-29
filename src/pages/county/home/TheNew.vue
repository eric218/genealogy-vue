<template>
    <div class="list">
        <div class="inner">
            <div class="h">
                <div class="cn">最新视频</div>
                <Divider class="en">Video</Divider>
            </div>
            <div class="b">
                <VideoList :url="url" v-if="url"/>
            </div>
        </div>
    </div>
</template>
<script>
import VideoList from "../list/video-list.vue";
export default {
    components: {
        VideoList
    },
    data() {
        return {
            index_family_video: {}
        };
    },
    computed: {
        apiList() {
            return this.$store.state.county.apiList;
        },
        url() {
            return (
                this.api.county.base + this.apiList.index_family_video.apiUrl
            );
        }
    },
    mounted: function() {},
    methods: {}
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.list {
    overflow: hidden;
    padding: 32px 0;
    .h {
        text-align: center;
        padding: 32px 0;
        .cn {
            font-size: 24px;
        }
        .en {
            font-weight: 300;
        }
    }
}
</style>
