"use client";

import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { StatsCard } from "@/components/dashboard/stats-card";
import { Chart } from "@/components/dashboard/chart";
import {
  Users,
  DollarSign,
  TrendingUp,
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$84,254",
      change: { value: 12.5, isPositive: true },
      icon: DollarSign,
    },
    {
      title: "Active Users",
      value: "12,847",
      change: { value: 8.2, isPositive: true },
      icon: Users,
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: { value: 2.1, isPositive: true },
      icon: TrendingUp,
    },
    {
      title: "Active Sessions",
      value: "1,429",
      change: { value: 4.3, isPositive: false },
      icon: Activity,
    },
  ];

  const recentActivity = [
    {
      project: "E-commerce Platform",
      status: "completed",
      date: "2 hours ago",
      team: "Frontend Team",
    },
    {
      project: "API Integration",
      status: "in-progress",
      date: "4 hours ago",
      team: "Backend Team",
    },
    {
      project: "Mobile App Update",
      status: "pending",
      date: "6 hours ago",
      team: "Mobile Team",
    },
    {
      project: "Dashboard Analytics",
      status: "completed",
      date: "1 day ago",
      team: "Data Team",
    },
    {
      project: "Security Audit",
      status: "in-progress",
      date: "1 day ago",
      team: "Security Team",
    },
  ];

  const topProjects = [
    {
      name: "AI Assistant Platform",
      revenue: "$32,450",
      growth: "+15.2%",
      status: "active",
    },
    {
      name: "Cloud Migration",
      revenue: "$28,120",
      growth: "+8.7%",
      status: "active",
    },
    {
      name: "Data Analytics Suite",
      revenue: "$19,840",
      growth: "+22.1%",
      status: "active",
    },
    {
      name: "Automation Tools",
      revenue: "$15,670",
      growth: "+5.4%",
      status: "review",
    },
  ];

  const monthlyData = [
    { label: "Jan", value: 65 },
    { label: "Feb", value: 78 },
    { label: "Mar", value: 90 },
    { label: "Apr", value: 81 },
    { label: "May", value: 95 },
    { label: "Jun", value: 112 },
    { label: "Jul", value: 125 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
      <div className="flex">
        <Sidebar activeItem="dashboard" />
        <main className="flex-1 ml-64 p-8 animate-slide-in">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                  Dashboard
                </h1>
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  Welcome back! Here's what's happening with your projects.
                </p>
              </div>
              <Button>
                <ArrowUpRight className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <StatsCard key={index} {...stat} />
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <Chart title="Monthly Revenue" data={monthlyData} />
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="secondary" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-3" />
                    Invite Team Member
                  </Button>
                  <Button variant="secondary" className="w-full justify-start">
                    <CheckCircle2 className="w-4 h-4 mr-3" />
                    Create New Project
                  </Button>
                  <Button variant="secondary" className="w-full justify-start">
                    <Clock className="w-4 h-4 mr-3" />
                    Schedule Report
                  </Button>
                  <Button variant="secondary" className="w-full justify-start">
                    <AlertCircle className="w-4 h-4 mr-3" />
                    View Alerts
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
                    <Button variant="ghost" size="sm">View All</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Project</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Team</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentActivity.map((activity, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{activity.project}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                activity.status === "completed"
                                  ? "success"
                                  : activity.status === "in-progress"
                                  ? "info"
                                  : "warning"
                              }
                            >
                              {activity.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{activity.team}</TableCell>
                          <TableCell className="text-slate-500 dark:text-slate-400">
                            {activity.date}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">Top Projects</CardTitle>
                    <Button variant="ghost" size="sm">View All</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Project</TableHead>
                        <TableHead>Revenue</TableHead>
                        <TableHead>Growth</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {topProjects.map((project, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{project.name}</TableCell>
                          <TableCell>{project.revenue}</TableCell>
                          <TableCell>
                            <span className="text-omnexa-success-600 dark:text-omnexa-success-400">
                              {project.growth}
                            </span>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                project.status === "active" ? "success" : "warning"
                              }
                            >
                              {project.status}
                            </Badge>
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
