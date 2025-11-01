import { useState } from 'react'
import { Outlet, createFileRoute } from '@tanstack/react-router'
import { AppSidebar } from '@/components/common/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Bell, User, LogOut, Stethoscope } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { useGetNotifications } from '@/hooks/notification/queries'
import {
  markAllNotificationsRead,
  markNotificationRead,
} from '@/lib/api/notification'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import Cookies from 'js-cookie'
import { useNavigate } from '@tanstack/react-router'
import { useGetMe } from '@/hooks/auth/me/queries'

export const Route = createFileRoute('/_app')({
  component: RouteComponent,
})

interface User {
  first_name: string
  last_name: string
  email: string
}

function RouteComponent() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)
  const [notifDropdownOpen, setNotifDropdownOpen] = useState(false)
  const { data: notificationData } = useGetNotifications()

  const unreadNotifications =
    notificationData?.data?.results.filter((n: any) => !n.is_read) || []
  const unreadCount = unreadNotifications?.length

  const { data } = useGetMe()
  const user = data?.data

  const { mutate: mutateNotification } = useMutation({
    mutationFn: markNotificationRead,
    onSuccess: () => {
      toast.success('Notification marked as read!')
      queryClient.invalidateQueries({ queryKey: ['notifications'] })
    },
    onError: () => {
      toast.error('Failed to mark notification as read!')
    },
  })

  const { mutate: mutateAllNotification } = useMutation({
    mutationFn: markAllNotificationsRead,
    onSuccess: () => {
      toast.success('All notifications marked as read!')
      queryClient.invalidateQueries({ queryKey: ['notifications'] })
    },
    onError: () => {
      toast.error('Failed to mark all notifications as read!')
    },
  })

  // const handleMarkReadAndNavigate = (notif: any) => {
  //   if (!notif?.is_read) mutateNotification(notif?.id)
  //   if (notif?.link) navigate({ to: notif.link })
  //   setNotifDropdownOpen(false)
  // }

  const handleLogout = () => {
    Cookies.remove('token')
    Cookies.remove('user')
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    queryClient.clear()
    navigate({ to: '/' })
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex flex-col flex-1 h-screen overflow-hidden">
          <nav className="flex items-center justify-between w-full px-6 py-4 border-b bg-background shadow-sm">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
            </div>

            <div className="flex items-center gap-6 relative">
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
                          onClick={() => mutateAllNotification()}
                          className="text-xs text-primary hover:underline"
                        >
                          Mark all read
                        </button>
                      )}
                    </div>

                    {notificationData?.data?.results?.length === 0 ? (
                      <p className="text-xs text-muted-foreground px-4 py-2">
                        No notifications
                      </p>
                    ) : (
                      <ul className="flex flex-col">
                        {notificationData?.data?.results?.map((notif: any) => {
                          const urlMatch =
                            notif.message.match(/https?:\/\/[^\s]+/)
                          const link = urlMatch ? urlMatch[0] : null
                          const text = notif.message.replace(
                            /https?:\/\/[^\s]+/,
                            '',
                          )

                          return (
                            <li
                              key={notif.id}
                              className={`cursor-pointer transition-colors duration-200 ${
                                !notif.is_read
                                  ? 'bg-accent/5 font-semibold'
                                  : ''
                              }`}
                              onClick={() => {
                                if (!notif.is_read) mutateNotification(notif.id)
                                if (link)
                                  window.open(
                                    link,
                                    '_blank',
                                    'noopener,noreferrer',
                                  )
                                setNotifDropdownOpen(false)
                              }}
                            >
                              <div className="px-4 py-2 flex flex-col gap-1">
                                <span>{text}</span>
                                <span className="border-b border-border w-full" />
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center justify-center p-2 rounded-full hover:bg-muted cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground w-8 h-8 flex items-center justify-center rounded-full font-bold text-xs">
                    {user?.first_name.charAt(0).toUpperCase()}
                  </div>
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg text-foreground z-50">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                      <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground w-8 h-8 flex items-center justify-center rounded-full font-bold text-xs">
                        {user?.first_name.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">
                          {user?.first_name} {user?.last_name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {user?.email}
                        </span>
                      </div>
                    </div>

                    <ul className="flex flex-col py-2">
                      <li>
                        <Link
                          to="/hospitals"
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
                    </ul>

                    <div className="border-t border-border">
                      <button
                        onClick={handleLogout}
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
