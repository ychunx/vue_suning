import requests from "./request";
//用于banner图的模拟获取数据
import mockRequests from "./mockAjax";

export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })

export const reqBannerList = () => mockRequests.get('/banner')

export const reqSearchInfo = (params) => requests({
    url: '/list',
    method: 'post',
    data: params
})

export const reqGoodsDetail = (skuid) => requests({ url: '/item/' + skuid, method: 'get' })