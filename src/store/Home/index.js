import { reqCategoryList } from "@/api"
import { reqBannerList } from "@/api"

const actions = {
    async categoryList(context) {
        let res = await reqCategoryList()
        if (res.code == 200) {
            context.commit('CATEGORYLIST', res.data)
        }
    },
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

const getter = {}

export default {
    actions,
    mutations,
    state,
    getter
}