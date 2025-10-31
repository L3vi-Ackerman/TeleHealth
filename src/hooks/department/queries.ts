import type { CreateDepartment } from '@/core/types/department.type'
import { createDepartment } from '@/lib/api/departments'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

export const useCreateDepartmentMutation = () => {
  return useMutation({
    mutationFn: (data: CreateDepartment) => createDepartment(data),
    onSuccess: () => {
      toast.success('Department created successfully!')
    },
    onError: () => {
      toast.error('Failed to create department!')
    },
  })
}
