/* axios封装 */

import axios from 'axios'

export default function ajax(baseURL, url, data = {}, method = 'GET') {
  const instance = axios.create({
    baseURL,
    timeout: 5000
  })

  instance.interceptors.response.use(
    res => res.data,
    err => err
  )

  if (method === 'GET') return instance.get(url, { params: data })
  return instance.post(url, data)
}
