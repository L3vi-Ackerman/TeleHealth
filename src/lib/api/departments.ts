import api from '../axios'
import type { CreateDepartment } from '@/core/types/department.type'

export const createDepartment = async (data: CreateDepartment) => {
  return await api.post('/hospital/department/create/', data)
}
