"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";

type AppButtonVariant = "secondary" | "ghost" | "default" | "destructive";

interface AppButtonProps extends React.ComponentProps<typeof Button> {
  variant?: AppButtonVariant;
  loading?: boolean;
}

export function AppButton({
  variant = "default",
  loading,
  disabled,
  className,
  children,
  ...props
}: AppButtonProps) {
  return (
    <Button
      {...props}
      disabled={disabled || loading}
      className={cn(
        baseStyles,
        variants[variant],
        loading && "pointer-events-none opacity-70",
        className
      )}
    >
      {loading && <Spinner className="me-2 h-4 w-4" />}
      {children}
    </Button>
  );
}

const baseStyles =
  "h-11 rounded-xl font-semibold transition-colors cursor-pointer";

const variants: Record<AppButtonVariant, string> = {
  default:
    "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/0.9)]",
  secondary:
    "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--secondary)/0.8)]",
  destructive:
    "bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))] hover:bg-[hsl(var(--destructive)/0.9)]",
  ghost: "bg-transparent hover:bg-[hsl(var(--muted)/0.1)]",
};
