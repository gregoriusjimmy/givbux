import { useEffect, useState } from "react";

export const useScrollToForm = () => {
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

  return { scrollToForm };
};
