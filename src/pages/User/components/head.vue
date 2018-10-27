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
                            <router-link to='/Home' style="display:block">返回首页</router-link>
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