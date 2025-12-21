import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Base Card
 */
function Card({
  className,
  interactive = false,
  ...props
}: React.ComponentProps<"div"> & {
  interactive?: boolean;
}) {
  return (
    <div
      data-slot="card"
      className={cn(
        // Base
        "relative rounded-2xl border bg-card text-card-foreground",

        // Spacing
        "p-6",

        // Light mode shadow
        "shadow-sm",

        // Dark mode depth
        "dark:shadow-[0_0_0_1px_hsl(var(--border))] dark:bg-card/90",

        // Hover / focus
        interactive &&
          "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]",

        className
      )}
      {...props}
    />
  );
}

/**
 * Card Header
 */
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("mb-4 space-y-1", className)}
      {...props}
    />
  );
}

/**
 * Card Title
 */
function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="card-title"
      className={cn("text-lg font-semibold tracking-tight", className)}
      {...props}
    />
  );
}

/**
 * Card Description
 */
function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

/**
 * Card Content
 */
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("space-y-3", className)}
      {...props}
    />
  );
}

/**
 * Card Footer
 */
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "mt-6 flex items-center justify-between border-t pt-4",
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
