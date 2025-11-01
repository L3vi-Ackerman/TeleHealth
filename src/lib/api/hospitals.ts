import api from '../axios'

export const getHospitalList = async () => {
  return await api.get('/hospital/list/', {})
}
