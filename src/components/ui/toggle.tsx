import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }

// Keep the existing MinimalToggle and OrangeToggle components
const MinimalToggle = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <label className="relative inline-block h-[1.8em] w-[3.7em] text-[17px]">
      <input
        type="checkbox"
        ref={ref}
        className={cn(
          "group h-0 w-0",
          "[&:checked+span:before]:translate-x-[1.9em]",
          "[&:checked+span:before]:bg-purple-500",
          "[&:checked+span]:bg-purple-300",
          className
        )}
        {...props}
      />
      <span className={cn(
        "absolute inset-0 cursor-pointer rounded-[30px] bg-gray-300 transition ease-in-out",
        "before:absolute before:bottom-[0.2em] before:left-[0.2em] before:h-[1.4em] before:w-[1.4em]",
        "before:rounded-[20px] before:bg-gray-400 before:transition before:duration-300 before:content-['']"
      )} />
    </label>
  )
});
MinimalToggle.displayName = "MinimalToggle";

const OrangeToggle = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      type="checkbox"
      ref={ref}
      className={cn(
        "ease before:ease relative h-6 w-12 appearance-none rounded-full bg-gray-300",
        "transition duration-300",
        "before:absolute before:left-[calc(1.5em_-_1.6em)] before:top-[calc(1.5em_-_1.6em)]",
        "before:block before:h-[1.7em] before:w-[1.6em] before:cursor-pointer",
        "before:rounded-full before:border before:border-solid before:border-gray-400",
        "before:bg-white before:transition-all before:duration-300 before:content-['']",
        "checked:bg-purple-500 checked:before:translate-x-full",
        "hover:before:shadow-[0_0_0px_8px_rgba(0,0,0,0.15)]",
        className
      )}
      {...props}
    />
  )
});
OrangeToggle.displayName = "OrangeToggle";

export { MinimalToggle, OrangeToggle };
