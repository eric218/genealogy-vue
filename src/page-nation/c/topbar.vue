<template>
    <div class="topbar">
        <div class="brand">
            <div class="img"></div>
            <div class="obj kt">
                <div class="cn">湖北张氏</div>
                <div class="en">凝聚家族向心力</div>
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
<style lang="scss" scoped>
@import '@/assets/css/var.scss';
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
