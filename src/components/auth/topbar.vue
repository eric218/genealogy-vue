<template>
    <div class="topbar">
        <div class="inner">
            <div class="user" v-if="user.token">
                <div class="img">
                    <Avatar :src="user.picSrc" size="small" />
                </div>
                <div class="obj">
                    <Dropdown trigger="click" @on-click="onDrop">
                        {{user.nickName}}
                        <Icon type="ios-arrow-down"></Icon>
                        <DropdownMenu slot="list">
                            <DropdownItem name="/u">个人中心</DropdownItem>
                            <DropdownItem name="isMsgBox" divided>我的消息</DropdownItem>
                            <DropdownItem name="/a">联谊会后台管理</DropdownItem>
                            <DropdownItem name="/c" divided>返回首页</DropdownItem>
                            <DropdownItem name="logout" divided>退出登录</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>

            <div class="user" v-else>
                <span class="btn login" @click="islogin = true">登录</span>
                <span>|</span>
                <span class="btn reg" @click="isreg = true">注册</span>
            </div>
            <div class="welcome">
                <span>欢迎进入「炎黄统谱网」</span>
            </div>
        </div>
        <Modal v-model="islogin" width="480px" class="g-auth" :footer-hide='true'>
            <loginform @urlToReg="urlToReg" @closedialog="closedialog" />
        </Modal>
        <Modal v-model="isreg" width="480px" class="g-auth" :footer-hide='true'>
            <regform @urlToLogin="urlToLogin" @closedialog="closedialog" />
        </Modal>
        <Modal title="消息列表" v-model="isMsgBox" width="640px" :footer-hide="true">
            <msgBox />
        </Modal>
    </div>
</template>
<script>
import loginform from './login'
import regform from './reg'
import msgBox from './msgBox'
export default {
    name: "Topbar",
    components: {
        loginform,
        regform,
        msgBox
    },
    data() {
        return {
            isreg: false,
            islogin: false,
            isMsgBox: false,
        };
    },
    computed: {
        user() {
            return this.$store.state.user
        },
    },
    mounted: function () {
    },
    methods: {
        onDrop(e) {
            switch (e) {
                case 'isMsgBox':
                    this.isMsgBox = true;
                    break;
                case 'logout':
                    this.$Modal.confirm({
                        title: '提示',
                        content: '确定退出账号？',
                        onOk: () => {
                            this.$store.commit('updateUser', [])
                        },
                    });
                    break;
                default:
                    this.$router.push(e)
                    break;
            }
        },
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
        closedialog() {
            this.islogin = false;
            this.isreg = false;
        }
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
  font-size: 12px;
  .user {
    white-space: nowrap;
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
    .img {
      float: left;
      margin-right: 16px;
    }
    .obj {
      overflow: hidden;
    }
  }
}
</style>
