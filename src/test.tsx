import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Landing,
  beforeLoad: async () => {
    //   // const accessToken = localStorage.getItem('access_token')
    //   // if (accessToken) {
    //   //   // logged-in users go to dashboard
    throw redirect({ to: '/dashboard' })
    //   // }
    //   // otherwise, just show landing page
  },
})

function Landing() {
  return <div className="text-4xl">Hello from About!</div>
}
