<template>
    <div class="famous">
        <div class="inner">
            <div class="h">
                <div class="cn">组织架构</div>
                <Divider class="en">Famous</Divider>
            </div>
            <Tabs class="b" value="name_0" :animated="false">
                <TabPane :label="v" :name="'name_'+i" v-for="(v,i) in keys" :key="i">
                    <div class="card">
                        <div class="item" v-for="itm in index_architecture[v]" :key="itm.id">
                            <div class="img" :style="itm.picFileSrc? api.imgBG(itm.picFileSrc):''" :alt="itm.personName"/>
                            <div class="obj">
                                <div class="tit">{{itm.personName}}</div>
                                <div class="tag">{{itm.personTag || '-'}}</div>
                                <div class="intro">{{itm.personSummary}}</div>
                            </div>
                        </div>
                    </div>
                </TabPane>
            </Tabs>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            index_architecture: {},
            keys: [],
            list: []
        };
    },
    computed: {
        apiList() {
            return this.$store.state.county.apiList;
        }
    },
    mounted: function() {
        this.get_index_architecture();
    },
    methods: {
        get_index_architecture() {
            this.api
                .get(
                    this.api.county.base +
                        this.apiList.index_architecture.apiUrl,
                    {}
                )
                .then(res => {
                    if (res.code == 200) {
                        let list = res.data;
                        this.index_architecture = list;
                        this.keys = Object.keys(list);
                        this.list = Object.values(list);
                        console.log(this.list);
                    }
                });
        },
        formatname(e) {
            return JSON.parse(e);
        }
    }
};
</script>
<style lang="scss">
.famous {
    .nav-text {
        text-align: center;
        float: none;
    }
    .ivu-tabs-ink-bar {
        display: none;
    }
}
</style>

<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.famous {
    background: #f1f2f3;
    padding: 32px 0;
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
    .card {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex: 2;
        padding-top: 64px;
    }
    .item {
        width: 320px;
        padding: 16px;
        white-space: nowrap;
        position: relative;
        .img {
            position: absolute;
            border-radius: 100%;
            height: 128px;
            width: 128px;
            top: 0;
            left: 50%;
            margin-left: -70px;
            border: 6px solid #fff;
            background: whitesmoke no-repeat center / cover;
        }

        .obj {
            overflow: hidden;
            color: #fff;
            padding: 80px 16px 32px;
            background: #000 url(../img/bg-famous.png) no-repeat center / cover;
            box-shadow: 0 2px 5px rgba(#000, 0.5);
            border-radius: 32px 1px 32px 1px;
            .tit {
                text-align: center;
                font-size: 16px;
                overflow: hidden;
                height: 32px;
                text-overflow: ellipsis;
            }
            .tag {
                text-align: center;
                font-size: 14px;
                overflow: hidden;
                height: 24px;
                text-overflow: ellipsis;
                position: relative;
                &:after {
                    content: "";
                    position: absolute;
                    left: 45%;
                    right: 45%;
                    bottom: 0;
                    height: 2px;
                }
            }
            .intro {
                white-space: normal;
                height: 96px;
                font-size: 12px;
                line-height: 24px;
                overflow: hidden;
            }
        }
    }
}
</style>
