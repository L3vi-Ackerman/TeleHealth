import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export type Report = {
  id: string
  doctor: {
    id: string
    user: {
      id: string
      email: string
      first_name: string
      last_name: string
      role: string
    }
    created_at: string
    updated_at: string
  }
  created_by: {
    id: string
    email: string
    first_name: string
    last_name: string
    role: string
  }
  created_at: string
  updated_at: string
  diagnosis: string
  prescription: string
  report_date: string
  patient: string
}

export function ReportCard({ report }: { report: Report }) {
  return (
    <Card className="w-full mx-auto my-4 shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-bold">
          Report ID: {report.id}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>
          <span className="font-semibold">Diagnosis: </span>
          {report.diagnosis}
        </div>
        <div>
          <span className="font-semibold">Prescription: </span>
          {report.prescription}
        </div>
        <div>
          <span className="font-semibold">Doctor: </span>
          {report.doctor?.user?.first_name} {report.doctor?.user?.last_name}
        </div>
        <div>
          <span className="font-semibold">Report Date: </span>
          {report.report_date}
        </div>
        <div>
          <span className="font-semibold">Created At: </span>
          {new Date(report.created_at).toLocaleString()}
        </div>
        <div>
          <span className="font-semibold">Updated At: </span>
          {new Date(report.updated_at).toLocaleString()}
        </div>
        <div>
          <span className="font-semibold">Created By: </span>
          {report.created_by.first_name} {report.created_by.last_name} (
          {report.created_by.email})
        </div>
      </CardContent>
    </Card>
  )
}
