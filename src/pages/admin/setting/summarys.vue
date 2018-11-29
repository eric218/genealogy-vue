<template>
    <div>
        <Summarys :url="url" v-if="url.length"/>
    </div>
</template>

<script>
import Summarys from "./c/summarys-list";
export default {
    components: {
        Summarys
    },
    data() {
        return {
            url: ""
        };
    },
    mounted() {
        this.url = this.api.admin.admin_summarys_list;
    }
};
</script>