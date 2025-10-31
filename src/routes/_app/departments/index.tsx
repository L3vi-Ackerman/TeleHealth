import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/departments/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/departments/"!</div>
}
