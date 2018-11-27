<template>
    <div class="search">
        <div class="grid">
            <div class="h">
                <div class="item curr">地区</div>
                <div class="item">开基祖</div>
                <div class="item">源流</div>
                <div class="item">序</div>
                <div class="item">字派</div>
                <div class="item">祠堂</div>
                <div class="item">堂号</div>
            </div>
            <div class="b">
                <div class="link">搜索</div>
                <div class="obj">
                    <input type="text" @keyup.enter="toSubmit" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        'navcurr': {
            default: 1
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/var.scss";

.search {
  background: #72130b;
  .grid {
    height: 160px;
    padding: 32px 0;
    width: 720px;
    margin-left: auto;
    margin-right: auto;
  }
  .h {
    overflow: hidden;
    .item {
      color: #fff;
      float: left;
      cursor: pointer;
      padding: 4px 8px;
      margin-right: 8px;
      border-radius: 4px;
      &.curr,
      &:hover {
        background: $color;
      }
    }
  }
  .b {
    margin-top: 16px;
    white-space: nowrap;
    .link {
      float: right;
      height: 40px;
      line-height: 40px;
      width: 120px;
      text-align: center;
      background: #000;
      color: #fff;
    }
    .obj {
      overflow: hidden;
      input {
        height: 40px;
        line-height: 40px;
        border: none;
        border-radius: 16px 0 0 16px;
        width: 100%;
      }
    }
  }
}
</style>
