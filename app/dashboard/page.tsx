"use client"

import { useState } from "react"
import { Check, Upload, MessageSquare, AlertCircle, Users, DollarSign, Activity, Zap, Plus, FileText, Settings } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { StatsCard } from "@/components/dashboard/stats-card"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { RecentActivity } from "@/components/dashboard/recent-activity"

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const quickActions = [
    {
      title: "New Project",
      description: "Start a new project",
      icon: Plus,
      onClick: () => console.log("New project"),
    },
    {
      title: "Upload File",
      description: "Upload documents",
      icon: Upload,
      onClick: () => console.log("Upload file"),
    },
    {
      title: "Create Report",
      description: "Generate reports",
      icon: FileText,
      onClick: () => console.log("Create report"),
    },
  ]

  const recentActivities = [
    {
      id: "1",
      user: { name: "John Doe" },
      action: "completed",
      target: "Project Alpha",
      icon: Check,
      time: "2 minutes ago",
      type: "success" as const,
    },
    {
      id: "2",
      user: { name: "Jane Smith" },
      action: "uploaded",
      target: "Q4 Report",
      icon: Upload,
      time: "15 minutes ago",
      type: "info" as const,
    },
    {
      id: "3",
      user: { name: "Mike Johnson" },
      action: "commented on",
      target: "Dashboard",
      icon: MessageSquare,
      time: "1 hour ago",
      type: "info" as const,
    },
    {
      id: "4",
      user: { name: "Sarah Williams" },
      action: "flagged",
      target: "Issue #234",
      icon: AlertCircle,
      time: "2 hours ago",
      type: "warning" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="lg:pl-64">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="p-4 md:p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Welcome back, John! Here's what's happening.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <StatsCard
              title="Total Revenue"
              value="$45,231.89"
              change={{ value: 20.1, isPositive: true }}
              icon={DollarSign}
            />
            <StatsCard
              title="Active Users"
              value="+2350"
              change={{ value: 180.1, isPositive: true }}
              icon={Users}
            />
            <StatsCard
              title="Active Projects"
              value="+573"
              change={{ value: 19, isPositive: true }}
              icon={Activity}
            />
            <StatsCard
              title="Efficiency Score"
              value="94.2%"
              change={{ value: 4.3, isPositive: true }}
              icon={Zap}
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Quick Actions */}
            <div className="lg:col-span-2">
              <QuickActions actions={quickActions} />
            </div>

            {/* Recent Activity */}
            <div>
              <RecentActivity activities={recentActivities} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
