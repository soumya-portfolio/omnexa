# Quick Start Guide

Get up and running with the OMNEXA Design System quickly.

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Page Routes

The application includes the following pages:

| Route | Page | Description |
|-------|------|-------------|
| `/` | Landing Page | Main homepage with hero, features, and testimonials |
| `/login` | Login | Authentication screen |
| `/signup` | Signup | Registration page |
| `/dashboard` | Dashboard | Main dashboard with stats and activity |
| `/analytics` | Analytics | Data visualization page |
| `/projects` | Projects | Project management interface |
| `/settings` | Settings | User settings and preferences |
| `/components-demo` | Component Demo | Showcases all UI components |
| `/empty-example` | Empty State Demo | Examples of empty states |
| `/error-example` | Error State Demo | Examples of error states |

## Using Components

### Button

```tsx
import { Button } from "@/components/ui/button";

// Primary button
<Button>Click me</Button>

// Secondary button
<Button variant="secondary">Cancel</Button>

// With icon
<Button>
  <Plus className="w-4 h-4 mr-2" />
  Add New
</Button>

// Loading state
<Button isLoading={loading}>Save</Button>
```

### Input

```tsx
import { Input } from "@/components/ui/input";

// Basic input
<Input placeholder="Enter your email" />

// With label
<Input label="Email" type="email" placeholder="john@example.com" />

// With error state
<Input
  label="Password"
  type="password"
  error="Password is required"
/>
```

### Card

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Card content goes here...</p>
  </CardContent>
</Card>
```

### Badge

```tsx
import { Badge } from "@/components/ui/badge";

<Badge>Default</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="danger">Error</Badge>
```

### Table

```tsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell><Badge variant="success">Active</Badge></TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Avatar

```tsx
import { Avatar } from "@/components/ui/avatar";

<Avatar initials="JD" size="md" />
```

### Empty State

```tsx
import { EmptyState } from "@/components/ui/empty-state";
import { Inbox } from "lucide-react";

<EmptyState
  icon={Inbox}
  title="No messages"
  description="Your inbox is empty."
  action={{
    label: "Compose",
    onClick: () => console.log("Clicked")
  }}
/>
```

### Error State

```tsx
import { ErrorState } from "@/components/ui/error-state";

<ErrorState
  title="Something went wrong"
  message="We couldn't load your data."
  onRetry={() => console.log("Retrying...")}
/>
```

### Stats Card

```tsx
import { StatsCard } from "@/components/dashboard/stats-card";
import { Users } from "lucide-react";

<StatsCard
  title="Active Users"
  value="12,847"
  change={{ value: 8.2, isPositive: true }}
  icon={Users}
/>
```

### Chart

```tsx
import { Chart } from "@/components/dashboard/chart";

const data = [
  { label: "Jan", value: 65 },
  { label: "Feb", value: 78 },
  { label: "Mar", value: 90 },
];

<Chart title="Monthly Revenue" data={data} color="#6366f1" />
```

### Layout Components

```tsx
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

export default function MyPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
      <div className="flex">
        <Sidebar activeItem="dashboard" />
        <main className="flex-1 ml-64 p-8">
          {/* Your content here */}
        </main>
      </div>
    </div>
  );
}
```

## Utility Functions

### cn() - Class Name Merger

```tsx
import { cn } from "@/lib/utils";

// Merge class names with Tailwind precedence
<div className={cn("base-class", isActive && "active-class")} />
```

## Styling

### Color Classes

```tsx
// Primary colors
<div className="bg-omnexa-primary-600">Primary background</div>
<div className="text-omnexa-primary-600">Primary text</div>

// Accent colors
<div className="bg-omnexa-accent-500">Accent background</div>

// Success colors
<div className="bg-omnexa-success-500">Success background</div>

// Neutral colors
<div className="bg-slate-100">Light gray</div>
<div className="text-slate-600">Gray text</div>
```

### Dark Mode

```tsx
// Dark mode aware styles
<div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
  Content
</div>

// Components automatically support dark mode
<Button variant="primary">Works in both modes</Button>
```

### Common Patterns

```tsx
// Card with shadow
<div className="card-shadow">...</div>

// Glass effect
<div className="glass-effect">...</div>

// Gradient background
<div className="gradient-subtle">...</div>

// Flex layout
<div className="flex items-center justify-between">...</div>

// Grid layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  ...
</div>
```

## Icons

We use [Lucide Icons](https://lucide.dev) for consistent iconography.

```tsx
import { Users, Settings, Search, Plus } from "lucide-react";

// Basic usage
<Users className="w-5 h-5" />

// With custom size
<Settings className="w-6 h-6" />

// With color
<Search className="w-4 h-4 text-slate-400" />

// In buttons
<Button>
  <Plus className="w-4 h-4 mr-2" />
  Add New
</Button>
```

## Creating a New Page

1. Create a new directory in `app/`:
   ```
   app/my-page/
   └── page.tsx
   ```

2. Add basic structure:
   ```tsx
   import { Header } from "@/components/layout/header";
   import { Sidebar } from "@/components/layout/sidebar";

   export default function MyPage() {
     return (
       <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
         <Header />
         <div className="flex">
           <Sidebar activeItem="my-page" />
           <main className="flex-1 ml-64 p-8">
             <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
               My Page
             </h1>
             {/* Your content */}
           </main>
         </div>
       </div>
     );
   }
   ```

3. Update the sidebar navigation in `components/layout/sidebar.tsx` to include your new page.

## Best Practices

### Component Structure

```tsx
// ✅ Good: Organized and readable
export default function MyComponent() {
  const [state, setState] = useState();

  useEffect(() => {
    // Side effects
  }, []);

  const handleClick = () => {
    // Event handler
  };

  return (
    <div>
      {/* JSX */}
    </div>
  );
}

// ❌ Bad: Disorganized
export default function MyComponent() {
  return <div>...</div>;
  const [state, setState] = useState(); // After return - won't work!
}
```

### Responsive Design

```tsx
// ✅ Good: Mobile-first responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => <Card key={item.id}>{item.name}</Card>)}
</div>

// ❌ Bad: Not responsive
<div className="grid grid-cols-3 gap-4">
  {items.map(item => <Card key={item.id}>{item.name}</Card>)}
</div>
```

### Accessibility

```tsx
// ✅ Good: Accessible
<Button aria-label="Close modal" onClick={onClose}>
  <X className="w-4 h-4" />
</Button>

// ❌ Bad: Not accessible
<button onClick={onClose}>
  <X className="w-4 h-4" />
</button>
```

## Build and Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Getting Help

- Check the [Design System Documentation](./DESIGN_SYSTEM.md) for detailed design guidelines
- Visit the [Components Demo](http://localhost:3000/components-demo) page to see all components
- Review the existing pages for usage examples

## Next Steps

1. Explore the existing pages to understand patterns
2. Check the `components-demo` page for component examples
3. Read the `DESIGN_SYSTEM.md` for design guidelines
4. Start building your own pages using the components

Happy coding! 🚀
