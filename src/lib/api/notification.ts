import api from '../axios'

export const getNotifications = async () => {
  return await api.get('/notification/list/')
}
