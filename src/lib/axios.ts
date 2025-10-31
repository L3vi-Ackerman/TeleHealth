import axios from 'axios'
import { HTTPStatusCode } from '@/core/enums/status-code'
import { handleApiException } from '@/lib/handle-api-exceptions'
import { refreshAccessToken } from './api/auth'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

let refreshPromise: Promise<string | null> | null = null

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config ?? {}
    if (
      error.response?.status === HTTPStatusCode.UNAUTHORIZED &&
      !originalRequest.url.includes('/gatekeeper/token/')
    ) {
      try {
        if (!refreshPromise) {
          refreshPromise = refreshAccessToken().finally(
            () => (refreshPromise = null),
          )
        }
        const newAccessToken = await refreshPromise
        if (newAccessToken) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
          return api(originalRequest)
        } else {
          if (!window.location.pathname.includes('/login')) {
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
            window.location.href = '/login'
          }
        }
      } catch {
        if (!window.location.pathname.includes('/login')) {
          localStorage.removeItem('access_token')
          localStorage.removeItem('refresh_token')
          window.location.href = '/login'
        }
      }
    }
    return handleApiException(error.status, error.response.data)
  },
)

export default api
