"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = "/dashboard";
    }, 1000);
  };

  const features = [
    "Unlimited projects",
    "Advanced analytics",
    "Team collaboration",
    "Priority support",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-omnexa-primary-50 via-white to-omnexa-accent-50 dark:from-slate-900 dark:via-slate-950 dark:to-omnexa-primary-950 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl animate-scale-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-omnexa-primary-600 to-omnexa-accent-500 mb-4 shadow-lg">
            <span className="text-3xl font-bold text-white">O</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Start your journey with OMNEXA
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Build the future with intelligent technology
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <Card className="card-shadow border-slate-200/50 dark:border-slate-800/50">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      id="firstName"
                      label="First name"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                    <Input
                      id="lastName"
                      label="Last name"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />
                  </div>

                  <Input
                    id="email"
                    label="Work email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />

                  <Input
                    id="company"
                    label="Company name"
                    placeholder="Acme Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />

                  <Input
                    id="password"
                    label="Create password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />

                  <Button type="submit" className="w-full" size="lg" isLoading={isLoading}>
                    Create account
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-200 dark:border-slate-700" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white dark:bg-slate-800 text-slate-500">
                        Already have an account?
                      </span>
                    </div>
                  </div>

                  <Link href="/login">
                    <Button variant="secondary" className="w-full mt-4">
                      Sign in
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="card-shadow border-slate-200/50 dark:border-slate-800/50 h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Everything you need
                </h3>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-omnexa-success-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-4 rounded-xl bg-omnexa-primary-50 dark:bg-omnexa-primary-950/50">
                  <p className="text-sm text-omnexa-primary-700 dark:text-omnexa-primary-300 font-medium">
                    ✓ 14-day free trial
                  </p>
                  <p className="text-sm text-omnexa-primary-600 dark:text-omnexa-primary-400 mt-1">
                    No credit card required
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          By creating an account, you agree to our{" "}
          <Link href="/terms" className="text-omnexa-primary-600 hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-omnexa-primary-600 hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
