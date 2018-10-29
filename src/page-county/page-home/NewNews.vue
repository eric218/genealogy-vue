<template>
    <div class="newnews">
        <div class="inner">
            <div class="h">
                <div class="tit"></div>
                <div class="date">2018年8月15日</div>
            </div>
            <div class="b">
                <router-link to="/c/Detail" class="item" v-for="v in 6" :key="v">
                    <div class="hd">
                        <div class="img"></div>
                        <div class="obj">标题</div>
                    </div>
                    <div class="bd">
                        <div class="intro">描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述 </div>
                        <div class="more">详细>></div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
};
</script>