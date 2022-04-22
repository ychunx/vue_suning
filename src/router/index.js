import VueRouter from "vue-router";

import Home from './Home'
import Register from './register'

export default new VueRouter({
    routes: [
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
        }
    ]
})