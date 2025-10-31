import type { LoginRequest } from '@/core/types/auth.type'
import { login } from '@/lib/api/auth'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { useNavigate } from '@tanstack/react-router'
export const useLoginMutation = () => {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: (data: LoginRequest) => login(data),
    onSuccess: (data) => {
      localStorage.setItem('access', data.access)
      localStorage.setItem('refresh', data.refresh)
      toast.success('Login Successful')
      navigate({ to: '/dashboard' })
    },
    onError: () => {
      toast.error('Invalid Credentials')
    },
  })
}
