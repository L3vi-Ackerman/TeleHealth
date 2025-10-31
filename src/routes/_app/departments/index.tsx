import { createFileRoute } from '@tanstack/react-router'
import { DepartmentDialog } from '@/components/departments/dialog'
export const Route = createFileRoute('/_app/departments/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <DepartmentDialog />
}
