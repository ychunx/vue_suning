import axios from 'axios'

const mockAjax = axios.create({
    baseURL: '/mock',
    timeout: 5000
})

mockAjax.interceptors.request.use((config) => {
    return config
})

mockAjax.interceptors.response.use((res) => {
    return res.data
}, (error) => {
    return Promise.reject(new Error('faile'))
})

export default mockAjax