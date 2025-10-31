export interface LoginRequest {
  email: string
  password: string
  remember_me: boolean
}

export interface LoginResponse {
  access: string
  refresh: string
}
