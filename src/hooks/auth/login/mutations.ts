import type { LoginRequest } from '@/core/types/auth.type'
import { login } from '@/lib/api/auth'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data: LoginRequest) => login(data),
    onSuccess: () => {
      //TODO: navigate to dashboard
      toast.success('Login Successful')
    },
    onError: () => {
      toast.error('Invalid Credentials')
    },
  })
}
