import api from '../axios'

export const getDoctorsList = async ({
  iname,
  department,
}: {
  iname?: string
  department?: string
}) => {
  return await api.get('/doctor/list/', {
    params: {
      iname: iname,
      department: department,
    },
  })
}

export const getDoctorAppointmentSlot = async ({
  doctor_id,
  is_booked,
}: {
  doctor_id: string
  is_booked?: boolean
}) => {
  return await api.get(`/doctor/${doctor_id}/slots`, {
    params: {
      doctor_id: doctor_id,
      is_booked: is_booked,
    },
  })
}
export const getDoctor = async (id: string) => {
  return await api.get(`/doctor/retrieve/${id}/`)
}
