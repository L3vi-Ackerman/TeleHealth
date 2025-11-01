import { useQuery } from '@tanstack/react-query'
import { getMe } from '@/lib/api/auth'

export const useGetMe = () => {
  const { data, isPending, isError } = useQuery({
    queryFn: getMe,
    queryKey: ['profile'],
  })
  return { data, isPending, isError }
}
