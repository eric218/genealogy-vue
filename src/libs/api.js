import axios from 'axios';

const api = {
    pageSize: 20,
    imghost: 'http://192.168.2.132:8090/',
    server: 'http://192.168.2.179:8090/',
    admin: 'http://192.168.2.179:8050/',
    urls: {
        upload_img: 'fan/uploadFastdfs', //图片上传

        USER_LOGIN: 'home/login', //登录//用户名、密码
        USER_REG: "home/reg01", //注册//用户名、密码、姓氏、地区、
        USER_SMS: 'home/send', //验证码//类型（注册、找回密码）、手机号、新的密码
        PAY_ALI: "pay/aliPay", //支付宝支付//token、支付金额
        PAY_WX: "pay/wechatPay", //微信支付//token、支付金额
        SYS_SITE: '', //网站信息//网站ID、地区、姓氏
        SYS_NAV: 'genogram/fanMenu/getMenuBySiteId', //网站导航栏//网站ID
        //家族文化列表
        //字派列表
        //财政收入、支出
        //捐款名录
        //家族名人
        //家族公告
        //记录家族
        //家族动态
        //家族视频
        //个人视频
        //个人图片
        //个人日志
        //个人说说
        LIST_: 'columnIndustry/commonality',
        LIST_ZIPAI: 'genogram/fanNewsCulture/commonality',


        admin_site_info: 'genogram/admin/fanIndex/getFanIndexInfo', //网站信息--后台
        admin_site_edit: 'genogram/admin/fanIndex/insertOrUpdateFanIndexInfo', //网站信息--修改
        admin_site_withdraw: 'genogram/admin/fanNewsCharity/insertFanIndexFundDrowing', //线上提现
        admin_site_withdraw_list: 'genogram/admin/fanNewsCharity/getFanIndexFundDrowing', //提现记录
        admin_site_outline: 'genogram/admin/fanNewsCharity/insertFanNewsCharityPayIn', //线下捐款

        admin_slider_list: 'genogram/admin/fanIndex/getFanIndexSlidePicList', //轮播图
        admin_slider_edit: 'genogram/admin/fanIndex/insertOrUpdateFanIndexSlidePic', //轮播图修改
        admin_slider_del: 'genogram/admin/fanIndex/deleteFanIndexSlidePic', //轮播图删除

        admin_summarys_list: 'genogram/admin/fanIndex/getFanIndexFamilySummarysPage', //联谊会列表
        admin_summarys_info: 'genogram/admin/fanIndex/getFanIndexFamilySummarys', //联谊会详情
        admin_summarys_edit: 'genogram/admin/fanIndex/insertOrUpdateFanIndexFamilySummarys', //联谊会新增修改
        admin_summarys_drft: 'genogram/admin/fanIndex/insertOrUpdateFanIndexFamilySummarysDrft', //联谊会草稿
        admin_summarys_del: 'genogram/admin/fanIndex/deleteFanIndexFamilySummarys', //联谊会删除

        culture_list: 'genogram/admin/fanMenu/getTitlesByMenuId', //家族文化导航
        culture_zipai_info: 'genogram/admin/fanNewsCulture/getZiPaiDetail', //字派详情
        culture_zipai_edit: 'genogram/admin/fanNewsCulture/addOrUpdateZiPai', //字派添加
        culture_zipai_del: 'genogram/admin/fanNewsCulture/deleteZipaiById', //字派删除

        culture_news_info: 'genogram/admin/fanNewsCulture/getFamilyCultureDetail', //家族文化详情
        culture_news_edit: 'genogram/admin/fanNewsCulture/addOrUpdateCulture', //家族文化添加
        culture_news_drft: 'genogram/admin/fanNewsCulture/addOrUpdateCultureDrft', //家族文化草稿
        culture_news_del: 'genogram/admin/fanNewsCulture/deleteCulturById', //家族文化删除

        charity_list_info: 'genogram/admin/fanNewsCharity/getFanNewsCharityDetail', //财务收支详情
        charity_list_edit: 'genogram/admin/fanNewsCharity/insertOrUpdateFanNewsCharityOut', //财务收支增加
        charity_list_drft: 'genogram/admin/fanNewsCharity/insertOrUpdateFanNewsCharityOutDrft', //财务收支草稿
        charity_list_del: 'genogram/admin/fanNewsCharity/deleteFanNewsCharityOut', //财务收支删除

        industry_info: 'genogram/admin/fanNewsIndustry/getFamilyIndustryDetail', //家族产业详情
        industry_edit: 'genogram/admin/fanNewsIndustry/addOrUpdateIndustry', //家族产业添加
        industry_drft: 'genogram/admin/fanNewsIndustry/addOrUpdateIndustryDrft', //家族产业草稿
        industry_del: 'genogram/admin/fanNewsIndustry/deleteIndustryById', //家族产业删除

        admin_famous_list: 'genogram/admin/fanNewsFamous/getFamilyPersionPage', //家族名人列表
        admin_famous_info: 'genogram/admin/fanNewsFamous/getFamilyPersionDetail', //家族名人详情
        admin_famous_edit: 'genogram/admin/fanNewsFamous/addOrUpdatePersion', //家族名人修改
        admin_famous_drft: 'genogram/admin/fanNewsFamous/addOrUpdateIndustryDrft', //家族名人草稿
        admin_famous_del: 'genogram/admin/fanNewsFamous/deletePersionById', //家族名人删除

        record_list: 'genogram/admin/fanNewsFamilyRecord/selectRecort', //记录家族列表
        record_info: 'genogram/admin/fanNewsFamilyRecord/getFamilyRecord', //记录家族详情
        record_edit: 'genogram/admin/fanNewsFamilyRecord/addOrUpdateRecord', //记录家族修改
        record_drft: 'genogram/admin/fanNewsFamilyRecord/addOrUpdateRecordDrft', //记录家族草稿
        record_del: 'genogram/admin/fanNewsFamilyRecord/deleteRecordById', //记录家族删除

        media_list: 'genogram/admin/fanNewsFamilyRecord/selectRecortVedioPage', //官方视频
        media_info: 'genogram/admin/fanNewsFamilyRecord/getFamilyRecordVedioDetail', //信息
        media_edit: 'genogram/admin/fanNewsFamilyRecord/addOrUpdateVedioRecord', //修改
        media_del: 'genogram/admin/fanNewsFamilyRecord/deleteRecordVedioById', //删除

    },
    post: function (url, data) {
        if (!data.pageNow) {
            data.pageNo = 1
        }
        if (!data.pageSize) {
            data.pageSize = 8
        }
        let params = new URLSearchParams();
        for (let v in data) {
            params.append(v, data[v]);
        }
        return new Promise((resolve, reject) => {
            axios.post(url, params).then(res => {
                console.log(res.data)
                resolve(res.data);
            })
        })
    },
    get: function (url, data) {
        if (!data.pageNo) {
            data.pageNo = 1
        }
        if (!data.pageSize) {
            data.pageSize = 8
        }

        return new Promise((resolve, reject) => {
            axios.get(url, {
                params: data
            }).then(res => {
                console.log(res.data)
                resolve(res.data);
            })
        })
    },
    upload: function (url, data, files) {
        let params = new FormData();
        params.append(files['key'], files['file']);
        for (let v in data) {
            params.append(v, data[v]);
        }
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        return new Promise((resolve, reject) => {
            axios.post(url, params, config).then(res => {
                console.log(res.data)
                resolve(res.data);
            })
        })
    },
    encode: function (_map, _content) {
        _content = '' + _content
        if (!_map || !_content) {
            return _content || ''
        }
        return _content.replace(_map.r, function ($1) {
            var _result = _map[!_map.i ? $1.toLowerCase() : $1]
            return _result != null ? _result : $1
        });
    },
    object2query: function (obj) {
        let keys = Object.keys(obj)
        let queryArray = keys.map(item => {
            return `${item}=${encodeURIComponent(obj[item])}`
        })
        return queryArray.join('&')
    },
    mergeObject: function (dest, src) {
        if (typeof dest !== 'object' || dest === null) {
            dest = Object.create(null)
        }
        dest = Object.assign(Object.create(null), dest, src)
        return dest
    },
    mergeVueObject: function (dest, src) {
        let keys = Object.keys(src)
        keys.forEach(item => {
            if (typeof src[item] !== 'undefined') {
                Vue.set(dest, item, src[item])
            }
        })
        return dest
    },
    getUrlParam: function (name, old_url = window.location.search) {
        var new_url = encodeURI(old_url);
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = new_url.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        } else {
            return null;
        }
    },
    isMobile: function (phone) {
        if (!(/^1[3456789]\d{9}$/.test(phone))) {
            return false;
        } else {
            return true;
        }
    },
    imgurl: function (e) {
        if (!e) {
            return '';
        }
        return e.indexOf('http') > -1 ? e : this.imghost + e;
    },
    imgBG: function (e) {
        return 'backgroundImage:url(' + this.imgurl(e) + ')';
    },
    regConfig: function () {
        this.ajax('jssdk', {
            'url': window.location.href
        }).then(res => {
            if (res.success) {
                this.initjsconf(res.data.AppId, res.data.Signature, res.data.NonceStr, res.data.Timestamp);
            }
        })
    },
    initjsconf: function (appId, signature, nonceStr, timestamp) {
        wx.config({
            debug: false,
            appId: appId,
            timestamp: timestamp,
            nonceStr: nonceStr,
            signature: signature,
            jsApiList: ["hideOptionMenu", "showMenuItems", 'onMenuShareTimeline', 'onMenuShareAppMessage',
                'onMenuShareQQ', 'onMenuShareWeibo', 'hideMenuItems', 'showMenuItems',
                'hideAllNonBaseMenuItem', 'showAllNonBaseMenuItem', 'chooseImage', 'previewImage',
                'uploadImage', 'downloadImage', 'getNetworkType', 'openLocation', 'getLocation',
                'hideOptionMenu', 'showOptionMenu', 'closeWindow', 'scanQRCode', 'chooseWXPay',
                'openProductSpecificView', 'addCard', 'chooseCard', 'openCard'
            ]
        });
    },
    onBridgeReady: function (data, url) {
        if (typeof WeixinJSBridge == "undefined") {
            if (document.addEventListener) {
                document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady, false);
            } else if (document.attachEvent) {
                document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady);
                document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady);
            }
        } else {
            this.onBridge(data, url);
        }
    },
    onBridge: function (data, url) {
        WeixinJSBridge.invoke('getBrandWCPayRequest', JSON.parse(data), function (res) {
            if (res.err_msg == "get_brand_wcpay_request:ok") {
                if (!url) {
                    location.reload();
                } else {
                    location.href = url
                }
            }
        });
    },
    chooseImage: function () {
        return new Promise((resolve, reject) => {
            wx.ready(() => {
                wx.chooseImage({
                    count: 1,
                    sizeType: ['compressed'],
                    sourceType: ['album', 'camera'],
                    success: suc => {
                        resolve(suc);
                    },
                    fail: err => {
                        reject(err);
                    }
                });
            })
        })
    },
    uploadImage: function (e) {
        return new Promise((resolve, reject) => {
            wx.uploadImage({
                localId: e,
                isShowProgressTips: 1,
                success: suc => {
                    resolve(suc);
                },
                fail: err => {
                    reject(err);
                }
            });
        })
    },
    //画布转图片
    convertCanvasToImage(canvas) {
        let image = new Image();
        image.src = canvas.toDataURL("image/png");
        return image.src;
    },
    //base64转文件
    convertBase64UrlToBlob(urlData) {
        var bytes = window.atob(urlData.split(',')[1]);
        var ab = new ArrayBuffer(bytes.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < bytes.length; i++) {
            ia[i] = bytes.charCodeAt(i);
        }
        return new Blob([ab], {
            type: 'image/png'
        });
    },
    toPagedown() {
        document.getElementsByClassName('page')[0].scrollTop = document.getElementsByClassName('page')[0].scrollHeight
        setTimeout(() => {
            document.getElementsByClassName('page')[0].scrollTop = document.getElementsByClassName('page')[0].scrollHeight
        }, 500);
    },
};
export default api;