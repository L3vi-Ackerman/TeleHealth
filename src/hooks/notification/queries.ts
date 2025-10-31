import { useQuery } from '@tanstack/react-query'
import { getNotifications } from '@/lib/api/notification'

export const useGetNotifications = () => {
  const query = useQuery({
    queryFn: getNotifications,
    queryKey: ['notifications'],
    refetchInterval: 5000,
  })
  // return { data, isPending, isError, refetch }
  return query
}
