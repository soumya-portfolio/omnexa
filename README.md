# OMNEXA Technologies - Web Application

A modern, scalable, high-performance web application built with Next.js 14+, React 19, TypeScript, Tailwind CSS 4, and shadcn/ui.

## Features

- **Modern Design**: Clean, minimalist, premium SaaS aesthetic inspired by Stripe, Linear, Vercel, and Notion
- **Responsive Layout**: Desktop-first with mobile-friendly navigation
- **Dark Mode**: Full theme support with smooth transitions
- **Component Library**: Reusable UI components based on shadcn/ui
- **TypeScript**: Type-safe development experience
- **Accessibility**: WCAG AA compliant with keyboard navigation and ARIA labels

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Components**: shadcn/ui (customized for OMNEXA brand)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Theme**: next-themes for dark mode support
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd omnexa-technologies
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
omnexa-technologies/
├── app/
│   ├── dashboard/         # Dashboard page
│   ├── analytics/         # Analytics page
│   ├── settings/          # Settings page
│   ├── login/             # Login page
│   ├── signup/            # Signup page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page (redirects to dashboard)
│   └── globals.css        # Global styles
├── components/
│   ├── auth/              # Authentication components
│   │   └── auth-card.tsx
│   ├── dashboard/         # Dashboard-specific components
│   │   ├── stats-card.tsx
│   │   ├── quick-actions.tsx
│   │   └── recent-activity.tsx
│   ├── analytics/         # Analytics-specific components
│   │   ├── chart-card.tsx
│   │   ├── metric-grid.tsx
│   │   └── data-table.tsx
│   ├── layout/            # Layout components
│   │   ├── header.tsx
│   │   ├── sidebar.tsx
│   │   └── container.tsx
│   ├── ui/                # UI components (shadcn/ui)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── select.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── badge.tsx
│   │   ├── avatar.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── switch.tsx
│   ├── special/           # Special components
│   │   ├── theme-toggle.tsx
│   │   ├── empty-state.tsx
│   │   ├── error-state.tsx
│   │   ├── skeleton.tsx
│   │   └── cta-button.tsx
│   ├── patterns/          # Visual patterns
│   │   ├── grid-pattern.tsx
│   │   └── gradient-orb.tsx
│   └── providers/         # Context providers
│       └── theme-provider.tsx
├── lib/
│   └── utils.ts           # Utility functions
├── public/                # Static assets
├── .eslintrc.json         # ESLint configuration
├── .gitignore            # Git ignore rules
├── .prettierrc           # Prettier configuration
├── components.json       # shadcn/ui configuration
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Pages

### Authentication
- **Login** (`/login`) - Modern login form with validation
- **Signup** (`/signup`) - Signup form with terms acceptance

### Main Application
- **Dashboard** (`/dashboard`) - Main hub with KPI stats, quick actions, and recent activity
- **Analytics** (`/analytics`) - Analytics overview with data visualization
- **Settings** (`/settings`) - Settings with tab navigation (Profile, Appearance, Security, Notifications)

## Components

### Layout Components
- `Header` - Top navigation bar with search, notifications, and user menu
- `Sidebar` - Collapsible sidebar with navigation links
- `Container` - Responsive container wrapper

### Authentication Components
- `AuthCard` - Shared card wrapper with OMNEXA branding for auth pages

### Dashboard Components
- `StatsCard` - Card displaying KPI metrics with trend indicators
- `QuickActions` - Grid of quick action buttons
- `RecentActivity` - Activity feed with user actions

### Analytics Components
- `ChartCard` - Card container for charts with headers
- `MetricGrid` - Grid display of key metrics
- `DataTable` - Sortable data table with status badges

### UI Components
Based on shadcn/ui with OMNEXA customization:
- `Button` - Primary, secondary, outline, ghost, and link variants
- `Card` - Container components with header, content, and footer
- `Input` - Text, email, password, and search inputs
- `Label` - Form labels
- `Select` - Dropdown select component
- `Table` - Data table with headers and cells
- `Tabs` - Tab navigation
- `Badge` - Status badges
- `Avatar` - User avatar with fallback
- `DropdownMenu` - Context menu
- `Switch` - Toggle switch

### Special Components
- `ThemeToggle` - Light/dark theme switcher
- `EmptyState` - Empty state with action button
- `ErrorState` - Error state with retry button
- `Skeleton` - Loading placeholder
- `CTAButton` - Call-to-action button with gradient

### Pattern Components
- `GridPattern` - Subtle grid background pattern
- `GradientOrb` - Abstract gradient orb shapes

## Design System

### Color Palette

- **Primary**: Deep Indigo (#4F46E5)
- **Accent**: Electric Blue (#3B82F6)
- **Highlight**: Neon Cyan (#06B6D4) - used sparingly
- **Background**: White and dark mode compatible
- **High contrast** for WCAG AA accessibility

### Typography

- **Font**: Inter (modern sans-serif)
- **Headings**: Bold, strong hierarchy
- **Body**: Light, readable text
- **Spacing**: Generous, breathing room

### Design Principles

- Clean, minimalist layouts
- Strong visual hierarchy
- Professional, enterprise-ready look
- Flat design with soft depth
- Subtle micro-interactions and transitions

## Accessibility

- WCAG AA color contrast standards
- Keyboard navigation support
- ARIA labels on interactive elements
- Focus indicators visible
- Touch-friendly targets (min 44px)
- Semantic HTML structure

## Performance

- Component-based architecture
- Code splitting with App Router
- Lazy loading for heavy components
- Optimized build configuration
- Tree shaking for unused code

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically on push

### Other Platforms

```bash
npm run build
npm start
```

The built files will be in the `.next` directory.

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
# NEXT_PUBLIC_API_URL=your-api-url
```

## Customization

### Adding New Components

1. Create component file in appropriate directory
2. Follow existing patterns and conventions
3. Add TypeScript types for props
4. Use Tailwind classes for styling
5. Import and use in pages or other components

### Modifying Theme

Edit `tailwind.config.ts` to customize:
- Colors
- Spacing
- Typography
- Border radius
- Animation

### Adding Pages

1. Create new directory in `app/` folder
2. Add `page.tsx` file
3. Add route to Sidebar navigation
4. Update ThemeProvider as needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 OMNEXA Technologies. All rights reserved.

## Support

For support, contact support@omnexa.com
