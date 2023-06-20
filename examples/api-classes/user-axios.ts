import { BaseAxios } from './base-axios'
import type { AxiosResponse, AxiosRequestConfig } from 'axios'

class UserAxios extends BaseAxios {
  constructor(url: string) {
    super(url)
  }

  public getUserByName = async <T = any>(userName: string, config?: AxiosRequestConfig) =>
    this.tryCatch(() => this.axiosInstance.get(userName, config))

  public getUserByNameError = async <T = any>(userName: string, config?: AxiosRequestConfig) =>
    this.tryCatch(() => {
      throw new Error('maybe some error')
      return this.axiosInstance.get(userName, config)
    })
}

// --- export class
export default UserAxios

// --- or export one instance

// const userAxios = new UserAxios('users')
// export default userAxios

// ----- Test -----
;(async () => {
  const userClient = new UserAxios('users')

  const res = await userClient.getUserByName<{ userName: string }>('benben6515')
  console.log(res.data)
  console.log('------------------print error------------------')
  const resWithError = await userClient.getUserByNameError<{ userName: string }>('benben6515')
  console.log(resWithError.data)
})()
