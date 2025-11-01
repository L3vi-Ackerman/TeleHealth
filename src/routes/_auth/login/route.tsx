import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/login')({
  beforeLoad: () => {
    const accessToken = localStorage.getItem('access_token')
    const refreshToken = localStorage.getItem('refresh_token')
    if (accessToken && refreshToken) {
      throw redirect({ to: '/patients' })
    }
  },
  component: AuthLayout,
})

function AuthLayout() {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  )
}
