import { useQuery } from '@tanstack/react-query'
import { getHospitalList } from '@/lib/api/hospitals'

export const useGetHospitalList = () => {
  const { data, isPending, isError } = useQuery({
    queryFn: () => getHospitalList(),
    queryKey: ['doctors'],
  })
  return { data, isPending, isError }
}
