const checkBrowser = {
    is_neizhi: function () {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            Toast({
                message: '微信浏览器',
                duration: 5000
            })
            return "weixin";
        } else if (ua.indexOf('mqqbrowser') > -1 && ua.indexOf(" qq") < 0) {
            Toast({
                message: 'QQ浏览器',
                duration: 5000
            })
            return "QQ";
        } 
        else if (ua.match(/Alipay/i) == "alipay" && payway == 2) {
            Toast({
                message: 'ALIPAY',
                duration: 5000
            })
            return "alipay";
        } 
        else if (ua.match(/QQ/i) == "qq") {
            //qq浏览器
            Toast({
                message: 'qq',
                duration: 5000
            })
            isQQ = true;
            return;
        }
        return false;
    }()
}
export default checkBrowser;