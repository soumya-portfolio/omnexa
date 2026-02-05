import { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AuthCardProps {
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function AuthCard({
  title,
  description,
  children,
  className,
}: AuthCardProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(79, 70, 229, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(79, 70, 229, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-omnexa-indigo/20 to-omnexa-cyan/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gradient-to-br from-omnexa-cyan/20 to-omnexa-indigo/20 blur-3xl" />
      </div>

      <Card className={cn("w-full max-w-md", className)}>
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-omnexa-indigo to-omnexa-cyan">
            <span className="text-2xl font-bold text-white">O</span>
          </div>
          <CardTitle className="text-2xl">{title}</CardTitle>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  )
}
