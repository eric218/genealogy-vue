<template>
    <div class="charity">
        <div class="sort">
            <div class="searchbar">
                <div class="act">搜索</div>
                <input type="text" placeholder="输入搜索关键词">
            </div>
            <div class="item label">排序</div>
            <div class="item curr"><span>按时间</span></div>
            <div class="item"><span>按金额</span></div>
            <div class="item"><span>按地区</span></div>
        </div>
        <Row :gutter="16" class="items">
            <i-col :span="4" v-for="v in 12" :key="v">
                <Card class="item">
                    <div class="img"></div>
                    <div class="name">张三</div>
                    <div class="count">捐款<span>1.00</span>元</div>
                    <div class="act">
                        <span>关注</span>
                        <span>点赞</span>
                    </div>
                </Card>
            </i-col>
        </Row>
        <Page :total="50" />
    </div>
</template>
<script>
export default {
    props: ['list']
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.sort {
  padding: 8px 16px;
  margin: 16px 0;
  overflow: hidden;
  border-radius: 8px;
  background: #eee;
  .searchbar {
    float: right;
    input {
      line-height: 28px;
      padding: 0 8px;
      border-radius: 4px;
      border: 0;
    }
    .act {
      float: right;
      padding: 0 8px;
      background: $color;
      color: #fff;
      border-radius: 4px;
      margin-left: 4px;
    }
  }
  .item {
    float: left;
    width: 80px;
    text-align: center;
    span {
      cursor: pointer;
      padding: 4px 8px;
    }
    &.label {
      text-align: left;
    }
    &.curr,
    &:hover {
      span {
        background: $color;
        color: #fff;
        border-radius: 4px;
      }
    }
  }
}
.items {
  .item {
    text-align: center;
    margin: 8px 0;
    border-radius: 4px;
    .img {
      margin-left: auto;
      margin-right: auto;
      height: 64px;
      width: 64px;
      clear: both;
      background: whitesmoke no-repeat center / cover;
      border-radius: 50%;
    }
    .count {
      span {
        color: $color;
      }
    }
    .act {
      display: flex;
      font-size: 12px;
      justify-content: space-between;
      span {
        padding: 0 8px;
        background: $color;
        color: #fff;
        border-radius: 4px;
      }
    }
  }
}
</style>
