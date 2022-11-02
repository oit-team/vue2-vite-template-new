import Axios from 'axios'
import Vue from 'vue'
import type { ApiErrorOptions } from './ApiError'
import ApiError from './ApiError'

function createApiError(options: ApiErrorOptions) {
  return new ApiError(options).reject()
}

const axios = Axios.create({
  // 请求超时时间
  timeout: 60000,
  baseURL: '/api',
})

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  return createApiError({ error })
})

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  if (response.data.head?.status !== 0) {
    return createApiError({
      url: response?.config.url,
      response,
      message: response.data.head.msg,
      code: response.data.head.status,
    })
  }
  return response
}, async (error) => {
  return createApiError({
    error,
    url: error?.config?.url,
    message: error?.errMsg,
  })
})

export function post(url: string, params: any, config: any = {}) {
  const userData: any = {}

  const formattedParams = {
    head: {
      aid: userData.userId,
      ver: '1.0',
      ln: 'cn',
      mod: 'app',
      de: '2019-10-16',
      sync: 1,
      cmd: config.cmd,
      uuid: userData.orgId,
      chcode: 'ef19843298ae8f2134f',
    },
    con: params,
  }

  return axios.post(url, formattedParams).then(res => res.data)
}

Vue.config.errorHandler = (err, vm) => {
  if (err instanceof ApiError) {
    // 处理接口错误
  }

  console.error(err)
  Vue.util.warn(err.message, vm)
}
