import { cn } from "@/lib/utils"

export function GradientOrb({
  className,
}: {
  className?: string
}) {
  return (
    <div
      className={cn(
        "absolute rounded-full blur-3xl opacity-30",
        "bg-gradient-to-r from-omnexa-indigo to-omnexa-cyan",
        className
      )}
    />
  )
}
