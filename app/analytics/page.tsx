"use client";

import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Chart } from "@/components/dashboard/chart";
import { StatsCard } from "@/components/dashboard/stats-card";
import {
  BarChart3,
  PieChart,
  TrendingUp,
  Users,
  Download,
  Filter,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function AnalyticsPage() {
  const stats = [
    {
      title: "Page Views",
      value: "1.2M",
      change: { value: 18.2, isPositive: true },
      icon: BarChart3,
    },
    {
      title: "Unique Visitors",
      value: "458K",
      change: { value: 12.5, isPositive: true },
      icon: Users,
    },
    {
      title: "Bounce Rate",
      value: "32.4%",
      change: { value: 5.1, isPositive: false },
      icon: PieChart,
    },
    {
      title: "Avg. Session",
      value: "4m 32s",
      change: { value: 8.7, isPositive: true },
      icon: TrendingUp,
    },
  ];

  const trafficSources = [
    { source: "Organic Search", visitors: "145,230", percentage: 32, trend: "+12%" },
    { source: "Direct", visitors: "98,450", percentage: 22, trend: "+8%" },
    { source: "Referral", visitors: "76,890", percentage: 17, trend: "+15%" },
    { source: "Social Media", visitors: "65,120", percentage: 14, trend: "+22%" },
    { source: "Email", visitors: "43,210", percentage: 10, trend: "+5%" },
    { source: "Other", visitors: "25,890", percentage: 5, trend: "+2%" },
  ];

  const topPages = [
    { page: "/dashboard", views: "245,890", avgTime: "3m 45s", bounceRate: "28%" },
    { page: "/analytics", views: "189,450", avgTime: "5m 12s", bounceRate: "22%" },
    { page: "/projects", views: "156,780", avgTime: "4m 32s", bounceRate: "35%" },
    { page: "/settings", views: "98,650", avgTime: "2m 18s", bounceRate: "42%" },
    { page: "/reports", views: "76,540", avgTime: "6m 45s", bounceRate: "18%" },
  ];

  const weeklyData = [
    { label: "Mon", value: 850 },
    { label: "Tue", value: 920 },
    { label: "Wed", value: 890 },
    { label: "Thu", value: 1100 },
    { label: "Fri", value: 980 },
    { label: "Sat", value: 650 },
    { label: "Sun", value: 720 },
  ];

  const monthlyData = [
    { label: "Jan", value: 450 },
    { label: "Feb", value: 520 },
    { label: "Mar", value: 680 },
    { label: "Apr", value: 720 },
    { label: "May", value: 850 },
    { label: "Jun", value: 920 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
      <div className="flex">
        <Sidebar activeItem="analytics" />
        <main className="flex-1 ml-64 p-8 animate-slide-in">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                  Analytics
                </h1>
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  Track your performance and gain insights
                </p>
              </div>
              <div className="flex space-x-3">
                <Button variant="secondary">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button>
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <StatsCard key={index} {...stat} />
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              <Chart title="Weekly Visitors" data={weeklyData} color="#6366f1" />
              <Chart title="Monthly Growth" data={monthlyData} color="#0891b2" />
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Traffic Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Source</TableHead>
                        <TableHead>Visitors</TableHead>
                        <TableHead>Share</TableHead>
                        <TableHead>Trend</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {trafficSources.map((source, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{source.source}</TableCell>
                          <TableCell>{source.visitors}</TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <div className="w-24 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-omnexa-primary-600 rounded-full"
                                  style={{ width: `${source.percentage}%` }}
                                />
                              </div>
                              <span className="text-sm text-slate-600 dark:text-slate-400">
                                {source.percentage}%
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="success">{source.trend}</Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Top Pages</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Page</TableHead>
                        <TableHead>Views</TableHead>
                        <TableHead>Avg. Time</TableHead>
                        <TableHead>Bounce</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {topPages.map((page, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{page.page}</TableCell>
                          <TableCell>{page.views}</TableCell>
                          <TableCell className="text-slate-600 dark:text-slate-400">
                            {page.avgTime}
                          </TableCell>
                          <TableCell className="text-slate-600 dark:text-slate-400">
                            {page.bounceRate}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
