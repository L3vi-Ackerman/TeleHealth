import { getDepartmentsList } from '@/lib/api/departments'
import { useQuery } from '@tanstack/react-query'

export const useGetDepartmentsList = ({
  name__icontains,
}: {
  name__icontains?: string
}) => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getDepartmentsList({ name__icontains }),
    queryKey: ['departments', name__icontains],
  })

  return { data, isLoading, isError }
}
