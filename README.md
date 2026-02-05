# OMNEXA Technologies

A modern, scalable, high-performance web application for OMNEXA Technologies - a technology company specializing in software, SaaS, and AI solutions.

## Overview

This application features a clean, intelligent, future-ready interface designed for long-term scalability and global users. The design follows modern minimalist SaaS aesthetics inspired by top tech products like Stripe, Linear, Vercel, Notion, and OpenAI.

## Features

### Design System
- **Color Palette**: Deep indigo/electric blue primary with subtle neon cyan accents
- **Typography**: Modern sans-serif (Inter) with clear readability
- **Layout**: Dashboard-based with responsive design (desktop-first, mobile-friendly)
- **Themes**: Full light and dark mode support
- **Components**: Comprehensive component library for consistent UI

### Pages & Screens
1. **Landing Page** - Professional homepage with hero section, features, benefits, and testimonials
2. **Login** - Clean authentication screen with modern design
3. **Signup** - Registration page with features overview
4. **Dashboard** - Main dashboard with stats cards, charts, activity tables, and quick actions
5. **Analytics** - Data visualization with performance metrics and insights
6. **Projects** - Project management with status tracking, progress bars, and team collaboration
7. **Settings** - Comprehensive settings page with profile management, notifications, and preferences

### Components
- Button (Primary, Secondary, Ghost, Danger variants)
- Input (with labels and error states)
- Card (with header, content, footer)
- Badge (multiple variants)
- Avatar (with initials and images)
- Table (styled data tables)
- Empty State (friendly empty states)
- Error State (clean error handling)
- Chart (simple bar charts)
- Stats Card (metrics display)
- Header/Navbar (responsive navigation)
- Sidebar (collapsible navigation)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Design Philosophy

### Visual Style
- Modern, minimalist, premium SaaS design
- Clean layouts with strong visual hierarchy
- Professional, enterprise-ready appearance
- Flat design with soft depth (no heavy 3D)
- Abstract tech patterns (very subtle)

### Color Scheme
- **Primary**: Deep indigo (#6366f1) to electric blue
- **Accent**: Subtle neon cyan or soft green (used sparingly)
- **Background**: White and dark mode compatible
- **High contrast** for accessibility (WCAG AA compliant)

### Typography
- Modern sans-serif font (Inter)
- Clear readability with strong spacing
- Bold headings, light body text
- Responsive font sizes

### UX Principles
- Dashboard-based layout for complex applications
- Smooth transitions and subtle micro-interactions
- Fast, intuitive, and distraction-free experience
- Clear navigation with consistent patterns

## Project Structure

```
omnexa-technologies/
├── app/
│   ├── analytics/        # Analytics page
│   ├── dashboard/        # Main dashboard
│   ├── login/           # Login page
│   ├── projects/        # Projects management
│   ├── settings/        # Settings page
│   ├── signup/          # Signup page
│   ├── globals.css      # Global styles and design tokens
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Landing page
├── components/
│   ├── dashboard/       # Dashboard-specific components
│   ├── layout/          # Layout components (Header, Sidebar)
│   └── ui/              # Reusable UI components
└── lib/
    └── utils.ts         # Utility functions
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

- WCAG AA compliant color contrast ratios
- Keyboard navigation support
- Screen reader friendly
- Focus indicators for interactive elements
- ARIA labels where appropriate

## Performance

- Optimized images and assets
- Lazy loading for better initial load time
- Minimal bundle size
- Code splitting for efficient loading
- Static generation where possible

## License

Copyright © 2024 OMNEXA Technologies. All rights reserved.
