import axios from "axios"
import qs from "qs"
import { Toast } from 'mint-ui'


// 根据域名判断请求的接口
const baseUrl = location.href.includes('localhost')? '': '';

// 允许带上cookie
axios.defaults.withCredentials = true;
const instance = axios.create({
    timeout: 1000,
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    withCredentials:true
});

// 请求拦截器
axios.interceptors.request.use((config) => {
    let loginKey = localStorage.getItem('Authorization');
    if (loginKey) {
        config.headers['Authorization'] = loginKey;
    }
    return config;
});

// 添加响应拦截器
axios.interceptors.response.use((res) => {
    // 拦截回传的数据，判断是否合法
    if (!res.data.success && res.data.errCode) {
        Toast(returnErrorStr(res.data.errCode));
        return {
            success: false,
            data: res.data.data
        };
    }
    return res.data;
}, (error) => {
    if (error.response) {
        if (error.response.status === 401) {
            return {
                success: false,
                notLogin: true
            };
        } else {
            Toast('系统繁忙');
            return {
                success: false
            };
        }
    } else {
        Toast('连接失败');
        return {
            success: false
        };
    }
    
    // 对响应错误做处理
    // return Promise.reject(error);
});
// data的数据格式如：
// data = {method:"",params:{}}   method：string 请求的方式  params:Obj  请求的数据参数
function http(data = {url: '', method: '', params: {}}, withQs = true ) {
    if (data.method === "post") {
        const fParams = withQs? qs.stringify(data.params):data.params;
        return axios.post(baseUrl + data.url, fParams);
        // get
    } else if (data.method === "get") {
        return axios.get(baseUrl + data.url, {
            params: data.params
        })
    }
}
function returnErrorStr(errCode){
    switch(errCode) {
        case 'SYS.0001':
        return '系统错误';

        case 'SYS.0002':
        return '参数错误';

        case 'CAPTCHA.0001':
        return '2分钟之内不能重复发送验证码，请稍后再试';

        case 'CAPTCHA.0002':
        return '验证码无效';

        case 'CAPTCHA.0003':
        return '验证码过期';
        
        case 'CAPTCHA.0004':
        return '验证码输入次数超过5次';

        case 'CAPTCHA.0006':
        return '验证码过期';

        case 'HTTP.0001':
        return '系统错误';

        case 'HTTP.0002':
        return '系统错误';

        case 'IMG.0001':
        return '图片格式不正确';

        case 'USER.0001':
        return '用户不存在';

        case 'USER.0002':
        return '用户未授权';

        case 'USER.0003':
        return '密码错误';

        case 'USER.0004':
        return '该账号已经注册';

        case 'USER.0005':
        return '没有邀请码';
        
        case 'USER.0006':
        return '未设置资金密码';

        case 'USER.0007':
        return '密码格式不正确';

        case 'USER.0012':
        return '用户名已存在';

        case 'DB.0001':
        return '数据库错误';

        case 'DB.0002':
        return '数据库错误';

        case 'ACCT.0001':
        return '账户已经存在';

        case 'ACCT.0002':
        return '余额不足';

        case 'PIRCE.0001':
        return '交易已超出浮动价格';

        default:
        break;
    }
}
export default http;