<template>
    <div class="friends">
        <div class="inner">
            <div class="h">
                <div class="cn">最铁盟友</div>
                <Divider class="en">Ally</Divider>
            </div>
            <div class="b">
                <a href="http://www.baidu.com" target="_blank" class="item" v-for="v in 2" :key="v">
                    湖北省
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.friends {
  padding: 32px 0;
  .inner {
    overflow: hidden;
  }

  .h {
    text-align: center;
    padding: 32px 0;
    .cn {
      font-size: 24px;
    }
    .en {
      font-weight: 300;
    }
  }

  .b {
    padding: 32px 0;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    margin: 0 -16px;

    .item {
      padding: 0 16px;
      text-align: center;
      background: #333;
      color: #fff;
      margin: 8px 16px;

      &:hover {
        background: $color;
        color: #fff;
      }
    }
  }
}
</style>