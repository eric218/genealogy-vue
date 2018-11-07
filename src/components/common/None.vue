<template>
    <div class="noresult" style="min-height:480px;">
        <Icon type="ios-warning" size="128" />
        <div class="txt">{{txt}}</div>
    </div>
</template>
<script>
export default {
    name: "None",
    data() {
        return {}
    },
    props: {
        'txt': {
            default: '暂无信息'
        }
    }
}
</script>
<style lang="scss">
.noresult {
  padding: 60px 0;
  text-align: center;
  i {
    line-height: 2;
    font-size: 96px;
    color: #ccc;
  }
  .txt {
    line-height: 20px;
    font-size: 16px;
    color: #999;
  }
}
</style>
