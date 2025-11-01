import api from '../axios'
import type { CreateDepartment } from '@/core/types/department.type'

export const createDepartment = async (data: CreateDepartment) => {
  return await api.post('/hospital/department/create/', data)
}
export const getDepartmentsList = async ({
  name__icontains,
}: {
  name__icontains?: string
}) => {
  return await api.get('/hospital/department/list/', {
    params: {
      name__icontains: name__icontains,
    },
  })
}
