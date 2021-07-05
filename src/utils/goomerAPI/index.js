import { Axios } from 'utils/Axios'

export const goomerAPI = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL
})
