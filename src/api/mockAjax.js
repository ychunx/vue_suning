import axios from 'axios'

const mockAjax = axios.create({
    baseURL: '/mock',
    timeout: 5000
})

// 请求拦截器，未使用
mockAjax.interceptors.request.use((config) => {
    return config
})

// 响应拦截器
mockAjax.interceptors.response.use((res) => {
    // 根据返回的数据、需要的是data属性
    return res.data
}, (error) => {
    return Promise.reject(new Error('faile'))
})

export default mockAjax