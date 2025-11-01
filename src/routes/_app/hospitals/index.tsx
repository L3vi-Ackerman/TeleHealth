import { createFileRoute } from '@tanstack/react-router'
import { useGetHospitalList } from '@/hooks/hospital/queries'
import { MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import DepartmentSearch from '@/components/departments/filter'

export const Route = createFileRoute('/_app/hospitals/')({
  component: RouteComponent,
})

export interface Hospital {
  id: string
  created_at: string
  updated_at: string
  name: string
  contact: string
  address: string
  description: string
  image: string
  user: string
}

function RouteComponent() {
  const { data: hospitals } = useGetHospitalList()

  return (
    <div className="container mx-auto px-6 py-10 space-y-10 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4">
        <h1 className="text-4xl font-extrabold bg-primary bg-clip-text text-transparent tracking-tight">
          Hospitals
        </h1>
        <div className="mt-4 sm:mt-0">
          <DepartmentSearch />
        </div>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {hospitals?.data?.results?.map((h: Hospital, i: number) => (
          <motion.div
            key={h.id}
            className="bg-card border border-border rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="relative overflow-hidden">
              <img
                src={h.image}
                alt={h.name}
                className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="p-4 flex flex-col h-full">
              <div>
                <h2 className="font-semibold text-lg text-foreground mb-1">
                  {h.name}
                </h2>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {h.description}
                </p>
              </div>

              <div className="text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  {h?.address}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  {h?.contact}
                </div>
                {/* <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  {new Date(h.created_at).toLocaleDateString()}
                </div> */}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
