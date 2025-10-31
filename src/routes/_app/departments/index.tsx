import { createFileRoute } from '@tanstack/react-router'
import DepartmentList from '@/components/departments/list'
import DepartmentSearch from '@/components/departments/filter'
export const Route = createFileRoute('/_app/departments/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-medium my-4">Departments</h1>
        </div>
        <DepartmentSearch />
      </div>
      <DepartmentList />
    </div>
  )
}
