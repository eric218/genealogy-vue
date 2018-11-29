<template>
    <div class="page-user">
        <Topbar/>
        <NavBar/>
        <Usergrid/>
        <router-view/>
        <FootBar/>
    </div>
</template>
<script>
import { Topbar, Usergrid, NavBar, FootBar } from "./c";
export default {
    components: {
        Topbar,
        Usergrid,
        NavBar,
        FootBar
    },
    data() {
        return {};
    },
    computed: {},
    mounted: function() {},
    methods: {},
    beforeCreate() {}
};
</script>

<style lang="scss">
@import "@/assets/css/var.scss";
.page-user {
    .sub {
        padding: 32px 0 0;
        background-color: whitesmoke;

        .inner {
            display: flex;
            justify-content: space-between;
        }

        .grid {
            width: 48%;
            background: #fff;
            height: 400px;

            .h {
                font-size: 16px;
                line-height: 40px;
                padding: 0 16px;

                .tit {
                    border-bottom: 1px solid #eee;
                    padding-left: 24px;
                }
            }

            .b {
                overflow-y: auto;
                height: 360px;

                .text {
                    padding: 16px;
                }

                .item {
                    white-space: nowrap;
                    overflow: hidden;
                    padding: 8px 16px;

                    .img {
                        width: 64px;
                        height: 64px;
                        float: left;
                        margin-right: 16px;
                        background: whitesmoke no-repeat center / cover;
                        border-radius: 50%;
                    }

                    .obj {
                        overflow: hidden;

                        .name {
                            font-size: 16px;
                        }

                        .intro {
                            color: #666;
                        }

                        .tag {
                            overflow: hidden;
                            color: #666;

                            i {
                                color: #999;
                                margin-left: 16px;
                            }

                            .appreciate {
                                float: right;
                            }

                            .mark {
                                float: right;
                            }
                        }
                    }
                }
            }
        }
    }

    .suc {
        background: whitesmoke;
        padding: 32px 0;

        & + .suc {
            padding-top: 0;
        }

        .grid {
            background: #fff;
        }

        .h {
            font-size: 16px;
            line-height: 48px;
            padding: 0 16px;

            .tit {
                border-bottom: 1px solid #eee;
                padding-left: 24px;
            }

            .more {
                float: right;
                font-size: 12px;
                cursor: pointer;
                display: block;
                &.link {
                    color: $color;
                }
            }
        }

        .b {
            display: flex;
            padding: 16px;
            justify-content: space-between;

            .item {
                width: 19%;

                .img {
                    height: 120px;
                    width: 100%;
                    background: whitesmoke no-repeat center / cover;
                }

                .obj {
                    white-space: nowrap;
                    line-height: 24px;

                    .total {
                        float: right;
                        color: #999;
                        font-size: 12px;
                    }

                    .tit {
                        overflow: hidden;
                    }
                }
            }
        }
    }
}
</style>
