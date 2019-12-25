const Mock = require('mockjs')
// 格式： Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/api/goodList', 'get', require('./json/goods'))
// Mock.mock('/home/banner', 'get', require('./json/homeBanner'))
