import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Department {
  id: string
  name: string
  hospital: string
}

interface Doctor {
  id: string
  user: string
  department: Department
  contact: string
  experience_years: number
  is_available: boolean
  image: string
}

interface DoctorCardProps {
  doctor: Doctor
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>
            Dr. {doctor.user} {/* Replace with real name if you have */}
          </CardTitle>
          <Badge variant={doctor.is_available ? 'default' : 'destructive'}>
            {doctor.is_available ? 'Available' : 'Unavailable'}
          </Badge>
        </div>
        <CardDescription>{doctor.department.name}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {doctor.image && (
          <img
            src={doctor.image}
            alt={`Dr. ${doctor.user}`}
            className="w-full h-48 object-cover rounded-md"
          />
        )}
        <p>
          <span className="font-semibold">Contact:</span> {doctor.contact}
        </p>
        <p>
          <span className="font-semibold">Experience:</span>{' '}
          {doctor.experience_years}{' '}
          {doctor.experience_years > 1 ? 'years' : 'year'}
        </p>
        <p>
          <span className="font-semibold">Hospital:</span>{' '}
          {doctor.department.hospital}
        </p>
      </CardContent>
    </Card>
  )
}
