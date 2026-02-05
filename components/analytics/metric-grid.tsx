import { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Metric {
  label: string
  value: string
  icon: LucideIcon
  trend?: {
    value: number
    isPositive: boolean
  }
}

interface MetricGridProps {
  metrics: Metric[]
  columns?: number
}

export function MetricGrid({ metrics, columns = 4 }: MetricGridProps) {
  return (
    <div
      className={`grid gap-4`}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {metrics.map((metric, index) => {
        const Icon = metric.icon
        return (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">
                    {metric.label}
                  </p>
                  <p className="text-2xl font-bold">{metric.value}</p>
                  {metric.trend && (
                    <p
                      className={`text-xs mt-1 ${
                        metric.trend.isPositive
                          ? "text-green-600 dark:text-green-500"
                          : "text-red-600 dark:text-red-500"
                      }`}
                    >
                      {metric.trend.isPositive ? "+" : "-"}
                      {metric.trend.value}% from last period
                    </p>
                  )}
                </div>
                <div className="h-10 w-10 rounded-md bg-gradient-to-br from-omnexa-indigo/10 to-omnexa-cyan/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-omnexa-indigo" />
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
