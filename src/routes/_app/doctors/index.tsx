import { createFileRoute } from '@tanstack/react-router'
import { useGetDoctorsList } from '@/hooks/doctor/queries'

import { DoctorCard } from '@/components/doctor/card'
import type { Doctor } from '@/components/doctor/card'
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
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Doctors </h1>

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
