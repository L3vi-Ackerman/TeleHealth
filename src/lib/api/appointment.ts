import api from '../axios'
interface CreateAppointment {
  doctor: string
  start_time: string
  end_time: string
  notes: string
}
export const createAppointment = async (data: CreateAppointment) => {
  return await api.post('/appointment/create/', data)
}
