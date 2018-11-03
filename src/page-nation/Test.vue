<template>
    <div class="page">
        <div class="main">
            <div class="ipt">
                <input name="file" type="file" @change="toAdd">
                <Upload :before-upload="handleUpload" action="">
                    <Button icon="ios-cloud-upload-outline">Upload files</Button>
                </Upload>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Home",
    components: {
    },
    data() {
        return {
        };
    },
    computed: {
    },
    mounted: function () {
    },
    methods: {
        toAdd(e) {
            console.log(e);
            let file = e.target.files[0];
            let reader = new FileReader();
            this.api.upload('http://192.168.2.131:8080/pic/upload', {}, {
                key: 'aaa',
                file: file,
            })
        },
        handleUpload(file) {
            console.log(file)
            this.api.upload('http://192.168.2.131:8080/pic/upload', {}, {
                key: 'aaa',
                file: file,
            })
            return false;
        }
    }
};
</script>
<style lang="scss" scoped>
.ipt {
  margin-top: 15%;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
}
</style>
