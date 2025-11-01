import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import ReportForm from './form'
export function ReportDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" className="flex gap-4">
            <Plus size={20} /> Add Reports
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Report</DialogTitle>
            <DialogDescription>
              Add diagnostics and prescription
            </DialogDescription>
          </DialogHeader>
          <ReportForm />
        </DialogContent>
      </form>
    </Dialog>
  )
}
