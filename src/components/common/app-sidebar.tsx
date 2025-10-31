import {
  LayoutDashboard,
  Hospital,
  Stethoscope,
  Calendar,
  Settings,
  Blocks,
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

// Menu items.
const items = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Hospitals',
    url: '/hospitals',
    icon: Hospital,
  },
  {
    title: 'Departments',
    url: '/departments',
    icon: Blocks,
  },
  {
    title: 'Doctors',
    url: '/doctors',
    icon: Stethoscope,
  },

  {
    title: 'Appointment',
    url: '/appointments',
    icon: Calendar,
  },
  {
    title: 'Profile',
    url: '/profile',
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="h-full">
        <SidebarGroup>
          <SidebarGroupLabel className="text-2xl text-primary my-4">
            TeleHealth
          </SidebarGroupLabel>
          <SidebarGroupContent className="text-4xl space-y-4">
            <SidebarMenu className="text-4xl">
              {items.map((item) => (
                <SidebarMenuItem
                  className="text-4xl space-y-4"
                  key={item.title}
                >
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
