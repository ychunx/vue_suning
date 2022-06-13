import { reqAdressInfo, reqOrderInfo } from "@/api"

const actions = {
    // 获取用户地址
    async getUserAddress({ commit }) {
        let res = await reqAdressInfo()
        if (res.code == 200) {
            commit('GETUSERADDRESS', res.data)
        }
    },

    // 获取交易订单信息
    async getOrderInfo({ commit }) {
        let res = await reqOrderInfo()
        if (res.code == 200) {
            commit('GETORDERINFO', res.data)
        }
    }
}

const mutations = {
    GETUSERADDRESS(state, addressList) {
        state.addressList = addressList
    },
    GETORDERINFO(state, orderInfo) {
        state.orderInfo = orderInfo
    }
}

const state = {
    addressList: [],
    orderInfo: {}
}

const getters = {
}

export default {
    actions,
    mutations,
    state,
    getters
}