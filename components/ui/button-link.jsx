import * as React from "react"
import Link from "next/link"
import { buttonVariants } from "./button"
import { cn } from "@/lib/utils"

const ButtonLink = React.forwardRef(function ButtonLink(
  { className, variant, size, href, ...props }, ref
) {
  return (
    <Link
      ref={ref}
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
})

ButtonLink.displayName = "ButtonLink"

export { ButtonLink }
