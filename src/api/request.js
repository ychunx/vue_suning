import axios from 'axios'

import store from '@/store'

const requests = axios.create({
    baseURL: '/api',
    timeout: 5000
})

requests.interceptors.request.use((config) => {
    if (store.state.Detail.uuid) {
        config.headers.userTempId = store.state.Detail.uuid
    }
    return config
})

requests.interceptors.response.use((res) => {
    return res.data
}, (error) => {
    return Promise.reject(new Error('faile'))
})

export default requests