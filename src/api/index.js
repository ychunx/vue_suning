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

export const reqCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })

export const reqRegister = (data) => requests({ url: '/user/passport/register', data, method: 'post' })

export const reqLogin = (data) => requests({ url: '/user/passport/login', data, method: 'post' })

export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' })

export const reqLogout = () => requests({ url: '/user/passport/logout', method: 'get' })

export const reqAdressInfo = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' })

export const reqOrderInfo = () => requests({ url: '/order/auth/trade', method: 'get' })

export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'post' })

export const reqPayInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' })

export const reqPayStatus = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get' })

export const reqMyOrderList = (pageNo, limit) => requests({ url: `/order/auth/${pageNo}/${limit}`, method: 'get' })