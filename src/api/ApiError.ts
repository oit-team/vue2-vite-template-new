export type ApiErrorOptions = Partial<{
  url: string
  message: string
  response: any
  error: any
  status: number
  code: any
}>

export default class ApiError {
  // 请求地址
  url?: string
  // 错误消息
  message?: string
  // 响应数据
  response?: any
  // 错误数据
  error?: any
  // http状态码
  status?: number
  // 自定义错误码
  code?: any
  // 标记已解决
  resolved?: boolean

  constructor(option: ApiErrorOptions) {
    this.url = option.url
    this.message = option.message
    this.response = option.response
    this.error = option.error
    this.status = option.status
    this.code = option.code
    this.resolved = false
  }

  reject(resolved = false) {
    this.resolved = resolved
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(this)
  }
}
