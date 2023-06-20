import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const BaseURL = 'https://api.github.com'

export class BaseAxios {
  protected axiosInstance: AxiosInstance

  constructor(prefixUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: `${BaseURL}/${prefixUrl}`,
    })
  }

  protected async tryCatch(callback: Function) {
    try {
      return await callback()
    } catch (error) {
      console.error(error)
    }
  }

  public async get<T = any>(userName: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.get(userName, config)
    return response.data
  }
}
