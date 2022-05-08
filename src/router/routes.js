// 路由配置信息模块

import Home from './Home'
import Register from './Register'
import Search from './Search'
import Detail from './Detail'

export default [
    {
        path: '*',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: { show: true }
    },
    {
        path: '/register',
        component: Register,
        meta: { show: false }
    },
    {
        path: '/search/:keyword?',
        name: 'Search',
        component: Search,
        meta: { show: true }
    },
    {
        path: '/detail/:skuid',
        component: Detail,
        meta: { show: true }
    }
]