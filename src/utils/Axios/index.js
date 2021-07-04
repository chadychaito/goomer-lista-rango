import axios from 'axios'
import isAbsoluteUrl from 'axios/lib/helpers/isAbsoluteURL'
import getConfig from 'next/config'

export const Axios = {
  create: ({ baseURL = '', headers, withCredentials = true, isMiddleware = false }) => {
    let url = ''
    if (isMiddleware) url = baseURL
    else
      url = isAbsoluteUrl(baseURL)
        ? baseURL
        : `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${baseURL}`
    const instance = axios.create({
      baseURL: url,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...headers
      },
      withCredentials
    })

    instance.interceptors.response.use(
      response => response,
      error => ({ ...error.response })
    )

    return instance
  }
}
