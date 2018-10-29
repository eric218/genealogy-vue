<template>
    <div class="famous">
        <div class="inner">
            <div class="tabs kt">
                <div class="item curr">会长</div>
                <div class="item">族长</div>
                <div class="item">官员</div>
                <div class="item">企业家</div>
                <div class="item">店主</div>
            </div>
            <div class="card">
                <div class="title">会长</div>
                <div class="top">
                    <div class="img"></div>
                    <div class="obj">
                        <div class="tit">姓名（称谓）</div>
                        <div class="intro">简介简介简介简介简介简介简介简介简介简介简介简介简介简介</div>
                    </div>
                </div>
                <div class="title">副会长</div>
                <div class="items">
                    <div class="item" v-for="(v,i) in 6" :key="i">
                        <div class="img"></div>
                        <div class="obj">
                            <div class="tit">姓名（称谓）</div>
                            <div class="intro">简介简介简介简介简介简介简介简介简介简介简介简介简介简介</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
};
</script>