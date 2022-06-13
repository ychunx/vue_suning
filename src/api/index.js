// 引入自封装axios
import requests from "./request";
// 用于获取banner图的模拟数据
import mockRequests from "./mockAjax";

// 获取平台分类数据
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })

// 获取banner图的模拟数据
export const reqBannerList = () => mockRequests.get('/banner')

// 根据params参数获取搜索结果商品列表
export const reqSearchInfo = (params) => requests({
    url: '/list',
    method: 'post',
    data: params
})

// 根据商品ID获取详情
export const reqGoodsDetail = (skuId) => requests({ url: '/item/' + skuId, method: 'get' })

// 更改购物车数据
export const reqChangeShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

// 获取购物车数据
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' })

// 删除购物车商品
export const reqDeleteCart = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })

// 更改购物车商品勾选状态
export const reqUpdateCheck = (skuId, ischecked) => requests({ url: `/cart/checkCart/${skuId}/${ischecked}`, method: 'get' })

// 根据手机号码申请验证码
export const reqCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })

// 注册
export const reqRegister = (data) => requests({ url: '/user/passport/register', data, method: 'post' })

// 登录
export const reqLogin = (data) => requests({ url: '/user/passport/login', data, method: 'post' })

// 获取用户信息
export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' })

// 登出
export const reqLogout = () => requests({ url: '/user/passport/logout', method: 'get' })

// 获取用户地址信息
export const reqAdressInfo = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' })

// 获取订单信息
export const reqOrderInfo = () => requests({ url: '/order/auth/trade', method: 'get' })

// 提交订单
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'post' })

// 获取支付信息
export const reqPayInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' })

// 获取订单支付状态
export const reqPayStatus = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get' })

// 获取用户全部订单
export const reqMyOrderList = (pageNo, limit) => requests({ url: `/order/auth/${pageNo}/${limit}`, method: 'get' })