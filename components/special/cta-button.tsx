import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: LucideIcon
  children: React.ReactNode
  variant?: "primary" | "secondary"
}

export function CTAButton({
  icon: Icon,
  children,
  variant = "primary",
  className,
  ...props
}: CTAButtonProps) {
  return (
    <Button
      className={cn(
        "relative overflow-hidden",
        variant === "primary" &&
          "bg-gradient-to-r from-omnexa-indigo to-omnexa-cyan hover:from-omnexa-indigo/90 hover:to-omnexa-cyan/90",
        className
      )}
      {...props}
    >
      {Icon && <Icon className="mr-2 h-4 w-4" />}
      {children}
    </Button>
  )
}
