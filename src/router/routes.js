// 路由配置信息模块

import Home from './Home'
import Register from './Register'
import Search from './Search'
import Detail from './Detail'
import ShopCart from './ShopCart'

export default [
    // showRegister在App.vue控制组件的显示
    {
        path: '*',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: { showRegister: true, showShopCart: true }
    },
    {
        path: '/register',
        component: Register,
        meta: { showRegister: false, showShopCart: true }
    },
    {
        path: '/search/:keyword?',
        name: 'Search',
        component: Search,
        meta: { showRegister: true, showShopCart: true }
    },
    {
        path: '/detail/:skuid',
        component: Detail,
        meta: { showRegister: true, showShopCart: true }
    },
    {
        path: '/shopcart',
        component: ShopCart,
        meta: { showRegister: true, showShopCart: false }
    }
]