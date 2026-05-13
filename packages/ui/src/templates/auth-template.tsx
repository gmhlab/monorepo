import { type ComponentPropsWithRef, type ReactNode } from "react"
import { Cover } from "../layouts"
import { Center } from "../layouts"
import { Stack } from "../layouts"
import { type CenterMax } from "../layouts"
import { cn } from "../lib/"

const maxWidthMap = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
} as const

export interface AuthTemplateProps extends ComponentPropsWithRef<"div"> {
  /** Logo or brand mark displayed above the form */
  logo?: ReactNode
  /** Auth form — login, register, reset, verify, etc. */
  children: ReactNode
  /** Footer content — legal links, copyright */
  footer?: ReactNode
  /** Max-width of the form card */
  maxWidth?: keyof typeof maxWidthMap
  /** Optional decorative background layer (gradient, pattern, illustration) */
  background?: ReactNode
}

export function AuthTemplate({
  logo,
  children,
  footer,
  maxWidth = "md",
  background,
  className,
  ref,
  ...props
}: AuthTemplateProps) {
  return (
    <Cover
      ref={ref}
      minHeight="screen"
      header={
        logo && (
          <div className="flex h-20 items-end justify-center px-6 pt-6">
            {logo}
          </div>
        )
      }
      footer={
        footer && (
          <div className="px-6 pb-8 pt-4 text-center text-xs text-muted-foreground">
            {footer}
          </div>
        )
      }
      className={cn("relative overflow-hidden bg-background", className)}
      {...props}
    >
      {/* ── Decorative background ───────────────────────────── */}
      {background && (
        <div className="pointer-events-none absolute inset-0 z-0">
          {background}
        </div>
      )}

      {/* ── Form content ────────────────────────────────────── */}
      <Center max="full" gutter className="relative z-10">
        <div className={cn("w-full", maxWidthMap[maxWidth])}>
          <Stack gap="lg">
            {children}
          </Stack>
        </div>
      </Center>
    </Cover>
  )
}
AuthTemplate.displayName = "AuthTemplate"