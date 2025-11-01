import { createFileRoute } from '@tanstack/react-router'
import { PatientDialog } from '@/components/patients/dialog'
import PatientsList from '@/components/patients/list'
export const Route = createFileRoute('/_app/patients/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="container mx-auto px-2  animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-4xl font-extrabold bg-primary bg-clip-text text-transparent tracking-tight">
          Patients
        </h1>
        <div className="mt-4 sm:mt-0">
          <PatientDialog />
        </div>
      </div>
      <PatientsList />
    </div>
  )
}
