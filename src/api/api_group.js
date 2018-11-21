import http from './fetch.js';


// 注册
export function register(params = {}) {
    return http({
        url: '/api/user/register',
        method: 'post',
        params: params
    });
}
// 获取手机验证码
// export function getValCode(params = {}) {
//     return http({
//         url: ' api/smscode/send/reg/',
//         method: 'get',
//         params:params
//     });
// }