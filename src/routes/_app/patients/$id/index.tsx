import { useGetReport } from '@/hooks/report/queries'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/patients/$id/')({
  component: RouteComponent,
})

function RouteComponent() {
  const params = Route.useParams()
  const { id } = params
  const { data } = useGetReport(id)
  console.log(data)
  return <div>Hello "/_app/patients/$id/"!</div>
}
