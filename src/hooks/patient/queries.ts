import { getPatientsList } from '@/lib/api/patient'
import { getPatient } from '@/lib/api/patient'
import { useQuery } from '@tanstack/react-query'

export const useGetPatientList = () => {
  const { data, isPending, isError } = useQuery({
    queryFn: getPatientsList,
    queryKey: ['patients'],
  })
  return { data, isPending, isError }
}

export const useGetPatient = (id: string) => {
  const { data, isPending, isError } = useQuery({
    queryFn: () => getPatient(id),
    queryKey: ['patient', id],
  })
  return { data, isPending, isError }
}
