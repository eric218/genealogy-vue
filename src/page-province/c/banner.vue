<template>
    <div class="banner">
        <slider />
    </div>
</template>
<script>
import slider from './slider.vue';
export default {
    name: "GradBanner",
    components: {
        slider,
    },
    data() {
        return {
            carousel: 0,
        };
    },
};
</script>