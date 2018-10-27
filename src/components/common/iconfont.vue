<template>
    <i class="icon" :class="'icon-'+name"></i>
</template>
<script>
export default {
    props: ['name']
};
</script>