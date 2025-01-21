"use client"

import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
})

type BaseToggleGroupProps = {
  className?: string
}

interface ToggleGroupSingleProps extends BaseToggleGroupProps {
  type: "single"
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

interface ToggleGroupMultipleProps extends BaseToggleGroupProps {
  type: "multiple"
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
}

type ToggleGroupProps = (ToggleGroupSingleProps | ToggleGroupMultipleProps) &
  Omit<React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>, keyof (ToggleGroupSingleProps | ToggleGroupMultipleProps)>

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupProps
>(({ className, type, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    type={type}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  />
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & {
    className?: string
    value: string
  }
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant,
          size: context.size,
          className,
        })
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }