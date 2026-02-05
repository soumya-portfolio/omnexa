# OMNEXA Design System

A comprehensive design system for OMNEXA Technologies, built with modern SaaS aesthetics and focused on scalability, accessibility, and user experience.

## Table of Contents

1. [Principles](#principles)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing](#spacing)
5. [Components](#components)
6. [Patterns](#patterns)
7. [Accessibility](#accessibility)

## Principles

Our design system is built on the following core principles:

### 1. Clarity Over Complexity
- Simple, intuitive interfaces that don't require learning
- Clear visual hierarchy that guides users naturally
- Minimal cognitive load for faster task completion

### 2. Consistency
- Unified design language across all touchpoints
- Predictable patterns that users can rely on
- Reusable components that maintain consistency

### 3. Accessibility First
- WCAG AA compliant color contrast ratios
- Keyboard navigation support
- Screen reader friendly
- Focus indicators for interactive elements

### 4. Performance
- Optimized for fast loading and smooth interactions
- Minimal animations that enhance, not distract
- Efficient code and asset optimization

### 5. Scalability
- Component-based architecture for easy expansion
- Documented patterns for team collaboration
- Future-proof design decisions

## Color Palette

### Primary Colors - Indigo

Used for primary actions, branding elements, and important highlights.

| Token | Value | Usage |
|-------|-------|-------|
| `omnexa-primary-50` | #eef2ff | Light backgrounds, hover states |
| `omnexa-primary-100` | #e0e7ff | Subtle highlights |
| `omnexa-primary-200` | #c7d2fe | Light accents |
| `omnexa-primary-300` | #a5b4fc | Links, secondary elements |
| `omnexa-primary-400` | #818cf8 | Interactive states |
| `omnexa-primary-500` | #6366f1 | Primary actions, branding |
| `omnexa-primary-600` | #4f46e5 | Buttons, important UI elements |
| `omnexa-primary-700` | #4338ca | Hover states |
| `omnexa-primary-800` | #3730a3 | Dark mode active states |
| `omnexa-primary-900` | #312e81 | Deep backgrounds |
| `omnexa-primary-950` | #1e1b4b | Darkest backgrounds |

### Accent Colors - Cyan

Used sparingly for success states, notifications, and special highlights.

| Token | Value | Usage |
|-------|-------|-------|
| `omnexa-accent-400` | #22d3ee | Accent elements |
| `omnexa-accent-500` | #06b6d4 | Links, highlights |
| `omnexa-accent-600` | #0891b2 | Secondary actions |

### Success Colors - Green

Used for success states, completed actions, and positive indicators.

| Token | Value | Usage |
|-------|-------|-------|
| `omnexa-success-400` | #4ade80 | Success indicators |
| `omnexa-success-500` | #22c55e | Primary success state |
| `omnexa-success-600` | #16a34a | Success badges |

### Semantic Colors

| Color | Usage | Light Mode | Dark Mode |
|-------|-------|------------|-----------|
| Success | Positive outcomes | #22c55e | #4ade80 |
| Warning | Caution needed | #f59e0b | #fbbf24 |
| Danger | Destructive actions | #ef4444 | #f87171 |
| Info | Information | #0891b2 | #22d3ee |

### Neutral Colors

| Token | Value | Usage |
|-------|-------|-------|
| slate-50 | #f8fafc | Page backgrounds |
| slate-100 | #f1f5f9 | Card backgrounds, borders |
| slate-200 | #e2e8f0 | Borders, dividers |
| slate-300 | #cbd5e1 | Disabled states |
| slate-400 | #94a3b8 | Secondary text |
| slate-500 | #64748b | Body text |
| slate-600 | #475569 | Primary text (light mode) |
| slate-700 | #334155 | Headings (light mode) |
| slate-800 | #1e293b | Dark backgrounds |
| slate-900 | #0f172a | Darkest backgrounds |

### Dark Mode

Dark mode uses inverted color tokens with adjusted luminance for better readability:

- Background: `slate-950` → `slate-900`
- Text: `slate-100` → `slate-400`
- Borders: `slate-800` → `slate-700`
- Primary colors stay vibrant but use darker variants

## Typography

### Font Family

**Primary**: Inter (Google Fonts)
```css
font-family: 'Inter', system-ui, -apple-system, sans-serif;
```

### Type Scale

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| text-xs | 0.75rem | 400 | 1rem | Labels, badges |
| text-sm | 0.875rem | 400 | 1.25rem | Body text, buttons |
| text-base | 1rem | 400 | 1.5rem | Body text |
| text-lg | 1.125rem | 400 | 1.75rem | Subheadings |
| text-xl | 1.25rem | 600 | 1.75rem | Section headers |
| text-2xl | 1.5rem | 600 | 2rem | Card titles |
| text-3xl | 1.875rem | 600 | 2.25rem | Page headings |
| text-4xl | 2.25rem | 700 | 2.5rem | Hero headings |
| text-5xl | 3rem | 700 | 1 | Display headings |

### Font Weights

- **Light (300)**: Large display text
- **Regular (400)**: Body text, labels
- **Medium (500)**: Emphasized text
- **Semi-bold (600)**: Subheadings, important elements
- **Bold (700)**: Headings, primary actions

### Line Heights

- **Tight (1)**: Display text, large headings
- **Normal (1.5)**: Body text
- **Relaxed (1.75)**: Subheadings, card titles
- **Loose (2)**: Large blocks of text

## Spacing

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| 0 | 0rem | None |
| 1 | 0.25rem | 4px |
| 2 | 0.5rem | 8px |
| 3 | 0.75rem | 12px |
| 4 | 1rem | 16px |
| 5 | 1.25rem | 20px |
| 6 | 1.5rem | 24px |
| 8 | 2rem | 32px |
| 10 | 2.5rem | 40px |
| 12 | 3rem | 48px |
| 16 | 4rem | 64px |

### Common Spacing Patterns

- **Card padding**: `p-6` (24px)
- **Section gap**: `gap-6` (24px)
- **Element spacing**: `space-y-4` (16px)
- **Page padding**: `p-8` (32px)
- **Container max-width**: `max-w-7xl` (1280px)

## Components

### Button

**Variants**:
- `primary` - Main actions
- `secondary` - Secondary actions
- `ghost` - Subtle actions
- `danger` - Destructive actions

**Sizes**:
- `sm` - 32px height
- `md` - 40px height
- `lg` - 48px height

**States**:
- Default, hover, active, focus, disabled, loading

### Input

**Features**:
- Label support
- Error states
- Disabled states
- Focus rings
- Dark mode support

### Card

**Variants**:
- Default with shadow
- Bordered
- With glass effect

**Structure**:
- Header (optional)
- Content (required)
- Footer (optional)

### Badge

**Variants**:
- Default (gray)
- Success (green)
- Warning (amber)
- Danger (red)
- Info (cyan)

**Usage**: Status indicators, tags, labels

### Avatar

**Sizes**:
- `sm` - 32px
- `md` - 40px
- `lg` - 48px
- `xl` - 64px

**Features**:
- Initials support
- Image support
- Dark mode compatible

### Table

**Features**:
- Sticky header
- Hover states
- Border options
- Responsive overflow
- Dark mode support

### Stats Card

**Features**:
- Icon support
- Value display
- Trend indicator
- Percentage change
- Hover effects

### Chart

**Types**:
- Bar chart (default)

**Features**:
- Custom colors
- Data labels
- Responsive sizing
- Dark mode compatible

### Empty State

**Features**:
- Icon support
- Title and description
- Optional action button
- Customizable

### Error State

**Features**:
- Icon support
- Title and message
- Optional retry button
- Clean, friendly design

## Patterns

### Dashboard Layout

- **Header**: Fixed at top, contains navigation and user menu
- **Sidebar**: Fixed on left, collapsible, main navigation
- **Main Content**: Scrollable area, max-width constrained
- **Responsive**: Sidebar becomes drawer on mobile

### Form Patterns

- **Single column** for simple forms
- **Two column** for related fields
- **Validation**: Inline errors, clear visual feedback
- **Submit**: Primary button, right-aligned

### Loading States

- **Skeleton screens** for content loading
- **Spinner** for button loading
- **Progress bars** for multi-step processes

### Feedback Patterns

- **Success**: Green badge/icon, positive message
- **Error**: Red badge/icon, clear error message, retry option
- **Warning**: Amber badge/icon, caution message
- **Info**: Cyan badge/icon, informational message

### Navigation Patterns

- **Breadcrumb**: For deep navigation hierarchies
- **Tabs**: For switching views within a page
- **Pagination**: For large data sets
- **Search**: Global search in header

## Accessibility

### Color Contrast

All color combinations meet WCAG AA standards:
- Normal text: 4.5:1 contrast ratio
- Large text: 3:1 contrast ratio
- UI components: 3:1 contrast ratio

### Keyboard Navigation

- Tab order follows logical reading order
- Focus indicators visible on all interactive elements
- Skip links for main content
- No keyboard traps

### Screen Reader Support

- Semantic HTML elements
- ARIA labels where needed
- Descriptive link text
- Alt text for images

### Focus Management

- Clear focus rings (2px, `omnexa-primary-500`)
- Focus follows keyboard navigation
- Modal focus trapping
- Consistent focus styles

## Responsive Breakpoints

| Breakpoint | Min Width | Target Device |
|------------|-----------|---------------|
| sm | 640px | Small phones |
| md | 768px | Tablets |
| lg | 1024px | Small laptops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large screens |

## Animation

### Duration

- **Fast**: 150ms - Micro-interactions
- **Normal**: 300ms - Default transitions
- **Slow**: 500ms - Complex animations

### Easing

- **Ease-in**: Elements entering
- **Ease-out**: Elements leaving
- **Ease-in-out**: Natural movement

### Types

- **Fade**: Opacity transitions
- **Slide**: Transform transitions
- **Scale**: Size transitions
- **Spring**: Organic movement (rare)

## Best Practices

### DO
- Use consistent spacing (multiples of 4px)
- Maintain clear visual hierarchy
- Provide feedback for all interactions
- Keep copy clear and concise
- Test in both light and dark modes

### DON'T
- Mix too many colors
- Use heavy gradients
- Add unnecessary animations
- Make buttons too small
- Hide important functionality

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Inter Font](https://fonts.google.com/specimen/Inter)
- [Lucide Icons](https://lucide.dev)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Version**: 1.0.0
**Last Updated**: February 2024
**Maintained by**: OMNEXA Design Team
