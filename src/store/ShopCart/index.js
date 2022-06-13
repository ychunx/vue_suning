import { reqCartList, reqDeleteCart, reqUpdateCheck } from "@/api"

const actions = {
    // 获取购物车数据
    async getCartList({ commit }) {
        let res = await reqCartList()
        if (res.code == 200) {
            commit('GETCARTLIST', res.data)
        }
    },

    // 删除某个产品
    async deleteCart({ commit }, skuId) {
        let res = await reqDeleteCart(skuId)
        if (res.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('falie'))
        }
    },

    // 修改产品选中状态
    async updateCheck({ commit }, { skuId, isChecked }) {
        let res = await reqUpdateCheck(skuId, isChecked)
        if (res.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('falie'))
        }
    },

    // 修改全部产品选中状态
    changeAll({ dispatch, getters }, isChecked) {
        let promiseArr = []
        getters.cartList.cartInfoList.forEach(item => {
            promiseArr.push(dispatch('updateCheck', { skuId: item.skuId, isChecked }))
        })
        // 判断是否所有删除操作都成功
        return Promise.all(promiseArr)
    },

    // 删除选中产品
    deleteAllChecked({ dispatch, getters }) {
        let promiseArr = []
        getters.cartList.cartInfoList.forEach(item => {
            if (item.isChecked) promiseArr.push(dispatch('deleteCart', item.skuId))
        })
        // 判断是否所有删除操作都成功
        return Promise.all(promiseArr)
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