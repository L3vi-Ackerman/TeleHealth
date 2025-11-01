import { getReport, getReportListByPatient } from '@/lib/api/report'
import { useQuery } from '@tanstack/react-query'

export const useGetReport = (id: string) => {
  const { data, isPending, isError } = useQuery({
    queryFn: () => getReportListByPatient(id),
    queryKey: ['report', id],
  })
  return { data, isPending, isError }
}
export const useGetReportList = (id: string) => {
  const { data, isPending, isError } = useQuery({
    queryFn: () => getReportListByPatient(id),
    queryKey: ['reports'],
  })
  return { data, isPending, isError }
}
