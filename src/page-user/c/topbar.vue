<template>
    <div class="topbar _user">
        <div class="brand">
            <div class="img"></div>
        </div>
        <div class="authuser">
            <div class="img">
                <Avatar icon="ios-person" size="large" />
            </div>
            <div class="obj">
                <Dropdown trigger="click">
                    张三丰
                    <Icon type="ios-arrow-down"></Icon>
                    <DropdownMenu slot="list">
                        <DropdownItem>
                            <div @click="handleMsgBox = true">我的消息</div>
                        </DropdownItem>
                        <DropdownItem>
                            <a href="http://192.168.2.106:4445/" target="_blank">后台管理</a>
                        </DropdownItem>
                        <DropdownItem>
                            <router-link to='/c/Home' style="display:block">返回首页</router-link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
        <Modal v-model="islogin" width="400px" class="g-auth" :footer-hide="true">
            <loginform />
        </Modal>
        <Modal v-model="isreg" width="400px" class="g-auth" :footer-hide="true">
            <regform />
        </Modal>
        <Modal title="消息列表" v-model="handleMsgBox" width="640px" :footer-hide="true">
            <msgBox />
        </Modal>
    </div>
</template>
<script>
import loginform from '@/components/auth/login.vue'
import regform from '@/components/auth/reg.vue'
import msgBox from '@/components/list/msgBox.vue'
export default {
    components: {
        loginform,
        regform,
        msgBox
    },
    data() {
        return {
            isreg: false,
            islogin: false,
            handleMsgBox: false,
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
  background: #fafafa;
  height: 120px;
  .brand {
    position: absolute;
    left: 50%;
    top: 20px;
    z-index: 9;
    margin-left: -580px;
    white-space: nowrap;
    overflow: hidden;

    .img {
      height: 80px;
      width: 80px;
      background: url(../../assets/img/logo.png) no-repeat center / auto 100%;
      margin-right: 16px;
      float: left;
    }

    .obj {
      overflow: hidden;
      font-size: 24px;

      .cn {
        font-weight: 700;
        letter-spacing: 3px;
      }

      .en {
        font-size: 16px;
      }
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
        background: url(../../assets/img/logo-white.png) no-repeat center;
      }
    }
  }
}
</style>
