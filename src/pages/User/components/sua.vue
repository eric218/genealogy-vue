<template>
    <div class="sua">
        <div class="bg"></div>
        <div class="card">
            <div class="img"></div>
            <div class="obj">
                <div class="name" @click="isedit = true">
                    <span>张三丰</span>
                    <iconfont name="writefill" />
                </div>
                <div class="info">
                    <div class="item">英文名：hhehe</div>
                    <div class="item">国籍：中国</div>
                    <div class="item">出生地：武汉</div>
                    <div class="item">职业：教师</div>
                </div>
                <div class="tag">
                    <div class="item">
                        <iconfont name="medalfill" />
                        <span>诚信值：100</span>
                    </div>
                    <div class="item">
                        <iconfont name="attentionfavorfill" />
                        <span>关注：100</span>
                    </div>
                    <div class="item">
                        <iconfont name="group_fill" />
                        <span>粉丝：100</span>
                    </div>
                </div>
                <div class="flag">
                    <div class="item">现居：武汉</div>
                    <div class="item">故居：武汉</div>
                    <div class="item">现居古城：江汉</div>
                </div>
                <div class="flag">
                    <div class="item">历代：张氏</div>
                    <div class="item">近世：张氏</div>
                    <div class="item">老派：张氏</div>
                    <div class="item">新派：张氏</div>
                    <div class="item">统派：张氏</div>
                </div>
                <div class="more">
                    <router-link to="/User/Note" class="item">
                        <iconfont name="formfill" />
                        <span>日志</span>
                        <span>150</span>
                    </router-link>
                    <router-link to="/User/Image" class="item">
                        <iconfont name="picfill" />
                        <span>照片</span>
                        <span>150</span>
                    </router-link>
                    <router-link to="/User/Video" class="item">
                        <iconfont name="video_fill_light" />
                        <span>视频</span>
                        <span>150</span>
                    </router-link>
                    <router-link to="/User/Msg" class="item">
                        <iconfont name="communityfill" />
                        <span>说说</span>
                        <span>150</span>
                    </router-link>
                </div>
            </div>
        </div>
        <Modal title="修改资料" v-model="isedit" width="640px" :footer-hide="true" >
            <xiugaiziliao />
        </Modal>
    </div>
</template>
<script>
import xiugaiziliao from '@/components/post/xiugaiziliao.vue'
export default {
    components: {
        xiugaiziliao,
    },
    data() {
        return {
            isedit: false,
        };
    },
    mounted: function () {

    },
    methods: {
    }
};
</script>