import { reqSearchInfo } from "@/api"

const actions = {
    // 获取搜索页数据
    async getSearchInfo({ commit }, params) {
        let res = await reqSearchInfo(params)
        if (res.code == 200) {
            commit('GETSEARCHINFO', res.data)
        }
    }
}

const mutations = {
    GETSEARCHINFO(state, searchInfo) {
        state.searchInfo = searchInfo
    }
}

const state = {
    searchInfo: {}
}

const getters = {
    goodsList(state) {
        return state.searchInfo.goodsList || []
    },
    trademarkList(state) {
        return state.searchInfo.trademarkList || []
    },
    attrsList(state) {
        return state.searchInfo.attrsList || []
    }
}

export default {
    actions,
    mutations,
    state,
    getters
}