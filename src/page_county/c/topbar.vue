<template>
    <div class="topbar">
        <div class="inner">
            <div class="user">
                <span class="btn login" @click="islogin = true">登录</span>
                <span>|</span>
                <span class="btn reg" @click="isreg = true">注册</span>
            </div>
            <div class="welcome">
                <span>欢迎进入「炎黄统谱网」</span>
            </div>
        </div>
        <Modal v-model="islogin" width="480px" class="g-auth" :footer-hide='true'>
            <loginform @urlToReg="urlToReg" />
        </Modal>
        <Modal v-model="isreg" width="480px" class="g-auth" :footer-hide='true'>
            <regform @urlToLogin="urlToLogin" />
        </Modal>
    </div>
</template>
<script>
import loginform from '@/components/auth/login.vue'
import regform from '@/components/auth/reg.vue'
export default {
    name: "Topbar",
    components: {
        loginform,
        regform,
    },
    data() {
        return {
            isreg: false,
            islogin: false,
        };
    },
    mounted: function () {
    },
    methods: {
        urlToReg() {
            this.islogin = false;
            setTimeout(() => {
                this.isreg = true;
            }, 300);
        },
        urlToLogin() {
            this.isreg = false;
            setTimeout(() => {
                this.islogin = true;
            }, 300);
        },
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.topbar {
  position: fixed;
  right: 0;
  width: 100%;
  top: 0;
  z-index: 999;
  background-color: #eee;
  box-shadow: 0 1px 2px rgba(#000, 0.2);
  height: 32px;
  width: 100%;
  line-height: 32px;
  overflow: hidden;
  font-size: 12px;
  .user {
    float: right;
    span {
      display: inline-block;
      cursor: pointer;
      padding: 0 4px;
      color: #ccc;
      &.btn {
        color: #333;
        &:hover {
          color: $color;
        }
      }
    }
  }
}
</style>
