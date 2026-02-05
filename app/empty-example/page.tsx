"use client";

import { EmptyState } from "@/components/ui/empty-state";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Inbox, FileText, Users, FolderOpen } from "lucide-react";

export default function EmptyExamplePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
      <div className="flex">
        <Sidebar activeItem="projects" />
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                Empty State Examples
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1">
                Demonstrating various empty state components
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  No Projects
                </h2>
                <EmptyState
                  icon={FolderOpen}
                  title="No projects yet"
                  description="Create your first project to get started with managing your work."
                  action={{
                    label: "Create Project",
                    onClick: () => console.log("Create project clicked"),
                  }}
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  No Documents
                </h2>
                <EmptyState
                  icon={FileText}
                  title="No documents found"
                  description="Upload or create documents to start collaborating with your team."
                  action={{
                    label: "Upload Document",
                    onClick: () => console.log("Upload document clicked"),
                  }}
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Empty Inbox
                </h2>
                <EmptyState
                  icon={Inbox}
                  title="No messages"
                  description="Your inbox is empty. New messages will appear here."
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  No Team Members
                </h2>
                <EmptyState
                  icon={Users}
                  title="No team members yet"
                  description="Invite team members to collaborate on your projects."
                  action={{
                    label: "Invite Member",
                    onClick: () => console.log("Invite member clicked"),
                  }}
                />
              </div>
            </div>

            <div className="mt-8">
              <Button onClick={() => window.history.back()}>
                Go Back
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
