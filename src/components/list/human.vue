<template>
    <div class="newslist">
        <router-link to="/Detail" class="item">
            <div class="img" />
            <div class="obj">
                <div class="tit">
                    <iconfont name="myfill" />
                    <span>姓名</span>
                </div>
                <div class="intro" v-html="'描述'"></div>
                <div class="tag">
                    <div class="fl">
                        <iconfont name="formfill" />
                        <span>150</span>
                    </div>
                    <div class="fl">
                        <iconfont name="picfill" />
                        <span>150</span>
                    </div>
                    <div class="fl">
                        <iconfont name="video_fill_light" />
                        <span>150</span>
                    </div>
                    <div class="fl">
                        <iconfont name="communityfill" />
                        <span>150</span>
                    </div>
                </div>
            </div>
        </router-link>
        <router-link to="/Detail" class="item" v-for="(v,i) in list" :key="i">
            <div class="img" :style="api.imgBG(v.pic)" />
            <div class="obj">
                <div class="tit" v-html="v.title"></div>
                <div class="intro" v-html="v.summary"></div>
                <div class="tag">
                    <div class="attention">
                        <iconfont name="attention" />
                        <span v-html="v.like"></span>
                    </div>
                    <div class="favor">
                        <iconfont name="favorfill" />
                        <span v-html="v.focus"></span>
                    </div>
                    <div class="appreciate">
                        <iconfont name="appreciate" />
                        <span v-html="v.collection"></span>
                    </div>
                    <div class="site">
                        <iconfont name="locationfill" />
                        <span>湖北省武汉市</span>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    props: ['list']
};
</script>