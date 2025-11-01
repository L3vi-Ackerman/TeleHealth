import { LuClock } from 'react-icons/lu'
import { Link } from '@tanstack/react-router'
// import { Skeleton } from '../ui/skeleton'
// import { useGetMe } from '@/hooks/auth/me/queries'

export default function Header() {
  // const { data, isPending } = useGetMe()
  // const linkTo = !isPending
  //   ? data?.role === 'ADMIN'
  //     ? '/admin/dashboard'
  //     : '/timesheets/view-timesheet'
  //   : '/timesheets/view-timesheet'
  return (
    <header className="flex items-center justify-between px-6 py-2.5 border-b border-border bg-navbar-background">
      <Link to={'/hospitals'} className="flex items-center gap-3">
        <div className="size-10 bg-linear-to-r from-blue-500 to-blue-600 flex items-center justify-center rounded-xl">
          <LuClock size={18} className="text-white" />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-black dark:text-white">
            TeleHealth
          </h1>
        </div>
      </Link>
    </header>
  )
}
