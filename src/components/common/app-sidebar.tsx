import { Hospital, Stethoscope, Blocks } from 'lucide-react'

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
import { useLocation } from '@tanstack/react-router'

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
]

export function AppSidebar() {
  const location = useLocation()
  return (
    <Sidebar>
      <SidebarContent className="h-full animate__animated animate__fadeInLeft">
        <SidebarGroup>
          <SidebarGroupLabel className="text-4xl font-semibold text-primary my-4 animate__animated animate__fadeInDown animate__delay-1s">
            TeleHealth
          </SidebarGroupLabel>
          <SidebarGroupContent className="space-y-4 mt-4">
            <SidebarMenu>
              {items.map((item, index) => {
                const isActive = location.pathname === item.url
                return (
                  <SidebarMenuItem
                    key={item.title}
                    className={`animate__animated animate__fadeInLeft animate__delay-[${0.1 * index}s] mb-2 ${
                      isActive ? 'bg-accent/20 rounded-lg' : ''
                    }`}
                  >
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className={`py-4 flex items-center gap-2 transform transition-transform duration-300 hover:scale-105 hover:text-sidebar-accent-foreground ${
                          isActive ? 'text-primary font-semibold ' : ''
                        }`}
                      >
                        <item.icon className="transition-colors duration-300 group-hover/menu-item:text-sidebar-accent-foreground" />
                        <span className="text-lg">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
