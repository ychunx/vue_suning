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

router.beforeEach(async (to, from, next) => {
    let token = store.state.User.token
    let name = store.state.User.userInfo.name

    if (token) {
        if (to.path == '/login' || to.path == '/register') {
            next('/home')
        } else {
            if (name) {
                next()
            } else {
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
        let toPath = to.path
        if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
            // 登陆后跳转到未登录时想去的路由
            next(`/login?redirect=${toPath}`)
        } else {
            next()
        }
    }
})

export default router