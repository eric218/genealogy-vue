<template>
    <div class="main">
        <div class="suc">
            <div class="inner grid">
                <div class="h">
                    <div class="more link">
                        <iconfont name="upload" />
                        <span>上传</span>
                    </div>
                    <div class="tit">照片</div>
                </div>
                <div class="b">
                    <div class="item" v-for="v in 5" :key="v">
                        <div class="img"></div>
                        <div class="obj">
                            <div class="total">
                                <iconfont name="recordfill" />
                                <span>150</span>
                            </div>
                            <div class="tit">张氏祖堂</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {
    },
    data() {
        return {
            isedit: false,
        }
    },
    computed: {
    },
    mounted: function () {
    },
    methods: {
    }
}
</script>