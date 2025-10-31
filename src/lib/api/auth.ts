import { refreshToken } from './refresh'

export async function refreshAccessToken() {
  const refresh_token = localStorage.getItem('refresh_token')
  if (!refresh_token) return null

  try {
    const res = await refreshToken(refresh_token)
    const { access, refresh } = res
    if (access) {
      localStorage.setItem('access_token', access)
      if (refresh) {
        localStorage.setItem('refresh_token', refresh)
      }
      return access
    }

    return access
  } catch (err) {
    console.error('Failed to refresh token', err)
    return null
  }
}
