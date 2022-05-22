// 路由配置信息模块
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Search from './Search'
import Detail from './Detail'
import ShopCart from './ShopCart'
import Trade from './Trade'
import Pay from './Pay'

export default [
    // showRegister在App.vue控制组件的显示
    {
        path: '*',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            showShortcut: true,
            showHeader: true,
            showNav: true,
            showFooterBox: true,
            showFooter: true,
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            showShortcut: false,
            showHeader: false,
            showNav: false,
            showFooterBox: false,
            showFooter: true,
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            showShortcut: false,
            showHeader: false,
            showNav: false,
            showFooterBox: false,
            showFooter: true,
        }
    },
    {
        path: '/search/:keyword?',
        name: 'Search',
        component: Search,
        meta: {
            showShortcut: true,
            showHeader: true,
            showNav: true,
            showFooterBox: true,
            showFooter: true,
        }
    },
    {
        path: '/detail/:skuid',
        component: Detail,
        meta: {
            showShortcut: true,
            showHeader: true,
            showNav: true,
            showFooterBox: true,
            showFooter: true,
        }
    },
    {
        path: '/shopcart',
        component: ShopCart,
        meta: {
            showShortcut: true,
            showHeader: true,
            showNav: false,
            showFooterBox: false,
            showFooter: true,
        }
    },
    {
        path: '/trade',
        component: Trade,
        meta: {
            showShortcut: true,
            showHeader: false,
            showNav: false,
            showFooterBox: false,
            showFooter: false,
        }
    },
    {
        path: '/pay',
        component: Pay,
        meta: {
            showShortcut: false,
            showHeader: false,
            showNav: false,
            showFooterBox: false,
            showFooter: false,
        }
    },
]