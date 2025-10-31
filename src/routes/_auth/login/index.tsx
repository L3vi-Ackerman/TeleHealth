import { createFileRoute } from '@tanstack/react-router'
import LoginForm from '@/components/Login/form'
export const Route = createFileRoute('/_auth/login/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background] gap-6">
      <h1 className="text-5xl font-extrabold tracking-tight mb-8 text-center relative inline-block bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-transparent bg-clip-text group">
        TeleHealth
        <span className="absolute left-0 bottom-0 w-0 h-1 bg-[var(--primary)] transition-all group-hover:w-full"></span>
      </h1>

      <LoginForm />
    </div>
  )
}
