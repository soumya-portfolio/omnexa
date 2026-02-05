"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { ChartCard } from "@/components/analytics/chart-card"
import { MetricGrid } from "@/components/analytics/metric-grid"
import { DataTable } from "@/components/analytics/data-table"
import { ThemeProvider } from "@/components/providers/theme-provider"
import {
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

export default function AnalyticsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const metrics = [
    { label: "Total Page Views", value: "2.4M", icon: BarChart3, trend: { value: 12.5, isPositive: true } },
    { label: "Unique Visitors", value: "845.2K", icon: Users, trend: { value: 8.2, isPositive: true } },
    { label: "Conversion Rate", value: "3.24%", icon: TrendingUp, trend: { value: 5.1, isPositive: true } },
    { label: "Revenue", value: "$1.2M", icon: DollarSign, trend: { value: 2.3, isPositive: true } },
  ]

  const columns = [
    { key: "name", label: "Source" },
    { key: "visitors", label: "Visitors", sortable: true },
    { key: "conversions", label: "Conversions", sortable: true },
    { key: "revenue", label: "Revenue", sortable: true },
    { key: "status", label: "Status" },
  ]

  const data = [
    { id: "1", name: "Direct", visitors: "245,891", conversions: "12,234", revenue: "$124,500", status: "active" },
    { id: "2", name: "Google", visitors: "189,234", conversions: "9,876", revenue: "$98,200", status: "active" },
    { id: "3", name: "Facebook", visitors: "156,789", conversions: "7,543", revenue: "$76,500", status: "active" },
    { id: "4", name: "LinkedIn", visitors: "98,456", conversions: "4,321", revenue: "$43,200", status: "pending" },
    { id: "5", name: "Twitter", visitors: "67,890", conversions: "2,345", revenue: "$23,400", status: "completed" },
  ]

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="lg:pl-64">
          <Header onMenuClick={() => setSidebarOpen(true)} />
          <main className="p-4 md:p-6 lg:p-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Analytics</h1>
                <p className="text-muted-foreground mt-1">
                  Track your performance and insights
                </p>
              </div>
            </div>

            {/* Metric Grid */}
            <div className="mb-8">
              <MetricGrid metrics={metrics} columns={4} />
            </div>

            {/* Charts */}
            <div className="grid gap-6 lg:grid-cols-2 mb-8">
              <ChartCard
                title="Traffic Overview"
                description="Page views over time"
                icon={BarChart3}
              >
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Chart visualization placeholder</p>
                    <p className="text-sm">Integrate with Chart.js or Recharts</p>
                  </div>
                </div>
              </ChartCard>

              <ChartCard
                title="Revenue Trend"
                description="Monthly revenue breakdown"
                icon={TrendingUp}
                actions={{
                  label: "Export",
                  onClick: () => console.log("Export"),
                }}
              >
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Chart visualization placeholder</p>
                    <p className="text-sm">Integrate with Chart.js or Recharts</p>
                  </div>
                </div>
              </ChartCard>
            </div>

            {/* Data Table */}
            <ChartCard
              title="Traffic Sources"
              description="Detailed breakdown by source"
              icon={Users}
            >
              <DataTable columns={columns} data={data} />
            </ChartCard>
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}
