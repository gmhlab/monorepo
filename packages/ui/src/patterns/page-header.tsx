import { forwardRef, type HTMLAttributes, type ReactNode } from "react"
import { Cluster, Stack } from "../layout"
import { Badge } from "../primitives"
import { cn } from "../lib/"

export interface PageHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  badge?: ReactNode
  breadcrumb?: ReactNode
  title: ReactNode
  description?: ReactNode
  actions?: ReactNode
}

export const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ breadcrumb, badge, title, description, actions, className, ...props }, ref) => {
    return (
      <Stack ref={ref} gap="md" recursive={false} className={cn(className)} {...props}>
        {breadcrumb && ( <div className="text-sm text-muted-foreground"> {breadcrumb} </div> )}
        {badge && ( <Badge variant="secondary" className="pl-1 pr-3 pt-1 pb-1.5 gap-1.5"> {badge} </Badge> )}
        <Cluster justify="between" align="start" wrap={false}>
          <Stack gap="sm" className="max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight"> {title} </h1>
            {description && ( <p className="text-muted-foreground"> {description} </p> )}
          </Stack>
          {actions && ( <Cluster gap="sm" className="shrink-0"> {actions} </Cluster> )}
        </Cluster>
      </Stack>
    )
  }
)

PageHeader.displayName = "PageHeader"
