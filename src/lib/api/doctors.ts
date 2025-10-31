import api from '../axios'

export const getDoctorsList = async ({
  iname,
  department,
}: {
  iname?: string
  department?: string
}) => {
  return await api.get('/doctor/list/', {
    params: {
      iname: iname,
      department: department,
    },
  })
}
