import { getDoctorsList } from '@/lib/api/doctors'
import { useQuery } from '@tanstack/react-query'

export const useGetDoctorsList = ({
  iname,
  department,
}: {
  iname?: string
  department?: string
}) => {
  const { data, isPending, isError } = useQuery({
    queryFn: () => getDoctorsList({ iname, department }),
    queryKey: ['doctors', iname, department],
  })
  return { data, isPending, isError }
}
