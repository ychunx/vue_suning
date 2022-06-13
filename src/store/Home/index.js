// 引入需要的api
import { reqCategoryList, reqBannerList } from "@/api"

const actions = {
    // 获取分类列表数据
    async categoryList(context) {
        let res = await reqCategoryList()
        if (res.code == 200) {
            context.commit('CATEGORYLIST', res.data)
        }
    },

    // 获取banner图mock数据
    async bannerList(context) {
        let res = await reqBannerList()
        if (res.code == 200) {
            context.commit('BANNERLIST', res.data)
        }
    }
}

const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
}

const state = {
    categoryList: [],
    bannerList: []
}

const getters = {}

export default {
    actions,
    mutations,
    state,
    getters
}