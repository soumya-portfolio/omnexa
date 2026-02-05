import { LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ChartCardProps {
  title: string
  description?: string
  icon: LucideIcon
  actions?: {
    label: string
    onClick: () => void
  }
  children: React.ReactNode
}

export function ChartCard({
  title,
  description,
  icon: Icon,
  actions,
  children,
}: ChartCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex-1">
          <CardTitle className="text-base">{title}</CardTitle>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          {actions && (
            <Button variant="ghost" size="sm" onClick={actions.onClick}>
              {actions.label}
            </Button>
          )}
          <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center">
            <Icon className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
