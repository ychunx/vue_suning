import axios from 'axios'

// 引入vuex，是为了判断用户是否登录
import store from '@/store'

const requests = axios.create({
    baseURL: '/api',
    timeout: 5000
})

requests.interceptors.request.use((config) => {
    // 游客
    if (store.state.Detail.uuid) {
        // 设置请求头带有userTempId临时ID
        config.headers.userTempId = store.state.Detail.uuid
    }
    // 用户
    if (store.state.User.token) {
        // 设置请求头带token
        config.headers.token = store.state.User.token
    }
    return config
})

requests.interceptors.response.use((res) => {
    return res.data
}, (error) => {
    return Promise.reject(new Error('faile'))
})

export default requests