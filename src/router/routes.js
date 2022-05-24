// 路由配置信息模块
// import Home from './Home'
// import Register from './Register'
// import Login from './Login'
// import Search from './Search'
// import Detail from './Detail'
// import ShopCart from './ShopCart'
// import Trade from './Trade'
// import Pay from './Pay'
// import Center from './Center'

// import MyOrder from './Center/MyOrder'
// import GroupOrder from './Center/GroupOrder'

export default [
    {
        path: '*',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('./Home'),
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
        component: () => import('./Register'),
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
        component: () => import('./Login'),
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
        component: () => import('./Search'),
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
        component: () => import('./Detail'),
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
        component: () => import('./ShopCart'),
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
        component: () => import('./Trade'),
        meta: {
            showShortcut: true,
            showHeader: false,
            showNav: false,
            showFooterBox: false,
            showFooter: false,
        },
        beforeEnter: (to, from, next) => {
            if (from.path == '/shopcart') {
                next()
            } else {
                // 回到from
                next(false)
            }
        }
    },
    {
        path: '/pay',
        component: () => import('./Pay'),
        meta: {
            showShortcut: false,
            showHeader: false,
            showNav: false,
            showFooterBox: false,
            showFooter: false,
        },
        beforeEnter: (to, from, next) => {
            if (from.path == '/trade') {
                next()
            } else {
                // 回到from
                next(false)
            }
        }
    },
    {
        path: '/center',
        component: () => import('./Center'),
        meta: {
            showShortcut: true,
            showHeader: false,
            showNav: false,
            showFooterBox: false,
            showFooter: true,
        },
        children: [
            {
                path: '/center',
                redirect: '/center/myorder'
            },
            {
                path: 'myorder',
                component: () => import('./Center/MyOrder'),
                meta: {
                    showShortcut: true,
                    showHeader: false,
                    showNav: false,
                    showFooterBox: false,
                    showFooter: true,
                }
            },
            {
                path: 'grouporder',
                component: () => import('./Center/GroupOrder'),
                meta: {
                    showShortcut: true,
                    showHeader: false,
                    showNav: false,
                    showFooterBox: false,
                    showFooter: true,
                }
            }
        ]
    },
]