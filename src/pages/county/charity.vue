<template>
    <div class="main">
        <div class="adlinks">
            <img src="./img/culture.jpg" />
        </div>
        <div class="inner">
            <div class="h">
                <div class="cn">慈善公益</div>
                <Divider class="en">Charitable</Divider>
            </div>
            <div class="menus">
                <span class="menu" v-for="(v,i) in menu" :key="i" :class="v.orderIndex == menucurr.orderIndex ? 'curr':''" v-html="v.menuName" @click="chgMenu(i)"></span>
            </div>
            <div class="grid" style="minHeight:450px;">
                <CharityList :url="url" v-if="menucurr && url.length" />
            </div>
        </div>
        <Modal v-model="handleTopay" width="480px" :footer-hide="true" class="g-pay">
            <topay />
        </Modal>
    </div>
</template>
<script>
import CharityList from './list/charity-list';
import topay from '_c/common/topay.vue'
export default {
    name: "Charity",
    components: {
        CharityList,
        topay,
    },
    computed: {
        apiList() {
            return this.$store.state.county.apiList
        },
    },
    data() {
        return {
            menu: [],
            menucurr: {},
            url: '',
            handleTopay: false,
            index_architecture_pay_in_person_3: {},
            index_fund_3: {},
        }
    },
    mounted: function () {
        this.getNav()
        this.get_index_architecture_pay_in_person_3()
        this.get_index_fund_3()
    },
    methods: {
        get_index_architecture_pay_in_person_3() {
            this.api.get(this.api.county.base + this.apiList.index_architecture_pay_in_person_3.apiUrl, {}).then(res => {
                if (res.code == 200) {
                    this.index_architecture_pay_in_person_3 = res.data
                }
            })
        },
        get_index_fund_3() {
            this.api.get(this.api.county.base + this.apiList.index_fund_3.apiUrl, {}).then(res => {
                if (res.code == 200) {
                    this.index_fund_3 = res.data
                }
            })
        },
        getNav() {
            this.api.get(this.api.county.base + this.api.county.common_site_menu, {
                siteId: this.$store.state.siteId,
                menuId: 3,
            }).then(res => {
                if (res.code == 200) {
                    this.menu = res.data
                    this.chgMenu(0)
                }
            })
        },
        chgMenu(e) {
            this.url = ''
            this.menucurr = this.menu[e];
            setTimeout(() => {
                this.url = this.menucurr ? this.api.county.base + this.menucurr.apiUrl : '';
            }, 300);
        },
    },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
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
.menus {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 16px;
  .menu {
    padding: 0 16px;
    margin: 0 4px;
    cursor: pointer;
    line-height: 32px;
    &.curr,
    &:hover {
      background: $color;
      color: #fff;
      border-radius: 16px;
    }
  }
}
</style>
