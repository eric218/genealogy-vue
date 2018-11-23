<template>
    <div class="topbar">
        <div class="brand">
            <div class="img"></div>
            <div class="obj kt">湖北张氏</div>
        </div>
        <div class="authform">
            <div class="btn login" @click="islogin = true">登录</div>
            <div class="btn reg" @click="isreg = true">注册</div>
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
  position: absolute;
  z-index: 9;
  top: 0;
  right: 0;
  left: 0;
  background: #fafafa;
  background: url(../img/top_bg.png) no-repeat center top;
  height: 300px;
  .brand {
    text-align: center;
    padding-top: 32px;
    .img {
      margin: 0 auto;
      height: 80px;
      width: 80px;
      background: url(../img/logo-white.png) no-repeat center / cover;
    }
    .obj {
      font-size: 28px;
      font-weight: 700;
      color: #fff;
    }
  }

  .authform {
    position: absolute;
    right: 50%;
    top: 20px;
    z-index: 9;
    margin-right: -580px;
    overflow: hidden;

    .btn {
      display: block;
      float: left;
      padding: 0 20px;
      color: #fff;
      margin: 0 1px;
      cursor: pointer;

      &.reg {
        background: #666;
      }

      &.login {
        background: #000;
      }
    }
  }

  .authuser {
    position: absolute;
    right: 50%;
    top: 20px;
    z-index: 9;
    padding: 16px;
    margin-right: -580px;
    white-space: nowrap;
    cursor: pointer;

    .img {
      position: relative;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background: whitesmoke no-repeat center / cover;
      float: left;
      margin-right: 16px;

      .tag {
        position: absolute;
        top: -8px;
        right: -8px;
        font-size: 12px;
        border-radius: 8px;
        line-height: 20px;
        background: #f56c6c;
        min-width: 24px;
        text-align: center;
        color: #fff;
      }
    }

    .obj {
      overflow: hidden;
      line-height: 40px;
      color: #fff;
    }
  }

  &._user {
    background: $color;

    .brand {
      .img {
        width: 320px;
        background: url(../img/logo-white.png) no-repeat center;
      }
    }
  }
}
</style>
