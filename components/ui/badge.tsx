import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "danger" | "info";
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variants = {
      default: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300",
      success: "bg-omnexa-success-50 dark:bg-omnexa-success-950/50 text-omnexa-success-700 dark:text-omnexa-success-300",
      warning: "bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300",
      danger: "bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-300",
      info: "bg-omnexa-accent-50 dark:bg-omnexa-accent-950/50 text-omnexa-accent-700 dark:text-omnexa-accent-300",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
