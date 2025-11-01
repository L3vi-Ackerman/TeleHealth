import api from '../axios'
interface CreateReport {
  diagnosis: string
  prescription: string
  patient: string
  doctor?: string
}

export interface UpdateReport {
  id: string
  created_at: string
  updated_at: string
  diagnosis: string
  prescription: string
  report_date: string // ISO date string, e.g., "2025-11-01"
  patient: string // UUID of the patient
  doctor: string // UUID of the doctor
  created_by: string // UUID of the user who created the report
}
export const createReport = async (data: CreateReport) => {
  return await api.post('/report/create', data)
}
export const updateReport = async (data: UpdateReport) => {
  return await api.post(`/report/${data.id}/update/`, data)
}
export const getReport = async (patient_id: string) => {
  return await api.get(`/report/retrieve/${patient_id}/`)
}
export const getReportList = async () => {
  return await api.get('/report/patients/list/')
}

export const getReportListByPatient = async (id: string) => {
  return await api.get(`/report/patient/${id}/list/`)
}
