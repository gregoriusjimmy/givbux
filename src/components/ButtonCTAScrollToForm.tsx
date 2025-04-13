"use client";

import React, {
  forwardRef,
  ButtonHTMLAttributes,
  useEffect,
  useState,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import cn from "@/lib/cn";

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

const ButtonCTAScrollToForm = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, withBorder, children, ...props }, ref) => {
    const [isDesktop, setIsDesktop] = useState<boolean>(false);

    useEffect(() => {
      // Update screen size on resize
      const updateScreenSize = () => {
        setIsDesktop(window.innerWidth >= 1024);
      };

      // Initial check
      updateScreenSize();

      // Add event listener for window resize
      window.addEventListener("resize", updateScreenSize);

      // Cleanup listener
      return () => {
        window.removeEventListener("resize", updateScreenSize);
      };
    }, []);

    const scrollToForm = () => {
      // Get the appropriate form ID based on the screen size
      const formId = isDesktop ? "#form-desktop" : "#form-mobile";
      const form = document.querySelector(formId);
      if (form) {
        window.scrollTo({
          top: form.getBoundingClientRect().top + window.scrollY,
          behavior: "smooth",
        });
      }
    };

    return (
      <button
        ref={ref}
        onClick={scrollToForm}
        className={cn(buttonVariants({ variant, size, withBorder }), className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

ButtonCTAScrollToForm.displayName = "ButtonCTAScrollToForm";

export default ButtonCTAScrollToForm;
