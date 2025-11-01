import { createFileRoute } from '@tanstack/react-router'
import { useGetDoctorsList } from '@/hooks/doctor/queries'

import { DoctorCard } from '@/components/doctor/card'
import type { Doctor } from '@/components/doctor/card'
import { useState } from 'react'
import CommonSearch from '@/components/common/common-search'

export const Route = createFileRoute('/_app/doctors/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data, isPending, isError } = useGetDoctorsList({})
  const [searchTerm, setSearchTerm] = useState('')

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

  const filteredDoctors = doctors.filter((doctor: any) => {
    const fullName =
      `${doctor.user.first_name} ${doctor.user.last_name}`.toLowerCase()
    const departmentName = doctor.department.name.toLowerCase()
    const hospitalName = doctor.hospital.name.toLowerCase()
    const term = searchTerm.toLowerCase()

    return (
      fullName.includes(term) ||
      departmentName.includes(term) ||
      hospitalName.includes(term)
    )
  })

  return (
    <div className="container mx-auto space-y-8">
      <div className="flex items-center justify-between border-b">
        <h1 className="text-4xl font-extrabold bg-primary bg-clip-text text-transparent tracking-tight border-b pb-4">
          Doctors
        </h1>
        <CommonSearch
          onSearch={setSearchTerm}
          placeholder="Search doctors..."
          className="mt-4 sm:mt-0 w-[400px]"
        />
      </div>

      {filteredDoctors.length === 0 ? (
        <p className="text-gray-500">No doctors found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor: Doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      )}
    </div>
  )
}
