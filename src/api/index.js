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

export const reqGoodsDetail = (skuId) => requests({ url: '/item/' + skuId, method: 'get' })

export const reqChangeShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' })

export const reqDeleteCart = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })

export const reqUpdateCheck = (skuId, ischecked) => requests({ url: `/cart/checkCart/${skuId}/${ischecked}`, method: 'get' })