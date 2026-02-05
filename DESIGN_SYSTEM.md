# OMNEXA Design System

The official design system for OMNEXA Technologies web applications.

## Overview

This design system ensures consistency across all OMNEXA products while maintaining a modern, professional, enterprise-ready aesthetic.

## Color Palette

### Primary Colors

| Color | Value | Usage |
|-------|-------|-------|
| Deep Indigo | `#4F46E5` | Primary buttons, links, key actions |
| Indigo Light | `#6366F1` | Hover states, accents |
| Indigo Dark | `#4338CA` | Pressed states, dark backgrounds |

### Accent Colors

| Color | Value | Usage |
|-------|-------|-------|
| Electric Blue | `#3B82F6` | Secondary actions, info states |
| Blue Light | `#60A5FA` | Hover states, highlights |
| Blue Dark | `#2563EB` | Active states, depth |

### Highlight Colors

| Color | Value | Usage |
|-------|-------|-------|
| Neon Cyan | `#06B6D4` | Emphasis, notifications (use sparingly) |
| Cyan Light | `#22D3EE` | Glow effects, highlights |
| Cyan Dark | `#0891B2` | Dark mode emphasis |

### Semantic Colors

| Color | Value | Usage |
|-------|-------|-------|
| Success | Green tones | Positive indicators, completed states |
| Warning | Yellow/Amber tones | Caution, pending states |
| Error | Red tones | Destructive actions, errors |
| Info | Blue tones | Information, neutral states |

### Neutral Colors

Used for backgrounds, borders, text, and secondary elements. Defined in CSS variables for theme support:

```css
--background: 0 0% 100%;        /* Light mode background */
--foreground: 222.2 84% 4.9%;  /* Light mode text */
--muted: 210 40% 96.1%;        /* Subtle backgrounds */
--border: 214.3 31.8% 91.4%;   /* Borders, dividers */
```

Dark mode variants automatically switch when theme is enabled.

## Typography

### Font Family

**Primary**: Inter

```tsx
font-sans // Applies Inter font
```

Inter is chosen for:
- Modern, clean appearance
- Excellent readability at all sizes
- Professional, enterprise feel
- Wide character support

### Type Scale

| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| H1 | 36px | 700 | 1.2 | Page titles |
| H2 | 30px | 700 | 1.3 | Section titles |
| H3 | 24px | 600 | 1.4 | Card titles |
| H4 | 20px | 600 | 1.5 | Subsection titles |
| Body | 16px | 400 | 1.6 | Body text |
| Small | 14px | 400 | 1.5 | Captions, helper text |
| XSmall | 12px | 400 | 1.4 | Labels, metadata |

### Text Styles

```tsx
// Heading
className="text-3xl font-bold"

// Subheading
className="text-xl font-semibold"

// Body text
className="text-sm"

// Muted text
className="text-sm text-muted-foreground"
```

### Typography Guidelines

1. **Headings**: Use bold weights for clear hierarchy
2. **Body Text**: Use regular weight for readability
3. **Color**: Use high contrast for accessibility (WCAG AA)
4. **Spacing**: Add generous margin between text blocks
5. **Alignment**: Left-align for readability; center only for short labels

## Spacing

### Scale

| Token | Value | Usage |
|-------|-------|-------|
| `1` | 4px | Tight spacing |
| `2` | 8px | Icon spacing, padding-xs |
| `3` | 12px | Tight gaps |
| `4` | 16px | Default padding, gaps |
| `6` | 24px | Section spacing |
| `8` | 32px | Large gaps |
| `12` | 48px | Page sections |
| `16` | 64px | Major sections |

### Usage

```tsx
// Padding
className="p-4" // padding: 16px
className="px-6 py-4" // horizontal: 24px, vertical: 16px

// Margin
className="mb-8" // margin-bottom: 32px
className="mt-4" // margin-top: 16px

// Gap
className="gap-4" // gap between items: 16px
```

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `sm` | 4px | Badges, tags |
| `default` | 8px | Cards, buttons, inputs |
| `md` | 12px | Large cards |
| `lg` | 16px | Modals, panels |
| `full` | 9999px | Pills, avatars |

```tsx
// Card
className="rounded-lg"

// Button
className="rounded-md"

// Avatar
className="rounded-full"
```

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `sm` | Subtle | Cards, inputs |
| `default` | Medium | Dropdowns, tooltips |
| `md` | Medium-large | Modals |
| `lg` | Large | Popovers |
| `xl` | Extra large | Overlays |

```tsx
// Subtle shadow
className="shadow-sm"

// Default shadow
className="shadow-md"
```

## Icons

### Library: Lucide React

Consistent, modern icon set with:
- Stroke width: 2px
- Size: Tailwind responsive
- Color: Inherits text color

