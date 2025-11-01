import { useGetReport } from '@/hooks/report/queries'
import { ReportCard } from '@/components/reports/card'
import { createFileRoute } from '@tanstack/react-router'
import { ReportDialog } from '@/components/reports/dialog'

export const Route = createFileRoute('/_app/patients/$id/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  const { data } = useGetReport(id)

  console.log(data)

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-4xl font-extrabold bg-primary bg-clip-text text-transparent tracking-tight">
          Reports
        </h1>
        <div className="mt-4 sm:mt-0">
          <ReportDialog />
        </div>
      </div>

      <div className="p-4">
        {data?.data?.results?.map((r) => (
          <ReportCard key={r.id} report={r} />
        ))}
      </div>
    </div>
  )
}
