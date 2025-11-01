import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ReportCardProps {
  report: {
    id: string
    created_at: string
    updated_at: string
    created_by: string
    doctor: string
    patient: string
    diagnosis: string
    prescription: string
    report_date: string
  }
}

export function ReportCard({ report }: ReportCardProps) {
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
          <span className="font-semibold">Doctor ID: </span>
          {report.doctor}
        </div>
        <div>
          <span className="font-semibold">Patient ID: </span>
          {report.patient}
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
          {report.created_by}
        </div>
      </CardContent>
    </Card>
  )
}
