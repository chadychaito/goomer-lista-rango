import { Axios } from 'utils/Axios'

export const middlewareAPI = Axios.create({
  baseUrl: `${process.env.NEXT_PUBLIC_URL_PREFIX}/api/`
})

middlewareAPI.interceptors.response.use(
  ({ status, data }) => {
    if (status >= 200 && status < 400) {
      return {
        data,
        status
      }
    }
    const error = new Error()
    error.data = data
    error.status = status
    throw error
  },
  ({ response }) => {
    const error = new Error()
    error.data = response.data
    error.status = response.status
    throw error
  }
)
