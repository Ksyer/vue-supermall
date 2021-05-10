/* api */

import ajax from 'api/ajax'

const BASE_URL = '/api/m5'

/* 首页
-----------------------------------------------------------------*/
// 请求轮播图和推荐
export const reqMulitdata = () => ajax(BASE_URL, '/home/multidata')

// 请求商品（流行/新款/精选）
export const reqHomeGoods = (params) => ajax(BASE_URL, '/home/data', params)
