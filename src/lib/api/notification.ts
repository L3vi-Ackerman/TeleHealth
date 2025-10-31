import api from '../axios'

export const getNotifications = async () => {
  return await api.get('/notification/list/')
}

export async function markNotificationRead(id: string) {
  await api.post(`/notification/mark-read/${id}/`)
}

export async function markAllNotificationsRead() {
  await api.post('/notification/mark-read-all/')
}
