import VueRouter from "vue-router";

import Home from './Home'
import Register from './Register'
import Search from './Search'

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
        },
        {
            path: '/search/:keyword?',
            name: 'Search',
            component: Search,
            meta: { show: true }
        }
    ]
})