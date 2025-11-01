import { motion } from 'framer-motion'
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
  const fullName = `Dr. ${doctor.user?.first_name ?? 'Unknown'} ${
    doctor.user?.last_name ?? ''
  }`

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.3 }}
      onClick={() => navigate({ to: `/doctors/${doctor.id}/bookings` })}
      className="group cursor-pointer rounded-xl border border-border bg-card shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      <div className="flex items-center gap-4 p-4">
        <img
          src={doctor.image ?? '/default-doctor.png'}
          alt={fullName}
          className="w-20 h-20 rounded-full object-cover border border-border"
        />
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {fullName}
          </h3>
          <p className="text-sm text-muted-foreground">
            Department: {doctor.department?.name ?? 'N/A'}
          </p>
          <p className="text-sm text-muted-foreground">
            Hospital:{' '}
            {typeof doctor.hospital === 'object' && doctor.hospital
              ? doctor.hospital.name
              : 'N/A'}
          </p>
        </div>
      </div>

      <div className="border-t border-border px-4 py-3 bg-muted/30 text-sm text-muted-foreground flex justify-between">
        <span>Experience: {doctor.experience_years} yrs</span>
        <span
          className={`font-medium ${
            doctor.is_available ? 'text-green-600' : 'text-red-500'
          }`}
        >
          {doctor.is_available ? 'Available' : 'Unavailable'}
        </span>
      </div>
    </motion.div>
  )
}
