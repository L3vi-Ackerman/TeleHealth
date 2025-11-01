import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import PatientForm from './form'

export function PatientDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus size={20} /> Add Patients
        </Button>
      </DialogTrigger>

      <DialogContent className="overflow-hidden py-2 h-[60%]">
        <DialogHeader>
          <DialogTitle>Add Patients</DialogTitle>
          <DialogDescription>
            Enter personal documents of the patients
          </DialogDescription>
        </DialogHeader>

        <PatientForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}
