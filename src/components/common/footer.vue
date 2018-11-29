<template>
    <footer>
        <div class="inner">
            <div class="foot">
                <div class="links">
                    <dl class="item">
                        <dt>关于公司</dt>
                        <dd>
                            <a href="javascript:void(0)">
                                <Icon type="ios-arrow-round-forward"/>
                                <span>公司简介</span>
                            </a>
                        </dd>
                        <dd>
                            <a href="javascript:void(0)">
                                <Icon type="ios-arrow-round-forward"/>
                                <span>公司文化</span>
                            </a>
                        </dd>
                        <dd>
                            <a href="javascript:void(0)">
                                <Icon type="ios-arrow-round-forward"/>
                                <span>公司专利</span>
                            </a>
                        </dd>
                        <dd>
                            <a href="javascript:void(0)">
                                <Icon type="ios-arrow-round-forward"/>
                                <span>核心技术</span>
                            </a>
                        </dd>
                    </dl>
                    <dl class="item">
                        <dt>交流合作</dt>
                        <dd>
                            <a href="javascript:void(0)">
                                <Icon type="ios-arrow-round-forward"/>
                                <span>姓氏新闻</span>
                            </a>
                        </dd>
                        <dd>
                            <a href="javascript:void(0)">
                                <Icon type="ios-arrow-round-forward"/>
                                <span>统谱新闻</span>
                            </a>
                        </dd>
                        <dd>
                            <a href="javascript:void(0)">
                                <Icon type="ios-arrow-round-forward"/>
                                <span>实时新闻</span>
                            </a>
                        </dd>
                        <dd>
                            <a href="javascript:void(0)">
                                <Icon type="ios-arrow-round-forward"/>
                                <span>热门文章</span>
                            </a>
                        </dd>
                    </dl>
                    <dl class="item">
                        <dt>关于我们</dt>
                        <dd>
                            <a href="javascript:void(0)">
                                <Icon type="ios-arrow-round-forward"/>
                                <span>总部成员</span>
                            </a>
                        </dd>
                        <dd>
                            <a href="javascript:void(0)">
                                <Icon type="ios-arrow-round-forward"/>
                                <span>分公司</span>
                            </a>
                        </dd>
                        <dd>
                            <a href="javascript:void(0)">
                                <Icon type="ios-arrow-round-forward"/>
                                <span>姓氏认证</span>
                            </a>
                        </dd>
                    </dl>
                    <dl class="item">
                        <dt>联系我们</dt>
                        <dd>
                            <a href="javascript:void(0)">
                                <Icon type="ios-arrow-round-forward"/>
                                <span>推广合作</span>
                            </a>
                        </dd>
                        <dd>
                            <a href="javascript:void(0)">
                                <Icon type="ios-arrow-round-forward"/>
                                <span>人才招聘</span>
                            </a>
                        </dd>
                        <dd>
                            <a href="javascript:void(0)">
                                <Icon type="ios-arrow-round-forward"/>
                                <span>宝贵意见</span>
                            </a>
                        </dd>
                        <dd>
                            <a href="javascript:void(0)">
                                <Icon type="ios-arrow-round-forward"/>
                                <span>公司地址</span>
                            </a>
                        </dd>
                    </dl>
                </div>
                <div class="post">
                    <div class="item">
                        <input type="text" placeholder="输入您的姓名" v-model="form.name" @keyup.enter="toSubmit">
                    </div>
                    <div class="item">
                        <input type="text" placeholder="输入联系电话" v-model="form.phone" maxlength="11" @keyup.enter="toSubmit">
                    </div>
                    <div class="item">
                        <textarea name id rows="5" placeholder="简要描述您的需求" v-model="form.content"></textarea>
                    </div>
                    <div class="item">
                        <span>联系我们，修谱寻根</span>
                        <button type="button" @click="toSubmit">提交</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyrights">
            <div class="inner">
                <div class="flow">
                    <Poptip trigger="hover">
                        <Icon type="md-add"/>
                        <span>关注我们</span>
                        <div slot="content">
                            <img src="../../assets/img/qrcode.png">
                            <div>微信扫一扫 关注我们</div>
                        </div>
                    </Poptip>
                </div>
                <div class="info">炎黄统谱网Copyright @ 2010 yhtpw.com inc.All rights reserved. 鄂ICP备14014437号-2</div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: "FootBar",
    data() {
        return {
            form: {
                name: "",
                phone: "",
                content: ""
            }
        };
    },
    mounted: function() {},
    methods: {
        toSubmit() {
            if (!this.form.name) {
                this.$Message.warning("请输入您的姓名");
                return;
            }
            if (!this.form.phone) {
                this.$Message.warning("请输入您的联系电话");
                return;
            }
            if (!this.api.isMobile(this.form.phone)) {
                this.$Message.error("请输入正确的手机号");
                return;
            }
            if (!this.form.content) {
                this.$Message.warning("请简要描述您的需求");
                return;
            }
            let url = [this.api.county.base + this.api.county.feeds];
            this.api
                .post(url[0], {
                    siteId: this.$store.state.siteId,
                    name: this.form.name,
                    phone: this.form.phone,
                    content: this.form.content
                })
                .then(res => {
                    if (res.code == 200) {
                        this.$Message.success("提交成功");
                        this.form = {
                            name: "",
                            phone: "",
                            content: ""
                        };
                    } else {
                        this.$Message.error(res.msg);
                    }
                });
        }
    }
};
</script>
<style lang="scss" scoped>
footer {
    background: url(../../assets/img/footer.jpg) no-repeat center;
    position: relative;
    color: #999;
    .foot {
        padding: 32px;
        display: flex;
        justify-content: space-between;
    }
    .links {
        padding: 32px 16px;
        display: flex;
        justify-content: space-between;
        width: 50%;
        dt {
            color: #fff;
            font-size: 16px;
            line-height: 40px;
        }
        a {
            color: rgba(#fff, 0.8);
            display: block;
            font-size: 12px;
            line-height: 32px;
            transform: translateX(-16px);
            transition: 0.3s all;
            i {
                font-size: 16px;
                opacity: 0;
                transition: 0.3s all;
            }
            &:hover {
                transform: translateX(0);
                color: #fff;
                i {
                    opacity: 1;
                }
            }
        }
    }
    .post {
        width: 32%;
        padding: 16px;
        .item {
            display: block;
            clear: both;
            width: 100%;
            padding: 8px 16px;
            line-height: 24px;
            input,
            textarea {
                background: transparent;
                border: 1px solid rgba(#fff, 0.2);
                width: 100%;
                padding: 4px 16px;
                line-height: 24px;
                color: #fff;
            }
            span {
                font-size: 12px;
                line-height: 24px;
            }
            button {
                float: right;
                font-size: 12px;
                border: 0;
                background: rgba(#666, 0.5);
                color: #fff;
                cursor: pointer;
                padding: 0 32px;
                line-height: 24px;
                &:hover {
                    background: rgba(#333, 0.5);
                }
            }
        }
    }
    .copyrights {
        background-color: #212425;
        line-height: 32px;
        text-align: center;
        height: 32px;
        font-size: 12px;
        .inner {
            padding: 0 64px;
            white-space: nowrap;
        }
        .info {
            overflow: hidden;
            text-align: right;
        }
        .flow {
            float: left;
            cursor: pointer;
        }
    }
}
</style>
