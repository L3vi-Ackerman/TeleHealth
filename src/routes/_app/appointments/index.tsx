import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/appointments/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/appointments/"!</div>
}
