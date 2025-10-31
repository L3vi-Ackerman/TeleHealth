import { Outlet, createFileRoute } from '@tanstack/react-router'
import { AppSidebar } from '@/components/common/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { SidebarTrigger } from '@/components/ui/sidebar'
export const Route = createFileRoute('/_app')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="rounded-lg border-1 shadow-sm m-4 p-4 w-full h-full">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}
