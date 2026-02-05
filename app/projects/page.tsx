"use client";

import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import {
  Search,
  Plus,
  Filter,
  MoreVertical,
  Clock,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      name: "AI Platform Development",
      description: "Building next-generation AI-powered automation platform",
      status: "active",
      progress: 72,
      team: ["JD", "AS", "MK"],
      dueDate: "2024-03-15",
      priority: "high",
    },
    {
      id: 2,
      name: "Cloud Infrastructure",
      description: "Migrating and optimizing cloud infrastructure for scalability",
      status: "active",
      progress: 58,
      team: ["RB", "LK", "NM", "TW"],
      dueDate: "2024-03-28",
      priority: "high",
    },
    {
      id: 3,
      name: "Data Analytics Suite",
      description: "Comprehensive analytics and reporting tools",
      status: "review",
      progress: 89,
      team: ["CH", "PY"],
      dueDate: "2024-02-28",
      priority: "medium",
    },
    {
      id: 4,
      name: "Mobile App Redesign",
      description: "Complete UI/UX overhaul of mobile applications",
      status: "active",
      progress: 45,
      team: ["JD", "AS", "MK", "RB"],
      dueDate: "2024-04-10",
      priority: "medium",
    },
    {
      id: 5,
      name: "Security Enhancement",
      description: "Implementing advanced security protocols and audits",
      status: "pending",
      progress: 15,
      team: ["LK", "NM"],
      dueDate: "2024-04-22",
      priority: "high",
    },
    {
      id: 6,
      name: "API Integration",
      description: "Third-party integrations and API development",
      status: "completed",
      progress: 100,
      team: ["TW", "CH", "PY"],
      dueDate: "2024-02-15",
      priority: "low",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <Clock className="w-4 h-4" />;
      case "completed":
        return <CheckCircle className="w-4 h-4" />;
      case "pending":
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusVariant = (status: string): "success" | "info" | "warning" | "danger" | "default" => {
    switch (status) {
      case "active":
        return "info";
      case "completed":
        return "success";
      case "pending":
        return "warning";
      case "review":
        return "default";
      default:
        return "default";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600 bg-red-50 dark:bg-red-950/50 dark:text-red-400";
      case "medium":
        return "text-amber-600 bg-amber-50 dark:bg-amber-950/50 dark:text-amber-400";
      case "low":
        return "text-green-600 bg-green-50 dark:bg-green-950/50 dark:text-green-400";
      default:
        return "text-slate-600 bg-slate-50 dark:bg-slate-950/50 dark:text-slate-400";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
      <div className="flex">
        <Sidebar activeItem="projects" />
        <main className="flex-1 ml-64 p-8 animate-slide-in">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                  Projects
                </h1>
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  Manage and track all your projects
                </p>
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                New Project
              </Button>
            </div>

            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search projects..."
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-omnexa-primary-500 focus:border-transparent text-slate-900 dark:text-slate-100"
                    />
                  </div>
                  <Button variant="secondary">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-semibold mb-2">
                          {project.name}
                        </CardTitle>
                        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                      <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                        <MoreVertical className="w-5 h-5 text-slate-400" />
                      </button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Progress
                          </span>
                          <span className="text-sm text-slate-600 dark:text-slate-400">
                            {project.progress}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-omnexa-primary-600 rounded-full transition-all duration-500"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {project.team.slice(0, 3).map((member, index) => (
                            <Avatar
                              key={index}
                              initials={member}
                              size="sm"
                              className="border-2 border-white dark:border-slate-800"
                            />
                          ))}
                          {project.team.length > 3 && (
                            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-slate-800 flex items-center justify-center text-xs font-medium text-slate-600 dark:text-slate-400">
                              +{project.team.length - 3}
                            </div>
                          )}
                        </div>
                        <Badge variant={getStatusVariant(project.status)} className="text-xs">
                          {getStatusIcon(project.status)}
                          <span className="ml-1.5 capitalize">{project.status}</span>
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700">
                        <div>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Due Date</p>
                          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            {new Date(project.dueDate).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-slate-500 dark:text-slate-400">Priority</p>
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium capitalize ${getPriorityColor(
                              project.priority
                            )}`}
                          >
                            {project.priority}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
