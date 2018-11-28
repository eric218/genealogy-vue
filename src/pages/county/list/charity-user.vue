<template>
  <div class="charity">
    <div class="sort">
      <div class="searchbar">
        <div class="link">搜索</div>
        <input
          type="text"
          placeholder="输入搜索关键词"
          @keyup.enter="toSubmit"
        >
      </div>
      <div class="item label">排序</div>
      <div class="item curr"><span>按时间</span></div>
      <div class="item"><span>按金额</span></div>
    </div>
    <Row
      :gutter="16"
      class="items"
    >
      <i-col
        :span="4"
        v-for="(v,i) in list"
        :key="i"
      >
        <Card class="item">
          <div
            class="img"
            :style="api.imgBG(v.allUserLogin.picSrc)"
          ></div>
          <div class="name">{{v.allUserLogin.nickName}}</div>
          <div class="count">捐款<span>{{v.fanNewsCharityPayIn.payAmount}}</span>元</div>
        </Card>
      </i-col>
    </Row>
    <Page
      :total="total"
      @on-change="chgPage"
      :page-size="12"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      page: 1,
      total: 0,
    }
  },
  watch: {
    url: function (curVal, oldVal) {
      if (curVal != oldVal) {
        this.getList();
      }
    },
  },
  mounted: function () {
    this.getList()
  },
  methods: {
    getList() {
      this.api.get(this.url, {
        pageNo: this.page,
        pageSize: 12
      }).then(res => {
        if (res.code == 200) {
          this.list = res.data.records
          this.total = res.data.total
        }
      })
    },
    chgPage(e) {
      this.page = e;
      this.getList();
    },
  },
  props: ['url']
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
  }
}
</style>
