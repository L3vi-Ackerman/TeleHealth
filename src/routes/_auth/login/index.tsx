import { createFileRoute } from '@tanstack/react-router'
import LoginForm from '@/components/Login/form'
export const Route = createFileRoute('/_auth/login/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className=" rounded-md w-[30%] mx-auto">
      <LoginForm />
    </div>
  )
}
