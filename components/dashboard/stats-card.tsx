import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    isPositive: boolean;
  };
  icon: LucideIcon;
  className?: string;
}

export function StatsCard({ title, value, change, icon: Icon, className }: StatsCardProps) {
  return (
    <Card className={cn("hover:shadow-lg transition-shadow duration-300", className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
              {title}
            </p>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              {value}
            </h3>
            {change && (
              <div className="flex items-center mt-2">
                <span
                  className={cn(
                    "text-sm font-medium flex items-center",
                    change.isPositive
                      ? "text-omnexa-success-600 dark:text-omnexa-success-400"
                      : "text-red-600 dark:text-red-400"
                  )}
                >
                  {change.isPositive ? "↑" : "↓"} {Math.abs(change.value)}%
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400 ml-2">
                  from last month
                </span>
              </div>
            )}
          </div>
          <div className="w-12 h-12 rounded-xl bg-omnexa-primary-50 dark:bg-omnexa-primary-950/50 flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-omnexa-primary-600 dark:text-omnexa-primary-400" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
