import api from '../axios'

export enum GENDER {
  Male = 'Male',
  Female = 'Female',
}

type CreatePatient = {
  first_name: string
  last_name: string
  phone: string
  address: string
  age: number
  gender: GENDER
  blood_group: string
  weight: number
  blood_pressure: string
}

export const createPatient = async (data: CreatePatient) => {
  return await api.post('/patient/create/', data)
}
export const getPatientsList = async () => {
  return await api.get('/patient/list/')
}

export const getPatient = async (id: string) => {
  return await api.get(`/patient/retrieve/${id}/`)
}
