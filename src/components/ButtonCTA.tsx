import React, { forwardRef, ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "cursor-pointer flex items-center py-5 px-14 lg:px-24 rounded-full justify-center",
  {
    variants: {
      variant: {
        primary: "bg-primary-500",
        black: "bg-black tex-white",
      },
      size: {
        default: "w-fit",
        full: "w-full",
      },
      withBorder: { true: "border-4 border-primary-400" },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      withBorder: false,
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  };

const ButtonCTA = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, withBorder, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(
          buttonVariants({ variant, size, withBorder }),
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

ButtonCTA.displayName = "ButtonCTA";

export default ButtonCTA;
