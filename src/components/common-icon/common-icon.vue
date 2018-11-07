<template>
    <component :is="iconType" :type="iconName" :color="iconColor" :size="iconSize" />
</template>

<script>
export default {
    name: 'CommonIcon',
    props: {
        type: {
            type: String,
            required: true
        },
        color: String,
        size: Number
    },
    computed: {
        iconType() {
            return 'Icon'
        },
        iconName() {
            return this.type
        },
        iconSize() {
            return this.size || undefined
        },
        iconColor() {
            return this.color || ''
        }
    },
}
</script>