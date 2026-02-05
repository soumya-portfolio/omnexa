# OMNEXA Components API

Complete reference for all OMNEXA UI components with examples and API documentation.

## Table of Contents

- [UI Components](#ui-components)
  - [Button](#button)
  - [Card](#card)
  - [Input](#input)
  - [Label](#label)
  - [Select](#select)
  - [Table](#table)
  - [Tabs](#tabs)
  - [Badge](#badge)
  - [Avatar](#avatar)
  - [DropdownMenu](#dropdownmenu)
  - [Switch](#switch)
- [Layout Components](#layout-components)
  - [Header](#header)
  - [Sidebar](#sidebar)
  - [Container](#container)
- [Auth Components](#auth-components)
  - [AuthCard](#authcard)
- [Dashboard Components](#dashboard-components)
  - [StatsCard](#statscard)
  - [QuickActions](#quickactions)
  - [RecentActivity](#recentactivity)
- [Analytics Components](#analytics-components)
  - [ChartCard](#chartcard)
  - [MetricGrid](#metricgrid)
  - [DataTable](#datatable)
- [Special Components](#special-components)
  - [ThemeToggle](#themetoggle)
  - [EmptyState](#emptystate)
  - [ErrorState](#errorstate)
  - [Skeleton](#skeleton)
  - [CTAButton](#ctabutton)
- [Pattern Components](#pattern-components)
  - [GridPattern](#gridpattern)
  - [GradientOrb](#gradientorb)

---

## UI Components

### Button

Primary action component with multiple variants and sizes.

#### Import

```tsx
import { Button } from "@/components/ui/button"
```

#### Usage

```tsx
<Button>Click me</Button>
<Button variant="outline">Cancel</Button>
<Button variant="ghost">Menu</Button>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `default \| destructive \| outline \| secondary \| ghost \| link` | `default` | Button style variant |
| `size` | `default \| sm \| lg \| icon` | `default` | Button size |
| `asChild` | `boolean` | `false` | Merge props with child element |
| `className` | `string` | - | Additional CSS classes |
| `disabled` | `boolean` | `false` | Disable button |
| `type` | `button \| submit \| reset` | `button` | Button type |

#### Examples

```tsx
// Primary button
<Button variant="default">Submit</Button>

// Outline button
<Button variant="outline">Cancel</Button>

// Ghost button
<Button variant="ghost">Menu</Button>

// Size variants
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>

// Icon button
<Button variant="ghost" size="icon">
  <Search className="h-5 w-5" />
</Button>

// Disabled state
<Button disabled>Disabled</Button>
```

---

### Card

Container component with header, content, and footer sections.

#### Import

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
```

#### Usage

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>Card content</CardContent>
  <CardFooter>Card footer</CardFooter>
</Card>
```

#### Props

**Card**
| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | Additional CSS classes |

**CardHeader**
| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | Additional CSS classes |

**CardTitle**
| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | Additional CSS classes |

**CardDescription**
| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | Additional CSS classes |

**CardContent**
| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | Additional CSS classes |

**CardFooter**
| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | Additional CSS classes |

---

### Input

Text input component with multiple types.

#### Import

```tsx
import { Input } from "@/components/ui/input"
```

#### Usage

```tsx
<Input type="email" placeholder="Enter email" />
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `text \| email \| password \| number \| search \| tel \| url` | `text` | Input type |
| `placeholder` | `string` | - | Placeholder text |
| `disabled` | `boolean` | `false` | Disable input |
| `className` | `string` | - | Additional CSS classes |

---

### Label

Form label component.

#### Import

```tsx
import { Label } from "@/components/ui/label"
```

#### Usage

```tsx
<Label htmlFor="email">Email</Label>
<Input id="email" type="email" />
```

#### Props

| Prop | Type | Description |
|------|------|-------------|
| `htmlFor` | `string` | Input element ID |
| `className` | `string` | Additional CSS classes |

---

### Select

Dropdown select component with groups and separators.

#### Import

```tsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
```

#### Usage

```tsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

#### Props

**Select**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultValue` | `string` | - | Default selected value |
| `value` | `string` | - | Controlled value |
| `onValueChange` | `(value: string) => void` | - | Value change handler |

**SelectTrigger**
| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | Additional CSS classes |

**SelectContent**
| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | Additional CSS classes |

**SelectItem**
| Prop | Type | Description |
|------|------|-------------|
| `value` | `string` | Item value |
| `disabled` | `boolean` | Disable item |

---

### Table

Data table with headers and rows.

#### Import

```tsx
import { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from "@/components/ui/table"
```

#### Usage

```tsx
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
      <TableCell>Active</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

---

### Tabs

Tab navigation component.

#### Import

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
```

#### Usage

```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

---

### Badge

Status badge component.

#### Import

```tsx
import { Badge } from "@/components/ui/badge"
```

#### Usage

```tsx
<Badge>Active</Badge>
<Badge variant="secondary">Pending</Badge>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `default \| secondary \| destructive \| outline` | `default` | Badge style |

---

### Avatar

User avatar with fallback.

#### Import

```tsx
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
```

#### Usage

```tsx
<Avatar>
  <AvatarImage src="/avatar.png" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

---

### DropdownMenu

Context menu component.

#### Import

```tsx
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
```

#### Usage

```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost">Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

---

### Switch

Toggle switch component.

#### Import

```tsx
import { Switch } from "@/components/ui/switch"
```

#### Usage

```tsx
<Switch />
<Switch checked={isChecked} onCheckedChange={setChecked} />
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | `false` | Checked state |
| `onCheckedChange` | `(checked: boolean) => void` | - | Change handler |
| `disabled` | `boolean` | `false` | Disable switch |

---

## Layout Components

### Header

Top navigation bar with search, notifications, and user menu.

#### Import

```tsx
import { Header } from "@/components/layout/header"
```

#### Usage

```tsx
<Header onMenuClick={() => setSidebarOpen(true)} />
```

#### Props

| Prop | Type | Description |
|------|------|-------------|
| `onMenuClick` | `() => void` | Menu button click handler |

---

### Sidebar

Collapsible sidebar with navigation links.

#### Import

```tsx
import { Sidebar } from "@/components/layout/sidebar"
```

#### Usage

```tsx
<Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | `false` | Sidebar open state |
| `onClose` | `() => void` | - | Close handler |

---

### Container

Responsive container wrapper.

#### Import

```tsx
import { Container } from "@/components/layout/container"
```

#### Usage

```tsx
<Container>
  <p>Content here</p>
</Container>
```

#### Props

| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | Additional CSS classes |

---

## Auth Components

### AuthCard

Authentication card wrapper with OMNEXA branding.

#### Import

```tsx
import { AuthCard } from "@/components/auth/auth-card"
```

#### Usage

```tsx
<AuthCard title="Welcome back" description="Sign in to your account">
  <form>...</form>
</AuthCard>
```

#### Props

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Card title |
| `description` | `string` | Card description |
| `children` | `ReactNode` | Card content |
| `className` | `string` | Additional CSS classes |

---

## Dashboard Components

### StatsCard

KPI metric card with trend indicator.

#### Import

```tsx
import { StatsCard } from "@/components/dashboard/stats-card"
```

#### Usage

```tsx
<StatsCard
  title="Total Revenue"
  value="$45,231.89"
  change={{ value: 20.1, isPositive: true }}
  icon={DollarSign}
/>
```

#### Props

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Card title |
| `value` | `string \| number` | Metric value |
| `change` | `{ value: number; isPositive: boolean }` | Trend data |
| `icon` | `LucideIcon` | Icon component |
| `className` | `string` | Additional CSS classes |

---

### QuickActions

Grid of quick action buttons.

#### Import

```tsx
import { QuickActions } from "@/components/dashboard/quick-actions"
```

#### Usage

```tsx
<QuickActions
  actions={[
    {
      title: "New Project",
      description: "Start a new project",
      icon: Plus,
      onClick: () => console.log("New project"),
    },
  ]}
/>
```

---

### RecentActivity

Activity feed component.

#### Import

```tsx
import { RecentActivity } from "@/components/dashboard/recent-activity"
```

#### Usage

```tsx
<RecentActivity activities={[...]} />
```

---

## Analytics Components

### ChartCard

Card container for charts.

#### Import

```tsx
import { ChartCard } from "@/components/analytics/chart-card"
```

#### Usage

```tsx
<ChartCard title="Traffic Overview" icon={BarChart3}>
  <div>Chart content</div>
</ChartCard>
```

---

### MetricGrid

Grid of key metrics.

#### Import

```tsx
import { MetricGrid } from "@/components/analytics/metric-grid"
```

#### Usage

```tsx
<MetricGrid metrics={[...]} columns={4} />
```

---

### DataTable

Sortable data table with status badges.

#### Import

```tsx
import { DataTable } from "@/components/analytics/data-table"
```

#### Usage

```tsx
<DataTable columns={columns} data={data} />
```

---

## Special Components

### ThemeToggle

Light/dark theme switcher.

#### Import

```tsx
import { ThemeToggle } from "@/components/special/theme-toggle"
```

#### Usage

```tsx
<ThemeToggle />
```

---

### EmptyState

Empty state with optional action button.

#### Import

```tsx
import { EmptyState } from "@/components/special/empty-state"
```

#### Usage

```tsx
<EmptyState
  icon={FolderOpen}
  title="No projects found"
  description="Create your first project to get started"
  action={{ label: "Create Project", onClick: () => {} }}
/>
```

---

### ErrorState

Error state with retry button.

#### Import

```tsx
import { ErrorState } from "@/components/special/error-state"
```

#### Usage

```tsx
<ErrorState
  title="Something went wrong"
  description="An unexpected error occurred"
  onRetry={() => {}}
/>
```

---

### Skeleton

Loading placeholder component.

#### Import

```tsx
import { Skeleton } from "@/components/special/skeleton"
```

#### Usage

```tsx
<Skeleton className="h-12 w-full" />
```

---

### CTAButton

Gradient call-to-action button.

#### Import

```tsx
import { CTAButton } from "@/components/special/cta-button"
```

#### Usage

```tsx
<CTAButton icon={ArrowRight}>Get Started</CTAButton>
```

---

## Pattern Components

### GridPattern

Subtle grid background pattern.

#### Import

```tsx
import { GridPattern } from "@/components/patterns/grid-pattern"
```

#### Usage

```tsx
<div className="relative">
  <GridPattern />
  <div className="relative z-10">Content</div>
</div>
```

---

### GradientOrb

Abstract gradient orb shape.

#### Import

```tsx
import { GradientOrb } from "@/components/patterns/gradient-orb"
```

#### Usage

```tsx
<div className="relative">
  <GradientOrb className="top-0 right-0 h-96 w-96" />
  <div className="relative z-10">Content</div>
</div>
```

---

## Utilities

### cn()

Merge Tailwind CSS classes with proper precedence.

#### Import

```tsx
import { cn } from "@/lib/utils"
```

#### Usage

```tsx
<div className={cn("base-class", isActive && "active-class", className)} />
```

---

## Best Practices

1. **Always wrap forms in proper semantic elements**
2. **Use accessible labels for all inputs**
3. **Test keyboard navigation**
4. **Provide loading states for async actions**
5. **Use appropriate semantic HTML elements**
6. **Maintain consistent spacing and sizing**
7. **Test in both light and dark modes**
8. **Provide meaningful error messages**

---

## Contributing

When adding new components:
1. Follow existing patterns and conventions
2. Add TypeScript types for all props
3. Include accessibility attributes
4. Write usage examples in this documentation
5. Test in different browsers and screen sizes
6. Ensure dark mode compatibility
