<template>
    <div class="friends">
        <div class="inner">
            <div class="h">
                <div class="cn">最铁盟友</div>
                <Divider class="en">Ally</Divider>
            </div>
            <div class="b">
                <a class="item" href="http://www.yhtpw.com/" target="_blank">炎黄统谱网</a>
                <a class="item" href="https://baike.baidu.com/item/%E5%AE%B6%E8%B0%B1/607190?fr=aladdin" target="_blank">家谱文化</a>
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
      line-height: 32px;
      font-size: 12px;
      padding: 0 16px;
      border-radius: 4px;
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