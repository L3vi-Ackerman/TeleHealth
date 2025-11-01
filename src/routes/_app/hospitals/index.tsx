import { createFileRoute } from '@tanstack/react-router'
import { useGetHospitalList } from '@/hooks/hospital/queries'
import { MapPin, Phone, Calendar } from 'lucide-react'
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
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between space-y-2 border-b">
        <div>
          <h1 className="text-3xl font-medium my-4">Hospitals</h1>
        </div>

        <DepartmentSearch />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {hospitals?.data?.results?.map((h: Hospital) => (
          <div key={h.id} className="border p-4 rounded shadow flex gap-4">
            <img
              src={h.image}
              alt={h.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <h2 className="font-bold text-lg">{h.name}</h2>
              <p className="text-gray-700">{h.description}</p>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" /> {h.address}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Phone className="w-4 h-4" /> {h.contact}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />{' '}
                {new Date(h.created_at).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}{' '}
      </div>
    </div>
  )
}
