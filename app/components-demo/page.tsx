"use client";

import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { EmptyState } from "@/components/ui/empty-state";
import { ErrorState } from "@/components/ui/error-state";
import { Chart } from "@/components/dashboard/chart";
import { StatsCard } from "@/components/dashboard/stats-card";
import { Users, DollarSign, TrendingUp, Activity, FileText, Settings } from "lucide-react";

export default function ComponentsDemoPage() {
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
  ];

  const chartData = [
    { label: "Mon", value: 65 },
    { label: "Tue", value: 78 },
    { label: "Wed", value: 90 },
    { label: "Thu", value: 81 },
    { label: "Fri", value: 95 },
    { label: "Sat", value: 70 },
  ];

  const tableData = [
    { name: "John Doe", role: "Developer", status: "active" },
    { name: "Jane Smith", role: "Designer", status: "active" },
    { name: "Bob Johnson", role: "Manager", status: "inactive" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
      <div className="flex">
        <Sidebar activeItem="settings" />
        <main className="flex-1 ml-64 p-8 animate-slide-in">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                Component Library
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1">
                A showcase of all UI components available in the design system
              </p>
            </div>

            {/* Buttons */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Buttons
              </h2>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Button>Primary Button</Button>
                    <Button variant="secondary">Secondary Button</Button>
                    <Button variant="ghost">Ghost Button</Button>
                    <Button variant="danger">Danger Button</Button>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                    <Button isLoading>Loading</Button>
                    <Button disabled>Disabled</Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Inputs */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Input Fields
              </h2>
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input label="Email Address" type="email" placeholder="john@example.com" />
                    <Input label="Password" type="password" placeholder="••••••••" />
                    <Input
                      label="With Error"
                      placeholder="Enter value"
                      error="This field is required"
                    />
                    <Input label="Disabled" placeholder="Can't edit" disabled />
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Badges */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Badges
              </h2>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-3">
                    <Badge>Default</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="danger">Danger</Badge>
                    <Badge variant="info">Info</Badge>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Avatars */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Avatars
              </h2>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Avatar initials="JD" size="sm" />
                    <Avatar initials="AS" size="md" />
                    <Avatar initials="MK" size="lg" />
                    <Avatar initials="RB" size="xl" />
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Cards */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Cards
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>This is a card description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400">
                      This is the card content area where you can put any content you need.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button>Action</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>With Icon</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-omnexa-primary-50 dark:bg-omnexa-primary-950/50 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-omnexa-primary-600 dark:text-omnexa-primary-400" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">
                          Feature Highlight
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Description of the feature
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Tables */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Tables
              </h2>
              <Card>
                <CardContent className="p-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {tableData.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{row.name}</TableCell>
                          <TableCell>{row.role}</TableCell>
                          <TableCell>
                            <Badge
                              variant={row.status === "active" ? "success" : "warning"}
                            >
                              {row.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </section>

            {/* Stats Cards & Charts */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Stats & Charts
              </h2>
              <div className="grid lg:grid-cols-3 gap-6 mb-6">
                {stats.map((stat, index) => (
                  <StatsCard key={index} {...stat} />
                ))}
              </div>
              <Chart title="Weekly Activity" data={chartData} />
            </section>

            {/* Empty & Error States */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Empty & Error States
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <EmptyState
                  icon={Settings}
                  title="No settings configured"
                  description="Configure your settings to get started."
                  action={{
                    label: "Configure Now",
                    onClick: () => console.log("Configure clicked"),
                  }}
                />
                <ErrorState
                  title="Something went wrong"
                  message="We encountered an error while loading your data."
                  onRetry={() => console.log("Retrying...")}
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
