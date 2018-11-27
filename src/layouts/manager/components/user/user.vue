<template>
    <div class="user">
        <Dropdown @on-click="handleClick">
            <div class="img" :style="api.imgBG(user.picSrc)" :title="user.nickName"></div>
            {{user.nickName}}
            <Icon type="ios-arrow-down"></Icon>
            <DropdownMenu slot="list">
                <DropdownItem name="/u">个人中心</DropdownItem>
                <DropdownItem name="resetPsw">修改密码</DropdownItem>
                <DropdownItem name="isMsgBox" divided>我的消息</DropdownItem>
                <DropdownItem name="/a" v-if="user.role == 1 && user.siteId">联谊会后台管理</DropdownItem>
                <DropdownItem name="/a" v-if="user.role == 2 && user.siteId">省级后台管理</DropdownItem>
                <DropdownItem name="/a" v-if="user.role == 3 && user.siteId">全国后台管理</DropdownItem>
                <DropdownItem name="/a" v-if="user.role == 9">总后台管理</DropdownItem>
                <DropdownItem name="/c" divided>返回首页</DropdownItem>
                <DropdownItem name="logout" divided>退出登录</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
</template>

<script>
export default {
    name: 'User',
    props: {
        userAvator: {
            type: String,
            default: ''
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        },
    },
    methods: {
        handleClick(e) {
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
                            this.$router.replace('/')
                        },
                    });
                    break;
                case 'resetPsw':
                    this.isreset = true;
                    break;
                default:
                    this.$router.push(e)
                    break;
            }
        },
    }
}
</script>
<style lang="scss" scoped>
.user {
  cursor: pointer;
  white-space: nowrap;
  float: right;
  span {
    display: inline-block;
    padding: 0 4px;
    color: #ccc;
    &.btn {
      color: #333;
    }
  }
  .img {
    float: left;
    margin-right: 8px;
    height:24px;
    width: 24px;
    background: no-repeat center / cover;
    margin-top: 20px;
    border-radius: 100%;
  }
  .obj {
    overflow: hidden;
  }
}
</style>
