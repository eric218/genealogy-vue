<template>
    <div class="topbar">
        <div class="brand">
            <div class="img"></div>
            <div class="obj kt">
                <div class="cn">湖北咸宁市崇阳县张氏</div>
                <div class="en">ZHANG COUNTY CONGYANG XIANNING HUBEI</div>
            </div>
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