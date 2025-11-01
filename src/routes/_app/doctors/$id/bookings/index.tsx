import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/doctors/$id/bookings/')({
  component: RouteComponent,
})

function RouteComponent() {
  const params = Route.useParams()
  const { id } = params

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between space-y-2 border-b">
        <div>
          <h1 className="text-3xl font-medium my-4">Appointments</h1>
          ID: {id}
        </div>
      </div>
    </div>
  )
}
