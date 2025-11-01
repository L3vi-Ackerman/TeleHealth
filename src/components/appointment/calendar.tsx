import { Calendar } from '@/components/ui/calendar'

interface AppointmentCalendarProps {
  date: Date | undefined
  onChange: (date: Date | undefined) => void
}

export function AppointmentCalendar({
  date,
  onChange,
}: AppointmentCalendarProps) {
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={onChange}
      className="rounded-md border shadow-sm text-xl"
      captionLayout="label"
    />
  )
}
