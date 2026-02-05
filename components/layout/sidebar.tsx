"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  BarChart3,
  FolderKanban,
  Settings,
  Users,
  FileText,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeItem?: string;
}

export function Sidebar({ activeItem = "dashboard" }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      id: "dashboard",
    },
    {
      name: "Analytics",
      href: "/analytics",
      icon: BarChart3,
      id: "analytics",
    },
    {
      name: "Projects",
      href: "/projects",
      icon: FolderKanban,
      id: "projects",
    },
    {
      name: "Users",
      href: "/users",
      icon: Users,
      id: "users",
    },
    {
      name: "Reports",
      href: "/reports",
      icon: FileText,
      id: "reports",
    },
    {
      name: "Integrations",
      href: "/integrations",
      icon: Zap,
      id: "integrations",
    },
    {
      name: "Settings",
      href: "/settings",
      icon: Settings,
      id: "settings",
    },
  ];

  return (
    <aside
      className={cn(
        "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex flex-col h-full py-4">
        <nav className="flex-1 px-3 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-omnexa-primary-50 dark:bg-omnexa-primary-950/50 text-omnexa-primary-700 dark:text-omnexa-primary-300"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
                )}
              >
                <Icon className={cn("w-5 h-5 flex-shrink-0", isCollapsed && "mx-auto")} />
                {!isCollapsed && <span>{item.name}</span>}
              </a>
            );
          })}
        </nav>

        <div className="px-3 border-t border-slate-200 dark:border-slate-700 pt-4">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="w-full flex items-center justify-center p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-200"
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <>
                <ChevronLeft className="w-5 h-5" />
                <span className="ml-2 text-sm font-medium">Collapse</span>
              </>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
}
