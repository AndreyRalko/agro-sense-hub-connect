
import { Home, User, Map, Truck, BarChart3, Settings, Bell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const menuItems = [
  {
    title: "Дашборд",
    url: "/",
    icon: Home,
  },
  {
    title: "Профиль",
    url: "/profile",
    icon: User,
  },
  {
    title: "Карта полей",
    url: "/fields",
    icon: Map,
  },
  {
    title: "Техника",
    url: "/machinery",
    icon: Truck,
  },
  {
    title: "Аналитика",
    url: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Уведомления",
    url: "/notifications",
    icon: Bell,
  },
  {
    title: "Настройки",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-agro-200">
        <div className="flex items-center gap-2 px-4 py-3">
          <div className="w-8 h-8 bg-agro-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">SC</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-agro-900">Smart Centre</h1>
            <p className="text-xs text-agro-600">ООО "АгроТех"</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Модули системы</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.url}
                  >
                    <Link to={item.url}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-agro-200">
        <div className="px-4 py-2 text-xs text-agro-600">
          Версия 2.1.0
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
