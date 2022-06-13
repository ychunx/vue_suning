import VueRouter from "vue-router";
import store from "@/store";

// 引入路由配置文件
import routes from "./routes";

let router = new VueRouter({
    routes,
    // 路由跳转后页面滚动至顶部
    scrollBehavior() {
        return { y: 0 }
    }
})

// 路由前置守卫
router.beforeEach(async (to, from, next) => {
    // 从vuex获取token
    let token = store.state.User.token
    // 从vuex获取用户名（登录后才有）
    let name = store.state.User.userInfo.name

    if (token) {
        // 已登录
        // 已登录则不许进入注册和登录页面
        if (to.path == '/login' || to.path == '/register') {
            next('/home')
        } else {
            if (name) {
                next()
            } else {
                // 如果获取不到用户名则让用户重新登录
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    await store.dispatch('logout')
                    next('/login')
                }
            }
        }
    } else {
        // 未登录
        let toPath = to.path
        // 如下页面不能进入，会跳转登录页
        if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
            // 登录后直接跳转到登录前想前往的路由
            next(`/login?redirect=${toPath}`)
        } else {
            // 其余放行
            next()
        }
    }
})

export default router