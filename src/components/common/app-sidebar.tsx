import { Hospital, Stethoscope, User, Blocks } from 'lucide-react'

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

const items = [
  { title: 'Hospitals', url: '/hospitals', icon: Hospital },
  { title: 'Departments', url: '/departments', icon: Blocks },
  { title: 'Doctors', url: '/doctors', icon: Stethoscope },
  { title: 'Patients', url: '/patients', icon: User },
]

export function AppSidebar() {
  return (
    <Sidebar className="bg-gray-50 dark:bg-gray-900 shadow-lg">
      <SidebarContent className="h-full p-4 animate__animated animate__fadeInLeft">
        <SidebarGroup>
          <SidebarGroupLabel className="text-3xl font-bold text-primary mb-6 animate__animated animate__fadeInDown animate__delay-500ms">
            TeleHealth
          </SidebarGroupLabel>

          <SidebarGroupContent className="space-y-4">
            {' '}
            {/* Increased spacing */}
            <SidebarMenu className="flex flex-col gap-3">
              {' '}
              {/* Extra spacing */}
              {items.map((item, index) => (
                <SidebarMenuItem
                  key={item.title}
                  className={`animate__animated animate__fadeInLeft animate__delay-${index + 1}s`}
                >
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="group flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:translate-x-1"
                    >
                      <item.icon className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors duration-300" />
                      <span className="font-medium text-base">
                        {item.title}
                      </span>
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
