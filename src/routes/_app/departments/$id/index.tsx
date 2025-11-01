import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useGetDoctorsList } from '@/hooks/doctor/queries'
import { DoctorCard } from '@/components/doctor/card'
import type { Doctor } from '@/components/doctor/card'

export const Route = createFileRoute('/_app/departments/$id/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  const { data, isPending, isError } = useGetDoctorsList({ department: id })

  if (isPending)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg animate-pulse">Loading doctors...</p>
      </div>
    )

  if (isError)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-red-500">Error loading doctors</p>
      </div>
    )

  const doctors = data?.data?.results || []

  return (
    <div className="container mx-auto px-6 pb-10 space-y-8 animate-fade-in">
      <h1 className="text-4xl font-extrabold bg-primary bg-clip-text text-transparent tracking-tight border-b pb-4">
        Doctors in Department
      </h1>

      {doctors.length === 0 ? (
        <p className="text-gray-500">No doctors found in this department.</p>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {doctors.map((doctor: Doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </motion.div>
      )}
    </div>
  )
}
