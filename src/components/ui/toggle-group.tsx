"use client"

import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { toggleVariants } from "./toggle"

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
})

interface BaseToggleGroupProps {
  className?: string
  children?: React.ReactNode
}

type ToggleGroupSingleProps = BaseToggleGroupProps &
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & {
    type: "single"
    value?: string
    defaultValue?: string
    onValueChange?: (value: string) => void
  }

type ToggleGroupMultipleProps = BaseToggleGroupProps &
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & {
    type: "multiple"
    value?: string[]
    defaultValue?: string[]
    onValueChange?: (value: string[]) => void
  }

type ToggleGroupProps = ToggleGroupSingleProps | ToggleGroupMultipleProps

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupProps
>(({ className, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn(
      "flex items-center justify-center gap-1",
      className
    )}
    {...props}
  >
    {children}
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & {
    className?: string
    children?: React.ReactNode
  }
>(({ className, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Item
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
      className
    )}
    {...props}
  >
    {children}
  </ToggleGroupPrimitive.Item>
))

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }