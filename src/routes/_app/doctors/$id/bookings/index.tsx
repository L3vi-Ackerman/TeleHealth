import { createFileRoute } from '@tanstack/react-router'
import { AppointmentCalendar } from '@/components/appointment/calendar'
import { useGetDocAppointmentSlot, useGetDoctor } from '@/hooks/doctor/queries'
import { Button } from '@/components/ui/button'
import { useState, useMemo } from 'react'
import { isSameDay, parseISO } from 'date-fns'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Skeleton } from '@/components/ui/skeleton' // ShadCN Skeleton
import { Calendar } from 'lucide-react'
import { useCreateAppointmentMutation } from '@/hooks/appointment/mutation'

interface Slot {
  id: string
  start_time: string
  end_time: string
  is_booked: boolean
}

export const Route = createFileRoute('/_app/doctors/$id/bookings/')({
  component: RouteComponent,
})

function RouteComponent() {
  const params = Route.useParams()
  const { id } = params
  const { data } = useGetDocAppointmentSlot({ doctor_id: id })
  const { data: doctor, isPending } = useGetDoctor(id)

  const { mutate } = useCreateAppointmentMutation()
  const slots = data?.data?.results ?? []
  const docData = doctor?.data

  console.log(docData)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const filteredSlots = useMemo(() => {
    if (!selectedDate) return []
    return slots.filter((slot: Slot) =>
      isSameDay(parseISO(slot.start_time), selectedDate),
    )
  }, [slots, selectedDate])

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between space-y-2 border-b mb-4">
        <div>
          <h1 className="text-3xl font-medium my-4">Appointments</h1>
        </div>
      </div>

      <p className="mt-8 text-xl mb-4">Book an appointment: </p>
      <div className="flex gap-8 w-full">
        <AppointmentCalendar date={selectedDate} onChange={setSelectedDate} />
        <div className="  p-4 rounded mb-4 cursor-pointer flex flex-col w-[40%]">
          <div className="flex flex-col items-center gap-4">
            <img
              src={docData?.image ?? '/default-doctor.png'}
              alt={`Dr. ${docData?.user?.first_name ?? ''} ${docData?.user?.last_name ?? ''}`}
              className="w-64 h-64 rounded-full object-cover"
            />
            <div className="w-full">
              <h3 className="text-lg font-semibold">
                Dr. {docData?.user?.first_name ?? 'Unknown'}{' '}
                {docData?.user?.last_name ?? ''}
              </h3>
              <p>Department: {docData?.department?.name ?? 'N/A'}</p>
              <p>
                Hospital:{' '}
                {typeof docData?.hospital === 'object' && docData?.hospital
                  ? docData?.hospital?.name
                  : 'N/A'}
              </p>
              <p>Contact: {docData?.contact}</p>
              <p>Experience: {docData?.experience_years} years</p>
              <p>
                Status: {docData?.is_available ? 'Available' : 'Unavailable'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-8 text-xl">Schedule Time:</p>

      {isPending ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-16 rounded-lg" />
          ))}
        </div>
      ) : filteredSlots.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {filteredSlots.map((slot: Slot) => (
            <div
              key={slot.id}
              className={`p-4 border rounded-lg shadow-sm ${
                slot.is_booked ? 'bg-gray-100 text-gray-500' : 'bg-white'
              }`}
            >
              <p>
                {new Date(slot.start_time).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}{' '}
                -{' '}
                {new Date(slot.end_time).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
              {slot.is_booked ? (
                <p className="text-red-500 text-sm mt-1">Booked</p>
              ) : (
                <p className="text-green-600 text-sm mt-1">Available</p>
              )}

              <div className="w-full flex items-center justify-end">
                {!slot.is_booked && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="mt-2 w-fit py-2 rounded-md text-sm p-2 flex gap-2 bg-primary text-white">
                        <Calendar size={20} />
                        Book Appointment
                      </button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Book Appointment</DialogTitle>
                        <DialogDescription>
                          Confirm your appointment for{' '}
                          {new Date(slot.start_time).toLocaleString()}.
                        </DialogDescription>
                      </DialogHeader>

                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button
                          type="submit"
                          className="cursor-pointer"
                          onClick={() => {
                            const payload = {
                              doctor: id,
                              start_time: String(slot.start_time),
                              end_time: String(slot.end_time),
                              notes: '',
                            }
                            mutate(payload)
                          }}
                        >
                          Confirm
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-6 text-gray-500">No slots available for this date.</p>
      )}
    </div>
  )
}
