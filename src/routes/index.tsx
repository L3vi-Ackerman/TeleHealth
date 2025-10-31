import { createFileRoute, redirect } from '@tanstack/react-router'
// import { getMe } from '@/lib/api/auth/profile'

export const Route = createFileRoute('/')({
  beforeLoad: async () => {
    const accessToken = localStorage.getItem('access_token')
    const refreshToken = localStorage.getItem('refresh_token')
    if (!accessToken || !refreshToken) {
      throw redirect({ to: '/login' })
    }
    //
    // try {
    //   const me = await getMe()
    //   // if (me?.role === 'STAFF') {
    //   //   return redirect({ to: '/timesheets/view-timesheet' })
    //   // }
    // } catch {
    //   // If fetching profile fails, fall back to login
    //   throw redirect({ to: '/login' })
    // }

    // return redirect({ to: '/admin/dashboard' })
  },
})
