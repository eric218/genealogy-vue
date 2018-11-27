<template>
    <div class="list">
        <div class="h">
            <div class="cn">祖先名人</div>
            <Divider class="en">Ancestors</Divider>
        </div>
        <div class="b">
            <div class="item" v-for="v in 10" :key="v" @click="chgCurr(v)">
                <div class="img"></div>
                <div class="obj">张三</div>
            </div>
        </div>
        <Page :total="total" @on-change="chgPage" :page-size="8" />
    </div>
</template>
<script>
export default {
    name: "ancestoreslist",
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
                siteId: this.$store.state.siteId,
                pageNo: this.page
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
        chgCurr(e) {
            this.$emit('chgCurr', e);
        },
    },
    props: ['url']
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.list {
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
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
    .item {
      margin-bottom: 32px;
      width: 216px;
      background: #fff;
      padding: 16px;
      border-radius: 4px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
      .img {
        width: 184px;
        height: 184px;
        background: rgba(#09c, 0.1) no-repeat center;
      }
    }
  }
}
</style>
