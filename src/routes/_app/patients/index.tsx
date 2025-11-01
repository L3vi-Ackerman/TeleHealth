import { createFileRoute } from '@tanstack/react-router'
import { PatientDialog } from '@/components/patients/dialog'
import PatientsList from '@/components/patients/list'
export const Route = createFileRoute('/_app/patients/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      {' '}
      <div className="flex items-center justify-between space-y-2 border-b mb-4">
        <div>
          <h1 className="text-3xl font-medium my-4">Patients</h1>
        </div>
        <PatientDialog />
      </div>
      <PatientsList />
    </div>
  )
}
