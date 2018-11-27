<template>
    <div class="charity">
        <div class="sort">
            <div class="searchbar">
                <div class="link">搜索</div>
                <input type="text" placeholder="输入搜索关键词">
            </div>
            <Select v-model="model" style="width:120px;">
                <Option value="0">全部</Option>
                <Option value="1">公开</Option>
                <Option value="2">密码访问</Option>
            </Select>
            <Select v-model="model1" style="width:200px;">
                <Option value="0">选择地区</Option>
            </Select>
        </div>
        <Row :gutter="16" class="items">
            <i-col :span="4" v-for="v in 12" :key="v">
                <Card class="item">
                    <div class="img">
                        <img src="http://iph.href.lu/60x90" />
                    </div>
                    <div class="name">张三</div>
                    <div class="site">区域：乌鲁木齐</div>
                    <div class="date">创建时间：2018-10-10</div>
                </Card>
            </i-col>
        </Row>
        <Page :total="50" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            model: 0,
            model1: 0
        }
    },
    props: ['list']
}
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
    .link {
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
    text-align: left;
    font-size: 12px;
    .img {
      width: 100%;
    }
    .name {
      font-size: 14px;
    }
    .site {
      color: #999;
    }
    .date {
      color: #999;
    }
  }
}
</style>
