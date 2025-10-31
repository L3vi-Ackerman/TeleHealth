import type { LoginRequest, LoginResponse } from '@/core/types/auth.type'
import api from '@/lib/axios'

export const refreshToken = async (refresh_token: string) => {
  const res = await api.post('/auth/token/refresh/', { refresh: refresh_token })
  return res.data
}

export const login = async ({
  email,
  password,
}: LoginRequest): Promise<LoginResponse> => {
  const res = await api.post('/auth/token/', {
    email,
    password,
  })
  return res.data
}
