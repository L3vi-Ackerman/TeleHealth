import { createFileRoute } from '@tanstack/react-router'
import DepartmentList from '@/components/departments/list'
import DepartmentSearch from '@/components/departments/filter'
export const Route = createFileRoute('/_app/departments/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between border-b ">
        <h1 className="text-3xl font-medium my-4">Departments</h1>
        <DepartmentSearch />
      </div>
      <DepartmentList />
    </div>
  )
}
