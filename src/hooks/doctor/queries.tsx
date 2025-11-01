import {
  getDoctorsList,
  getDoctorAppointmentSlot,
  getDoctor,
} from '@/lib/api/doctors'
import { useQuery } from '@tanstack/react-query'

export const useGetDoctorsList = ({
  iname,
  department,
}: {
  iname?: string
  department?: string
}) => {
  const { data, isPending, isError } = useQuery({
    queryFn: () => getDoctorsList({ iname, department }),
    queryKey: ['doctors', iname, department],
  })
  return { data, isPending, isError }
}

export const useGetDocAppointmentSlot = ({
  doctor_id,
  is_booked,
}: {
  doctor_id: string
  is_booked?: boolean
}) => {
  const { data, isPending, isError } = useQuery({
    queryFn: () => getDoctorAppointmentSlot({ doctor_id, is_booked }),
    queryKey: ['slots', doctor_id, is_booked],
  })
  return { data, isPending, isError }
}
export const useGetDoctor = (id: string) => {
  const { data, isPending, isError } = useQuery({
    queryFn: () => getDoctor(id),
    queryKey: ['doctor', id],
  })
  return { data, isPending, isError }
}
