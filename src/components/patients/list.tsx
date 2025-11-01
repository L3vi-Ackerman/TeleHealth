import { useGetPatientList } from '@/hooks/patient/queries'
import { useNavigate } from '@tanstack/react-router'

interface Patient {
  id: string
  created_at: string
  updated_at: string
  first_name: string
  last_name: string
  phone: string
  address: string
  age: number
  gender: 'Male' | 'Female'
  blood_group: string
  weight: number
  blood_pressure: string
}

const PatientsList = () => {
  const { data, isPending, isError } = useGetPatientList()
  const patients = data?.data?.results || []
  const navigate = useNavigate()

  if (isPending) {
    return <div className="p-6 text-blue-700">Loading patients...</div>
  }

  if (isError) {
    return <div className="p-6 text-red-600">Failed to load patients.</div>
  }

  if (!patients.length) {
    return <div className="p-6 text-blue-700">No patients found.</div>
  }

  return (
    <div className="overflow-x-auto p-6">
      <table className="min-w-full bg-blue-50 rounded-xl shadow-md overflow-hidden">
        <thead className="bg-blue-100">
          <tr>
            {[
              'First Name',
              'Last Name',
              'Phone',
              'Address',
              'Age',
              'Gender',
              'Blood Group',
              'Weight',
              'Blood Pressure',
            ].map((header) => (
              <th
                key={header}
                className="px-6 py-3 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-blue-200">
          {patients.map((patient: Patient) => (
            <tr
              key={patient.id}
              className="cursor-pointer transition hover:bg-blue-100"
              onClick={() =>
                navigate({ to: '/patients/$id', params: { id: patient.id } })
              }
            >
              <td className="px-6 py-4 text-sm ">{patient.first_name}</td>
              <td className="px-6 py-4 text-sm ">{patient.last_name}</td>
              <td className="px-6 py-4 text-sm ">{patient.phone}</td>
              <td className="px-6 py-4 text-sm ">{patient.address}</td>
              <td className="px-6 py-4 text-sm ">{patient.age}</td>
              <td className="px-6 py-4 text-sm ">{patient.gender}</td>
              <td className="px-6 py-4 text-sm ">{patient.blood_group}</td>
              <td className="px-6 py-4 text-sm ">{patient.weight}</td>
              <td className="px-6 py-4 text-sm ">{patient.blood_pressure}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PatientsList
