import api from '../axios'

export const getNotifications = async () => {
  return await api.get('/notification/list/')
}

export async function markNotificationRead(id: string) {
  await api.put(`/notification/${id}/mark-as-read/`)
}

export async function markAllNotificationsRead() {
  await api.post('/notification/mark-all-as-read/')
}
