"use client";

import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import {
  User,
  Bell,
  Shield,
  CreditCard,
  Globe,
  Palette,
  Save,
  Camera,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function SettingsPage() {
  const settings = [
    {
      id: "profile",
      icon: User,
      title: "Profile",
      description: "Manage your account information",
    },
    {
      id: "notifications",
      icon: Bell,
      title: "Notifications",
      description: "Configure your notification preferences",
    },
    {
      id: "security",
      icon: Shield,
      title: "Security",
      description: "Password and authentication settings",
    },
    {
      id: "billing",
      icon: CreditCard,
      title: "Billing",
      description: "Manage your subscription and payment methods",
    },
    {
      id: "appearance",
      icon: Palette,
      title: "Appearance",
      description: "Customize your interface preferences",
    },
    {
      id: "integrations",
      icon: Globe,
      title: "Integrations",
      description: "Manage third-party connections",
    },
  ];

  const notificationSettings = [
    { label: "Email notifications", enabled: true },
    { label: "Push notifications", enabled: true },
    { label: "SMS notifications", enabled: false },
    { label: "Weekly digest", enabled: true },
    { label: "Project updates", enabled: true },
    { label: "Security alerts", enabled: true },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
      <div className="flex">
        <Sidebar activeItem="settings" />
        <main className="flex-1 ml-64 p-8 animate-slide-in">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                Settings
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1">
                Manage your account and preferences
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-6 mb-8">
              <div className="lg:col-span-3 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Profile Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start space-x-6 mb-6">
                      <div className="relative">
                        <Avatar initials="JD" size="xl" className="w-24 h-24" />
                        <button className="absolute bottom-0 right-0 p-2 bg-omnexa-primary-600 text-white rounded-full hover:bg-omnexa-primary-700 transition-colors">
                          <Camera className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex-1 pt-4">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                          John Doe
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400">
                          john@omnexa.com
                        </p>
                        <Badge variant="info" className="mt-2">Pro Plan</Badge>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        label="First Name"
                        defaultValue="John"
                        placeholder="Enter your first name"
                      />
                      <Input
                        label="Last Name"
                        defaultValue="Doe"
                        placeholder="Enter your last name"
                      />
                      <Input
                        label="Email"
                        type="email"
                        defaultValue="john@omnexa.com"
                        placeholder="Enter your email"
                      />
                      <Input
                        label="Phone"
                        type="tel"
                        defaultValue="+1 (555) 123-4567"
                        placeholder="Enter your phone number"
                      />
                      <Input
                        label="Job Title"
                        defaultValue="Software Engineer"
                        placeholder="Enter your job title"
                      />
                      <Input
                        label="Company"
                        defaultValue="OMNEXA Technologies"
                        placeholder="Enter your company name"
                      />
                    </div>

                    <div className="mt-6">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Bio
                      </label>
                      <textarea
                        className="w-full px-3 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-omnexa-primary-500 focus:border-transparent transition-all duration-200 text-slate-900 dark:text-slate-100 placeholder-slate-400 resize-none"
                        rows={4}
                        placeholder="Tell us about yourself..."
                        defaultValue="Passionate software engineer with 5+ years of experience in building scalable applications."
                      />
                    </div>

                    <div className="mt-6 flex justify-end">
                      <Button>
                        <Save className="w-4 h-4 mr-2" />
                        Save Changes
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Notification Preferences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {notificationSettings.map((setting, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-700 last:border-0"
                        >
                          <div>
                            <p className="font-medium text-slate-900 dark:text-white">
                              {setting.label}
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              Receive notifications about this activity
                            </p>
                          </div>
                          <button
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                              setting.enabled
                                ? "bg-omnexa-primary-600"
                                : "bg-slate-300 dark:bg-slate-600"
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                                setting.enabled ? "translate-x-6" : "translate-x-1"
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Danger Zone</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start justify-between p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                        <div>
                          <h4 className="font-medium text-slate-900 dark:text-white">
                            Delete Account
                          </h4>
                          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                            Permanently delete your account and all associated data
                          </p>
                        </div>
                        <Button variant="danger">Delete Account</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <div className="sticky top-24">
                  <nav className="space-y-1">
                    {settings.map((setting) => (
                      <a
                        key={setting.id}
                        href={`#${setting.id}`}
                        className="flex items-start space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                      >
                        <setting.icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <div>
                          <p>{setting.title}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            {setting.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </nav>

                  <Card className="mt-6">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        Need Help?
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        Our support team is available 24/7 to assist you.
                      </p>
                      <Button variant="secondary" className="w-full">
                        Contact Support
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
