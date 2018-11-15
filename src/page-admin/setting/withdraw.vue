<template>
    <div>
        <Summarys :url="url" v-if="url.length" />
    </div>
</template>

<script>
import Withdraw from './c/withdraw-list'
export default {
    components: {
        Withdraw,
    },
    data() {
        return {
            url: ''
        }
    },
    mounted() {
    },
}
</script>