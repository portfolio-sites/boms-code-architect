
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-black text-white hover:bg-black/80",
        secondary:
          "border-transparent bg-graphite text-white hover:bg-graphite/80",
        destructive:
          "border-transparent bg-charcoal text-white hover:bg-charcoal/80",
        outline: "text-foreground",
        dark: "border-transparent bg-charcoal text-silver dark:bg-black dark:text-silver",
        light: "border-transparent bg-silver text-charcoal dark:bg-silver/80 dark:text-charcoal",
        gray: "border-transparent bg-lightgrey text-charcoal dark:bg-graphite dark:text-silver",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
