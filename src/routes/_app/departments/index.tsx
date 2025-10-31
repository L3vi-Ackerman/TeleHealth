import DepartmentSearch from '@/components/departments/filter'
import DepartmentList from '@/components/departments/list'
import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/_app/departments/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between space-y-2 border-b">
        <div>
          <h1 className="text-3xl font-medium my-4">Departments</h1>
        </div>
        <DepartmentSearch />
      </div>

      <DepartmentList />
    </div>
  )
}
