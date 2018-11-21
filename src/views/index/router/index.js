import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const index = (resolve) => {
    import('../components/index/index.vue').then((module) => {
        resolve(module)
    })
}
const activityList = (resolve) => {
    import('../components/index/list.vue').then((module) => {
        resolve(module)
    })
}
const details = (resolve) => {
    import('../components/index/details.vue').then((module) => {
        resolve(module)
    })
}
const center = (resolve) => {
    import('../components/index/center.vue').then((module) => {
        resolve(module)
    })
}
const register = (resolve) => {
    import('../components/register/register.vue').then((module) => {
        resolve(module)
    })
}
const login = (resolve) => {
    import('../components/register/login.vue').then((module) => {
        resolve(module)
    })
}




const routerGroup = new Router({
    linkActiveClass: "active",
    mode: "hash",
    routes: [
        {
        path: '/',
        redirect: '/activityList'
        },
        {
            path:'/activityList',
            name:"activityList",
            component: activityList,
            meta: {
                title:"活动列表",
                keepAlive:false
            }
        },
        {
            path: '/index',
            component: index,
            name:"index",
            meta: {
                title: '活动首页',
                keepAlive: false
            },
        },{
            path:"/details",
            name:"details",
            component:details,
            meta: {
                title:"选手详情",
                keepAlive: false
            } 
        },{
            path:"/center",
            name:"center",
            component:center,
            meta:{
                title:"我的",
                keepAlive:false
            }
        },
        // 注册
        {
            path: '/register',
            component: register,
            meta: {
                title: '注册',
                keepAlive: false
            },
        },
        {
            path: '/login',
            component: login,
            name:"/login",
            meta: {
                title:'登录',
                keepAlive:false
            }
        }
    ]
})

// 需要缓存的页面有两个设置
// 1、path添加至keepAliveGroup中
// 2、routes中对应的位置将keepAlive设为true
const keepAliveGroup = ['index'];

// 需要每次返回都刷新的页面
const refreshGroup = ['/systemUpgrade'];

// index
export default {
    routerGroup,
    keepAliveGroup,
    refreshGroup
}