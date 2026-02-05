"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ChartData {
  label: string;
  value: number;
}

interface ChartProps {
  title: string;
  data: ChartData[];
  color?: string;
  className?: string;
}

export function Chart({ title, data, color = "#6366f1", className }: ChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value));
  const chartHeight = 200;

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative" style={{ height: chartHeight }}>
          <div className="flex items-end justify-between h-full gap-2">
            {data.map((item, index) => {
              const height = (item.value / maxValue) * chartHeight;
              return (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full rounded-t-lg transition-all duration-300 hover:opacity-80"
                    style={{
                      height: `${height}px`,
                      backgroundColor: color,
                      opacity: 0.7 + (index * 0.1) % 0.3,
                    }}
                  />
                  <span className="text-xs text-slate-500 dark:text-slate-400 mt-2 text-center">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