```tsx
import { Search, Bell, Settings } from "lucide-react"

// Usage
<Search className="h-5 w-5" />
<Bell className="h-4 w-4 text-muted-foreground" />
```

### Icon Guidelines

1. **Size**: Use consistent sizes (16px, 20px, 24px)
2. **Color**: Inherit from text color or use specific colors
3. **Placement**: Left-align in buttons, labels
4. **Spacing**: Add margin or gap around icons

## Components

### Buttons

#### Variants

| Variant | Usage |
|---------|-------|
| `default` | Primary actions, CTAs |
| `secondary` | Secondary actions |
| `outline` | Tertiary actions, borders |
| `ghost` | Minimal actions, hover effects |
| `link` | Text-only actions |

#### Sizes

| Size | Height | Usage |
|------|--------|-------|
| `sm` | 36px | Compact buttons |
| `default` | 40px | Standard buttons |
| `lg` | 44px | Prominent buttons |
| `icon` | 40px | Icon-only buttons |

```tsx
<Button variant="default" size="default">Submit</Button>
<Button variant="outline" size="sm">Cancel</Button>
```

### Cards

#### Structure

- `Card` - Container
- `CardHeader` - Header section
- `CardTitle` - Title
- `CardDescription` - Subtitle/description
- `CardContent` - Main content
- `CardFooter` - Footer content

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

### Inputs

#### Types

- Text input
- Email input
- Password input
- Search input
- Number input

#### States

- Default
- Focus (ring indicator)
- Disabled (opacity reduced)
- Error (destructive ring)

```tsx
<Input type="email" placeholder="Enter email" />
```

### Badges

#### Variants

| Variant | Usage |
|---------|-------|
| `default` | Primary status |
| `secondary` | Neutral status |
| `outline` | Border-only status |
| `destructive` | Error status |

```tsx
<Badge>Active</Badge>
<Badge variant="secondary">Pending</Badge>
```

## Layout Patterns

### Container

```tsx
<Container>
  {/* Content */}
</Container>
```

Responsive container with padding:
- Mobile: 16px padding
- Tablet: 24px padding
- Desktop: 32px padding

### Grid

```tsx
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
  {/* Items */}
</div>
```

Responsive grid with:
- Mobile: 1 column
- Tablet (sm): 2 columns
- Desktop (lg): 4 columns

### Flex

```tsx
<div className="flex items-center justify-between">
  {/* Items */}
</div>
```

Flexbox for:
- Align items (center, start, end)
- Justify content (between, center, start)
- Direction (row, column)
- Gap between items

## Visual Patterns

### Grid Pattern

Subtle background grid for depth:

```tsx
<GridPattern />
```

### Gradient Orb

Abstract gradient shapes for visual interest:

```tsx
<GradientOrb className="top-0 right-0 h-96 w-96" />
```

## Animations

### Transitions

```tsx
className="transition-all duration-200 ease-in-out"
```

Standard transition values:
- Duration: 150ms - 300ms
- Easing: ease-in-out
- Properties: color, transform, opacity

### Micro-interactions

- Hover: Scale slightly (1.02)
- Active: Scale down (0.98)
- Focus: Ring indicator
- Disabled: Reduce opacity

## Accessibility

### WCAG AA Compliance

- Color contrast ratio: 4.5:1 for normal text
- Touch targets: Minimum 44x44px
- Focus indicators: Visible ring on all interactive elements
- ARIA labels: Descriptive labels for screen readers

### Keyboard Navigation

- Tab order: Logical left-to-right, top-to-bottom
- Focus states: Visible ring indicator
- Skip links: Skip to main content
- Escape key: Close modals, dropdowns

## Theme Support

### Light Mode

```tsx
<html className="light">
```

### Dark Mode

```tsx
<html className="dark">
```

### Automatic Theme

```tsx
// System preference detection
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
```

## Responsive Breakpoints

| Breakpoint | Width | Devices |
|------------|-------|---------|
| `sm` | 640px | Large phones, small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

## Usage Guidelines

### Do's

1. ✅ Use consistent spacing and sizing
2. ✅ Follow color palette for brand consistency
3. ✅ Prioritize accessibility and readability
4. ✅ Keep layouts clean and uncluttered
5. ✅ Use meaningful micro-interactions
6. ✅ Test on all screen sizes
7. ✅ Maintain visual hierarchy

### Don'ts

1. ❌ Overload animations and transitions
2. ❌ Use bright red or orange dominance
3. ❌ Ignore dark mode compatibility
4. ❌ Sacrifice accessibility for aesthetics
5. ❌ Use heavy gradients or 3D effects
6. ❌ Add unnecessary visual noise
7. ❌ Mix multiple font families

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [Inter Font](https://rsms.me/inter/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
