import { reqGoodsDetail } from "@/api"

const actions = {
    async getGoodsDetail({ commit }, skuid) {
        let res = await reqGoodsDetail(skuid)
        if (res.code == 200) {
            commit('GETGOODSDETAIL', res.data)
        }
    }
}

const mutations = {
    GETGOODSDETAIL(state, data) {
        state.goodsDetail = data
    }
}

const state = {
    goodsDetail: {}
}

const getters = {
    categoryView(state) {
        return state.goodsDetail.categoryView || {}
    },
    skuInfo(state) {
        return state.goodsDetail.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.goodsDetail.spuSaleAttrList || []
    }
}

export default {
    actions,
    mutations,
    state,
    getters
}