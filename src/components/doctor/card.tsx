import { useNavigate } from '@tanstack/react-router'
import React from 'react'

interface User {
  id: string
  first_name: string
  last_name: string
  email: string
  role: string
}

interface Hospital {
  id: string
  name: string
  contact: string
  address: string
  description: string | null
  image: string | null
  created_at: string
  updated_at: string
}

interface Department {
  id: string
  name: string
  created_at: string
  updated_at: string
  hospital: Hospital | string
}

export interface Doctor {
  id: string
  user: User
  contact: string
  experience_years: number
  is_available: boolean
  image: string | null
  created_at: string
  updated_at: string
  department: Department
  hospital?: Hospital
}

interface DoctorCardProps {
  doctor: Doctor
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const navigate = useNavigate()
  return (
    <div
      className="doctor-card border p-4 rounded mb-4 cursor-pointer"
      onClick={() => navigate({ to: `/doctors/${doctor.id}/bookings` })}
    >
      <div className="flex items-center gap-4">
        <img
          src={doctor.image ?? '/default-doctor.png'}
          alt={`Dr. ${doctor.user?.first_name ?? ''} ${doctor.user?.last_name ?? ''}`}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">
            Dr. {doctor.user?.first_name ?? 'Unknown'}{' '}
            {doctor.user?.last_name ?? ''}
          </h3>
          <p>Department: {doctor.department?.name ?? 'N/A'}</p>
          <p>
            Hospital:{' '}
            {typeof doctor.hospital === 'object' && doctor.hospital
              ? doctor.hospital.name
              : 'N/A'}
          </p>
          <p>Contact: {doctor.contact}</p>
          <p>Experience: {doctor.experience_years} years</p>
          <p>Status: {doctor.is_available ? 'Available' : 'Unavailable'}</p>
        </div>
      </div>
    </div>
  )
}
export default DoctorCard
