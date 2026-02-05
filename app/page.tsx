"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Zap,
  Shield,
  Users,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Gain deep insights with real-time analytics and comprehensive reporting tools that help you make data-driven decisions.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Built for speed with optimized performance and instant load times, ensuring your team stays productive without delays.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-grade security with end-to-end encryption, multi-factor authentication, and compliance with industry standards.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Seamlessly collaborate with your team in real-time, share resources, and manage projects with intuitive tools.",
    },
  ];

  const benefits = [
    "Unlimited projects and workspaces",
    "Advanced analytics and insights",
    "Real-time collaboration features",
    "Custom integrations and APIs",
    "Priority support 24/7",
    "99.9% uptime guarantee",
    "Advanced security features",
    "Custom branding options",
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content:
        "OMNEXA has transformed how our team operates. The analytics alone have saved us countless hours and improved our decision-making.",
    },
    {
      name: "Michael Chen",
      role: "Product Manager, StartupXYZ",
      content:
        "The best platform we've used. Clean interface, powerful features, and the support team is incredibly responsive.",
    },
    {
      name: "Emily Davis",
      role: "CEO, InnovateLab",
      content:
        "We scaled from 10 to 100 employees with OMNEXA. It's been instrumental in maintaining our productivity and culture.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <nav className="sticky top-0 z-50 glass-effect border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-omnexa-primary-600 to-omnexa-accent-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                OMNEXA
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-sm font-medium">
                Features
              </a>
              <a href="#benefits" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-sm font-medium">
                Benefits
              </a>
              <a href="#testimonials" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-sm font-medium">
                Testimonials
              </a>
              <Link href="/login" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-sm font-medium">
                Sign in
              </Link>
              <Link href="/signup">
                <Button>Get Started</Button>
              </Link>
            </div>

            <div className="md:hidden">
              <button className="text-slate-600 dark:text-slate-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 gradient-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-omnexa-primary-50 dark:bg-omnexa-primary-950/50 text-omnexa-primary-700 dark:text-omnexa-primary-300 text-sm font-medium mb-8">
              <span className="flex h-2 w-2 relative mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-omnexa-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-omnexa-primary-500" />
              </span>
              Introducing OMNEXA 2.0 - Now with AI capabilities
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              Build the Future of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-omnexa-primary-600 to-omnexa-accent-500">
                Technology
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
              A powerful platform designed for modern teams. Streamline workflows, accelerate development, and scale with confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto px-8 py-4 text-base">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto px-8 py-4 text-base">
                  View Demo
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Powerful features designed to help teams of all sizes achieve more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-omnexa-primary-50 dark:bg-omnexa-primary-950/50 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-omnexa-primary-600 dark:text-omnexa-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Why choose OMNEXA?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                Join thousands of teams already using OMNEXA to power their business.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-omnexa-success-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-omnexa-primary-500 to-omnexa-accent-500 rounded-2xl blur-3xl opacity-20" />
              <Card className="relative card-shadow border-slate-200 dark:border-slate-700">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Productivity</span>
                      <span className="text-2xl font-bold text-omnexa-primary-600 dark:text-omnexa-primary-400">
                        +340%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-omnexa-primary-600 to-omnexa-accent-500 rounded-full" style={{ width: "90%" }} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Time Saved</span>
                      <span className="text-2xl font-bold text-omnexa-primary-600 dark:text-omnexa-primary-400">
                        24h/week
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-omnexa-primary-600 to-omnexa-accent-500 rounded-full" style={{ width: "85%" }} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Team Satisfaction</span>
                      <span className="text-2xl font-bold text-omnexa-primary-600 dark:text-omnexa-primary-400">
                        98%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-omnexa-primary-600 to-omnexa-accent-500 rounded-full" style={{ width: "98%" }} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Loved by teams worldwide
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              See what our customers have to say about their experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-omnexa-accent-500 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-6">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to transform your workflow?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">
            Join thousands of teams using OMNEXA to build better products faster.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto px-8 py-4 text-base">
                Start Your Free Trial
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto px-8 py-4 text-base">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-omnexa-primary-600 to-omnexa-accent-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">O</span>
                </div>
                <span className="text-xl font-bold text-slate-900 dark:text-white">
                  OMNEXA
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Building the future of technology with intelligent solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-omnexa-primary-600">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-omnexa-primary-600">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-omnexa-primary-600">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-omnexa-primary-600">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-omnexa-primary-600">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-omnexa-primary-600">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-omnexa-primary-600">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-omnexa-primary-600">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-omnexa-primary-600">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-omnexa-primary-600">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-omnexa-primary-600">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500 dark:text-slate-400">
            <p>© 2024 OMNEXA Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
