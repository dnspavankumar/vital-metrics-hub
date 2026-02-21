import {
  LayoutDashboard,
  Users,
  FileText,
  BarChart3,
  Lightbulb,
  Building2,
  UserCog,
  Settings,
  Activity,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Patients", url: "/patients", icon: Users },
  { title: "Records", url: "/records", icon: FileText },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
];

const operationsItems = [
  { title: "Resource Insights", url: "/resources", icon: Lightbulb },
  { title: "Infrastructure", url: "/infrastructure", icon: Building2 },
  { title: "Staff Management", url: "/staff", icon: UserCog },
];

const systemItems = [
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const renderItems = (items: typeof mainItems) => (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild isActive={isActive(item.url)}>
            <NavLink
              to={item.url}
              end
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors hover:bg-sidebar-accent"
              activeClassName="bg-sidebar-accent text-primary font-medium"
            >
              <item.icon className="h-4 w-4 shrink-0" />
              <span>{item.title}</span>
            </NavLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <Activity className="h-6 w-6 text-primary shrink-0" />
          <span className="font-semibold text-base group-data-[collapsible=icon]:hidden">
            MedCore EHR
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-3">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground px-3 mb-1">
            Overview
          </SidebarGroupLabel>
          <SidebarGroupContent>{renderItems(mainItems)}</SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground px-3 mb-1 mt-4">
            Operations
          </SidebarGroupLabel>
          <SidebarGroupContent>{renderItems(operationsItems)}</SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground px-3 mb-1 mt-4">
            System
          </SidebarGroupLabel>
          <SidebarGroupContent>{renderItems(systemItems)}</SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3 border-t border-sidebar-border group-data-[collapsible=icon]:hidden">
        <p className="text-xs text-muted-foreground">v1.0.0 · MedCore EHR</p>
      </SidebarFooter>
    </Sidebar>
  );
}
