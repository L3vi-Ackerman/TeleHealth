import { Hospital, Stethoscope, Calendar, Settings, Blocks } from 'lucide-react'

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
      <SidebarContent className="h-full animate__animated animate__fadeInLeft">
        <SidebarGroup>
          <SidebarGroupLabel className="text-2xl text-primary my-4 animate__animated animate__fadeInDown animate__delay-1s">
            TeleHealth
          </SidebarGroupLabel>
          <SidebarGroupContent className="space-y-4">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  className="animate__animated animate__fadeInLeft animate__delay-[0.1s*index]"
                  key={item.title}
                >
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-2 transform transition-transform duration-300 hover:scale-105 hover:text-[var(--sidebar-accent-foreground)]"
                    >
                      <item.icon className="transition-colors duration-300 group-hover/menu-item:text-[var(--sidebar-accent-foreground)]" />
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
