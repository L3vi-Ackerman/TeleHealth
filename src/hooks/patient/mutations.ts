import { createPatient } from '@/lib/api/patient'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export const useCreatePatientMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createPatient,
    onSuccess: () => {
      toast.success('Patient Created Successfully!')
      queryClient.invalidateQueries({ queryKey: ['patients'] })
    },
    onError: () => {
      toast.error('Failed to Create Patients!')
    },
  })
}
