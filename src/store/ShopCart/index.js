import { reqCartList } from "@/api"

const actions = {
    async getCartList({ commit }) {
        let res = await reqCartList()
        if (res.code == 200) {
            commit('GETCARTLIST', res.data)
        }
    }
}

const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList
    }
}

const state = {
    cartList: []
}

const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    }
}

export default {
    actions,
    mutations,
    state,
    getters
}