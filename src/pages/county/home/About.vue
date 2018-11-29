<template>
    <div class="about">
        <div class="inner">
            <div class="h">
                <div class="cn">我们的祖先是谁</div>
                <div class="en">Who were our ancestors</div>
                <div class="tag">简介</div>
            </div>
            <div class="b" v-text="index_summary.description"></div>
            <div class="f">
                <Carousel loop v-model="zipai" dots="none">
                    <CarouselItem v-for="(v,i) in index_zipai" :key="i">
                        <div class="info">
                            <div class="tit">张氏本支字派：</div>
                            <router-link to="/c/culture_home" class="more">更多>></router-link>
                            <div class="list">
                                <div class="item" v-for="(itm,idx) in v" :key="idx">
                                    <div class="red sub">{{itm[0]}}</div>
                                    <div class="blue sub">{{itm[1]}}</div>
                                    <span>{{itm[2]}}</span>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                </Carousel>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "TopInfo",
    computed: {
        apiList() {
            return this.$store.state.county.apiList;
        }
    },
    data() {
        return {
            zipai: 0,
            index_summary: {},
            index_zipai: []
        };
    },
    mounted: function() {
        this.get_index_summary();
        this.get_index_zipai();
    },
    methods: {
        get_index_summary() {
            this.api
                .get(
                    this.api.county.base + this.apiList.index_summary.apiUrl,
                    {}
                )
                .then(res => {
                    if (res.code == 200) {
                        this.index_summary = res.data;
                    }
                });
        },
        get_index_zipai() {
            this.api
                .get(this.api.county.base + this.apiList.index_zipai.apiUrl, {})
                .then(res => {
                    if (res.code == 200) {
                        let list = res.data;
                        this.index_zipai = this.format_zipai(list);
                    }
                });
        },
        format_zipai(e) {
            let list = e.split(",");
            let obj = list.map(v => {
                let _obj = v ? v.split(";") : [];
                return _obj.map(_v => {
                    return _v.split("|");
                });
            });
            return obj;
        }
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.about {
    margin-bottom: 32px;
    background: #f1f2f3;
    padding: 32px 0;
    display: block;
    width: 100%;
    text-align: center;
    .inner {
        position: relative;
        background: no-repeat 32px top url(../img/aboutbg.png);
    }
    .h {
        text-align: center;
        .cn {
            font-size: 24px;
        }
        .en {
            text-transform: uppercase;
            font-weight: 100;
            font-size: 20px;
        }
        .tag {
            font-size: 20px;
            margin-top: 64px;
        }
    }

    .b {
        overflow: hidden;
        font-size: 14px;
        padding: 32px;
        text-indent: 160px;
        line-height: 30px;
        text-align: left;
        min-height: 210px;
    }

    .f {
        position: absolute;
        left: 16px;
        right: 16px;
        top: 100%;
        margin-top: -20px;
        background: #fff;
        line-height: 48px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        padding: 16px;
        overflow: hidden;
        white-space: nowrap;
        height: 80px;
        .info {
            background: #fff;
        }
        .tit {
            font-size: 24px;
            color: $color;
            font-weight: 700;
            float: left;
        }

        .list {
            overflow: hidden;
            text-align: center;
            height: 48px;

            .item {
                position: relative;
                float: left;
                margin-left: 16px;
                width: 48px;
                height: 48px;
                font-size: 16px;
                font-weight: 700;
                background: url(../img/icon-fontbg.png) no-repeat center / 100%
                    100%;
                .sub {
                    font-size: 10px;
                    line-height: 20px;
                }

                .red {
                    position: absolute;
                    right: 85%;
                    top: 4px;
                    color: $color;
                }

                .blue {
                    position: absolute;
                    right: 85%;
                    bottom: 4px;
                    color: blue;
                }
            }
        }

        .more {
            display: block;
            color: $color;
            float: right;
        }
    }
}
</style>
