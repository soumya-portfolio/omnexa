"use client";

import { ErrorState } from "@/components/ui/error-state";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

export default function ErrorExamplePage() {
  const handleRetry = () => {
    console.log("Retrying...");
    // Handle retry logic here
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
      <div className="flex">
        <Sidebar activeItem="projects" />
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                Error State Example
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1">
                Demonstrating the error state component
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Default Error State
                </h2>
                <ErrorState onRetry={handleRetry} />
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Custom Error State
                </h2>
                <ErrorState
                  title="Data Loading Failed"
                  message="We couldn't load your data. Please check your connection and try again."
                  onRetry={handleRetry}
                />
              </div>

              <div className="space-y-4 md:col-span-2">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  No Retry Option
                </h2>
                <ErrorState
                  title="Access Denied"
                  message="You don't have permission to access this resource. Please contact your administrator."
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
