import { reqGoodsDetail, reqChangeShopCart } from "@/api"
import { getUuid } from '@/utils/uuid'

const actions = {
    async getGoodsDetail({ commit }, skuid) {
        let res = await reqGoodsDetail(skuid)
        if (res.code == 200) {
            commit('GETGOODSDETAIL', res.data)
        }
    },
    // 更新购物车
    async changeShopCart({ commit }, { skuId, skuNum }) {
        let res = await reqChangeShopCart(skuId, skuNum)
        if (res.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    }
}

const mutations = {
    GETGOODSDETAIL(state, data) {
        state.goodsDetail = data
    }
}

const state = {
    goodsDetail: {},
    // 游客身份ID
    uuid: getUuid()
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