import { reqCode, reqRegister, reqLogin, reqUserInfo, reqLogout } from "@/api"
import { setToken, getToken, removeToken } from "@/utils/token"

const actions = {
    // 获取验证码
    async getCode({ commit }, phone) {
        let res = await reqCode(phone)
        if (res.code == 200) {
            commit('GETCODE', res.data)
        }
    },
    // 注册
    async register({ commit }, data) {
        let res = await reqRegister(data)
        if (res.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('falie'))
        }
    },
    // 登录
    async login({ commit }, data) {
        let res = await reqLogin(data)
        if (res.code == 200) {
            commit('LOGIN', res.data.token)
            setToken(res.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('falie'))
        }
    },
    // 获取已登录的用户信息
    async getUserInfo({ commit }) {
        let res = await reqUserInfo()
        if (res.code == 200) {
            commit('GETUSERINFO', res.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('falie'))
        }
    },
    // 退出登录
    async logout({ commit }) {
        let res = await reqLogout()
        if (res.code == 200) {
            commit('LOGOUT', res.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('falie'))
        }
    }
}

const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    LOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, data) {
        state.userInfo = data
    },
    // 退出登录时清除token、用户信息
    LOGOUT(state) {
        state.token = ''
        state.userInfo = {}
        removeToken()
    }
}

const state = {
    code: '',
    // 第一次打开网页也会获取当前已登录token
    token: getToken(),
    userInfo: {}
}

const getters = {
}

export default {
    actions,
    mutations,
    state,
    getters
}