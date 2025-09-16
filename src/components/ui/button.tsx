import type { ComponentProps } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../utils/cn"

const buttonVariants = cva(
    "inline-flex items-center justify-center shrink-0 rounded-md gap-2 whitespace-nowrap  font-medium cursor-pointer disabled:opacity-50 hover:duration-75",
    {
        variants: {
            variant: {
                default: "bg-primary border-transparent text-primary-foreground hover:opacity-80",
                outline: "bg-transparent border border-gray-500 hover:border-gray-300",
            },
            size: {
                default: "h-10 px-4",
                sm: "text-sm h-9 px-4",
                lg: "text-xl h-12 px-6",
                icon: "size-9",
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        }
    }
)

type ButtonProps = ComponentProps<'button'> &
    VariantProps<typeof buttonVariants>

export function Button({
    variant,
    size,
    className,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        >
            {children}
        </button>
    )
}