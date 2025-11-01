import { getReport } from '@/lib/api/report'
import { useQuery } from '@tanstack/react-query'

export const useGetReport = (id: string) => {
  const { data, isPending, isError } = useQuery({
    queryFn: () => getReport(id),
    queryKey: ['report', id],
  })
  return { data, isPending, isError }
}
