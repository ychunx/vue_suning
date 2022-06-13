import Mock from 'mockjs'

// 引入模拟数据
import banner from './banner.json'

// 根据请求路径返回对应数据
Mock.mock('/mock/banner', { code: 200, data: banner })