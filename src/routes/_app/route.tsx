import { useState } from 'react'
import { Outlet, createFileRoute } from '@tanstack/react-router'
import { AppSidebar } from '@/components/common/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Bell, User, LogOut, Settings, Stethoscope } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { useGetNotifications } from '@/hooks/notification/queries'
import {
  markAllNotificationsRead,
  markNotificationRead,
} from '@/lib/api/notification'

export const Route = createFileRoute('/_app')({
  component: RouteComponent,
})

function RouteComponent() {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)
  const [notifDropdownOpen, setNotifDropdownOpen] = useState(false)
  const { data, refetch } = useGetNotifications()

  const unreadNotifications = data?.data?.filter((n: any) => !n.is_read) || []
  const unreadCount = unreadNotifications.length

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
  }

  const handleMarkRead = async (id: string) => {
    await markNotificationRead(id)
    refetch()
  }

  const handleMarkAllRead = async () => {
    await markAllNotificationsRead()
    refetch()
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />

        <div className="flex flex-col flex-1 h-screen overflow-hidden">
          <nav className="flex items-center justify-between w-full px-6 py-4 border-b bg-background shadow-sm">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h1 className="text-xl font-bold bg-primary text-transparent bg-clip-text">
                TeleHealth Dashboard
              </h1>
            </div>

            <div className="flex items-center gap-6 relative">
              {/* Notifications Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setNotifDropdownOpen(!notifDropdownOpen)}
                  className="hover:bg-muted rounded-full p-2 cursor-pointer relative"
                >
                  <Bell className="h-[1.2rem] w-[1.2rem]" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {notifDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-lg text-foreground z-50 max-h-80 overflow-y-auto">
                    <div className="flex justify-between items-center px-4 py-2 border-b border-border">
                      <span className="font-semibold text-sm">
                        Notifications
                      </span>
                      {unreadCount > 0 && (
                        <button
                          onClick={handleMarkAllRead}
                          className="text-xs text-primary hover:underline"
                        >
                          Mark all read
                        </button>
                      )}
                    </div>

                    {data?.data?.length === 0 ? (
                      <p className="text-xs text-muted-foreground px-4 py-2">
                        No notifications
                      </p>
                    ) : (
                      <ul className="flex flex-col">
                        {data?.data?.map((notif: any) => (
                          <li
                            key={notif?.id}
                            onClick={() =>
                              !notif?.is_read && handleMarkRead(notif?.id)
                            }
                            className={`px-4 py-2 cursor-pointer hover:bg-accent/10 transition-colors duration-200 ${
                              !notif?.is_read ? 'bg-accent/5 font-semibold' : ''
                            }`}
                          >
                            {notif?.message}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>

              {/* User Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center justify-center p-2 rounded-full hover:bg-muted cursor-pointer"
                >
                  <User className="h-[1.2rem] w-[1.2rem]" />
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg text-foreground z-50">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                      <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground w-8 h-8 flex items-center justify-center rounded-full font-bold text-xs">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">
                          {user.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {user.email}
                        </span>
                      </div>
                    </div>

                    <ul className="flex flex-col py-2">
                      <li>
                        <Link
                          to="/"
                          className="flex items-center gap-2 px-4 py-2 hover:bg-accent/10 transition-colors duration-200"
                          onClick={() => setUserDropdownOpen(false)}
                        >
                          <Stethoscope className="w-4 h-4" /> Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="flex items-center gap-2 px-4 py-2 hover:bg-accent/10 transition-colors duration-200"
                          onClick={() => setUserDropdownOpen(false)}
                        >
                          <User className="w-4 h-4" /> Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="flex items-center gap-2 px-4 py-2 hover:bg-accent/10 transition-colors duration-200"
                          onClick={() => setUserDropdownOpen(false)}
                        >
                          <Settings className="w-4 h-4" /> Settings
                        </Link>
                      </li>
                    </ul>

                    <div className="border-t border-border">
                      <button
                        onClick={() => setUserDropdownOpen(false)}
                        className="w-full flex items-center gap-2 px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-500/10 transition-colors duration-200"
                      >
                        <LogOut className="w-4 h-4" /> Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </nav>

          <main className="flex-1 p-6 overflow-y-auto bg-background">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
