import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/doctors/$id/bookings/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/doctors/$id/attachment/"!</div>
}
