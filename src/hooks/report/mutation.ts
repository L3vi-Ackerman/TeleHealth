import { useMutation } from '@tanstack/react-query'
import { createReport } from '@/lib/api/report'
import { toast } from 'sonner'
export const useCreateReportMutation = () => {
  return useMutation({
    mutationFn: createReport,
    onSuccess: () => {
      toast.success('Report created succefully')
    },
    onError: () => {
      toast.success('Failed to create report')
    },
  })
}
