import { useQueryState } from 'nuqs'
import { useGetDepartmentsList } from '@/hooks/department/queries'
import { useNavigate } from '@tanstack/react-router'
import type { ListDepartment } from '@/core/types/department.type'

const DepartmentList = () => {
  const navigate = useNavigate()
  const [search] = useQueryState('departments', {
    defaultValue: '',
  })

  const { data, isLoading, isError } = useGetDepartmentsList({
    name__icontains: search ?? '',
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading departments</div>

  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {data?.data?.results?.map((dept: ListDepartment) => (
        <div
          key={dept.id}
          className="p-2 transition cursor-pointer hover:underline"
          onClick={() => navigate({ to: `/departments/${dept.id}` })}
        >
          {dept.name}
        </div>
      ))}
    </div>
  )
}

export default DepartmentList
