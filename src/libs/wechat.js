export default {
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
}