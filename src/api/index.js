/* api */

import ajax from 'api/ajax'

const BASE_URL = 'http://152.136.185.210:7878/api/m5'

export const reqMulitdata = () => ajax(BASE_URL, '/home/multidata')
