import VueRouter from "vue-router";

// 引入路由配置文件
import routes from "./routes";

export default new VueRouter({
    routes,
    // 路由跳转后页面滚动至顶部
    scrollBehavior() {
        return { y: 0 }
    }
})