import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-medium",
          "transition-colors duration-150 ease-in-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-brand text-text-inverted hover:bg-brand-hover active:bg-brand-active":
              variant === "default",
            "bg-surface-sunken text-text hover:bg-border":
              variant === "secondary",
            "border border-border bg-transparent text-text hover:bg-surface-sunken":
              variant === "outline",
            "bg-transparent text-text hover:bg-surface-sunken":
              variant === "ghost",
            "bg-error text-text-inverted hover:bg-error/90":
              variant === "destructive",
          },
          {
            "h-8 px-3 text-sm": size === "sm",
            "h-10 px-4 text-sm": size === "md",
            "h-12 px-6 text-base": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";