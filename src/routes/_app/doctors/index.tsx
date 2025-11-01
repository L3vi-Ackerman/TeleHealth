import { createFileRoute } from '@tanstack/react-router'
import { useGetDoctorsList } from '@/hooks/doctor/queries'

import { DoctorCard } from '@/components/doctor/card'
import type { Doctor } from '@/components/doctor/card'
import DepartmentSearch from '@/components/departments/filter'
export const Route = createFileRoute('/_app/doctors/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data, isPending, isError } = useGetDoctorsList({})
  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">Loading doctors...</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-red-500">Error loading doctors</p>
      </div>
    )
  }

  const doctors = data?.data?.results || []

  return (
    <div className="container mx-auto px-2  animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-4xl font-extrabold bg-primary bg-clip-text text-transparent tracking-tight">
          Doctors
        </h1>
        <div className="mt-4 sm:mt-0">
          <DepartmentSearch />
        </div>
      </div>
      {doctors.length === 0 ? (
        <p className="text-gray-500">No doctors found in this department.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor: Doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      )}
    </div>
  )
}
