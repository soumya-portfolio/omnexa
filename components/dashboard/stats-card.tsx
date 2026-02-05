import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: string | number
  change?: {
    value: number
    isPositive: boolean
  }
  icon: LucideIcon
  className?: string
}

export function StatsCard({
  title,
  value,
  change,
  icon: Icon,
  className,
}: StatsCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <div className="mt-2 flex items-center text-xs">
            {change.isPositive ? (
              <TrendingUp className="mr-1 h-3 w-3 text-green-600 dark:text-green-500" />
            ) : (
              <TrendingDown className="mr-1 h-3 w-3 text-red-600 dark:text-red-500" />
            )}
            <span
              className={cn(
                change.isPositive
                  ? "text-green-600 dark:text-green-500"
                  : "text-red-600 dark:text-red-500"
              )}
            >
              {change.value}%
            </span>
            <span className="ml-1 text-muted-foreground">from last month</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
