"use client";

import cn from "@/lib/cn";
import React, { useState, useEffect } from "react";

interface ScrollToFormButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const ScrollToFormButton = React.forwardRef<
  HTMLButtonElement,
  ScrollToFormButtonProps
>(({ children, className, ...props }, ref) => {
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
      className={cn("cursor-pointer", className)}
      {...props}
      ref={ref}
      onClick={scrollToForm}
    >
      {children}
    </button>
  );
});

ScrollToFormButton.displayName = "ScrollToFormButton";

export default ScrollToFormButton;
