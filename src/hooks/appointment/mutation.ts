import { createAppointment } from '@/lib/api/appointment'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export const useCreateAppointmentMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createAppointment,
    onSuccess: () => {
      toast.success('Appointment Created!')

      // Use variables to invalidate the right query
      queryClient.invalidateQueries({
        queryKey: ['slots'],
      })
    },
    onError: () => {
      toast.error('Failed to Create Appointment!')
    },
  })
}
