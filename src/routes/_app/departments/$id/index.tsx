import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/departments/$id/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/departments/$id/"!</div>
}
